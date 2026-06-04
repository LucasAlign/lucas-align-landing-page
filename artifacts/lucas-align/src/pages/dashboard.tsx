import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  CheckSquare,
  ExternalLink,
  Heart,
  LayoutDashboard,
  Link2,
  MapPin,
  Menu,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import bgBeach from "@assets/image_1780508810059.png";
import logoFull from "@assets/lucas-align-new-logo.png";

const features = [
  {
    icon: Link2,
    title: "Centralized Resource Hub",
    description:
      "Quickly access the platforms and software KFA uses every day from one convenient location — no more hunting through bookmarks or remembering multiple URLs.",
    items: ["Single sign-on access", "Frequently used platforms", "Ministry tools", "Staff resources"],
  },
  {
    icon: BookOpen,
    title: "Google Drive Integration",
    description:
      "Instant access to shared documents, forms, templates, training materials, event resources, reports, and county-specific files — all surfaced in context.",
    items: ["Shared documents", "Forms and templates", "Training materials", "County-specific files"],
  },
  {
    icon: CalendarDays,
    title: "Calendar & Event Access",
    description:
      "Stay connected with upcoming meetings, trainings, events, lunches, conferences, and ministry opportunities through integrated calendar access.",
    items: ["Staff meetings", "Training events", "Ministry opportunities", "Conferences and lunches"],
  },
  {
    icon: CheckSquare,
    title: "Task & To-Do Management",
    description:
      "Keep track of priorities, deadlines, follow-ups, and ministry responsibilities with a personalized to-do list designed to help staff stay organized and focused.",
    items: ["Personal to-do lists", "Priority tracking", "Deadline reminders", "Ministry follow-ups"],
  },
  {
    icon: MapPin,
    title: "County Information Center",
    description:
      "Easily find county-specific resources, contacts, documents, and information needed to effectively serve churches, volunteers, and families.",
    items: ["County contacts", "Local resources", "Church partnerships", "Family information"],
  },
  {
    icon: Heart,
    title: "The \"Yay God\" Billboard",
    description:
      "A shared space where employees celebrate and post stories of how God is moving across Pennsylvania — new foster families, launched Care Communities, answered prayers, and moments of permanency.",
    items: ["Staff celebration posts", "Ministry wins", "Encouragement feed", "Team-wide visibility"],
  },
];

const roles = [
  { title: "County Coordinators", detail: "Access county-specific resources, family information, and church contacts from one organized dashboard built for how coordinators actually work." },
  { title: "Regional Staff", detail: "Stay connected across counties, access shared documents, and coordinate ministry activities without navigating multiple platforms." },
  { title: "Ministry Leaders", detail: "Keep ministry resources, volunteer information, and upcoming events accessible without hunting through email or bookmarks." },
  { title: "Administrative Team", detail: "Centralize forms, templates, reports, and operational resources into one place that makes day-to-day admin work more efficient." },
  { title: "Development Staff", detail: "Access grant resources, donor communication tools, reporting data, and development materials from a single dashboard." },
  { title: "Executive Leadership", detail: "Stay informed with high-level visibility into ministry activity, staff updates, and organizational resources across KFA." },
];

export default function KeyFamDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] text-[#16243a] font-sans selection:bg-[#dbe8f0] selection:text-[#16243a]">
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -10,
          backgroundImage: `url(${bgBeach})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          transform: "scale(1.08)",
          opacity: 0.75,
        }}
      />

      {/* Top bar */}
      <div className="flex items-start justify-between w-full pointer-events-none">
        <button
          type="button"
          aria-label="Lucas Align home"
          className="flex flex-col items-center pointer-events-auto"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer", marginLeft: "1rem" }}
          onClick={() => { window.location.href = "/"; }}
        >
          <div style={{ position: "relative", height: "11rem", clipPath: "inset(0 0 0 0)" }}>
            <div style={{ height: "11rem", perspective: "700px", perspectiveOrigin: "center 4.5rem" }}>
              <div style={{ position: "relative", transformStyle: "preserve-3d", animation: "logo-globe-spin 8s linear infinite", transformOrigin: "center 4.5rem" }}>
                {([-16, -12, -8, -4] as const).map((z, i) => (
                  <img key={z} src={logoFull} alt="" style={{ position: "absolute", top: 0, left: 0, height: "18rem", width: "auto", transform: `translateZ(${z}px)`, filter: `brightness(${0.06 + i * 0.07}) saturate(3)` }} />
                ))}
                <img src={logoFull} alt="" style={{ position: "relative", height: "18rem", width: "auto", display: "block", transform: "translateZ(0px)", filter: "drop-shadow(0 0 10px rgba(50,180,255,0.85)) drop-shadow(0 0 4px rgba(100,220,255,0.6))" }} />
              </div>
            </div>
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.22em", color: "#17385f", textTransform: "uppercase", marginTop: "0.1rem" }}>
            LUCAS ALIGN
          </span>
        </button>

        <header className="bg-transparent pointer-events-auto">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-end h-24">
            <nav className="hidden md:flex items-center gap-7">
              <button onClick={() => { window.location.href = "/"; }} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
                Home
              </button>
              <button onClick={() => { window.location.href = "/wraparound"; }} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
                Wraparound
              </button>
              <Button className="bg-[#17385f] hover:bg-[#102a48] text-white rounded-full px-6 shadow-sm" onClick={() => { window.location.href = "/#products"; }}>
                All products
              </Button>
            </nav>
            <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="md:hidden p-2 text-[#26384d]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#d8d1c4] shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden z-50">
              <button onClick={() => { window.location.href = "/"; }} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">Home</button>
              <button onClick={() => { window.location.href = "/wraparound"; }} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">Wraparound</button>
            </div>
          )}
        </header>
      </div>

      <main>
        {/* Hero */}
        <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-white/30" />
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d8d1c4]" />
          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#d8d1c4] text-[#8a5534] text-xs font-bold uppercase tracking-[0.14em] mb-7">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Built for Keystone Family Alliance</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#16243a] leading-[1.05] mb-6">
                One home for everything your team needs.
              </h1>
              <p className="text-xl text-[#516174] leading-relaxed mb-10 max-w-2xl">
                The KeyFam Dashboard replaces scattered bookmarks, shared drives, and multiple platforms with a single streamlined hub — built around the way KFA actually operates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#17385f] hover:bg-[#102a48] text-white rounded-full px-8 py-3 text-base shadow-sm" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
                  See what it does
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-[#aeb9c4] bg-white/70 text-[#17385f] hover:bg-white rounded-full px-8 py-3 text-base" onClick={() => { window.location.href = "/"; }}>
                  Back to Lucas Align
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The problem */}
        <section className="py-20 md:py-28 bg-[#16243a]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Why it exists</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Ministry work shouldn't require a roadmap to find resources.
                </h2>
                <p className="text-lg text-[#8eafc4] leading-relaxed">
                  KFA employees spend their days serving churches, volunteers, foster families, and vulnerable children. The KeyFam Dashboard was built to reduce the friction of finding information so staff can spend more time focused on ministry and less time searching.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "Searching through emails for that one shared link",
                  "Remembering which platform has which resource",
                  "Navigating multiple software tools for a single task",
                  "County-specific info buried across shared drives",
                ].map((pain) => (
                  <div key={pain} className="flex items-start gap-3 bg-white/8 rounded-2xl border border-white/10 p-5">
                    <div className="w-5 h-5 rounded-full bg-[#9b5c37]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#9b5c37]" />
                    </div>
                    <p className="text-[#c8d8e4]">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 md:py-28 bg-[#f4f7f9]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Features</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-4">
                Everything in one place.
              </h2>
              <p className="text-lg text-[#516174]">
                Each feature was built around a real friction point KFA staff face — not features for the sake of features.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-[1.5rem] border border-[#dce1e6] bg-white p-6 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#e7efe9] text-[#17385f] flex items-center justify-center mb-5">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#16243a] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#516174] leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-1.5">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#3d5166]">
                        <Star className="w-3 h-3 text-[#9b5c37] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Yay God callout */}
        <section className="py-20 md:py-28 bg-[#17385f]">
          <div className="container mx-auto px-5 sm:px-6 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-bold uppercase tracking-[0.14em] mb-8">
              <Heart className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>A unique feature</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The "Yay God" Billboard
            </h2>
            <p className="text-xl text-[#8eafc4] leading-relaxed max-w-2xl mx-auto">
              A shared space where KFA employees celebrate and post stories of how God is moving across Pennsylvania. A new foster family saying yes. A church launching a Care Community. A child finding permanency. Stories that remind everyone why this ministry matters.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 md:py-28 bg-[#f4f7f9]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Who it's for</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-4">
                Built exclusively for KFA staff.
              </h2>
              <p className="text-lg text-[#516174] max-w-2xl">
                Not a public platform. Not another software license to manage. The KeyFam Dashboard is designed specifically for Keystone Family Alliance employees.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.06 }}
                  className="rounded-[1.25rem] bg-white border border-[#dce1e6] p-5 shadow-sm"
                >
                  <h3 className="font-bold text-[#16243a] mb-2">{role.title}</h3>
                  <p className="text-sm text-[#516174] leading-relaxed">{role.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-5 sm:px-6 max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-6">Mission first</p>
            <blockquote className="text-2xl md:text-4xl font-bold text-[#16243a] leading-snug mb-8">
              "By keeping everyone connected and equipped, the dashboard helps staff stay focused on what matters most: serving children and families and mobilizing the Church."
            </blockquote>
            <p className="text-lg text-[#516174] max-w-xl mx-auto">
              The KeyFam Dashboard isn't another platform to learn. It's a single place that brings together the tools KFA already uses — so the mission never takes a back seat to managing systems.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f5f0]/90 border-t border-[#d8d1c4] py-10">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoFull} alt="Lucas Align" className="h-28 w-auto mb-3" />
            <p className="text-sm text-[#516174]">Practical technology for mission-driven work.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#4f6074]">
            <button onClick={() => { window.location.href = "/"; }} className="hover:text-[#9b5c37] transition-colors">Home</button>
            <button onClick={() => { window.location.href = "/wraparound"; }} className="hover:text-[#9b5c37] transition-colors">Wraparound</button>
          </div>
          <div className="text-sm text-[#6c7884]">&copy; {new Date().getFullYear()} Lucas Align.</div>
        </div>
      </footer>
    </div>
  );
}
