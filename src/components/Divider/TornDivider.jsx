// Torn-paper style section divider, inspired by the ripped-edge transitions
// on the Jordan Winery site. Pure SVG (no image assets) so it stays crisp
// and near-zero weight. `color` should match the section ABOVE the divider;
// the jagged edge reveals the section below it.
const PATHS = {
  a: 'M0,0 L0,26 L48,14 L96,30 L144,10 L192,24 L240,6 L288,22 L336,12 L384,28 L432,8 L480,20 L528,4 L576,24 L624,14 L672,30 L720,10 L768,22 L816,6 L864,26 L912,12 L960,28 L1008,8 L1056,20 L1104,4 L1152,24 L1200,14 L1200,0 Z',
  b: 'M0,0 L0,18 L40,32 L80,12 L120,26 L160,6 L200,20 L240,10 L280,28 L320,4 L360,22 L400,14 L440,30 L480,8 L520,24 L560,12 L600,20 L640,4 L680,26 L720,10 L760,22 L800,6 L840,28 L880,14 L920,20 L960,8 L1000,24 L1040,12 L1080,30 L1120,6 L1160,20 L1200,10 L1200,0 Z',
}

// `from` = color of the section above (the "paper" being torn, fills the jagged shape).
// `to` = color of the section below (shows through the jagged gaps).
export const TornDivider = ({ from = '#111111', to = '#151515', variant = 'a' }) => (
  <div aria-hidden="true" className="relative w-full overflow-hidden leading-none" style={{ backgroundColor: to }}>
    <svg
      viewBox="0 0 1200 32"
      preserveAspectRatio="none"
      className="block h-4 w-full md:h-7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={PATHS[variant]} fill={from} />
    </svg>
  </div>
)
