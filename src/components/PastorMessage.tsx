import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PastorMessage() {
  const ref = useReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Message */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase">
              From the Pastor
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1]">
              A word of encouragement
            </h2>
            <blockquote className="text-muted-foreground text-lg leading-relaxed border-l-4 border-primary/30 pl-6 italic">
              "The church isn't a building — it's a family. Whether you've been walking 
              with God for decades or you're just curious, there is a seat at this table 
              for you. We believe the best days are ahead, and we'd love for you to be 
              part of the story God is writing here."
            </blockquote>
            <div>
              <p className="text-foreground font-semibold">Rev. Dr Dawson Elliott</p>
              <p className="text-muted-foreground text-sm">Senior & Founding Pastor, Grace Community Church</p>
            </div>
            <Button variant="outline" className="mt-2">
              Read More Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Pastor photo */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/Ps_Dawson.PNG"
                alt="Rev. Dr Dawson Elliott"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
