import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background/80 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-background">Grace Community Church</h3>
            <p className="text-background/60 leading-relaxed text-sm">
              A Christ-centred, multicultural church where everyone is welcome. Join us for worship, community, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", to: "/about" },
                { label: "Leadership", to: "/leadership" },
                { label: "Resources", to: "/resources" },
                { label: "Events", to: "/#events" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm text-background/60 hover:text-background transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>58 Cyril Rd, High Wycombe, WA</p>
              <p className="pt-2">pontillasjosh23@gmail.com</p>
              <p>(+63) 422 446 354</p>
              <div className="pt-3 space-y-1">
                <p className="text-background/80 font-medium">Service Times</p>
                <p>Sunday Worship: 9:30 AM</p>
                <p>Friday Bible Study: 7:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
