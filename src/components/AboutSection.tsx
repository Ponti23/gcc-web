import { useReveal } from "@/hooks/useReveal";
import { Heart, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love in Action",
    desc: "We believe faith comes alive through serving our neighbors and lifting up those in need.",
  },
  {
    icon: BookOpen,
    title: "Rooted in Scripture",
    desc: "Our teaching is grounded in God's Word, helping you grow deeper in understanding and faith.",
  },
  {
    icon: Users,
    title: "Real Community",
    desc: "From small groups to Sunday gatherings, you'll find authentic connection and genuine friendship.",
  },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1]">
              A Christ-centered church for every generation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              For over 30 years, Grace Community Church has been a welcoming home for families, 
              students, and seekers. Our doors are open to everyone — come as you are.
            </p>
          </div>

          {/* Right — values */}
          <div className="space-y-8">
            {values.map((v, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
