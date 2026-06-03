import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    // href is "/#events" → { pathname: "/", hash: "#events" }
    const hash = href.slice(1); // "#events"
    navigate({ pathname: "/", hash });
  };

  const renderLink = (l: typeof links[0], mobile = false) => {
    const baseClass = mobile
      ? "block text-sm text-muted-foreground hover:text-foreground transition-colors"
      : `text-sm transition-colors duration-200 ${isActive(l.href) ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`;

    if (l.href.startsWith("/#")) {
      return (
        <a
          key={l.href}
          href={l.href}
          className={baseClass}
          onClick={(e) => handleAnchorClick(e, l.href)}
        >
          {l.label}
        </a>
      );
    }

    return (
      <Link
        key={l.href}
        to={l.href}
        onClick={() => setOpen(false)}
        className={baseClass}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl text-foreground tracking-tight">
          Grace Community Church
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => renderLink(l))}
          <Button size="sm" asChild>
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
          {links.map((l) => renderLink(l, true))}
          <Button size="sm" className="w-full" asChild>
            <Link to="/about" onClick={() => setOpen(false)}>Visit Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
