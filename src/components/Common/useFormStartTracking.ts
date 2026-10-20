import { useCallback, useRef } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// GA4's enhanced-measurement form_start only fires for real <form> elements and names them from their
// id/name attributes. Enquiry screens built from loose MUI fields have no <form>, so their starts were
// either missed or unnamed. Attach the returned handler as onFocusCapture on the screen's container:
// it sends one form_start per mount, tagged with form_id/form_name so GA4 can tell enquiry forms apart.
export function useFormStartTracking(formName: string) {
  const started = useRef(false)
  return useCallback(() => {
    if (started.current) return
    started.current = true
    window.gtag?.("event", "form_start", { form_id: formName, form_name: formName })
  }, [formName])
}
