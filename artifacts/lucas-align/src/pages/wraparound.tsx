import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  Home,
  Mail,
  MapPinned,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Users,
  UserCheck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import bgBeach from "@assets/image_1780508810059.png";

const features = [
  {
    icon: Home,
    title: "Care Circle Dashboard",
    description: "Each family has a central place where their support circle can see upcoming needs, recent updates, and how care is going.",
    items: ["Upcoming schedule items", "Open needs", "Recent posts", "Care circle activity"],
  },
  {
    icon: ClipboardList,
    title: "Needs Board",
    description: "Practical needs — meals, rides, childcare, errands, yardwork, prayer — are posted clearly so volunteers can step in with confidence.",
    items: ["Open need listings", "Volunteer claiming", "Automatic closeout", "Family-scoped needs"],
  },
  {
    icon: CalendarDays,
    title: "Scheduling & Recurring Support",
    description: "Coordinate recurring meals, visits, and meetings once, and let the rhythm carry forward without constant rescheduling.",
    items: ["Weekly calendar view", "Recurring meal planning", "Transportation coordination", "Monthly meeting scheduling"],
  },
  {
    icon: MessageSquareText,
    title: "Community Feed",
    description: "Families and their care circle stay connected through updates, prayer requests, and celebrations — all in one place.",
    items: ["Family updates", "Prayer requests", "Announcements", "Encouragement and reactions"],
  },
  {
    icon: Users,
    title: "Volunteer Directory",
    description: "Know who is available, what they are equipped to help with, and where each volunteer is in their journey of serving.",
    items: ["Volunteer profiles", "Support specialties", "Childcare approval status", "Availability"],
  },
  {
    icon: UserCheck,
    title: "Training & Onboarding",
    description: "Walk new volunteers from invitation through registration, training completion, and activation — with nothing falling through the cracks.",
    items: ["Secure invite links", "Training modules", "Progress tracking", "Admin activation queue"],
  },
  {
    icon: MessageSquareText,
    title: "Messaging",
    description: "Keep communication organized inside the platform so nothing gets lost in email threads or group texts.",
    items: ["Family chat threads", "Direct messaging", "Group communication", "Need activity alerts"],
  },
  {
    icon: MapPinned,
    title: "Coordinator Reporting",
    description: "Give staff the visibility they need to care well across multiple families, churches, and communities.",
    items: ["County-level overview", "Family and volunteer lists", "Care community health", "Administrative controls"],
  },
];

const roleViews = [
  {
    title: "Families",
    detail: "Foster, adoptive, kinship, and vulnerable families receive consistent, coordinated support from a dedicated care circle that knows them.",
  },
  {
    title: "Volunteers",
    detail: "Trained church volunteers claim practical needs — meals, rides, childcare, errands, prayer — and show up when and where it matters.",
  },
  {
    title: "Lead Volunteers",
    detail: "Experienced volunteers take ownership of day-to-day follow-through within a family's care circle, keeping support on track.",
  },
  {
    title: "Church Advocates",
    detail: "Church representatives recruit, encourage, and stay connected to the volunteers serving from their congregation.",
  },
  {
    title: "County Coordinators",
    detail: "Nonprofit staff and central admins manage families, volunteers, churches, and the health of care across their whole community.",
  },
];

const supportTypes = ["Meals", "Transportation", "Childcare", "Errands", "Yardwork", "Prayer", "Celebrations", "Encouragement"];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-[100dvh] bg-transparent text-[#13201b] font-sans selection:bg-[#cce6d7] selection:text-[#13201b]">
      {/* Fixed beach background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgBeach})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          transform: "scale(1.08)",
          opacity: 0.75,
        }}
      />
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#f8faf7]/95 border-b border-[#dce5dd] py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-left"
            aria-label="Wraparound home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f6f5b] text-white shadow-sm">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-lg font-bold leading-none tracking-tight">Wraparound</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#5d7069]">Care Communities</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            <button onClick={() => scrollTo("how-it-works")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              How It Works
            </button>
            <button onClick={() => scrollTo("who-we-serve")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Who It Serves
            </button>
            <button onClick={() => scrollTo("features")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Features
            </button>
            <Button className="h-10 rounded-md bg-[#1f6f5b] px-5 text-white hover:bg-[#185846]" onClick={() => scrollTo("contact")}>
              Get in Touch
            </Button>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="rounded-md p-2 text-[#263a33] md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-2 border-b border-[#dce5dd] bg-[#f8faf7]/95 backdrop-blur-md px-5 py-4 shadow-lg md:hidden">
            {[
              ["How It Works", "how-it-works"],
              ["Who It Serves", "who-we-serve"],
              ["Features", "features"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="border-b border-[#e4ebe5] py-3 text-left font-semibold text-[#263a33]">
                {label}
              </button>
            ))}
            <Button className="mt-2 h-11 rounded-md bg-[#1f6f5b] text-white hover:bg-[#185846]" onClick={() => scrollTo("contact")}>
              Get in Touch
            </Button>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#edf5ef]/55 pt-32 md:pt-40">
          <div className="container mx-auto grid max-w-7xl gap-12 px-5 pb-14 sm:px-6 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#bdd7ca] bg-white/75 px-3 py-2 text-sm font-bold text-[#1f6f5b]">
                <HeartHandshake className="h-4 w-4" />
                Software for Care Communities
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-[1.04] tracking-tight text-[#13201b] md:text-6xl">
                No family should walk through the hard seasons alone.
              </h1>
              <p className="mb-5 max-w-2xl text-lg leading-relaxed text-[#43554e] md:text-xl">
                Wraparound helps churches, nonprofits, and care organizations surround foster, adoptive, kinship, and vulnerable families with consistent, organized, and faithful support.
              </p>
              <p className="mb-8 max-w-2xl text-base font-semibold leading-relaxed text-[#263a33]">
                Every family gets a dedicated care circle. Every need gets a volunteer. Every supporter stays connected.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-md bg-[#1f6f5b] px-7 text-base text-white hover:bg-[#185846]" onClick={() => scrollTo("contact")}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-md border-[#a8bcb2] bg-white/70 px-7 text-base text-[#263a33] hover:bg-white"
                  onClick={() => scrollTo("features")}
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <div className="rounded-lg border border-[#cbdcd2] bg-white p-4 shadow-2xl shadow-[#5f796d]/15">
                <div className="rounded-md border border-[#dde8e1] bg-[#f8faf7]">
                  <div className="flex items-center justify-between border-b border-[#dde8e1] px-4 py-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6a7b74]">County Overview</p>
                      <p className="font-bold text-[#13201b]">12 active Care Communities</p>
                    </div>
                    <span className="rounded-md bg-[#dff2e8] px-3 py-1 text-xs font-bold text-[#1f6f5b]">Live</span>
                  </div>
                  <div className="grid gap-0 md:grid-cols-[0.65fr_1.35fr]">
                    <div className="border-b border-[#dde8e1] p-4 md:border-b-0 md:border-r">
                      <div className="mb-4 h-2 w-20 rounded bg-[#1f6f5b]" />
                      {["New family intake", "Meal schedule", "Transportation", "Volunteer reminders"].map((item, index) => (
                        <div key={item} className="mb-3 rounded-md border border-[#e1eae4] bg-white p-3">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <span className="text-sm font-semibold text-[#263a33]">{item}</span>
                            <span className="h-2 w-2 rounded-full bg-[#e0a244]" />
                          </div>
                          <div className="h-2 rounded bg-[#e7eee9]">
                            <div className="h-2 rounded bg-[#1f6f5b]" style={{ width: `${52 + index * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4">
                      <div className="mb-4 grid grid-cols-3 gap-3">
                        {[
                          ["28", "Volunteers"],
                          ["46", "Tasks"],
                          ["9", "Churches"],
                        ].map(([value, label]) => (
                          <div key={label} className="rounded-md border border-[#e1eae4] bg-white p-3">
                            <p className="text-2xl font-bold text-[#13201b]">{value}</p>
                            <p className="text-xs font-semibold text-[#6a7b74]">{label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-md border border-[#e1eae4] bg-white p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="font-bold text-[#13201b]">Upcoming Support</p>
                          <CalendarDays className="h-5 w-5 text-[#1f6f5b]" />
                        </div>
                        {["Dinner delivery", "Childcare support", "Court appointment ride"].map((task, index) => (
                          <div key={task} className="flex items-center gap-3 border-t border-[#edf2ee] py-3 first:border-t-0 first:pt-0">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1f6f5b]" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-semibold text-[#263a33]">{task}</p>
                              <p className="text-xs text-[#6a7b74]">{index + 1} assigned volunteer{index === 0 ? "" : "s"}</p>
                            </div>
                            <span className="rounded bg-[#f2f6f3] px-2 py-1 text-xs font-bold text-[#43554e]">This week</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">How It Works</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Good intentions need a place to land.</h2>
              <p className="text-lg leading-relaxed text-[#52645d]">
                Many organizations rely on spreadsheets, group texts, and word-of-mouth to coordinate care. Wraparound gives every person in a family's support network one place to see what is needed, step in, and stay connected — without adding burden to coordinators or volunteers.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["A family is enrolled and their care circle is assembled.", "Practical needs are posted and volunteers step in to help.", "Meals, rides, childcare, and errands get scheduled and tracked.", "The whole care circle stays connected through updates and prayer.", "Coordinators see across families, churches, and communities.", "Volunteers are trained, activated, and supported as they serve."].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-[#dce5dd] bg-[#f8faf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1f6f5b]" />
                  <span className="text-sm font-semibold leading-relaxed text-[#263a33]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Serves */}
        <section id="who-we-serve" className="bg-[#f8faf7]/55 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Who It Serves</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Built for everyone in the care network.</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#52645d]">
                Wraparound is built around the full picture of a Care Community — from the family at the center to the coordinators holding everything together.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {roleViews.map((role) => (
                <article key={role.title} className="rounded-lg border border-[#dce5dd] bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#dff2e8] text-[#1f6f5b]">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#13201b]">{role.title}</h3>
                  <p className="text-sm leading-relaxed text-[#52645d]">{role.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What gets coordinated */}
        <section className="bg-[#f2f7f3]/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Practical, Tangible Support</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Meeting families where they actually are.</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#52645d]">
                Wraparound is built around the real, everyday needs of families walking through hard seasons — not generic task management. Every category of support reflects what families and coordinators told us they actually need.
              </p>
              <div className="flex flex-wrap gap-2">
                {supportTypes.map((type) => (
                  <span key={type} className="rounded-md border border-[#bdd7ca] bg-[#f8faf7] px-3 py-2 text-sm font-bold text-[#1f6f5b]">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#dce5dd] bg-[#f8faf7] p-6">
              <div className="mb-5 flex items-center gap-3">
                <HeartHandshake className="h-6 w-6 text-[#1f6f5b]" />
                <h3 className="text-xl font-bold text-[#13201b]">Care Circle Flow</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Families share what they need, how life is going, and what would help.",
                  "Lead Volunteers keep the care circle organized and attentive to the family.",
                  "Volunteers claim practical needs and show up faithfully over time.",
                  "Church Advocates and coordinators watch over the health of every care circle.",
                ].map((item) => (
                  <div key={item} className="rounded-md border border-[#dce5dd] bg-white p-4 font-medium text-[#43554e]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">What's Inside</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Everything a care organization needs in one place.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-lg border border-[#dce5dd] bg-[#f8faf7] p-6 shadow-sm">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#dff2e8] text-[#1f6f5b]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#13201b]">{feature.title}</h3>
                  <p className="mb-5 leading-relaxed text-[#52645d]">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-medium text-[#43554e]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1f6f5b]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Security — short blurb only */}
        <section className="bg-[#f2f7f3]/55 py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-5 text-center sm:px-6">
            <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-[#1f6f5b]" />
            <p className="text-base leading-relaxed text-[#43554e]">
              <span className="font-semibold text-[#13201b]">Family information is treated with care.</span>{" "}
              Wraparound uses industry-standard authentication and security protocols to protect sensitive data and ensure that access is appropriate to each person's role.
            </p>
          </div>
        </section>

        {/* Closing mission statement */}
        <section className="bg-[#e6f1ea]/55 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-5 text-center sm:px-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">
              The families being served deserve more than good intentions.
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#43554e]">
              Wraparound exists to make it possible for communities of care to form around families, stay organized over time, and show up consistently — not just in a moment of crisis, but through the long and ordinary seasons of life.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-5 text-center sm:px-6">
            <Mail className="mx-auto mb-6 h-10 w-10 text-[#1f6f5b]" />
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Want to see it in action?</h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-[#52645d]">
              If your organization is supporting foster, adoptive, kinship, or vulnerable families and you're looking for a better way to coordinate care, we'd love to connect.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button className="h-12 rounded-md bg-[#1f6f5b] px-8 text-base text-white hover:bg-[#185846]">Schedule a Conversation</Button>
              <Button variant="outline" className="h-12 rounded-md border-[#a8bcb2] bg-white px-8 text-base text-[#263a33] hover:bg-[#f8faf7]">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dce5dd] bg-[#f8faf7]/90 py-8">
        <div className="container mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-[#5d7069] sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-bold text-[#13201b]">
            <HeartHandshake className="h-5 w-5 text-[#1f6f5b]" />
            Wraparound
          </div>
          <p>Software for Care Communities serving foster, adoptive, kinship, and vulnerable families.</p>
        </div>
      </footer>
    </div>
  );
}
