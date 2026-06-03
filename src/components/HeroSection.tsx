import heroImage from "@/assets/church.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grace Community Church building at sunrise with congregation gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl space-y-6">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-[0.2em] uppercase">
            Welcome Home
          </p>
          <h1 className="text-primary-foreground font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            A place to belong, believe & become
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
            Join us every Sunday as we worship, grow together in faith, and serve our community with love.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#services">Plan Your Visit</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sermons">Watch Sermons</a>
            </Button>
          </div>
          <p className="text-primary-foreground/70 text-xl md:text-2xl italic pt-2 max-w-lg leading-relaxed">
            "For the grace of God has appeared that offers salvation to all people." — Titus 2:11
          </p>
        </div>
      </div>
    </section>
  );
}
