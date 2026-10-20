import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arva-logo.png.asset.json";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/background", label: "Background" },
  { to: "/strategic-initiatives", label: "Strategic Initiatives" },
  { to: "/capabilities", label: "Our Capabilities" },
  { to: "/contribution", label: "Our Contribution" },
  { to: "/acknowledgement", label: "Our Acknowledgement" },
  { to: "/network", label: "Our Network" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logo.url} alt="ARVA Investment Holdings" className={`${className} w-auto`} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="container-arva flex items-center justify-between gap-6 border-b py-5">
        <Link to="/" aria-label="ARVA home" className="shrink-0">
          <Logo className="h-8 md:h-9" />
        </Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: true }}
                  className="text-xs text-foreground transition-colors hover:text-burgundy data-[status=active]:text-burgundy data-[status=active]:font-medium"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="xl:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="xl:hidden border-b bg-background">
          <ul className="container-arva flex flex-col py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-xl text-foreground data-[status=active]:text-burgundy"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
