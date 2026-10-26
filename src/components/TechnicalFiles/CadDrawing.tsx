import React, { useId } from "react"
import type { DrawingKind } from "./categories"

const LINE = "#0189BD"
const ext = { stroke: LINE, strokeOpacity: 0.5, strokeWidth: 0.7 }
const centre = { stroke: LINE, strokeOpacity: 0.45, strokeWidth: 0.8, strokeDasharray: "10 3 2 3" }
const thread = (xs: number[], y1: number, y2: number, lean = 4) => (
  <g stroke="#01B0F0" strokeOpacity="0.55" strokeWidth="0.8">
    {xs.map(x => (
      <path key={x} d={`M${x} ${y1}L${x - lean} ${y2}`} />
    ))}
  </g>
)

// Side-elevation line drawing per fitting type, with centre lines and blank dimension arrows — reads as a CAD drawing
const CadDrawing: React.FC<{ kind: DrawingKind }> = ({ kind }) => {
  // Unique per drawing so arrowheads still resolve when many drawings share a page
  const arrowId = `dim${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
  const dim = { stroke: LINE, strokeWidth: 0.9, markerStart: `url(#${arrowId})`, markerEnd: `url(#${arrowId})` }
  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden className="drawing-svg">
      <defs>
        <marker id={arrowId} viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L6 3L0 6z" fill={LINE} />
        </marker>
      </defs>

      {kind === "union" && (
        <>
          <path d="M14 50H186" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            <rect x="22" y="42" width="18" height="16" />
            <rect x="160" y="42" width="18" height="16" />
            <rect x="40" y="30" width="30" height="40" rx="2" />
            <path d="M40 40H70M40 60H70" strokeOpacity="0.6" />
            <rect x="70" y="34" width="60" height="32" rx="1.5" />
            <path d="M86 34V66M114 34V66" strokeOpacity="0.5" />
            <rect x="130" y="30" width="30" height="40" rx="2" />
            <path d="M130 40H160M130 60H160" strokeOpacity="0.6" />
          </g>
          {thread([90, 95, 100, 105, 110], 36, 64)}
          <path d="M22 74V92M178 74V92" {...ext} />
          <path d="M24 88H176" {...dim} />
          <path d="M40 28H28M40 72H28" {...ext} />
          <path d="M31 30V70" {...dim} />
        </>
      )}

      {kind === "connector" && (
        <>
          <path d="M14 50H176" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* tube end, nut, hex body, male thread with chamfered tip */}
            <rect x="24" y="42" width="20" height="16" />
            <rect x="44" y="30" width="30" height="40" rx="2" />
            <path d="M44 40H74M44 60H74" strokeOpacity="0.6" />
            <rect x="74" y="28" width="36" height="44" rx="2" />
            <path d="M74 39H110M74 61H110" strokeOpacity="0.6" />
            <path d="M110 37H160L166 43V57L160 63H110Z" />
          </g>
          {thread([120, 126, 132, 138, 144, 150, 156], 38, 62, 5)}
          <path d="M24 76V94M166 66V94" {...ext} />
          <path d="M26 90H164" {...dim} />
          <path d="M110 26H120M110 74H120" {...ext} />
          <path d="M178 37V63" {...dim} />
          <path d="M166 37H182M166 63H182" {...ext} />
        </>
      )}

      {kind === "elbow" && (
        <g transform="translate(34 0)">
          {/* horizontal and vertical centre lines */}
          <path d="M12 44H112" {...centre} />
          <path d="M92 18V104" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* tube end and nut on the run, 90° body, threaded leg down */}
            <rect x="20" y="36" width="18" height="16" />
            <rect x="38" y="24" width="30" height="40" rx="2" />
            <path d="M38 34H68M38 54H68" strokeOpacity="0.6" />
            <path d="M68 26H108V66H68Z" />
            <path d="M80 66V96L84 100H100L104 96V66" />
          </g>
          {thread([86, 91, 96, 101], 70, 94, 3)}
          <path d="M20 14V34M108 14V24" {...ext} />
          <path d="M22 18H106" {...dim} />
          <path d="M108 26H128M104 100H128" {...ext} />
          <path d="M124 28V98" {...dim} />
        </g>
      )}
    </svg>
  )
}

export default CadDrawing
