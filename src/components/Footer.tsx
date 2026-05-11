import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="section-padding" style={{ backgroundColor: '#1F3D2A', color: '#F8F5EEcc' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl" style={{ color: '#F8F5EE' }}>Grace Community Church</h3>
            <p className="leading-relaxed text-sm" style={{ color: '#F8F5EE99' }}>
              A Christ-centred, multicultural church where everyone is welcome. Join us for worship, community, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: '#F8F5EE' }}>Quick Links</h4>
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
                  className="block text-sm transition-colors duration-200" style={{ color: '#F8F5EE80' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: '#F8F5EE' }}>Contact Us</h4>
            <div className="space-y-2 text-sm" style={{ color: '#F8F5EE80' }}>
              <p>58 Cyril Rd, High Wycombe, WA</p>
              <p className="pt-2">pontillasjosh23@gmail.com</p>
              <p>(+63) 422 446 354</p>
              <div className="pt-3 space-y-1">
                <p className="font-medium" style={{ color: '#F8F5EEcc' }}>Service Times</p>
                <p>Sunday Worship: 9:30 AM</p>
                <p>Friday Bible Study: 7:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: '#F8F5EE1a' }}>
          <p className="text-xs" style={{ color: '#F8F5EE40' }}>
            © {new Date().getFullYear()} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
