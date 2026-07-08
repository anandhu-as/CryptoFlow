
export function MonkeyLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="CryptoFlow monkey logo"
    >

      <circle cx="9" cy="30" r="8" fill="#5B3A24" />
      <circle cx="9" cy="30" r="4" fill="#D9B08C" />
      <circle cx="55" cy="30" r="8" fill="#5B3A24" />
      <circle cx="55" cy="30" r="4" fill="#D9B08C" />

      <circle cx="32" cy="32" r="21" fill="#6B4226" />

      <path
        d="M32 18c-8 0-14 5-14 12 0 3 1 5 3 7-1 2-2 4-2 6 0 7 6 11 13 11s13-4 13-11c0-2-1-4-2-6 2-2 3-4 3-7 0-7-6-12-14-12z"
        fill="#D9B08C"
      />

      <rect x="16" y="24" width="32" height="9" rx="4.5" fill="#0F172A" />
      <line x1="11" y1="27" x2="16" y2="27" stroke="#0F172A" strokeWidth="3" />
      <line x1="48" y1="27" x2="53" y2="27" stroke="#0F172A" strokeWidth="3" />
      <rect x="19" y="26.5" width="10" height="2.5" rx="1.25" fill="#34D399" />
      <rect x="35" y="26.5" width="10" height="2.5" rx="1.25" fill="#34D399" />

      <ellipse cx="28.5" cy="41" rx="1.8" ry="2.4" fill="#5B3A24" />
      <ellipse cx="35.5" cy="41" rx="1.8" ry="2.4" fill="#5B3A24" />

      <path
        d="M25 47c2.2 2.4 4.5 3.5 7 3.5s4.8-1.1 7-3.5"
        fill="none"
        stroke="#5B3A24"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
