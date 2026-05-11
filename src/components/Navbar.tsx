import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5EE]/90 backdrop-blur-md border-b border-[#D5DCD0]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl text-[#1F3D2A] tracking-tight font-semibold">
          Grace Community
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.href}
                to={l.href}
                className={`text-[13px] font-sans font-medium transition-colors duration-200 ${
                  isActive(l.href) ? "text-[#2D5A3D]" : "text-[#1A1F1B]/60 hover:text-[#2D5A3D]"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-sans font-medium text-[#1A1F1B]/60 hover:text-[#2D5A3D] transition-colors duration-200"
              >
                {l.label}
              </a>
            )
          )}
          <Button size="sm" className="bg-[#2D5A3D] hover:bg-[#1F3D2A] text-[#F8F5EE]" asChild>
            <Link to="/about">Visit Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <Button size="sm" className="w-full" asChild>
            <Link to="/about">Visit Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
