import { useReveal } from "@/hooks/useReveal";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sermons = [
  {
    title: "Finding Peace in the Storm",
    speaker: "Pastor David Mitchell",
    date: "March 16, 2026",
    series: "Anchored",
  },
  {
    title: "The Power of Forgiveness",
    speaker: "Pastor David Mitchell",
    date: "March 9, 2026",
    series: "Anchored",
  },
  {
    title: "Walking by Faith",
    speaker: "Associate Pastor Rachel Kim",
    date: "March 2, 2026",
    series: "Steps of Trust",
  },
];

export default function SermonsSection() {
  const ref = useReveal();

  return (
    <section id="sermons" className="section-padding bg-primary text-primary-foreground">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-primary-foreground/60 font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Messages
            </p>
            <h2 className="text-4xl md:text-5xl leading-[1.1]">
              Recent Sermons
            </h2>
          </div>
          <Button variant="heroOutline" className="self-start md:self-auto">
            All Sermons <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sermons.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 hover:bg-primary-foreground/10 transition-all duration-300 cursor-pointer"
            >
              {/* Play icon area */}
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-2">
                {s.series}
              </p>
              <h3 className="text-xl font-semibold mb-2 leading-snug">{s.title}</h3>
              <p className="text-primary-foreground/70 text-sm">
                {s.speaker} · {s.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
