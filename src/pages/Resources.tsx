import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { Play, FileText, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "sermons" | "articles" | "messages";

const resources = [
  {
    category: "sermons" as const,
    title: "Finding Peace in the Storm",
    author: "Rev. Dr Dawson Elliott",
    date: "March 16, 2026",
    series: "Anchored",
    excerpt: "In the midst of life's turbulence, God invites us to anchor our souls in His unchanging faithfulness.",
    type: "Video",
  },
  {
    category: "articles" as const,
    title: "Why the Local Church Still Matters",
    author: "Ps Anand Darshan",
    date: "March 12, 2026",
    series: null,
    excerpt: "In an age of online everything, the gathered community of believers remains irreplaceable. Here's why showing up matters.",
    type: "Article",
  },
  {
    category: "sermons" as const,
    title: "The Power of Forgiveness",
    author: "Rev. Dr Dawson Elliott",
    date: "March 9, 2026",
    series: "Anchored",
    excerpt: "Forgiveness isn't weakness — it's the supernatural strength that breaks chains and restores what sin has stolen.",
    type: "Video",
  },
  {
    category: "messages" as const,
    title: "A Word to the Weary",
    author: "Rev. Dr Dawson Elliott",
    date: "March 7, 2026",
    series: null,
    excerpt: "If your soul feels stretched thin this season, this pastoral note is for you. God sees you and He is not finished with your story.",
    type: "Pastor Note",
  },
  {
    category: "articles" as const,
    title: "Raising Kingdom Kids in a Digital World",
    author: "Ps Alex",
    date: "March 4, 2026",
    series: null,
    excerpt: "Practical, grace-filled thoughts on discipling our children when screens compete for their hearts.",
    type: "Article",
  },
  {
    category: "sermons" as const,
    title: "Walking by Faith",
    author: "Ps Anand Darshan",
    date: "March 2, 2026",
    series: "Steps of Trust",
    excerpt: "Abraham didn't know the destination, but he knew the One leading. What does it look like to take that kind of step today?",
    type: "Video",
  },
  {
    category: "messages" as const,
    title: "Easter Is Coming — And So Is He",
    author: "Rev. Dr Dawson Elliott",
    date: "February 28, 2026",
    series: null,
    excerpt: "As we prepare our hearts for Easter, let's remember: the resurrection isn't just history — it's our hope.",
    type: "Pastor Note",
  },
  {
    category: "articles" as const,
    title: "Worship Beyond the Song",
    author: "Ps Anand Darshan",
    date: "February 22, 2026",
    series: null,
    excerpt: "Corporate worship shapes us more than we realise. An exploration of how gathering transforms the soul.",
    type: "Article",
  },
];

const categoryLabels: Record<Category, string> = {
  all: "All",
  sermons: "Sermons",
  articles: "Articles",
  messages: "Pastor Messages",
};

const iconMap: Record<string, typeof Play> = {
  Video: Play,
  Article: FileText,
  "Pastor Note": BookOpen,
};

export default function Resources() {
  const [active, setActive] = useState<Category>("all");
  const ref = useReveal();

  const filtered = active === "all" ? resources : resources.filter((r) => r.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Learn & Grow
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            Resources
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-6 max-w-xl leading-relaxed">
            Sermons, articles, and pastoral messages to encourage your faith journey.
          </p>
        </div>
      </section>

      {/* Filters + Content */}
      <section className="section-padding bg-background">
        <div ref={ref} className="reveal max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {(Object.keys(categoryLabels) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((r, i) => {
              const Icon = iconMap[r.type] || FileText;
              return (
                <div
                  key={i}
                  className="group rounded-xl bg-card border border-border/50 p-7 hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">
                          {r.type}
                        </span>
                        {r.series && (
                          <>
                            <span className="text-border">·</span>
                            <span className="text-xs text-muted-foreground">{r.series}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {r.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          {r.author} · {r.date}
                        </p>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more placeholder */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Resources
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
