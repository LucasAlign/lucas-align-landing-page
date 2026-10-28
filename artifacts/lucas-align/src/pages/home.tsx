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
  ClipboardList,
  Gem,
  GraduationCap,
  HandHeart,
  Heart,
  Layers3,
  Menu,
  MessageCircle,
  Mountain,
  PenLine,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { EngageIcon } from "@/components/engage-icon";
import { type FormEvent, useEffect, useState } from "react";
import aboutImage from "@assets/lucas-brothers-about.webp";
import logoFull from "@assets/lucas-align-new-logo.png";
import bgBeach from "@assets/image_1780508810059.png";
import { useCreateContact } from "@workspace/api-client-react";

const appBasePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const products = [
  {
    icon: HandHeart,
    title: "Wraparound",
    logoSrc: "/wraparound/logo.png",
    logoClassName: "h-14 w-auto max-w-[16rem]",
    description:
      "A Care Communities platform designed to help churches, counties, advocates, team leads, and volunteers coordinate support for foster, adoptive, and kinship families. Includes scheduling, recurring tasks, role-based dashboards, training progress, reminders, family records, and care team coordination.",
    href: "/wraparound",
    learnMore: "View Wraparound",
  },
  {
    icon: Layers3,
    logoSrc: "/steward/icon.png",
    logoClassName: "h-16 w-auto max-w-[7rem]",
    title: "Steward",
    description:
      "Steward is a faith-grounded personal operating system -- a quiet partner that plans your day, keeps your word, and tells you the truth.",
    href: `${appBasePath}steward/index.html`,
    learnMore: "View Steward",
  },
  {
    icon: EngageIcon,
    title: "Engage",
    description:
      "A simple yet powerful church engagement CRM for foster-care and family-support ministries. Organize church relationships, conversations, partnerships, and next steps county by county. Works as a standalone tool, with optional seamless two-way Wraparound integration.",
    href: `${appBasePath}engage`,
    learnMore: "Explore Engage",
  },
  {
    icon: PenLine,
    title: "GrantFlow",
    description:
      "A lightweight grant-writing assistant designed to help nonprofits organize boilerplate answers, reuse organization details, and respond to grant applications with more consistency and less repetitive work.",
    href: null,
    learnMore: null,
  },
  {
    icon: GraduationCap,
    title: "Homeschool Dashboard",
    description:
      "A clean family dashboard for homeschooling workflows. Designed to help parents organize curriculum, assignments, student progress, daily expectations, uploaded PDFs, AI-assisted summaries, and completion tracking in one calm space.",
    href: null,
    learnMore: null,
  },
  {
    icon: UsersRound,
    title: "Collab",
    logoSrc: "/collab-logo.png",
    logoClassName: "h-16 w-auto max-w-[12rem]",
    description:
      "A nationwide collaboration and networking platform for chambers and member organizations. Collab helps members connect, exchange referrals, market their businesses, use practical business tools, and support sponsor-funded revenue for participating organizations.",
    href: `${appBasePath}collab/`,
    learnMore: "Explore Collab",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Steward Well",
    description:
      "Everything entrusted to us deserves faithful care. We steward our time, relationships, resources, technology, and the trust others place in us.",
  },
  {
    icon: Target,
    title: "Solve What Matters",
    description:
      "We build solutions to real problems. If it doesn't create meaningful value, we don't build it.",
  },
  {
    icon: Gem,
    title: "Pursue Excellence",
    description:
      "Quality communicates respect. We sweat the details because the people we serve deserve our best.",
  },
  {
    icon: UsersRound,
    title: "Serve People First",
    description:
      "Technology exists to serve people, not the other way around. Success is measured by the impact our customers create.",
  },
  {
    icon: Mountain,
    title: "Build for the Long Term",
    description:
      "Trust compounds. We choose integrity over shortcuts and long-term value over short-term wins.",
  },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const createContact = useCreateContact();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView({ block: "start" });
    };
    const frame = requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
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
    <div className="min-h-[100dvh] text-[#16243a] font-sans selection:bg-[#dbe8f0] selection:text-[#16243a]">
      {/* Beach background — fixed to the viewport, always behind everything */}
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
      {/* Top bar — logo on left, nav on right. Scrolls naturally with the page. */}
      <div className="flex items-start justify-between w-full pointer-events-none">

        {/* Logo */}
        <button
          type="button"
          aria-label="Lucas Align home"
          className="flex flex-col items-center pointer-events-auto"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer", marginLeft: "1rem" }}
          onClick={scrollToTop}
        >
          <div style={{ position: "relative", height: "11rem", clipPath: "inset(0 0 0 0)" }}>
            <div style={{ height: "11rem", perspective: "700px", perspectiveOrigin: "center 4.5rem" }}>
              <div
                style={{
                  position: "relative",
                  transformStyle: "preserve-3d",
                  animation: "logo-globe-spin 8s linear infinite",
                  transformOrigin: "center 4.5rem",
                }}
              >
                {([-16, -12, -8, -4] as const).map((z, i) => (
                  <img
                    key={z}
                    src={logoFull}
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "18rem",
                      width: "auto",
                      transform: `translateZ(${z}px)`,
                      filter: `brightness(${0.06 + i * 0.07}) saturate(3)`,
                    }}
                  />
                ))}
                <img
                  src={logoFull}
                  alt=""
                  style={{
                    position: "relative",
                    height: "18rem",
                    width: "auto",
                    display: "block",
                    transform: "translateZ(0px)",
                    filter: "drop-shadow(0 0 10px rgba(50,180,255,0.85)) drop-shadow(0 0 4px rgba(100,220,255,0.6))",
                  }}
                />
              </div>
            </div>
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "0.22em",
              color: "#17385f",
              textTransform: "uppercase",
              marginTop: "0.1rem",
            }}
          >
            LUCAS ALIGN
          </span>
        </button>

        {/* Nav — always transparent background */}
        <header className="relative bg-transparent pointer-events-auto">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-end h-24">

          <nav className="hidden md:flex items-center gap-7">
            <button onClick={() => scrollTo("about")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              Products
            </button>
            <button onClick={() => scrollTo("values")} className="text-sm font-semibold text-[#4f6074] hover:text-[#9b5c37] transition-colors">
              Core Values
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
          <div className="fixed left-0 right-0 top-24 z-50 w-full bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#d8d1c4] shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollTo("about")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              Products
            </button>
            <button onClick={() => scrollTo("values")} className="text-left text-base font-semibold text-[#26384d] py-2 border-b border-[#d8d1c4]">
              Core Values
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
      </div>
      <main>
        <section id="about" className="relative pt-44 pb-20 md:pt-56 md:pb-28 overflow-hidden bg-[#f7f5f0]/55">
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d8d1c4]" />

          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-6xl">
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Who We Are</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-6">
                  We're a stewardship company that happens to build software.
                </h2>
                <div className="space-y-5 text-lg text-[#516174] leading-relaxed">
                  <p>
                    We exist to remove friction so people and organizations can focus on what matters most. Software is not our mission. People are.
                  </p>
                  <p>
                    This is a for-profit company with a ministry-minded purpose: to support and strengthen the work of nonprofits, ministries, and mission-driven teams by building tools that reduce friction and make daily operations clearer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 overflow-hidden bg-transparent">
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d8d1c4]" />

          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-6xl">
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
          </div>
        </section>

        <section className="py-14 md:py-16 bg-[#16243a]/95 text-white">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b98d] mb-3">Our Mission</p>
                <p className="text-lg sm:text-xl font-semibold leading-relaxed">
                  To build technology that helps people faithfully steward what has been entrusted to them.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b98d] mb-3">Our Vision</p>
                <p className="text-lg sm:text-xl font-semibold leading-relaxed">
                  A world where technology quietly empowers people and organizations to accomplish their mission.
                </p>
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

            <div className="grid lg:grid-cols-2 gap-5">
              {products.map((product) => (
                <article
                  key={product.title}
                  className={`rounded-[1.5rem] p-6 shadow-sm ${product.title === "Steward" ? "border border-[#7a4e2c] bg-[#2e160b] shadow-[0_18px_45px_rgba(26,14,8,0.25)]" : "border border-[#dce1e6] bg-[#f8faf9]"}`}
                  style={product.title === "Steward" ? {
                    backgroundImage:
                      "linear-gradient(180deg, rgba(26,14,8,0.42), rgba(46,22,11,0.58)), url(/steward/woodgrain.png)",
                    backgroundColor: "#2e160b",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  } : undefined}
                >
                  {"logoSrc" in product && product.logoSrc ? (
                    <div className="h-20 flex items-center justify-start mb-5">
                      {product.href ? (
                        <a
                          href={product.href}
                          target={"external" in product && product.external ? "_blank" : undefined}
                          rel={"external" in product && product.external ? "noopener noreferrer" : undefined}
                          aria-label={`Visit ${product.title}`}
                          className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385f] focus-visible:ring-offset-4"
                        >
                          <img
                            src={product.logoSrc}
                            alt={`${product.title} logo`}
                            className={`object-contain ${"logoClassName" in product ? product.logoClassName : "h-16 w-auto max-w-[10rem]"}`}
                          />
                        </a>
                      ) : (
                        <img
                          src={product.logoSrc}
                          alt={`${product.title} logo`}
                          className={`object-contain ${"logoClassName" in product ? product.logoClassName : "h-16 w-auto max-w-[10rem]"}`}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-[#e7efe9] text-[#17385f] flex items-center justify-center mb-6">
                      <product.icon className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-3 ${product.title === "Steward" ? "text-[#f4ead0]" : "text-[#16243a]"}`}>{product.title}</h3>
                  <p className={`leading-relaxed ${product.title === "Steward" ? "text-[#d9cba6]" : "text-[#516174]"}`}>{product.description}</p>
                  {product.href && product.learnMore && (
                    "external" in product && product.external ? (
                      <Button
                        asChild
                        variant="outline"
                        className="mt-6 rounded-full border-[#aeb9c4] bg-white text-[#17385f] hover:bg-[#eef3f6]"
                      >
                        <a href={product.href} target="_blank" rel="noopener noreferrer">
                          {product.learnMore}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className={`mt-6 rounded-full ${product.title === "Steward" ? "border-[#d8aa3e] bg-[#d8aa3e] text-[#1a0e08] hover:bg-[#c89a34]" : "border-[#aeb9c4] bg-white text-[#17385f] hover:bg-[#eef3f6]"}`}
                      >
                        <a href={product.href}>{product.learnMore}</a>
                      </Button>
                    )
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="py-20 md:py-28 bg-[#eef3f6]/55">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4">Core Values</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-5">
                Technology aligned with mission
              </h2>
              <p className="text-lg text-[#516174] leading-relaxed">
                We are not trying to replace ministry or nonprofit work. We are trying to remove friction, create clarity, and empower people and organizations to faithfully focus on what matters most.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-[1.25rem] bg-white border border-[#dce1e6] p-5 shadow-sm">
                  <div className="w-11 h-11 rounded-2xl bg-[#e7efe9] text-[#17385f] flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#16243a] mb-2">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#516174]">{value.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-lg sm:text-xl font-bold tracking-tight text-[#16243a]">
              Steward Well. Build Simply. Serve People. Pursue Excellence. Finish Faithfully.
            </p>
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
            <button onClick={scrollToTop} className="hover:text-[#9b5c37] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo("about")} className="hover:text-[#9b5c37] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="hover:text-[#9b5c37] transition-colors">
              Products
            </button>
            <button onClick={() => scrollTo("values")} className="hover:text-[#9b5c37] transition-colors">
              Core Values
            </button>
            <button onClick={() => scrollTo("serve")} className="hover:text-[#9b5c37] transition-colors">
              Who we serve
            </button>
            <button onClick={startConversation} className="hover:text-[#9b5c37] transition-colors">
              Contact
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#9b5c37] transition-colors">
              Support
            </a>
          </div>

          <div className="text-sm text-[#6c7884]">&copy; {new Date().getFullYear()} Lucas Align.</div>
        </div>
      </footer>
    </div>
  );
}
