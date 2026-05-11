import heroImage from "@/assets/hero-church.jpg";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grace Community Church aerial view"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #1F3D2Add 0%, #1F3D2Aaa 45%, transparent 80%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl space-y-6">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/60">
            Welcome Home
          </p>
          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            A place to <em className="not-italic text-white/90">belong,</em>{" "}
            believe &amp; become
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-md font-sans">
            Join us every Sunday as we worship, grow together in faith, and serve our community with love.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#services">Plan Your Visit →</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sermons">Watch Sermons</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
