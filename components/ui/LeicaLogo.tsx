export function LeicaLogo({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.42} viewBox="0 0 200 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Leica Logo">
      <ellipse cx="100" cy="42" rx="99" ry="41" fill="#E2001A" />
      <text x="100" y="55" textAnchor="middle" fontFamily="'Josefin Sans', Helvetica, sans-serif" fontWeight="700" fontSize="36" letterSpacing="6" fill="white">LEICA</text>
    </svg>
  );
}
