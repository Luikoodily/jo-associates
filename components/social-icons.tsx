import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M13.5 21v-7.5h2.55l.4-3.1h-2.95V8.4c0-.9.25-1.5 1.55-1.5h1.55V4.15A22.4 22.4 0 0 0 14.3 4c-2.25 0-3.8 1.37-3.8 3.9v2.5H8v3.1h2.5V21h3Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.9 1.15-.15.2-.35.2-.65.05-.3-.15-1.25-.45-2.4-1.5-.9-.8-1.5-1.8-1.65-2.1-.15-.3-.02-.45.13-.6.13-.15.3-.35.45-.55.15-.15.2-.3.3-.5.1-.2.05-.4-.03-.55-.07-.15-.65-1.55-.9-2.15-.25-.55-.5-.5-.65-.5h-.55c-.2 0-.5.07-.75.35-.25.3-1 .95-1 2.35 0 1.35 1.02 2.65 1.15 2.85.15.2 2 3.15 4.85 4.25.7.3 1.25.5 1.65.6.7.2 1.35.15 1.85.1.55-.07 1.7-.7 1.95-1.35.25-.65.25-1.2.15-1.35-.05-.15-.25-.2-.55-.35Zm-5.4 6.9c-1.6 0-3.15-.45-4.5-1.3l-.3-.2-3.3.85.9-3.2-.2-.3a8.3 8.3 0 0 1-1.3-4.5 8.3 8.3 0 0 1 14.15-5.85 8.3 8.3 0 0 1-5.85 14.15Zm0-18.3a10 10 0 0 0-8.55 15.2L2 22l4.05-1.05a10 10 0 0 0 6.05 1.6 10 10 0 1 0 0-20Z" />
    </svg>
  );
}
