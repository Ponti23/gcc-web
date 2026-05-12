import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const pastors = [
  {
    name: "Rev. Dr Dawson Elliott",
    credentials: "BTh., MTh., PhD",
    role: "Senior Pastor & Founding Pastor",
    photo: "/Ps_Dawson.PNG",
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
    photo: null,
    initials: "AD",
    bio: `Ps Anand Darshan was born in Nepal and now lives in Perth, WA. He holds a "Bachelor of Information Management" Degree from St Xavier's College under Tribhuvan University, a "Master of Information Technology and Systems" Degree from the University of Tasmania, Australia, and a "Graduate Diploma of Christian Ministry and Theology" from the Bible College of Western Australia.

He currently serves as an Associate Pastor at Grace Community Church, High Wycombe, Perth, WA. He is married to Daya and they have a 3 year old son, Ezra, with another son, Adriel, to be born in the next 3 months.

Ps Anand is passionate about corporate worship and its implications for the Church in the 21st century. A lover of the Word of God and Prayer, he is set to inspire students in terms of their soul shaping.`,
  },
  {
    name: "Ps Alex Cabanlit",
    credentials: "BSc Geology, GDipCMT",
    role: "Associate Pastor",
    photo: "/Ps_Alex.PNG",
    initials: "AC",
    bio: `Ps Alex Cabanlit was born in the Philippines and now lives in Perth, WA. He holds a "Bachelor of Science in Geology" Degree from the University of the Philippines, Diliman, QC., Philippines and a "Graduate Diploma of Christian Ministry and Theology" from the Bible College of Western Australia.

He is passionate about Evangelism and Theology and its practical dynamics and expressions for such a time as this. A deeply Biblical apologist, Ps Alex is ever ready to defend and expound the Word of God.

He currently serves as an Associate Pastor at Grace Community Church, High Wycombe, Perth, WA. He is married to Mayeng and they have a 2 year old daughter, Feena. Ps Alex will stretch your thinking without compromising the true tenets of the Christian faith.`,
  },
  {
    name: "Ps Diony Escarilla",
    credentials: "",
    role: "Associate Pastor & Worship Director",
    photo: "/Ps_Diony.PNG",
    initials: "DE",
    bio: `Ps Diony Escarilla is a passionate worship pastor and ministry leader based in Perth, Western Australia. With a heart for the local church and a desire to see people drawn closer to God, he ministers through worship, leadership and discipleship with sincerity and humility. His love for music and ministry has become a strong avenue for encouraging believers to live lives fully devoted to Christ.

As the leader of GraceSong, the worship ministry of Grace Community Church, Ps Diony plays a vital role in nurturing and developing musicians, singers and worship leaders within the church. He is committed to fostering a worship culture marked by unity, spiritual maturity and excellence, believing that worship is more than music — it is a lifestyle that glorifies God.

Ps Diony serves faithfully together with his wife, Irish, and they are blessed with two children, Maisie and Jobe. His dedication to family, ministry and raising the next generation continues to be a source of encouragement and strength to those around him.`,
  },
  {
    name: "Ps Gilbert Balbido",
    credentials: "",
    role: "Associate Pastor",
    photo: "/Ps_Gilbert.PNG",
    initials: "GB",
    bio: `Ps Gilbert Balbido is a committed pastor and teacher with a passion for strengthening people through the truth of God's Word. Originally from the Philippines and now based in Perth, Western Australia, he has a particular appreciation for the Old Testament and its relevance in shaping strong Biblical foundations for believers today. His teaching style is both practical and insightful, encouraging others to grow in wisdom, faith and spiritual maturity.

Ps Gilbert is especially passionate about mentoring and building up men within the church, helping them become effective leaders, faithful servants and Godly examples in every area of life. Alongside ministry, he also has a strong interest in sports and leadership, seeing both as valuable tools for developing character, perseverance and unity among people.

He faithfully serves together with his wife, Precy, and they are blessed with two children, Prescious and Patrick. Through his heart for discipleship, leadership and family, Ps Gilbert continues to be a steady source of encouragement and guidance within the church community.`,
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
              {/* Photo */}
              <div className={`lg:col-span-2 flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-lg">
                  {pastor.photo ? (
                    <img
                      src={pastor.photo}
                      alt={pastor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center text-4xl font-display text-primary">
                          {pastor.initials}
                        </div>
                        <p className="text-sm text-muted-foreground">{pastor.name}</p>
                      </div>
                    </div>
                  )}
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
                {pastor.credentials && (
                  <p className="text-sm text-muted-foreground font-medium">{pastor.credentials}</p>
                )}
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
