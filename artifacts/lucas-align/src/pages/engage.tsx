import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  HandHeart,
  History,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import { EngageIcon } from "@/components/engage-icon";
import bgBeach from "@assets/image_1780508810059.png";

const appBasePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const MAIL = "Bryant" + "\x40" + "LucasAlign.com";
const mailto = (subject: string, body: string) =>
  `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const demoHref = mailto(
  "Engage demo request",
  "Hi Bryant,\n\nI'd like to see Engage. Our organization and state:\n\n",
);
const questionHref = mailto("Engage question", "Hi Bryant,\n\nI have a question about Engage:\n\n");

const TITLE = "Engage | Church Partnership CRM for Foster-Care Ministries | Lucas Align";
const DESC =
  "Engage is a church-partnership CRM for foster-care and family-support ministries. Every congregation, conversation and next step, county by county. $275/month statewide.";

const features = [
  {
    icon: MapPinned,
    title: "County-by-county directory",
    body: "Every church organized by county, with the contacts and denominations your team needs to reach them.",
  },
  {
    icon: Phone,
    title: "Calls, visits, meetings, follow-ups",
    body: "Log each touchpoint and assign every next step to an owner, so nothing waits on someone's memory.",
  },
  {
    icon: HandHeart,
    title: "Giving, serving, hosting",
    body: "See how each church partners with you across giving, serving and hosting, together in one record.",
  },
  {
    icon: BarChart3,
    title: "Impact reports and analytics",
    body: "Turn the relationships you are tending into reports you can share and trends you can act on.",
  },
  {
    icon: History,
    title: "History that outlasts turnover",
    body: "Church conversation history stays with the church, so a new coordinator inherits the full story.",
  },
  {
    icon: CalendarCheck,
    title: "Owners on every next step",
    body: "Know who is following up with which congregation, and what is coming due.",
  },
];

const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385f] focus-visible:ring-offset-2";
const btnPrimary = `inline-flex h-12 items-center justify-center rounded-full bg-[#17385f] px-7 text-base font-medium text-white shadow-lg shadow-[#17385f]/15 transition-colors hover:bg-[#102a48] motion-reduce:transition-none ${ring}`;
const btnOutline = `inline-flex h-12 items-center justify-center rounded-full border border-[#aeb9c4] bg-white/60 px-7 text-base font-medium text-[#17385f] transition-colors hover:bg-white motion-reduce:transition-none ${ring}`;
const eyebrow = "text-sm font-bold uppercase tracking-[0.2em] text-[#9b5c37] mb-4";
const h2 = "text-3xl md:text-5xl font-bold tracking-tight text-[#16243a] mb-5";

function setMeta(sel: string, attr: string, key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(sel);
  const created = !el;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const prev = el.getAttribute("content");
  el.setAttribute("content", value);
  return () => {
    if (created) el!.remove();
    else if (prev !== null) el!.setAttribute("content", prev);
    else el!.removeAttribute("content");
  };
}

export default function Engage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = TITLE;
    const undo = [
      setMeta('meta[name="description"]', "name", "description", DESC),
      setMeta('meta[property="og:title"]', "property", "og:title", TITLE),
      setMeta('meta[property="og:description"]', "property", "og:description", DESC),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", TITLE),
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", DESC),
    ];
    return () => {
      document.title = prevTitle;
      undo.forEach((u) => u());
    };
  }, []);

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.55, delay },
        };

  const mainSite = (hash: string) => `${appBasePath}${hash}`;

  return (
    <div className="min-h-[100dvh] overflow-x-clip text-[#16243a] font-sans selection:bg-[#dbe8f0] selection:text-[#16243a]">
      <a
        href="#engage-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#17385f] focus:px-5 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
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

      <header className="sticky top-0 z-50 border-b border-[#d8d1c4] bg-[#f7f5f0]/92 backdrop-blur-md">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-6">
          <a href={mainSite("")} className={`flex items-center gap-3 rounded-lg ${ring}`} aria-label="Lucas Align home">
            <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#17385f]">Lucas Align</span>
            <span className="hidden h-5 w-px bg-[#d8d1c4] sm:block" />
            <span className="hidden items-center gap-2 text-sm font-bold text-[#16243a] sm:flex">
              <EngageIcon className="h-6 w-6 text-[#9b5c37]" />
              Engage
            </span>
          </a>
          <nav aria-label="Engage" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-[#4f6074]">
            <a href="#features" className={`rounded hover:text-[#9b5c37] ${ring}`}>Features</a>
            <a href="#wraparound" className={`hidden rounded hover:text-[#9b5c37] sm:inline ${ring}`}>Wraparound sync</a>
            <a href="#pricing" className={`rounded hover:text-[#9b5c37] ${ring}`}>Pricing</a>
            <a href={mainSite("#products")} className={`hidden rounded hover:text-[#9b5c37] md:inline ${ring}`}>All products</a>
            <a href={demoHref} className="inline-flex h-9 items-center rounded-full bg-[#17385f] px-5 text-white transition-colors hover:bg-[#102a48]">
              Request a demo
            </a>
          </nav>
        </div>
      </header>

      <main id="engage-main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#f7f5f0]/55 py-20 md:py-28">
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#d8d1c4]" />
          <div className="container relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div {...(reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55 } })}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8d1c4] bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#8a5534]">
                <EngageIcon className="h-4 w-4" />
                <span>Engage by Lucas Align</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Every church in your state. Every relationship in one place.
              </h1>
              <p className="mb-4 max-w-2xl text-lg leading-relaxed text-[#516174] md:text-xl">
                Engage is a church-partnership CRM for foster-care and family-support ministries: every congregation, conversation and next step, county by county.
              </p>
              <p className="mb-8 max-w-2xl text-base font-semibold leading-relaxed text-[#26384d]">
                A simple, powerful tool that stands on its own. Wraparound is not required.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={demoHref} className={btnPrimary} data-testid="link-demo-hero">
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#pricing" className={btnOutline} data-testid="link-pricing-hero">See pricing</a>
              </div>
            </motion.div>

            {/* Network illustration */}
            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.1 } })}
              className="rounded-[1.75rem] border border-[#d8d1c4] bg-white/80 p-8 shadow-xl shadow-[#29415c]/8"
            >
              <EngageIcon className="mx-auto h-56 w-full max-w-56 text-[#17385f]" />
              <p className="mt-4 text-center text-sm font-semibold text-[#516174]">
                Churches, people and relationships, connected.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Standalone */}
        <section className="bg-white/55 py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div {...fade()}>
              <p className={eyebrow}>Standalone first</p>
              <h2 className={h2}>Church engagement, without the clutter.</h2>
              <p className="text-lg leading-relaxed text-[#516174]">
                Engage does one job well: it keeps your church relationships organized so the people doing the work can focus on the people they serve. It works completely on its own. You do not need Wraparound to use it.
              </p>
            </motion.div>
            <motion.div {...fade(0.08)} className="grid gap-3 sm:grid-cols-2">
              {[
                "Find any church by county in seconds.",
                "See who spoke with them last, and what was said.",
                "Assign the next step to a named owner.",
                "Hand a county to a new coordinator without losing the story.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-2xl border border-[#dce1e6] bg-[#f8faf9] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#9b5c37]" />
                  <span className="text-sm font-semibold leading-relaxed text-[#26384d]">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 bg-[#eef3f6]/55 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className={eyebrow}>What is inside</p>
              <h2 className={h2}>Every congregation, conversation and next step.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.article
                  key={f.title}
                  {...fade(i * 0.05)}
                  className="rounded-[1.25rem] border border-[#dce1e6] bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7efe9] text-[#17385f]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[#516174]">{f.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Wraparound sync */}
        <section id="wraparound" className="scroll-mt-20 bg-[#16243a]/95 py-20 text-white md:py-28">
          <div className="container mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr]">
            <motion.div {...fade()}>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#d9b98d]">Optional</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">Pair it with Wraparound, if you want.</h2>
              <p className="mb-4 text-lg leading-relaxed text-[#d8e1e8]">
                If you also use Wraparound, Engage can sync with it automatically in both directions. A change made in either one flows to the other.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-[#d8e1e8]">
                No duplicate entry. No conflicting lists. And if you never use Wraparound, Engage is complete without it.
              </p>
              <a href={`${appBasePath}wraparound`} className="inline-flex h-11 items-center rounded-full bg-[#d9b98d] px-6 font-medium text-[#16243a] transition-colors hover:bg-[#cda878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#16243a]">
                About Wraparound
              </a>
            </motion.div>
            <motion.div {...fade(0.08)} className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 text-center sm:gap-4">
                <div className="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-2 sm:p-5">
                  <EngageIcon className="mx-auto mb-2 h-10 w-10 text-[#d9b98d]" />
                  <p className="font-bold">Engage</p>
                </div>
                <ArrowLeftRight className="h-7 w-7 text-[#d9b98d]" aria-label="Two-way sync" />
                <div className="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-2 sm:p-5">
                  <HandHeart className="mx-auto mb-2 h-10 w-10 text-[#d9b98d]" />
                  <p className="break-words font-bold">Wraparound</p>
                </div>
              </div>
              <p className="mt-5 text-center text-sm text-[#d8e1e8]">One list of churches. Updated from either side.</p>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 bg-white/55 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className={eyebrow}>Pricing</p>
              <h2 className={h2}>One statewide price.</h2>
              <p className="text-lg leading-relaxed text-[#516174]">
                Every county, every feature, unlimited churches and coordinators.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.75rem] border border-[#d8d1c4] bg-white p-8 shadow-xl shadow-[#29415c]/8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b5c37]">Statewide</p>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tight">$275</span>
                  <span className="text-lg font-semibold text-[#516174]">per month</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {["Every county", "Every feature", "Unlimited churches", "Unlimited coordinators"].map((t) => (
                    <li key={t} className="flex gap-3 font-semibold text-[#26384d]">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#9b5c37]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={demoHref} className={`${btnPrimary} mt-8`} data-testid="link-demo-pricing">Request a demo</a>
              </div>
              <div className="rounded-[1.75rem] border border-[#dce1e6] bg-[#f8faf9] p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b5c37]">Optional one-time add-ons</p>
                <div className="mt-5 space-y-5">
                  <div className="border-b border-[#dce1e6] pb-5">
                    <p className="text-3xl font-bold">$150 <span className="text-base font-semibold text-[#516174]">per county</span></p>
                    <h3 className="mt-1 font-bold">County data scrape</h3>
                    <p className="text-sm leading-relaxed text-[#516174]">We build or backfill the church list for a county.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">$250 <span className="text-base font-semibold text-[#516174]">one time</span></p>
                    <h3 className="mt-1 font-bold">Onboarding</h3>
                    <p className="text-sm leading-relaxed text-[#516174]">We migrate your existing county data using a template your coordinators fill in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#16243a]/90 py-20 text-white md:py-28">
          <div className="container mx-auto max-w-5xl px-5 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#d9b98d]">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">See Engage with your counties in mind.</h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-[#d8e1e8]">
              Tell us where you serve and we will walk you through it.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={demoHref} className="inline-flex h-14 items-center justify-center rounded-full bg-[#d9b98d] px-9 text-lg font-medium text-[#16243a] transition-colors hover:bg-[#cda878] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#16243a]" data-testid="link-demo-cta">
                Request a demo
              </a>
              <a href={questionHref} className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-9 text-lg font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" data-testid="link-contact-cta">
                Email Bryant
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8d1c4] bg-[#f7f5f0]/90 py-8">
        <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-[#516174] sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-bold text-[#16243a]">
            <EngageIcon className="h-6 w-6 text-[#9b5c37]" />
            Engage by Lucas Align
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
            <a href={mainSite("")} className={`rounded hover:text-[#9b5c37] ${ring}`}>Lucas Align home</a>
            <a href={mainSite("#products")} className={`rounded hover:text-[#9b5c37] ${ring}`}>Products</a>
            <a href={`${appBasePath}wraparound`} className={`rounded hover:text-[#9b5c37] ${ring}`}>Wraparound</a>
            <a href={`${appBasePath}collab/`} className={`rounded hover:text-[#9b5c37] ${ring}`}>Collab</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
