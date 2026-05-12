import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { Book, Heart, Users, Cross, Sparkles, Globe } from "lucide-react";

const beliefs = [
  {
    icon: Book,
    title: "The Bible",
    desc: "We believe the Bible is God's inspired Word, our ultimate authority for faith and life.",
  },
  {
    icon: Sparkles,
    title: "God",
    desc: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    icon: Cross,
    title: "Jesus Christ",
    desc: "We believe Jesus is fully God and fully man, who died for our sins and rose again.",
  },
  {
    icon: Heart,
    title: "Salvation",
    desc: "We believe salvation is by grace through faith in Jesus Christ alone.",
  },
  {
    icon: Users,
    title: "The Church",
    desc: "We believe the church is the body of Christ, called to worship, fellowship, and service.",
  },
  {
    icon: Globe,
    title: "Eternal Life",
    desc: "We believe in the resurrection of the dead and eternal life for all who trust in Christ.",
  },
];

export default function About() {
  const storyRef = useReveal();
  const beliefsRef = useReveal();
  const statementRef = useReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            About Us
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            Our Story
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-6 max-w-xl leading-relaxed">
            A multicultural, Christ-centred community growing together in faith for over 13 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div ref={storyRef} className="reveal max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1]">
                A Christ-centred church for every nation
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Grace Community Church was planted 13 years ago with a simple conviction: the gospel 
                  is for every person, from every background, in every season of life. What began as a 
                  small gathering has grown into a vibrant, multicultural family.
                </p>
                <p>
                  Our congregation is a beautiful tapestry of cultures — Filipinos, Indians, Nepalis, 
                  Africans, Australians, and many more — united not by nationality but by a shared love 
                  for Jesus Christ and a commitment to His Great Commission.
                </p>
                <p>
                  Based in High Wycombe, Perth, Western Australia, we exist to worship God, equip 
                  believers, and reach our community with the transforming message of the gospel. Our 
                  doors are open to everyone — come as you are.
                </p>
              </div>
            </div>

            {/* Cultural mosaic visual */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-secondary/80 p-8 space-y-5">
                <h3 className="text-xl font-semibold text-foreground">Our Community</h3>
                <div className="flex flex-wrap gap-3">
                  {["Filipino", "Indian", "Nepali", "African", "Australian", "South African", "& more to come"].map(
                    (culture) => (
                      <span
                        key={culture}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {culture}
                      </span>
                    )
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  One church, many nations — united in Christ. Our diversity is not incidental; it's a 
                  reflection of the kingdom God is building.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-card border border-border/50 p-6 text-center">
                  <p className="text-3xl font-display text-primary">13</p>
                  <p className="text-sm text-muted-foreground mt-1">Years of Ministry</p>
                </div>
                <div className="rounded-xl bg-card border border-border/50 p-6 text-center">
                  <p className="text-3xl font-display text-primary">7+</p>
                  <p className="text-sm text-muted-foreground mt-1">Nations Represented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-secondary/50">
        <div ref={beliefsRef} className="reveal max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
              What We Believe
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-4">
              Our core beliefs rooted in Scripture
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-background">
        <div ref={statementRef} className="reveal max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3 text-center">
              Statement of Faith
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-10 text-center">
              The Australian Evangelical Alliance
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                We worship the only God who is Father, Son and Holy Spirit, whose creative, outgoing 
                love overflowed from the divine community to create the universe and who calls us to 
                share in eternal life and love and to participate in the fulfillment of divine purposes.
              </p>
              <p>
                In grace and humility, Jesus, the only Son of the Father, shared our humanity and 
                became our example of service and sacrifice. Out of love for the world he suffered the 
                consequences of our sin and died in order to overcome the power of the evil one; to 
                release humanity from alienation from God and from being captive to self-centered 
                sinfulness; and to restore a disordered creation.
              </p>
              <p>
                The power of the Father defeated death and brought new life to Jesus who now reigns as 
                Lord of all and who, through the active presence of the Spirit, calls for repentance, 
                brings the possibility of forgiveness and gives new life to all those who live in union 
                with him.
              </p>
              <p>
                Christians live in love by the power of the Spirit, who is the Spirit of Jesus, as a 
                single community of God's people. We are filled with the Spirit who transforms lives and 
                characters according to the example of the Lord Jesus, and the church is built up by the 
                gifts of ministry and service which the Spirit brings.
              </p>
              <p>
                The life of the church is guided by God through the Scriptures which are uniquely 
                inspired and the final authority for Christian faith and practice. As a community of 
                those who worship God and live in fellowship we are called to bring everyone the good 
                news of the salvation which can only be found in life with the Lord Jesus Christ.
              </p>
              <p>
                We are committed to work for justice in every society and to protect and enhance God's 
                creation. While working for the kingdom in the present we also look forward to the 
                return of the Lord Jesus, bringing justice to all and the glorious, perfect kingdom of God.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-secondary/80 border border-border/50">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Note: This statement of faith should not be regarded as implying that the truths 
                expressed in it constitute the only important truths of the faith. It is understood by 
                the Alliance as being consistent with the historic statements of faith such as the 
                Apostles' and Nicene Creeds and also with the Statement of Faith of the World 
                Evangelical Alliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
