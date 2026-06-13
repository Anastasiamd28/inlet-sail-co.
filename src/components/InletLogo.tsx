interface Props {
  className?: string;
  stroke?: string;
  fadedStroke?: string;
  size?: number;
}

export function InletLogo({ className, stroke = "#5eadb0", fadedStroke = "rgba(94,173,176,0.4)", size = 56 }: Props) {
  const w = (size * 70) / 58;
  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 70 58"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M35 5 L35 47 L7 47 Z" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M35 17 L35 47 L58 47 Z" fill="none" stroke={fadedStroke} strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="35" y1="3" x2="35" y2="48" stroke={fadedStroke} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M3 50 Q35 57 67 50" stroke={stroke} strokeWidth="1.9" fill="none" strokeLinecap="round" />
      <path d="M9 54 Q24 52 38 54 Q52 56 63 54" stroke={fadedStroke} strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}
