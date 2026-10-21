export function EngageIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* relationship links */}
      <path d="M17 17 L31 17 M14 22 L21 34 M34 22 L27 34" strokeDasharray="1 4" />
      {/* three churches */}
      <path d="M9 22v-5l3-3 3 3v5z M12 10v4 M10.5 11.5h3" />
      <path d="M33 22v-5l3-3 3 3v5z M36 10v4 M34.5 11.5h3" />
      <path d="M21 42v-5l3-3 3 3v5z M24 30v4 M22.5 31.5h3" />
      {/* people at the center */}
      <circle cx="22" cy="24" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="26" cy="24" r="1.8" fill="currentColor" stroke="none" />
      <path d="M19.5 28.5c.6-1.6 1.4-2.2 2.5-2.2M28.5 28.5c-.6-1.6-1.4-2.2-2.5-2.2" />
    </svg>
  );
}
