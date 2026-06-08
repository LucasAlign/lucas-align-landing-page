import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Menu, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import logoFull from "@assets/lucas-align-new-logo.png";
import { useCreateContact } from "@workspace/api-client-react";

const FOREST = "#1A6B5A";
const FOREST_MID = "#218A72";
const FOREST_LIGHT = "#E6F4F1";
const GOLD = "#C8960A";
const NAVY = "#1A2B4A";
const CREAM = "#F5F7FA";
const STONE = "#E2E8F0";
const TEXT = "#1A2B4A";
const TEXT_MID = "#3D5070";
const TEXT_MUTED = "#718096";
const WARM_WHITE = "#FFFFFF";

const sharedFeatures = [
  "Family & care community management",
  "Role-based dashboards for all roles",
  "Task assignment & recurring scheduling",
  "Automated reminders & notifications",
  "Church & county partnership management",
  "Training & onboarding workflows",
  "Reporting & impact tracking",
  "Family support history & documentation",
  "Integrated communication tools",
  "Dedicated support — response within 24hrs, immediate for critical issues",
];

const tiers = [
  {
    id: "seed",
    name: "Seed",
    tagline: "Getting started with Care Community coordination",
    price: 299,
    onboard: 750,
    featured: false,
    network: false,
    capacityLines: ["Up to 10 active Care Communities", "Up to 100 volunteers & advocates"],
    ctaLabel: "Get started",
    ctaStyle: "outline",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing networks of Care Communities",
    price: 499,
    onboard: 2000,
    featured: true,
    network: false,
    capacityLines: ["Up to 100 active Care Communities", "Unlimited volunteers & advocates"],
    ctaLabel: "Get started",
    ctaStyle: "featured",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For large multi-county networks",
    price: 899,
    onboard: 4000,
    featured: false,
    network: false,
    capacityLines: ["Up to 500 active Care Communities", "Unlimited volunteers & advocates"],
    ctaLabel: "Get started",
    ctaStyle: "primary",
  },
  {
    id: "network",
    name: "Network",
    tagline: "Statewide networks & enterprise deployments",
    price: null,
    onboard: 5000,
    featured: false,
    network: true,
    capacityLines: ["Unlimited active Care Communities", "Unlimited volunteers & advocates"],
    ctaLabel: "Talk to us",
    ctaStyle: "custom",
  },
];

const upgradeCards = [
  { icon: "🗂️", title: "Admin dashboard built for your data", body: "Filter, sort, and slice your entire dataset the way your organization actually thinks — not around the limits of a generic platform." },
  { icon: "👨‍👩‍👧", title: "Deeper family tracking", body: "Capture more about the families you serve and how — not just who they are, but what's working, what's changed, and what's next." },
  { icon: "📊", title: "Reporting that means something", body: "Surface the insights your leadership and funders actually care about. Impact tracking that tells your story, not just your headcount." },
  { icon: "🔄", title: "Workflows shaped around you", body: "Role-based views, tailored onboarding flows, and coordination tools designed for the way your volunteers and coordinators actually work." },
];

const onboardSteps = [
  { icon: "📋", title: "Guided setup", body: "Role configuration, data import, and team walkthroughs" },
  { icon: "🔄", title: "Data migration", body: "We'll move your spreadsheets and contacts into Wraparound cleanly" },
  { icon: "🎓", title: "Staff training", body: "Live sessions for coordinators, advocates, and volunteers" },
  { icon: "🤝", title: "Ongoing support", body: "Real humans who understand family support work" },
];

const livingCards = [
  { icon: "📈", title: "Scales as you grow", body: "Start with 10 Care Communities and grow to hundreds. Upgrade your plan when you need more capacity — nothing else changes.", full: false },
  { icon: "🔧", title: "Continuously improved", body: "Updates, improvements, and new features are rolled out regularly — included in your subscription at no extra cost, no new quotes required.", full: false },
  { icon: "🤝", title: "Built with practitioners", body: "Wraparound is shaped by the people doing the work. The closer we stay to the mission, the better the software gets for everyone.", full: false },
];

const trustPills = [
  "Response within 24hrs on every plan",
  "Immediate response for critical issues",
  "No per-user fees",
  "Secure cloud hosting",
  "Family data privacy",
  "Cancel anytime (monthly)",
];

const faqs = [
  { q: "What if I need a feature that isn't in the platform yet?", a: "Submit a feature request or bug report through the platform and tech support will get back to you. Requests that would benefit the broader community of organizations get prioritized on the development roadmap. Wraparound is a living platform — it grows based on the real needs of the people using it, not a spec that was written years ago and never revisited." },
  { q: "What does tech support look like?", a: "Every organization on every plan gets the same dedicated tech support — no tiers, no second-class treatment. For standard issues, you'll receive a response within 24 hours. For critical errors that affect your ability to serve families, we treat those as immediate priority and respond as fast as possible. The families your team coordinates can't wait, and neither can you." },
  { q: "Do lower tiers have fewer features?", a: "No. Every tier gets the complete Wraparound platform — every feature, every dashboard, every tool. The only difference between tiers is the number of active Care Communities your plan supports. We don't believe in locking capabilities behind higher price points. If you're serving families, you deserve the full toolkit regardless of your organization's size." },
  { q: "What counts as a Care Community?", a: "A Care Community is a support team organized around a family — typically including a lead advocate, volunteers, and a coordinator. Only active Care Communities count toward your plan limit. A Care Community is considered active when it is actively being served. Communities can be paused at any time, for any reason, and will not count against your limit until they are unpaused." },
  { q: "How is Wraparound different from the platform we've been using?", a: "Wraparound was built specifically for Care Community programs — not adapted from a generic nonprofit or church management tool. Where one-size-fits-all platforms force your workflows into their mold, Wraparound's admin dashboard, family tracking, and reporting are shaped around how Care Community organizations actually operate." },
  { q: "Can we start on a lower tier and upgrade later?", a: "Absolutely. You can upgrade at any time and we'll prorate the difference. Many organizations start on Seed or Growth while piloting the platform, then move up as their network expands." },
  { q: "Do you offer discounts for nonprofits?", a: "Our pricing is already designed with mission-driven organizations in mind — no per-seat fees, no enterprise markup. For multi-year commitments or coalitions of smaller orgs, reach out and we'll find something that works." },
  { q: "What happens to our data if we cancel?", a: "Your data belongs to your organization. If you cancel, we'll provide a full export of all family records, volunteer information, and activity history in standard formats within 30 days." },
  { q: "We're a statewide network — how does the Network tier work?", a: "Network is a custom annual contract tailored to your scale and rollout timeline. We'll walk through your current infrastructure, projected growth, and integration needs, then propose pricing accordingly. Reach out and we'll schedule a conversation." },
];

function fmt(n: number) {
  return "$" + n.toLocaleString();
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${STONE}`, padding: "1rem 0" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: TEXT, fontFamily: "'DM Sans', sans-serif" }}>{q}</span>
        <span style={{ transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "rotate(0deg)", color: TEXT_MUTED, fontSize: "1.25rem", fontWeight: 300, flexShrink: 0 }}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontSize: "0.9rem", color: TEXT_MID, lineHeight: 1.75, paddingTop: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TierCard({ tier, onCta }: { tier: typeof tiers[0]; onCta: (interest: string) => void }) {
  const y1Sub = tier.price ? tier.price * 12 : null;
  const y1Total = y1Sub ? y1Sub + tier.onboard : null;

  const cardStyle: React.CSSProperties = {
    background: tier.featured ? FOREST : tier.network ? NAVY : WARM_WHITE,
    border: `1px solid ${tier.featured ? FOREST : tier.network ? NAVY : STONE}`,
    borderRadius: 16,
    padding: "1.75rem 1.5rem",
    position: "relative",
    transition: "transform 0.2s, box-shadow 0.2s",
    transform: tier.featured ? "translateY(-6px)" : undefined,
    fontFamily: "'DM Sans', sans-serif",
    color: tier.featured || tier.network ? "#fff" : TEXT,
  };

  const nameStyle: React.CSSProperties = {
    fontFamily: "'Lora', serif",
    fontSize: "1.125rem",
    fontWeight: 600,
    color: tier.featured || tier.network ? "#fff" : NAVY,
    marginBottom: "0.25rem",
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: "0.8125rem",
    color: tier.featured ? "rgba(255,255,255,0.65)" : tier.network ? "rgba(255,255,255,0.6)" : TEXT_MUTED,
    marginBottom: "1.5rem",
    lineHeight: 1.5,
  };

  const priceAmtStyle: React.CSSProperties = {
    fontFamily: "'Lora', serif",
    fontSize: tier.network ? "1.75rem" : "2.5rem",
    fontWeight: 600,
    color: tier.featured || tier.network ? "#fff" : NAVY,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    paddingTop: tier.network ? "0.5rem" : undefined,
  };

  const onboardNoteStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    background: tier.featured ? "rgba(200,150,62,0.2)" : tier.network ? "rgba(200,150,62,0.15)" : "#FDF8E3",
    color: tier.featured ? "#F0C070" : tier.network ? "#D4A054" : GOLD,
    borderRadius: 6,
    padding: "0.35rem 0.65rem",
    display: "inline-block",
    marginBottom: "1.25rem",
    fontWeight: 500,
  };

  const dividerStyle: React.CSSProperties = {
    height: 1,
    background: tier.featured ? "rgba(255,255,255,0.15)" : tier.network ? "rgba(255,255,255,0.12)" : STONE,
    margin: "1.25rem 0",
  };

  const featuresLabelStyle: React.CSSProperties = {
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tier.featured ? "rgba(255,255,255,0.45)" : tier.network ? "rgba(255,255,255,0.4)" : TEXT_MUTED,
    marginBottom: "0.75rem",
  };

  const checkBg = tier.featured
    ? "rgba(255,255,255,0.15)"
    : tier.network
    ? "rgba(255,255,255,0.12)"
    : FOREST_LIGHT;

  const checkColor = tier.featured || tier.network ? "%23ffffff" : "%232E5247";

  const checkIcon = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 8l3 3 6-6' stroke='${checkColor}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`;

  const liStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    fontSize: "0.875rem",
    color: tier.featured ? "rgba(255,255,255,0.8)" : tier.network ? "rgba(255,255,255,0.78)" : TEXT_MID,
    lineHeight: 1.45,
  };

  const bulletStyle: React.CSSProperties = {
    width: 16,
    height: 16,
    minWidth: 16,
    background: checkBg,
    borderRadius: "50%",
    backgroundImage: checkIcon,
    marginTop: 1,
  };

  const year1BoxStyle: React.CSSProperties = {
    marginTop: "1rem",
    background: tier.featured ? "rgba(255,255,255,0.1)" : tier.network ? "rgba(255,255,255,0.07)" : CREAM,
    borderRadius: 10,
    padding: "0.875rem 1rem",
    border: `1px solid ${tier.featured ? "rgba(255,255,255,0.15)" : tier.network ? "rgba(255,255,255,0.12)" : STONE}`,
  };

  const y1LabelStyle: React.CSSProperties = {
    fontSize: "0.6875rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: tier.featured ? "rgba(255,255,255,0.45)" : tier.network ? "rgba(255,255,255,0.4)" : TEXT_MUTED,
    marginBottom: "0.5rem",
  };

  const y1RowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.8125rem",
  };

  const y1NameStyle: React.CSSProperties = {
    color: tier.featured ? "rgba(255,255,255,0.55)" : tier.network ? "rgba(255,255,255,0.5)" : TEXT_MUTED,
  };

  const y1AmtStyle: React.CSSProperties = {
    fontWeight: 500,
    color: tier.featured ? "rgba(255,255,255,0.8)" : tier.network ? "rgba(255,255,255,0.75)" : TEXT_MID,
  };

  const y1TotalRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.875rem",
    marginTop: 6,
    paddingTop: 6,
    borderTop: `1px solid ${tier.featured ? "rgba(255,255,255,0.15)" : tier.network ? "rgba(255,255,255,0.12)" : STONE}`,
  };

  const y1TotalAmtStyle: React.CSSProperties = {
    fontFamily: "'Lora', serif",
    fontSize: "1.0625rem",
    fontWeight: 600,
    color: tier.featured || tier.network ? "#fff" : FOREST,
    letterSpacing: "-0.01em",
  };

  const ctaBtnStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: 100,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9375rem",
    fontWeight: 500,
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    ...(tier.ctaStyle === "outline"
      ? { background: "transparent", color: FOREST, border: `1.5px solid ${STONE}` }
      : tier.ctaStyle === "featured"
      ? { background: "#fff", color: FOREST, border: "none" }
      : tier.ctaStyle === "primary"
      ? { background: FOREST, color: "#fff", border: "none" }
      : { background: NAVY, color: "#fff", border: "none" }),
  };

  const allFeatures = [...tier.capacityLines, ...sharedFeatures];
  if (tier.network) {
    allFeatures.push("White-glove migration & custom integrations");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ transform: tier.featured ? "translateY(-10px)" : "translateY(-3px)", boxShadow: tier.featured ? "0 20px 48px rgba(46,82,71,0.25)" : "0 12px 32px rgba(46,82,71,0.1)" }}
      style={cardStyle}
    >
      <div style={nameStyle}>{tier.name}</div>
      <div style={taglineStyle}>{tier.tagline}</div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: "0.25rem" }}>
        {tier.price !== null ? (
          <>
            <span style={{ fontSize: "1.125rem", color: tier.featured ? "rgba(255,255,255,0.6)" : TEXT_MUTED, fontWeight: 400, alignSelf: "flex-start", marginTop: 6 }}>$</span>
            <span style={priceAmtStyle}>{tier.price}</span>
            <span style={{ fontSize: "0.8125rem", color: tier.featured ? "rgba(255,255,255,0.6)" : TEXT_MUTED }}>/mo</span>
          </>
        ) : (
          <span style={priceAmtStyle}>Custom</span>
        )}
      </div>

      {tier.network && (
        <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>
          Annual contract · tailored to your scale
        </div>
      )}

      <div style={onboardNoteStyle}>
        {tier.network ? "Onboarding from $5,000" : `+ ${fmt(tier.onboard)} onboarding`}
      </div>

      <div style={year1BoxStyle}>
        <div style={y1LabelStyle}>Year-one investment</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {tier.price !== null ? (
            <>
              <div style={y1RowStyle}>
                <span style={y1NameStyle}>12 months (${tier.price} × 12)</span>
                <span style={y1AmtStyle}>{fmt(tier.price * 12)}</span>
              </div>
              <div style={y1RowStyle}>
                <span style={y1NameStyle}>Onboarding fee</span>
                <span style={y1AmtStyle}>{fmt(tier.onboard)}</span>
              </div>
            </>
          ) : (
            <>
              <div style={y1RowStyle}>
                <span style={y1NameStyle}>Annual subscription</span>
                <span style={y1AmtStyle}>Custom quote</span>
              </div>
              <div style={y1RowStyle}>
                <span style={y1NameStyle}>Onboarding & migration</span>
                <span style={y1AmtStyle}>From $5,000</span>
              </div>
            </>
          )}
        </div>
        <div style={y1TotalRowStyle}>
          <span style={{ fontWeight: 500, color: tier.featured || tier.network ? "#fff" : TEXT }}>
            {tier.network ? "Let's build your number" : "Total year one"}
          </span>
          <span style={y1TotalAmtStyle}>
            {tier.price !== null ? fmt(tier.price * 12 + tier.onboard) : "→"}
          </span>
        </div>
      </div>

      <div style={dividerStyle} />
      <div style={featuresLabelStyle}>Full platform — every feature included</div>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.75rem", padding: 0 }}>
        {allFeatures.map((f) => (
          <li key={f} style={liStyle}>
            <span style={bulletStyle} />
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        style={ctaBtnStyle}
        onClick={() => onCta(`${tier.name} Plan`)}
        onMouseOver={(e) => {
          if (tier.ctaStyle === "outline") {
            (e.currentTarget as HTMLButtonElement).style.borderColor = FOREST;
            (e.currentTarget as HTMLButtonElement).style.background = FOREST_LIGHT;
          } else if (tier.ctaStyle === "featured") {
            (e.currentTarget as HTMLButtonElement).style.background = CREAM;
          } else if (tier.ctaStyle === "primary") {
            (e.currentTarget as HTMLButtonElement).style.background = FOREST_MID;
          } else {
            (e.currentTarget as HTMLButtonElement).style.background = "#3A2E22";
          }
        }}
        onMouseOut={(e) => {
          if (tier.ctaStyle === "outline") {
            (e.currentTarget as HTMLButtonElement).style.borderColor = STONE;
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          } else if (tier.ctaStyle === "featured") {
            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          } else if (tier.ctaStyle === "primary") {
            (e.currentTarget as HTMLButtonElement).style.background = FOREST;
          } else {
            (e.currentTarget as HTMLButtonElement).style.background = NAVY;
          }
        }}
      >
        {tier.ctaLabel}
      </button>
    </motion.div>
  );
}

export default function WraparoundPricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState("Demo Request");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [formError, setFormError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const createContact = useCreateContact();

  function openModal(interest: string) {
    setModalInterest(interest);
    setFormError(false);
    setSubmitted(false);
    setName(""); setOrg(""); setEmail(""); setMsg("");
    setModalOpen(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !org || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError(true);
      return;
    }
    setFormError(false);
    createContact.mutate(
      {
        data: {
          name,
          email,
          organization: org,
          interest: modalInterest,
          message: msg || null,
          source: "wraparound-pricing",
        },
      },
      {
        onSuccess: () => setSubmitted(true),
        onError: () => setSubmitted(true),
      }
    );
  }

  return (
    <div style={{ minHeight: "100dvh", background: CREAM, color: TEXT, fontFamily: "'DM Sans', sans-serif", WebkitFontSmoothing: "antialiased" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 2.5rem", background: WARM_WHITE,
        borderBottom: `1px solid ${STONE}`, position: "sticky", top: 0, zIndex: 100,
      }}>
        <button
          type="button"
          aria-label="Lucas Align home"
          onClick={() => { window.location.href = "/"; }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "none" }}
        >
          <img src={logoFull} alt="Lucas Align" style={{ height: 48, width: "auto", display: "block" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.2em", color: "#17385f", textTransform: "uppercase" }}>
            LUCAS ALIGN
          </span>
        </button>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          <button onClick={() => { window.location.href = "/wraparound"; }}
            style={{ fontSize: "0.875rem", color: TEXT_MID, background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            ← Back to Wraparound
          </button>
          <button
            onClick={() => openModal("Demo Request")}
            style={{ background: NAVY, color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 100, fontSize: "0.875rem", fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
          >
            Request a demo
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: TEXT }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div style={{ background: WARM_WHITE, borderBottom: `1px solid ${STONE}`, padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button onClick={() => { window.location.href = "/wraparound"; }}
            style={{ fontSize: "1rem", fontWeight: 500, color: TEXT, background: "none", border: "none", cursor: "pointer", textAlign: "left", borderBottom: `1px solid ${STONE}`, paddingBottom: "0.75rem" }}>
            ← Back to Wraparound
          </button>
          <button onClick={() => openModal("Demo Request")}
            style={{ background: NAVY, color: "#fff", padding: "0.75rem 1.25rem", borderRadius: 100, fontSize: "0.9375rem", fontWeight: 500, border: "none", cursor: "pointer" }}>
            Request a demo
          </button>
        </div>
      )}

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "5rem 1.5rem 3rem", maxWidth: 700, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: FOREST_LIGHT, color: FOREST, fontSize: "0.75rem", fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.35rem 0.9rem",
            borderRadius: 100, marginBottom: "1.5rem",
          }}>
            <span style={{ width: 6, height: 6, background: FOREST, borderRadius: "50%", display: "inline-block" }} />
            Simple, honest pricing
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, lineHeight: 1.2, color: NAVY, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Everything you know.<br />
            <em style={{ fontStyle: "italic", color: FOREST }}>Everything you've needed.</em>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: TEXT_MID, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 2rem" }}>
            Wraparound does everything your team already relies on for Care Community coordination — and fills in every gap that's been slowing you down. Purpose-built, not one-size-fits-all.
          </p>
        </motion.div>
      </section>

      {/* UPGRADE STRIP */}
      <div style={{ background: WARM_WHITE, borderTop: `1px solid ${STONE}`, borderBottom: `1px solid ${STONE}`, padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3.5rem", alignItems: "start" }} className="upgrade-inner-grid">
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: FOREST, marginBottom: "0.75rem" }}>
              Built for organizations like yours
            </div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.75rem", fontWeight: 600, color: NAVY, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "0.9rem" }}>
              Familiar work.<br />
              <em style={{ fontStyle: "italic", color: FOREST }}>Finally, the right fit.</em>
            </h2>
            <p style={{ fontSize: "0.9375rem", color: TEXT_MID, lineHeight: 1.75 }}>
              Your team already knows how to coordinate Care Communities. Wraparound keeps everything that worked — and fixes everything that didn't. No retraining from scratch, no workarounds, no more one-size-fits-all.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {upgradeCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: CREAM, border: `1px solid ${STONE}`, borderRadius: 10,
                  padding: "1rem 1.1rem", display: "flex", flexDirection: "column", gap: 6,
                  transition: "background 0.15s, box-shadow 0.15s", cursor: "default",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = FOREST_LIGHT;
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#9EC9B8";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = CREAM;
                  (e.currentTarget as HTMLDivElement).style.borderColor = STONE;
                }}
              >
                <div style={{ fontSize: "1.25rem" }}>{card.icon}</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: TEXT, marginBottom: 3 }}>{card.title}</strong>
                  <span style={{ fontSize: "0.8125rem", color: TEXT_MUTED, lineHeight: 1.55 }}>{card.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING CARDS */}
      <section style={{ maxWidth: 1160, margin: "3rem auto 0", padding: "0 1.5rem 1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, alignItems: "start" }}>
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} onCta={openModal} />
          ))}
        </div>
      </section>

      {/* TRUST PILLS */}
      <div style={{ textAlign: "center", padding: "2rem 1.5rem 3rem", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: "0.875rem", color: TEXT_MUTED, marginBottom: "1.25rem" }}>Every plan, every tier — the complete platform</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
          {trustPills.map((pill) => (
            <div key={pill} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: WARM_WHITE, border: `1px solid ${STONE}`, borderRadius: 100,
              padding: "0.4rem 0.9rem", fontSize: "0.8125rem", color: TEXT_MID,
            }}>
              <span style={{ color: FOREST, fontWeight: 600, fontSize: "0.75rem" }}>✓</span>
              {pill}
            </div>
          ))}
        </div>
      </div>

      {/* ONBOARDING */}
      <section style={{ background: CREAM, borderTop: `1px solid ${STONE}`, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="onboard-inner-grid">
          <div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.75rem", fontWeight: 600, color: NAVY, marginBottom: "0.75rem", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              We'll get you up and running{" "}
              <em style={{ fontStyle: "italic", color: FOREST }}>together</em>
            </h2>
            <p style={{ fontSize: "0.9375rem", color: TEXT_MID, lineHeight: 1.7 }}>
              Every Wraparound organization gets a thoughtful onboarding experience — because switching to a new system is a big deal, and your families can't afford disruption.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {onboardSteps.map((step) => (
              <div key={step.title} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                background: WARM_WHITE, border: `1px solid ${STONE}`, borderRadius: 10, padding: "0.9rem 1rem",
              }}>
                <div style={{ width: 32, height: 32, minWidth: 32, background: FOREST_LIGHT, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem" }}>
                  {step.icon}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: TEXT, marginBottom: 1 }}>{step.title}</strong>
                  <span style={{ fontSize: "0.8125rem", color: TEXT_MUTED }}>{step.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVING SOFTWARE */}
      <section style={{ background: NAVY, padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3.5rem", alignItems: "start" }} className="living-inner-grid">
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.75rem" }}>
              A platform that grows with you
            </div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.75rem", fontWeight: 600, color: "#fff", lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              This isn't a build.<br />
              <em style={{ fontStyle: "italic", color: GOLD }}>It's a partnership.</em>
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              Wraparound isn't a one-time delivery — it's a living platform that evolves alongside the organizations that use it. Unlike a custom build that's frozen the moment it's handed off, Wraparound gets better over time.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              Your mission doesn't stay still. Your software shouldn't either.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{
              gridColumn: "1 / -1",
              background: "rgba(200,150,10,0.12)", border: "1px solid rgba(200,150,10,0.3)",
              borderRadius: 10, padding: "1.1rem", display: "flex", flexDirection: "column", gap: 8,
            }}>
              <div style={{ fontSize: "1.25rem" }}>💡</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: GOLD, marginBottom: 3 }}>Don't see a feature you need?</strong>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  Every organization can submit a feature request or bug report directly through the platform. Tech support will review it and get back to you — and requests that serve the broader community get prioritized for development.
                </span>
              </div>
            </div>
            {livingCards.map((card) => (
              <div key={card.title} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "1.1rem", display: "flex", flexDirection: "column", gap: 8,
              }}>
                <div style={{ fontSize: "1.25rem" }}>{card.icon}</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#fff", marginBottom: 3 }}>{card.title}</strong>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{card.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "4rem 1.5rem 5rem" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.5rem", fontWeight: 600, color: NAVY, textAlign: "center", marginBottom: "2rem" }}>
          Common questions
        </h2>
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </section>

      {/* FOOTER CTA */}
      <section style={{ background: FOREST, textAlign: "center", padding: "4rem 1.5rem", color: "#fff" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Ready to spend less time <em style={{ fontStyle: "italic", opacity: 0.75 }}>managing</em>
          <br />and more time serving?
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.7, maxWidth: 480, margin: "0 auto 2rem", lineHeight: 1.65 }}>
          Join the organizations using Wraparound to coordinate families, volunteers, and churches from a single shared platform.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => openModal("Demo Request")}
            style={{ background: "#fff", color: FOREST, padding: "0.875rem 1.75rem", borderRadius: 100, fontSize: "0.9375rem", fontWeight: 500, border: "none", cursor: "pointer" }}
          >
            Request a demo
          </button>
          <button
            onClick={() => openModal("General Inquiry")}
            style={{ background: "transparent", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 100, fontSize: "0.9375rem", fontWeight: 400, border: "1.5px solid rgba(255,255,255,0.35)", cursor: "pointer" }}
          >
            Talk to our team
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: NAVY, textAlign: "center", padding: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
        <p>© {new Date().getFullYear()} Lucas Align</p>
      </footer>

      {/* CONTACT MODAL */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent style={{ maxWidth: 480, borderRadius: 16, padding: "2.25rem 2rem 2rem", fontFamily: "'DM Sans', sans-serif" }}>
          <DialogHeader>
            <div style={{ fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: FOREST, marginBottom: "0.5rem" }}>
              Get in touch
            </div>
            <DialogTitle style={{ fontFamily: "'Lora', serif", fontSize: "1.5rem", fontWeight: 600, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.4rem" }}>
              Let's talk about Wraparound
            </DialogTitle>
            <p style={{ fontSize: "0.875rem", color: TEXT_MUTED, marginBottom: "1rem", lineHeight: 1.6 }}>
              Fill in a few details and we'll get back to you within 24 hours.
            </p>
            <div style={{ display: "inline-block", background: FOREST_LIGHT, color: FOREST, fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.75rem", borderRadius: 100, marginBottom: "1.25rem" }}>
              Interested in: {modalInterest}
            </div>
          </DialogHeader>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✉️</div>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.25rem", fontWeight: 600, color: NAVY, marginBottom: "0.5rem" }}>Message sent!</h3>
              <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.65 }}>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { label: "Your name", id: "name", type: "text", value: name, onChange: setName, placeholder: "Jane Smith" },
                { label: "Organization", id: "org", type: "text", value: org, onChange: setOrg, placeholder: "Hope Family Services" },
                { label: "Email address", id: "email", type: "email", value: email, onChange: setEmail, placeholder: "jane@hopefamily.org" },
              ].map((f) => (
                <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: TEXT_MID }}>{f.label}</label>
                  <input
                    type={f.type}
                    value={f.value}
                    onChange={(e) => f.onChange(e.target.value)}
                    placeholder={f.placeholder}
                    style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: TEXT,
                      background: CREAM, border: `1px solid ${STONE}`, borderRadius: 10,
                      padding: "0.65rem 0.85rem", outline: "none",
                    }}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: TEXT_MID }}>
                  Anything you'd like us to know? <span style={{ fontWeight: 400, color: TEXT_MUTED }}>(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Tell us about your organization, how many Care Communities you support, or any questions you have…"
                  style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: TEXT,
                    background: CREAM, border: `1px solid ${STONE}`, borderRadius: 10,
                    padding: "0.65rem 0.85rem", outline: "none", resize: "vertical",
                  }}
                />
              </div>
              {formError && (
                <div style={{ fontSize: "0.8125rem", color: "#B91C1C", background: "#FEF2F2", borderRadius: 10, padding: "0.6rem 0.85rem" }}>
                  Please fill in your name, organization, and a valid email address.
                </div>
              )}
              <button
                type="submit"
                style={{ width: "100%", background: FOREST, color: "#fff", border: "none", borderRadius: 100, padding: "0.9rem 1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 500, cursor: "pointer", marginBottom: "0.25rem" }}
              >
                {createContact.isPending ? "Sending…" : "Send message →"}
              </button>
              <p style={{ fontSize: "0.75rem", color: TEXT_MUTED, textAlign: "center", lineHeight: 1.5 }}>
                We'll only use your information to respond to your inquiry.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        @media (max-width: 700px) {
          .upgrade-inner-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .living-inner-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 640px) {
          .onboard-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
