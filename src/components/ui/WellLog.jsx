/** Decorative well-log graphic (depth axis, strata and two curves). */
export function WellLog({ className }) {
    return (<svg viewBox="0 0 200 400" aria-hidden="true" className={className} fill="none">
      <g stroke="currentColor" strokeWidth=".6" opacity=".5">
        <line x1="28" y1="10" x2="28" y2="390"/>
        <line x1="190" y1="10" x2="190" y2="390"/>
        <path d="M22 50h6M22 130h6M22 210h6M22 290h6M22 370h6"/>
      </g>
      <g opacity=".12" fill="currentColor">
        <rect x="29" y="90" width="160" height="60"/>
        <rect x="29" y="210" width="160" height="40"/>
        <rect x="29" y="300" width="160" height="70"/>
      </g>
      <path className="draw" pathLength="900" stroke="var(--accent)" strokeWidth="1.6" d="M90 10 C60 40 150 60 100 90 S50 130 120 160 S160 200 90 230 S40 270 130 300 S150 350 80 390"/>
      <path className="draw" pathLength="900" stroke="currentColor" strokeWidth="1.4" opacity=".6" style={{ animationDelay: "0.7s" }} d="M140 10 C170 50 110 70 150 110 S170 170 120 200 S80 240 150 270 S120 330 160 390"/>
    </svg>);
}
