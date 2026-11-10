import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/**
 * Resham Craft's own inline SVG icon set: 24×24 line icons that inherit the
 * text color. Size them with classes, e.g. className="w-4 h-4".
 */
function createIcon(name: string, shapes: ReactNode) {
  function Icon({ className, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
        {...props}
      >
        {shapes}
      </svg>
    );
  }
  Icon.displayName = name;
  return Icon;
}

const HEART = "M12 20.5S3.5 15.4 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6c0 6.2-8.5 11.3-8.5 11.3z";
const PHONE =
  "M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2C10.5 20 4 13.5 4.5 5.7a2 2 0 0 1 2-2.2z";

/* Arrows & controls */
export const ArrowRight = createIcon("ArrowRight", <path d="M4 12h16M14 6l6 6-6 6" />);
export const ArrowLeft = createIcon("ArrowLeft", <path d="M20 12H4M10 6l-6 6 6 6" />);
export const ChevronRight = createIcon("ChevronRight", <path d="M9 5l7 7-7 7" />);
export const ChevronDown = createIcon("ChevronDown", <path d="M5 9l7 7 7-7" />);
export const X = createIcon("X", <path d="M6 6l12 12M18 6L6 18" />);
export const Plus = createIcon("Plus", <path d="M12 5v14M5 12h14" />);
export const Minus = createIcon("Minus", <path d="M5 12h14" />);
export const Check = createIcon("Check", <path d="M5 12.5l4.5 4.5L19 7.5" />);
export const Menu = createIcon("Menu", <path d="M4 7h16M4 12h16M4 17h16" />);
export const Search = createIcon(
  "Search",
  <>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </>
);
export const ExternalLink = createIcon(
  "ExternalLink",
  <path d="M18 13.5v6H4.5V6h6M13.5 4.5h6v6M19.5 4.5L11 13" />
);
export const RotateCcw = createIcon(
  "RotateCcw",
  <path d="M4 5v5.5h5.5M4.5 10.5a8 8 0 1 1-.4 3.3" />
);
export const Share2 = createIcon(
  "Share2",
  <>
    <circle cx="18" cy="5.5" r="2.5" />
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="18.5" r="2.5" />
    <path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1" />
  </>
);
export const LogOut = createIcon(
  "LogOut",
  <path d="M10 4H5v16h5M15 7.5l4.5 4.5-4.5 4.5M19.5 12H10" />
);

/* People & feedback */
export const User = createIcon(
  "User",
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5c1-4 4-6 7.5-6s6.5 2 7.5 6" />
  </>
);
export const Users = createIcon(
  "Users",
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.6 3.2-5.5 6.5-5.5s5.7 1.9 6.5 5.5M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .8 3.1 2.6 3.5 5.2" />
  </>
);
export const Heart = createIcon("Heart", <path d={HEART} />);
export const HeartHandshake = createIcon(
  "HeartHandshake",
  <>
    <path d={HEART} />
    <path d="M12 6.6L8.8 9.8a1.6 1.6 0 0 0 2.3 2.3l1.4-1.2 3.6 3.6" />
  </>
);
export const Star = createIcon(
  "Star",
  <path d="M12 3.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.8l6-.8L12 3.5z" />
);
export const Sparkles = createIcon(
  "Sparkles",
  <>
    <path d="M11 4l1.7 5.3a2 2 0 0 0 1.3 1.3L19.5 12.5 14 14.2a2 2 0 0 0-1.3 1.3L11 21l-1.7-5.5A2 2 0 0 0 8 14.2L2.5 12.5 8 10.6a2 2 0 0 0 1.3-1.3L11 4z" />
    <path d="M19 3v4M17 5h4" />
  </>
);
export const ThumbsUp = createIcon(
  "ThumbsUp",
  <path d="M7.5 10.5v10H4v-10h3.5zM7.5 10.5L12 3.5c1.4 0 2.3 1 2.3 2.4l-.7 3.6H19c1.1 0 1.9 1 1.7 2l-1.4 7.2c-.2 1-1 1.8-2 1.8H7.5" />
);
export const MessageSquare = createIcon(
  "MessageSquare",
  <path d="M4 5h16v12H9.5L5 20.5V17H4V5z" />
);
export const Award = createIcon(
  "Award",
  <>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14L7 21.5l5-2.5 5 2.5L15.5 14" />
  </>
);

/* Commerce */
export const ShoppingBag = createIcon(
  "ShoppingBag",
  <path d="M5 8h14l1 13H4L5 8zM9 10.5V6a3 3 0 0 1 6 0v4.5" />
);
export const Trash2 = createIcon(
  "Trash2",
  <path d="M4 7h16M9 7V4.5h6V7M6 7l1 13.5h10L18 7M10 11v6M14 11v6" />
);
export const Truck = createIcon(
  "Truck",
  <>
    <path d="M5 17.5H2.5v-11h12v11H9M14.5 9.5h3.7l3.3 3.7v4.3h-2M15.5 17.5h-1" />
    <circle cx="7" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
  </>
);
export const Package = createIcon(
  "Package",
  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
);
export const PackageCheck = createIcon(
  "PackageCheck",
  <path d="M20 12V7.5L12 3 4 7.5v9L12 21l1.5-.8M4 7.5l8 4.5 8-4.5M12 12v9M16 18l2 2 3.5-4" />
);
export const CreditCard = createIcon(
  "CreditCard",
  <>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="M3 10h18M6.5 15H10" />
  </>
);
export const Banknote = createIcon(
  "Banknote",
  <>
    <rect x="2.5" y="6.5" width="19" height="11" rx="1" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </>
);
export const Smartphone = createIcon(
  "Smartphone",
  <>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 18h2" />
  </>
);

/* Trust & security */
export const ShieldCheck = createIcon(
  "ShieldCheck",
  <path d="M12 3l7.5 3v5.5c0 4.8-3.1 8-7.5 9.5-4.4-1.5-7.5-4.7-7.5-9.5V6L12 3zM8.8 12l2.3 2.3 4.2-4.6" />
);
export const CheckCircle2 = createIcon(
  "CheckCircle2",
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l3 3 5-6" />
  </>
);
export const AlertCircle = createIcon(
  "AlertCircle",
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V13M12 16.5h.01" />
  </>
);
export const Lock = createIcon(
  "Lock",
  <>
    <rect x="5" y="11" width="14" height="10" rx="1.5" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
  </>
);
export const KeyRound = createIcon(
  "KeyRound",
  <>
    <circle cx="8" cy="15.5" r="4.5" />
    <path d="M11.2 12.3L20 3.5M16 7.5l2.5 2.5M13.5 10l1.8 1.8" />
  </>
);

/* Time & scheduling */
export const Calendar = createIcon(
  "Calendar",
  <>
    <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
  </>
);
export const Clock = createIcon(
  "Clock",
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.5l3.5 2" />
  </>
);
export const Video = createIcon(
  "Video",
  <>
    <rect x="3" y="6.5" width="12.5" height="11" rx="1.5" />
    <path d="M15.5 10.5l5.5-3v9l-5.5-3" />
  </>
);

/* Contact & places */
export const Mail = createIcon(
  "Mail",
  <>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="M3.5 7l8.5 6.5L20.5 7" />
  </>
);
export const Phone = createIcon("Phone", <path d={PHONE} />);
export const PhoneCall = createIcon(
  "PhoneCall",
  <>
    <path d={PHONE} />
    <path d="M15 3.5A6 6 0 0 1 20.5 9M15 7a2.5 2.5 0 0 1 2 2" />
  </>
);
export const MapPin = createIcon(
  "MapPin",
  <>
    <path d="M12 21.5s7-6.2 7-11.5a7 7 0 1 0-14 0c0 5.3 7 11.5 7 11.5z" />
    <circle cx="12" cy="10" r="2.5" />
  </>
);
export const Compass = createIcon(
  "Compass",
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.8 8.2l-2 5.6-5.6 2 2-5.6 5.6-2z" />
  </>
);
export const Building = createIcon(
  "Building",
  <>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9.5 21v-4h5v4M9 7.5h1.5M13.5 7.5H15M9 12h1.5M13.5 12H15" />
  </>
);
export const Landmark = createIcon(
  "Landmark",
  <path d="M12 3l9 5H3l9-5zM6 11v6M10 11v6M14 11v6M18 11v6M5 17.5h14M3.5 20.5h17" />
);

/* Documents & content */
export const FileText = createIcon(
  "FileText",
  <path d="M6 3h8.5L19 7.5V21H6V3zM14 3v5h5M9 12.5h7M9 16h7" />
);
export const Eye = createIcon(
  "Eye",
  <>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </>
);
export const EyeOff = createIcon(
  "EyeOff",
  <path d="M3.5 3.5l17 17M10 5.8a9.3 9.3 0 0 1 2-.3c6 0 9.5 6.5 9.5 6.5a15 15 0 0 1-2.8 3.5M6.3 6.9C3.9 8.5 2.5 12 2.5 12S6 18.5 12 18.5c1.9 0 3.5-.6 4.9-1.5M9.9 9.9a3 3 0 0 0 4.2 4.2" />
);
export const Scroll = createIcon(
  "Scroll",
  <path d="M7 3.5h11a2 2 0 0 1 2 2V7h-4M16 5.5V18a2.5 2.5 0 0 1-2.5 2.5h-8a2 2 0 0 1-2-2V17H13v1.5a2 2 0 0 0 2 2M7 3.5a2 2 0 0 0-2 2V17M8.5 8h4M8.5 12h4" />
);
