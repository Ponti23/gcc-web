import { useReveal } from "@/hooks/useReveal";
import { Clock, MapPin, BookOpen } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Sunday Worship",
    detail: "9:30 AM",
    sub: "Join us every Sunday morning",
  },
  {
    icon: BookOpen,
    title: "Friday Bible Study",
    detail: "7:30 PM",
    sub: "Midweek study and fellowship",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "58 Cyril Rd",
    sub: "High Wycombe, WA",
  },
];

export default function ServicesSection() {
  const ref = useReveal();

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div ref={ref} className="reveal max-w-7xl mx-auto text-center">
        <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
          Join Us
        </p>
        <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-4">
          Service Times & Location
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
          We'd love to meet you. Here's everything you need to plan your visit.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-foreground font-medium">{s.detail}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
