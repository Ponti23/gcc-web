import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const pastors = [
  {
    name: "Rev. Dr Dawson Elliott",
    credentials: "BTh., MTh., PhD",
    role: "Senior Pastor & Founding Pastor",
    initials: "DE",
    bio: `Rev. Dr Dawson Elliott has been in ministry for 35 years, with 26 of those years serving in Perth, Western Australia. A gifted preacher, teacher, theologian, mentor and pastor, Dawson has a heart after God's own heart and leads with a blessed sense of "Lord, Your Kingdom come!"

He is Christ-centred and missional, both locally and abroad. Leading the College within 21st century dynamics, he continues to uphold the fundamentals of the Christian faith with the Great Commission as 'visionary' and pursued without compromise.

Dawson has been instrumental in establishing the Equip College Network of Ministries (ECNM) which includes churches, para-church ministries, Christian Schools and Extension Bible Schools. Network partners are from Australia, Indonesia, Philippines and South Africa.

Dawson is also the Founding/Senior Pastor of Grace Community Church — the official platform church of Equip College.`,
  },
  {
    name: "Ps Anand Darshan",
    credentials: "BIM, MIT&S, GDipCMT",
    role: "Associate Pastor",
    initials: "AD",
    bio: `Ps Anand Darshan was born in Nepal and now lives in Perth, WA. He holds a "Bachelor of Information Management" Degree from St Xavier's College under Tribhuvan University, a "Master of Information Technology and Systems" Degree from the University of Tasmania, Australia, and a "Graduate Diploma of Christian Ministry and Theology" from the Bible College of Western Australia.

He currently serves as an Associate Pastor at Grace Community Church, High Wycombe, Perth, WA. He is married to Daya and they have a 3 year old son, Ezra, with another son, Adriel, to be born in the next 3 months.

Ps Anand is passionate about corporate worship and its implications for the Church in the 21st century. A lover of the Word of God and Prayer, he is set to inspire students in terms of their soul shaping.`,
  },
  {
    name: "Ps Alex",
    credentials: "BSc Geology, GDipCMT",
    role: "Associate Pastor",
    initials: "PA",
    bio: `Ps Alex was born in the Philippines and now lives in Perth, WA. He holds a "Bachelor of Science in Geology" Degree from the University of the Philippines, Diliman, QC., Philippines and a "Graduate Diploma of Christian Ministry and Theology" from the Bible College of Western Australia.

He is passionate about Evangelism and Theology and its practical dynamics and expressions for such a time as this. A deeply Biblical apologist, Ps Alex is ever ready to defend and expound the Word of God.

He currently serves as an Associate Pastor at Grace Community Church, High Wycombe, Perth, WA. He is married to Mayeng and they have a 2 year old daughter, Feena. Ps Alex will stretch your thinking without compromising the true tenets of the Christian faith.`,
  },
];

export default function Leadership() {
  const heroRef = useReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary-foreground/60 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Team
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            Leadership
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-6 max-w-xl leading-relaxed">
            Meet the pastors who shepherd our church family with faithfulness and love.
          </p>
        </div>
      </section>

      {/* Pastors */}
      <section className="section-padding bg-background">
        <div ref={heroRef} className="reveal max-w-7xl mx-auto space-y-20">
          {pastors.map((pastor, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-5 gap-10 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Photo placeholder */}
              <div className={`lg:col-span-2 flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-full max-w-xs aspect-[3/4] rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center text-4xl font-display text-primary">
                      {pastor.initials}
                    </div>
                    <p className="text-sm text-muted-foreground">{pastor.name}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className={`lg:col-span-3 space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase">
                  {pastor.role}
                </p>
                <h2 className="text-3xl md:text-4xl text-foreground leading-[1.1]">
                  {pastor.name}
                </h2>
                <p className="text-sm text-muted-foreground font-medium">{pastor.credentials}</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed pt-2">
                  {pastor.bio.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
