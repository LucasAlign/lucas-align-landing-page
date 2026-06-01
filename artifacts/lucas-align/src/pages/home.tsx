import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Menu,
  MessageSquareText,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import logoMark from "@assets/lucas-align-logo-mark.png";
import logoFull from "@assets/lucas-align-logo.png";

const focusAreas = [
  "Intake and referral systems",
  "Volunteer coordination",
  "Grant and outcome reporting",
  "Internal tools that replace spreadsheet sprawl",
];

const services = [
  {
    icon: Route,
    title: "Workflow Mapping",
    desc: "We sit with the people doing the work, name the rough spots, and turn messy handoffs into clear, durable systems.",
  },
  {
    icon: Settings2,
    title: "Custom Software",
    desc: "Purpose-built portals, dashboards, forms, and automations that match how your organization actually operates.",
  },
  {
    icon: Sparkles,
    title: "Practical Automation",
    desc: "AI and automation only where they save real time: summaries, routing, reminders, data cleanup, and reporting prep.",
  },
];

const process = [
  {
    step: "Listen",
    detail: "We learn the mission, the staff rhythms, the exceptions, and the workarounds already keeping things moving.",
  },
  {
    step: "Shape",
    detail: "Together we sketch the right-size system, define success, and decide what should stay simple.",
  },
  {
    step: "Build",
    detail: "We ship in useful pieces, test with real users, and keep the product close to daily operations.",
  },
  {
    step: "Stay",
    detail: "Launch is not a handoff. We support, tune, and improve the system as your work changes.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const goToWraparound = () => {
    window.location.href = "/wraparound";
  };

  return (
    <div className="min-h-[100dvh] bg-[#f6f1e8] text-[#17211d] font-sans selection:bg-[#d9ead7] selection:text-[#17211d] flex flex-col">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f6f1e8]/92 backdrop-blur-md border-b border-[#dfd2bd] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-between">
          <button
            type="button"
            aria-label="Lucas Align home"
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logoFull} alt="Lucas Align" className="h-12 w-auto" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("services")} className="text-sm font-semibold text-[#48554d] hover:text-[#a1492b] transition-colors">
              Services
            </button>
            <button onClick={() => scrollTo("why-us")} className="text-sm font-semibold text-[#48554d] hover:text-[#a1492b] transition-colors">
              Approach
            </button>
            <button onClick={() => scrollTo("process")} className="text-sm font-semibold text-[#48554d] hover:text-[#a1492b] transition-colors">
              Process
            </button>
            <Button
              variant="outline"
              className="border-[#bfaa89] bg-[#fff8ed]/60 text-[#26332e] hover:bg-[#fff8ed] rounded-full px-5"
              onClick={goToWraparound}
            >
              Wraparound
            </Button>
            <Button className="bg-[#17211d] hover:bg-[#26332e] text-[#fff8ed] rounded-full px-6 shadow-sm">
              Start a Conversation
            </Button>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#293630]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f6f1e8] border-b border-[#dfd2bd] shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollTo("services")} className="text-left text-base font-semibold text-[#26332e] py-2 border-b border-[#dfd2bd]">
              Services
            </button>
            <button onClick={() => scrollTo("why-us")} className="text-left text-base font-semibold text-[#26332e] py-2 border-b border-[#dfd2bd]">
              Approach
            </button>
            <button onClick={() => scrollTo("process")} className="text-left text-base font-semibold text-[#26332e] py-2 border-b border-[#dfd2bd]">
              Process
            </button>
            <Button
              variant="outline"
              className="border-[#bfaa89] bg-[#fff8ed]/60 text-[#26332e] hover:bg-[#fff8ed] w-full rounded-full mt-2"
              onClick={goToWraparound}
            >
              View Wraparound
            </Button>
            <Button className="bg-[#17211d] hover:bg-[#26332e] text-[#fff8ed] w-full rounded-full mt-2">
              Start a Conversation
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_15%,rgba(206,93,51,0.18),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(78,132,103,0.18),transparent_28%),linear-gradient(180deg,#f6f1e8_0%,#efe3cf_100%)]" />
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d8c7aa]" />

          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff8ed]/85 border border-[#dcc8a8] text-[#6d3d2a] text-xs font-bold tracking-wide mb-6">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Software for mission-driven teams with real-world constraints.</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#17211d] leading-[1.04] mb-6">
                  Clearer systems for people doing important work.
                </h1>
                <p className="text-lg md:text-xl text-[#48554d] leading-relaxed mb-8">
                  Lucas Align designs practical software, automation, and internal tools for nonprofits, churches, schools, and service teams that have outgrown patchwork systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-7 text-base bg-[#a1492b] hover:bg-[#8b3e25] text-white rounded-full shadow-lg shadow-[#a1492b]/20">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-7 text-base border-[#bfaa89] bg-[#fff8ed]/60 text-[#26332e] hover:bg-[#fff8ed] rounded-full"
                    onClick={goToWraparound}
                  >
                    View Wraparound
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] border border-[#cfbb98] bg-[#fff8ed] p-5 shadow-2xl shadow-[#6f5a3d]/15">
                  <div className="rounded-3xl bg-[#17211d] text-[#fff8ed] p-6 sm:p-8 overflow-hidden relative">
                    <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-[#e7c98f]/30" />
                    <div className="absolute right-12 top-12 h-12 w-12 rounded-full border border-[#e7c98f]/25" />
                    <img src={logoMark} alt="" className="h-16 w-auto mb-10 brightness-0 invert opacity-95" />
                    <p className="text-sm uppercase tracking-[0.22em] text-[#e7c98f] font-bold mb-4">A better operating rhythm</p>
                    <div className="space-y-3">
                      {focusAreas.map((area) => (
                        <div key={area} className="flex items-center gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-3">
                          <CheckCircle2 className="w-5 h-5 text-[#95c2a5] flex-shrink-0" />
                          <span className="text-sm sm:text-base font-medium">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-4 hidden sm:block rounded-2xl bg-[#d8e7d4] border border-[#9fbd9f] p-4 shadow-xl shadow-[#6f5a3d]/10 max-w-[210px]">
                    <div className="text-3xl font-bold text-[#243d2b]">100+</div>
                    <p className="text-sm text-[#3e5545] leading-snug">hours a month reclaimed from manual follow-up and reporting work.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#17211d] text-[#fff8ed]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e7c98f]">Built for the work behind the mission</p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm text-[#e8dfd0]">
                <div>Family support teams</div>
                <div>Church operations</div>
                <div>Community programs</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-28 bg-[#fff8ed]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a1492b] mb-4">What Lucas Align does</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#17211d] mb-5">
                  Less platform theater. More tools your team will actually use.
                </h2>
                <p className="text-lg text-[#5b665f] leading-relaxed">
                  We help organizations move from scattered spreadsheets, duplicate entry, and fragile handoffs into calm systems that make the next right action obvious.
                </p>
              </div>

              <div className="grid gap-4">
                {services.map((service) => (
                  <div key={service.title} className="rounded-3xl border border-[#e1d0b6] bg-[#f6f1e8] p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#d8e7d4] text-[#243d2b] flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#17211d] mb-2">{service.title}</h3>
                        <p className="text-[#5b665f] leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#cf633c] text-white">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/25">
              <div className="py-4 md:px-6 md:first:pl-0">
                <div className="text-4xl md:text-5xl font-bold mb-3">1:1</div>
                <div className="text-white/90 font-medium">Partnership from first workflow map through launch and support.</div>
              </div>
              <div className="py-4 md:px-6">
                <div className="text-4xl md:text-5xl font-bold mb-3">0</div>
                <div className="text-white/90 font-medium">Generic templates forced onto teams with different missions.</div>
              </div>
              <div className="py-4 md:px-6 md:last:pr-0">
                <div className="text-4xl md:text-5xl font-bold mb-3">4</div>
                <div className="text-white/90 font-medium">Core outcomes: clarity, consistency, less rework, better follow-through.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="py-20 md:py-28 bg-[#efe3cf]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f4b1f] mb-4">The Lucas Align way</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#17211d] mb-6">
                  Technology should feel like a steady hand, not another system to manage.
                </h2>
                <p className="text-lg text-[#4f5a53] leading-relaxed">
                  The point is not to make your organization look more technical. The point is to protect staff attention, reduce avoidable friction, and help the people you serve move through your process with dignity.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: MessageSquareText,
                    title: "Plain-language partnership",
                    desc: "No jargon-heavy handoffs. You get clear tradeoffs, visible progress, and honest recommendations.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Designed for sensitive work",
                    desc: "We think carefully about privacy, permissions, audit trails, and the trust your community places in you.",
                  },
                  {
                    icon: Lightbulb,
                    title: "AI with restraint",
                    desc: "When automation helps, we use it. When a simpler rule, form, or workflow is better, we say that too.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-3xl bg-[#fff8ed]/75 border border-[#dcc8a8] p-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#17211d] text-[#e7c98f] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#17211d] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#5b665f] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 md:py-28 bg-[#f6f1e8]">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a1492b] mb-4">How we work</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#17211d]">
                A practical path from tangled operations to a system your team trusts.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {process.map((step, index) => (
                <div key={step.step} className="rounded-3xl bg-[#fff8ed] border border-[#e1d0b6] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#d8e7d4] text-[#243d2b] font-bold flex items-center justify-center mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#17211d] mb-3">{step.step}</h3>
                  <p className="text-sm text-[#5b665f] leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#17211d] text-[#fff8ed]">
          <div className="container mx-auto px-5 sm:px-6 max-w-5xl text-center">
            <CalendarCheck className="w-12 h-12 text-[#e7c98f] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Bring the stuck parts of your operation.</h2>
            <p className="text-xl text-[#d7cdbd] leading-relaxed mb-10 max-w-2xl mx-auto">
              We will help you sort what needs software, what needs automation, and what just needs a cleaner workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-14 px-9 text-lg bg-[#e7c98f] hover:bg-[#d9b873] text-[#17211d] rounded-full">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="h-14 px-9 text-lg border-[#7d8a7f] bg-transparent text-[#fff8ed] hover:bg-white/10 rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f6f1e8] border-t border-[#dfd2bd] py-10">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoFull} alt="Lucas Align" className="h-14 w-auto mb-3" />
            <p className="text-sm text-[#5b665f]">Clearer systems for people doing important work.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#48554d]">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#a1492b] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo("services")} className="hover:text-[#a1492b] transition-colors">
              Services
            </button>
            <button onClick={() => scrollTo("why-us")} className="hover:text-[#a1492b] transition-colors">
              Approach
            </button>
            <button onClick={() => scrollTo("process")} className="hover:text-[#a1492b] transition-colors">
              Process
            </button>
            <button onClick={goToWraparound} className="hover:text-[#a1492b] transition-colors">
              Wraparound
            </button>
          </div>

          <div className="text-sm text-[#6b756d]">&copy; {new Date().getFullYear()} Lucas Align.</div>
        </div>
      </footer>
    </div>
  );
}
