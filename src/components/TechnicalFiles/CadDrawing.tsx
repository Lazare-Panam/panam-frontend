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

      {kind === "ball" && (
        <>
          <path d="M14 70H186" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* end connections, body with ball, stem and lever handle */}
            <rect x="26" y="60" width="36" height="20" />
            <rect x="138" y="60" width="36" height="20" />
            <rect x="62" y="50" width="76" height="40" rx="3" />
            <rect x="95" y="36" width="10" height="14" />
            <rect x="58" y="28" width="94" height="8" rx="3" />
          </g>
          <circle cx="100" cy="70" r="13" fill="none" stroke={LINE} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 2" />
          {thread([34, 40, 46, 52], 61, 79, 3)}
          {thread([150, 156, 162, 168], 61, 79, 3)}
          <path d="M26 84V104M174 84V104" {...ext} />
          <path d="M28 100H172" {...dim} />
        </>
      )}

      {kind === "needle" && (
        <>
          <path d="M14 76H186" {...centre} />
          <path d="M100 6V100" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* inlet/outlet, body, bonnet, stem and T-bar handle */}
            <rect x="34" y="66" width="38" height="20" />
            <rect x="128" y="66" width="38" height="20" />
            <rect x="72" y="58" width="56" height="34" rx="2" />
            <rect x="86" y="38" width="28" height="20" rx="2" />
            <rect x="97" y="20" width="6" height="18" />
            <rect x="72" y="14" width="56" height="6" rx="3" />
          </g>
          {thread([42, 48, 54, 60, 66], 67, 85, 3)}
          {thread([138, 144, 150, 156, 162], 67, 85, 3)}
          <path d="M128 14H186M128 92H186" {...ext} />
          <path d="M180 16V90" {...dim} />
        </>
      )}

      {kind === "check" && (
        <>
          <path d="M10 50H190" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* in-line body between two hex ends */}
            <rect x="20" y="40" width="28" height="20" />
            <rect x="152" y="40" width="28" height="20" />
            <rect x="48" y="30" width="34" height="40" rx="2" />
            <path d="M48 40H82M48 60H82" strokeOpacity="0.6" />
            <rect x="82" y="34" width="36" height="32" rx="2" />
            <rect x="118" y="30" width="34" height="40" rx="2" />
            <path d="M118 40H152M118 60H152" strokeOpacity="0.6" />
          </g>
          {/* flow direction */}
          <path d="M88 50H108" stroke="#01B0F0" strokeWidth="1.6" markerEnd={`url(#${arrowId})`} />
          <path d="M20 74V94M180 74V94" {...ext} />
          <path d="M22 90H178" {...dim} />
        </>
      )}

      {kind === "relief" && (
        <>
          <path d="M100 6V108" {...centre} />
          <path d="M70 74H176" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* inlet below, side outlet, spring bonnet and adjusting cap */}
            <rect x="88" y="90" width="24" height="16" />
            <rect x="76" y="58" width="48" height="32" rx="2" />
            <rect x="124" y="64" width="40" height="20" />
            <rect x="82" y="26" width="36" height="32" rx="2" />
            <rect x="91" y="12" width="18" height="14" rx="1.5" />
          </g>
          <path d="M90 30L110 34L90 38L110 42L90 46L110 50L90 54" fill="none" stroke="#01B0F0" strokeOpacity="0.6" strokeWidth="1" />
          {thread([94, 99, 104, 109], 91, 105, 3)}
          <path d="M82 12H54M88 106H54" {...ext} />
          <path d="M58 14V104" {...dim} />
        </>
      )}

      {kind === "dbb" && (
        <>
          <path d="M8 70H192" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* flanged ends, one body, two block valves with levers and a bleed needle valve */}
            <rect x="16" y="46" width="12" height="48" rx="1.5" />
            <rect x="172" y="46" width="12" height="48" rx="1.5" />
            <rect x="28" y="54" width="144" height="32" rx="3" />
            <rect x="56" y="42" width="10" height="12" />
            <rect x="36" y="34" width="50" height="8" rx="3" />
            <rect x="134" y="42" width="10" height="12" />
            <rect x="114" y="34" width="50" height="8" rx="3" />
            <rect x="92" y="38" width="16" height="16" rx="1.5" />
            <rect x="97" y="26" width="6" height="12" />
            <rect x="84" y="20" width="32" height="6" rx="3" />
          </g>
          <path d="M16 98V106M184 98V106" {...ext} />
          <path d="M18 103H182" {...dim} />
        </>
      )}

      {kind === "manifold" && (
        <>
          <path d="M30 70H170" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* manifold block with three valves (two isolate, one equalise) */}
            <rect x="40" y="52" width="120" height="38" rx="3" />
            {[66, 100, 134].map(x => (
              <g key={x}>
                <rect x={x - 8} y={36} width="16" height="16" rx="1.5" />
                <rect x={x - 3} y={22} width="6" height="14" />
                <rect x={x - 15} y={16} width="30" height="6" rx="3" />
              </g>
            ))}
          </g>
          {[66, 134].map(x => (
            <circle key={x} cx={x} cy="71" r="5" fill="none" stroke={LINE} strokeOpacity="0.6" strokeWidth="1" />
          ))}
          <path d="M40 94V106M160 94V106" {...ext} />
          <path d="M42 102H158" {...dim} />
        </>
      )}

      {kind === "tee" && (
        <>
          <path d="M14 66H186" {...centre} />
          <path d="M100 4V100" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* run with threaded ends, hex centre and threaded branch */}
            <rect x="30" y="54" width="44" height="24" />
            <rect x="126" y="54" width="44" height="24" />
            <rect x="74" y="44" width="52" height="44" rx="2" />
            <path d="M74 56H126M74 76H126" strokeOpacity="0.6" />
            <rect x="88" y="12" width="24" height="32" />
          </g>
          {thread([38, 45, 52, 59, 66], 55, 77, 3)}
          {thread([134, 141, 148, 155, 162], 55, 77, 3)}
          {thread([94, 100, 106], 14, 42, 3)}
          <path d="M30 82V102M170 82V102" {...ext} />
          <path d="M32 98H168" {...dim} />
        </>
      )}

      {kind === "vessel" && (
        <>
          <path d="M100 4V108" {...centre} />
          <g fill="#FFFFFF" stroke={LINE} strokeWidth="1.3" strokeLinejoin="round">
            {/* vertical vessel with dished heads, nozzles and legs */}
            <path d="M74 30Q74 14 100 14Q126 14 126 30V82Q126 98 100 98Q74 98 74 82Z" />
            <rect x="95" y="6" width="10" height="8" />
            <rect x="126" y="40" width="18" height="10" />
            <rect x="56" y="62" width="18" height="10" />
            <path d="M80 92L74 106M120 92L126 106" />
          </g>
          <path d="M74 30H126M74 82H126" stroke={LINE} strokeOpacity="0.45" strokeWidth="0.8" />
          <path d="M126 14H166M126 98H166" {...ext} />
          <path d="M160 16V96" {...dim} />
        </>
      )}
    </svg>
  )
}

export default CadDrawing
