import { useReveal } from "@/hooks/useReveal";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    date: "Mar 28",
    day: "Friday",
    title: "Good Friday Service",
    time: "7:00 PM",
    desc: "A reflective evening of worship and communion.",
  },
  {
    date: "Mar 30",
    day: "Sunday",
    title: "Easter Celebration",
    time: "9:00 AM & 11:00 AM",
    desc: "Celebrate the resurrection with music, message, and fellowship.",
  },
  {
    date: "Apr 5",
    day: "Saturday",
    title: "Community Outreach Day",
    time: "10:00 AM – 2:00 PM",
    desc: "Serve alongside us at the local food bank and neighborhood cleanup.",
  },
  {
    date: "Apr 12",
    day: "Saturday",
    title: "Youth Night",
    time: "6:00 PM",
    desc: "Games, worship, and real talk for students in grades 6–12.",
  },
];

export default function EventsSection() {
  const ref = useReveal();

  return (
    <section id="events" className="section-padding bg-background">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Upcoming
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1]">
              Events & Gatherings
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            <Calendar className="w-4 h-4 mr-2" />
            View Full Calendar
          </Button>
        </div>

        <div className="space-y-4">
          {events.map((e, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-20 text-center">
                <p className="text-2xl font-display text-primary">{e.date.split(" ")[1]}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {e.date.split(" ")[0]}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {e.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{e.desc}</p>
              </div>
              <div className="flex-shrink-0 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{e.day}</span> · {e.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
