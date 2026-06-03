import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, BookOpen } from "lucide-react";

const EMAIL = "pontillasjosh23@gmail.com";
const PHONE = "(+63) 422 446 354";
const PHONE_TEL = "+63422446354";
const ADDRESS = "58 Cyril Rd, High Wycombe, WA";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=58+Cyril+Rd+High+Wycombe+WA";

const services = [
  { icon: Clock, title: "Sunday Worship", detail: "9:30 AM" },
  { icon: BookOpen, title: "Friday Bible Study", detail: "7:30 PM" },
];

export default function Contact() {
  const visitRef = useReveal();
  const contactRef = useReveal();

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Hello from your website"
  )}&body=${encodeURIComponent("Hi Grace Community Church team,\n\n")}`;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            We'd Love to Meet You
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            Visit & Contact
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-6 max-w-xl leading-relaxed">
            Drop in on a Sunday, send us a message, or give us a call. We're glad you're here.
          </p>
        </div>
      </section>

      {/* Visit Us — service times + location */}
      <section className="section-padding bg-background">
        <div ref={visitRef} className="reveal max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Visit Us
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-[1.1]">
              Service times & location
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-xl p-7 shadow-sm border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-foreground font-medium">{s.detail}</p>
              </div>
            ))}

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-7 shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                Find Us
              </h3>
              <p className="text-foreground font-medium">{ADDRESS}</p>
              <p className="text-muted-foreground text-sm mt-2">Open in Google Maps →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section id="contact" className="section-padding bg-secondary/40">
        <div ref={contactRef} className="reveal max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-[1.1] mb-4">
              Send us a message
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Have a question, prayer request, or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-start gap-4 p-5 rounded-xl hover:bg-secondary/60 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Call us</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                    {PHONE}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 p-5 rounded-xl hover:bg-secondary/60 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email us</p>
                  <p className="text-foreground font-medium break-all group-hover:text-primary transition-colors duration-200">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <Button size="xl" asChild>
                <a href={mailtoHref}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send us an email
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Opens your email app pre-filled with our address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
