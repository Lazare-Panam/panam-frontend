import { C, FONT } from "../../Landing2/homeTokens"

// Input look shared by the enquiry Field component and controls that render their own TextField (dial-code Autocomplete)
export const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: C.surface,
    fontFamily: FONT,
    fontSize: "0.95rem",
    transition: "box-shadow 0.2s ease, background-color 0.2s ease",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: C.border },
    "&.Mui-focused": { bgcolor: C.white, boxShadow: "0 0 0 4px rgba(1,176,240,0.12)" },
    "&.Mui-focused fieldset": { borderColor: C.brand, borderWidth: "1px" },
    "&.Mui-error fieldset": { borderColor: "#E5484D" },
    "& .MuiInputAdornment-positionStart": { color: "#94A3B8", mr: 0.5 },
    "&.Mui-focused .MuiInputAdornment-positionStart": { color: C.brand },
  },
  "& .MuiOutlinedInput-input": { py: 1.6 },
  "& .MuiOutlinedInput-input::placeholder": { color: "#94A3B8", opacity: 1 },
  "& .MuiFormHelperText-root": { ml: 0, mt: 0.75, fontWeight: 500 },
} as const

// Panam contact details shown in the enquiry panel (same as the site footer; enquiry email per the sales team)
export const CONTACT = {
  email: "sales@panamvalves.co.uk",
  phone: "+44 7369 243459",
  phoneHref: "tel:+447369243459",
  office: "Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL",
}

// "What to include" checklist under the form
export const INCLUDE_LIST = [
  "Product type and part number, if known (e.g. needle valve, ball valve, manifold)",
  "Working pressure (psi or bar) and temperature",
  "Tube or pipe size and end connection (e.g. 1/4\" NPT, tube OD)",
  "Media and application (e.g. hydrogen, hydraulic oil, process gas)",
  "Quantity and delivery location",
  "Documentation you need (e.g. material certificates)",
]
