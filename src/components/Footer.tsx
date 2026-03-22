export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background/80 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-background">Grace Community Church</h3>
            <p className="text-background/60 leading-relaxed text-sm">
              A Christ-centered church where everyone is welcome. Join us for worship, community, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Events", "Sermons", "Give Online"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-background/60 hover:text-background transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>1234 Oak Grove Road</p>
              <p>Maplewood, MN 55109</p>
              <p className="pt-2">office@gracecommunity.org</p>
              <p>(651) 555-0172</p>
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
