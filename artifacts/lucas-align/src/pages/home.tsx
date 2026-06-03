import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HandHeart,
  Layers3,
  Menu,
  MessageCircle,
  PenLine,
  UsersRound,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import aboutImage from "@assets/lucas-brothers-about.webp";
import logoFull from "@assets/lucas-align-new-logo.png";
import bgBeach from "@assets/image_1780508810059.png";
import { useCreateContact } from "@workspace/api-client-react";

const products = [
  {
    icon: HandHeart,
    title: "Wraparound",
    description:
      "A Care Communities platform designed to help churches, counties, advocates, team leads, and volunteers coordinate support for foster, adoptive, and kinship families. Includes scheduling, recurring tasks, role-based dashboards, training progress, reminders, family records, and care team coordination.",
  },
  {
    icon: PenLine,
    title: "GrantFlow",
    description:
      "A lightweight grant-writing assistant designed to help nonprofits organize boilerplate answers, reuse organization details, and respond to grant applications with more consistency and less repetitive work.",
  },
  {
    icon: GraduationCap,
    title: "Homeschool Dashboard",
    description:
      "A clean family dashboard for homeschooling workflows. Designed to help parents organize curriculum, assignments, student progress, daily expectations, uploaded PDFs, AI-assisted summaries, and completion tracking in one calm space.",
  },
];

const philosophy = [
  "Build around the actual workflow",
  "Keep tools simple and focused",
  "Reduce duplicate data entry",
  "Make dashboards clear by role",
  "Avoid unnecessary SaaS complexity",
  "Support people-centered work with practical systems",
];

const audiences = [
  "Nonprofits",
  "Ministries",
  "Foster/adoptive support organizations",
  "Churches and church networks",
  "Homeschool families and co-ops",
  "Local community initiatives",
  "Small teams with complex coordination needs",
];

const CONTACT_EMAIL = "admin" + "\x40" + "lucasalign.com";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const createContact = useCreateContact();

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

  const startConversation = () => {
    setContactOpen(true);
    setSubmitted(false);
    setMobileMenuOpen(false);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    createContact.mutate(
      {
        data: {
          name: String(form.get("name") || "").trim(),
          email: String(form.get("email") || "").trim(),
          organization: String(form.get("organization") || "").trim() || null,
          interest: String(form.get("projectType") || "").trim() || null,
          message: String(form.get("message") || "").trim() || null,
          source: "home",
        },
      },
      { onSuccess: () => setSubmitted(true) },
    );
  };

  return (
    <div className="min-h-[100dvh] bg-transparent text-[#16243a] font-sans selection:bg-[#dbe8f0] selection:text-[#16243a] flex flex-col">
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
        className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300 ${
          isScrolled
            ? "bg-[#f7f5f0]/92 backdrop-blur-md border-b border-[#d8d1c4] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-end h-24">

          {/* Logo — fixed to the viewport so it never scrolls */}
          <button
            type="button"
            aria-label="Lucas Align home"
            className="fixed top-0 left-4 cursor-pointer z-[60]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logoFull}
              alt="Lucas Align"
              style={{
                height: "18rem",
                width: "auto",
                animation: "logo-spin 10s linear infinite",
              }}
            />
          </button>

          <nav className="hidden md:flex items-center gap-7">
            <button onClick={() => scrollTo("about")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              Products
            </button>
            <button onClick={() => scrollTo("philosophy")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              Philosophy
            </button>
            <button onClick={() => scrollTo("serve")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              Who we serve
            </button>
            <Button
              className="bg-[#17385f] hover:bg-[#102a48] text-white rounded-full px-6 shadow-sm"
              onClick={() => scrollTo("products")}
            >
              View our products
            </Button>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#26384d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#d8d1c4] shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollTo("about")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              Products
            </button>
            <button onClick={() => scrollTo("philosophy")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              Philosophy
            </button>
            <button onClick={() => scrollTo("serve")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              Who we serve
            </button>
            <Button className="bg-[#17385f] hover:bg-[#102a48] text-white w-full rounded-full mt-2" onClick={() => scrollTo("products")}>
              View our products
            </Button>
            <Button
              variant="outline"
              className="border-[#aeb9c4] bg-white/60 text-[#17385f] hover:bg-white w-full rounded-full"
              onClick={startConversation}
            >
              Start a conversation
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative pt-44 pb-18 md:pt-56 md:pb-24 overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-white/30" />
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d8d1c4]" />

          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_0.82fr] gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#d8d1c4] text-[#8a5534] text-xs font-bold uppercase tracking-[0.14em] mb-7">
                  <Layers3 className="w-3.5 h-3.5" />
                  <span>Practical technology for mission-driven work</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#16243a] leading-[1.05] mb-6">
                  Software built around the mission, not the other way around.
                </h1>
                <p className="text-lg md:text-xl text-[#516174] leading-relaxed mb-8 max-w-2xl">
                  Lucas Align builds simple, focused software for nonprofits, ministries, and care-centered organizations that need better tools without unnecessary complexity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="h-12 px-7 text-base bg-[#17385f] hover:bg-[#102a48] text-white rounded-full shadow-lg shadow-[#17385f]/15"
                    onClick={() => scrollTo("products")}
                  >
                    View our products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-7 text-base border-[#aeb9c4] bg-white/55 text-[#17385f] hover:bg-white rounded-full"
                    onClick={startConversation}
                  >
                    Start a conversation
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="rounded-[1.75rem] border border-[#d8d1c4] bg-white/72 p-5 shadow-2xl shadow-[#29415c]/10"
              >
                <div className="rounded-[1.35rem] bg-[#16243a] text-white p-6 sm:p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#d9b98d] font-bold mb-5">Why Lucas Align exists</p>
                  <p className="text-2xl sm:text-3xl font-semibold leading-tight mb-8">
                    Many good teams are doing meaningful work through software that only kind of fits.
                  </p>
                  <div className="space-y-3">
                    {["SaaS tools", "Spreadsheets", "CRMs", "Forms", "Calendars", "Workarounds"].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-3">
                        <CheckCircle2 className="w-5 h-5 text-[#9cc8b7] flex-shrink-0" />
                        <span className="text-sm sm:text-base font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 text-sm sm:text-base leading-relaxed text-[#d8e1e8]">
                    We ask what would happen if the tool fit the work from the start, without adding another bloated system to manage.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28 bg-[#f7f5f0]/55">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[0.94fr_1.06fr] gap-12 lg:gap-16 items-center">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="The Lucas brothers"
                  className="aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-[#29415c]/12 ring-1 ring-[#d8d1c4]"
                />
                <p className="mt-5 rounded-2xl border border-[#d8d1c4] bg-white/72 px-5 py-4 text-sm leading-relaxed text-[#516174] shadow-sm">
                  We are the Lucas Brothers. We have one goal: serve and glorify our Lord and Savior Jesus Christ by making cool stuff.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">About Lucas Align</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-6">
                  Solving problems is our something.
                </h2>
                <div className="space-y-5 text-lg text-[#516174] leading-relaxed">
                  <p>
                    We have seen firsthand how much time nonprofits lose to disconnected systems, clunky workflows, and software that almost fits but never quite does. Lucas Align was created to build practical, task-specific technology for organizations that serve people, families, churches, and communities.
                  </p>
                  <p>
                    This is a for-profit company with a ministry-minded purpose: to support and strengthen the work of nonprofits by building tools that reduce friction, improve coordination, and make daily operations clearer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 md:py-28 bg-white/55">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Products</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-5">
                Tools we are building
              </h2>
              <p className="text-lg text-[#516174] leading-relaxed">
                Focused products for specific operational problems, built with enough structure to be useful and enough restraint to stay clear.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <article key={product.title} className="rounded-[1.5rem] border border-[#dce1e6] bg-[#f8faf9] p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#e7efe9] text-[#17385f] flex items-center justify-center mb-6">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16243a] mb-3">{product.title}</h3>
                  <p className="text-[#516174] leading-relaxed">{product.description}</p>
                  {product.title === "Wraparound" && (
                    <Button
                      variant="outline"
                      className="mt-6 border-[#aeb9c4] bg-white text-[#17385f] hover:bg-[#eef3f6] rounded-full"
                      onClick={goToWraparound}
                    >
                      View Wraparound
                    </Button>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="py-20 md:py-28 bg-[#eef3f6]/55">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Philosophy</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-6">
                  Less bloat. Better fit.
                </h2>
                <p className="text-lg text-[#516174] leading-relaxed">
                  We are not trying to replace ministry or nonprofit work. We are trying to remove friction, solve operational problems, and build tools that help good organizations serve people better.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {philosophy.map((point) => (
                  <div key={point} className="flex gap-3 rounded-[1.25rem] bg-white border border-[#dce1e6] p-5 shadow-sm">
                    <CheckCircle2 className="mt-0.5 w-5 h-5 text-[#4c8b73] flex-shrink-0" />
                    <p className="font-semibold leading-relaxed text-[#26384d]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="serve" className="py-20 md:py-28 bg-[#f7f5f0]/55">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Who we serve</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-6">
                  Built for organizations serving people
                </h2>
                <p className="text-lg text-[#516174] leading-relaxed">
                  The common thread is not size or sector. It is people-centered work with real coordination needs, limited time, and systems that need to fit the mission more closely.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#d8d1c4] bg-white p-5 sm:p-6 shadow-xl shadow-[#29415c]/8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {audiences.map((audience) => (
                    <div key={audience} className="flex items-center gap-3 rounded-2xl bg-[#f8faf9] px-4 py-3 text-[#26384d]">
                      <UsersRound className="w-4 h-4 text-[#9b5c37] flex-shrink-0" />
                      <span className="text-sm font-semibold leading-snug">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#16243a]/90 text-white">
          <div className="container mx-auto px-5 sm:px-6 max-w-5xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#d9b98d] flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Have a workflow that needs a better system?
            </h2>
            <p className="text-xl text-[#d8e1e8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Lucas Align exists to help mission-driven teams turn messy processes into clear, usable tools.
            </p>
            <Button className="h-14 px-9 text-lg bg-[#d9b98d] hover:bg-[#cda878] text-[#16243a] rounded-full" onClick={startConversation}>
              <MessageCircle className="mr-2 w-5 h-5" />
              Start a conversation
            </Button>
          </div>
        </section>
      </main>

      <Dialog open={contactOpen} onOpenChange={(open) => { setContactOpen(open); if (!open) setSubmitted(false); }}>
        <DialogContent className="max-h-[92dvh] overflow-y-auto rounded-[1.5rem] border-[#d8d1c4] bg-[#f7f5f0] p-6 shadow-2xl sm:max-w-xl">
          {submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight text-[#16243a]">Message received</DialogTitle>
                <DialogDescription className="text-[#516174]">
                  Thank you for reaching out. We'll be in touch soon.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex justify-end">
                <Button className="rounded-full bg-[#17385f] px-6 text-white hover:bg-[#102a48]" onClick={() => setContactOpen(false)}>
                  Close
                </Button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight text-[#16243a]">Start a conversation</DialogTitle>
                <DialogDescription className="text-[#516174]">
                  Tell us a little about the workflow or tool you have in mind.
                </DialogDescription>
              </DialogHeader>

              <form className="mt-2 grid gap-4" onSubmit={handleContactSubmit}>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-[#26384d]" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="h-11 rounded-xl border border-[#cdd5dc] bg-white px-4 text-[#16243a] outline-none transition focus:border-[#17385f] focus:ring-2 focus:ring-[#17385f]/15"
                    autoComplete="name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-[#26384d]" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="h-11 rounded-xl border border-[#cdd5dc] bg-white px-4 text-[#16243a] outline-none transition focus:border-[#17385f] focus:ring-2 focus:ring-[#17385f]/15"
                    autoComplete="email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-[#26384d]" htmlFor="contact-organization">Organization</label>
                  <input
                    id="contact-organization"
                    name="organization"
                    className="h-11 rounded-xl border border-[#cdd5dc] bg-white px-4 text-[#16243a] outline-none transition focus:border-[#17385f] focus:ring-2 focus:ring-[#17385f]/15"
                    autoComplete="organization"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-[#26384d]" htmlFor="contact-project-type">Project area</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className="h-11 rounded-xl border border-[#cdd5dc] bg-white px-4 text-[#16243a] outline-none transition focus:border-[#17385f] focus:ring-2 focus:ring-[#17385f]/15"
                    defaultValue=""
                  >
                    <option value="" disabled>Select one</option>
                    <option>Wraparound</option>
                    <option>GrantFlow</option>
                    <option>Homeschool Dashboard</option>
                    <option>Custom workflow or tool</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-[#26384d]" htmlFor="contact-message">What needs a better system?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-[#cdd5dc] bg-white px-4 py-3 text-[#16243a] outline-none transition focus:border-[#17385f] focus:ring-2 focus:ring-[#17385f]/15"
                  />
                </div>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                  <Button type="button" variant="outline" className="rounded-full border-[#aeb9c4] bg-white text-[#17385f] hover:bg-[#eef3f6]" onClick={() => setContactOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={createContact.isPending} className="rounded-full bg-[#17385f] px-6 text-white hover:bg-[#102a48]">
                    {createContact.isPending ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-[#f7f5f0]/90 border-t border-[#d8d1c4] py-10">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoFull} alt="Lucas Align" className="h-28 w-auto mb-3" />
            <p className="text-sm text-[#516174]">Practical technology for mission-driven work.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#4f6074]">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#9b5c37] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo("about")} className="hover:text-[#9b5c37] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="hover:text-[#9b5c37] transition-colors">
              Products
            </button>
            <button onClick={() => scrollTo("philosophy")} className="hover:text-[#9b5c37] transition-colors">
              Philosophy
            </button>
            <button onClick={() => scrollTo("serve")} className="hover:text-[#9b5c37] transition-colors">
              Who we serve
            </button>
          </div>

          <div className="text-sm text-[#6c7884]">&copy; {new Date().getFullYear()} Lucas Align.</div>
        </div>
      </footer>
    </div>
  );
}
