import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  HeartHandshake,
  Home,
  LockKeyhole,
  Mail,
  MapPinned,
  Menu,
  MessageSquareText,
  Network,
  PackageCheck,
  Repeat,
  ShieldCheck,
  TableProperties,
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
    description: "Give each family a live command center for practical support.",
    items: ["Upcoming schedule items", "Open needs", "Recent posts", "Key support stats", "Care circle activity"],
  },
  {
    icon: ClipboardList,
    title: "Needs Board",
    description: "Turn every meal, ride, errand, yardwork request, or prayer need into clear action.",
    items: ["Open need listings", "Volunteer claiming", "Support type tracking", "Automatic closeout", "Assigned family scope"],
  },
  {
    icon: CalendarDays,
    title: "Schedule & Recurring Support",
    description: "Coordinate support visits once, then let recurring rules keep the rhythm moving.",
    items: ["Weekly calendar", "Recurring meals", "Monthly meetings", "Transportation support", "Upcoming commitments"],
  },
  {
    icon: MessageSquareText,
    title: "Community Feed",
    description: "Keep each family's care circle connected to updates, prayer requests, and celebrations.",
    items: ["Announcements", "Family updates", "Comments", "Reactions", "Need-related posts"],
  },
  {
    icon: Users,
    title: "Volunteer Directory",
    description: "Search active volunteers and understand how each person is equipped to help.",
    items: ["Support specialties", "Childcare approval", "Availability", "Volunteer profiles", "Awaiting activation"],
  },
  {
    icon: UserCheck,
    title: "Training Pipeline",
    description: "Move recruits from invite to registration, training completion, and activation.",
    items: ["Secure invite links", "Training modules", "Progress matrix", "Automatic promotion", "Admin activation"],
  },
  {
    icon: MessageSquareText,
    title: "Messaging & Notifications",
    description: "Keep direct and group communication organized inside the platform.",
    items: ["Family chat threads", "Direct messaging", "Group threads", "Need activity alerts", "Schedule change alerts"],
  },
  {
    icon: MapPinned,
    title: "Admin & Reporting",
    description: "Give coordinators the visibility they need across counties, churches, and communities.",
    items: ["County analytics", "Master list views", "CSV import", "Audit log", "Reference tables"],
  },
];

const roleViews = [
  {
    title: "Families",
    detail: "Foster, adoptive, kinship, and vulnerable families receive coordinated support from a dedicated care circle.",
  },
  {
    title: "Volunteers",
    detail: "Trained church volunteers claim meals, rides, childcare, errands, prayer needs, and other direct support.",
  },
  {
    title: "Lead Volunteers",
    detail: "Experienced volunteers coordinate day-to-day follow-through within a family's care circle.",
  },
  {
    title: "Church Advocates",
    detail: "Church representatives recruit, encourage, and support volunteers from their congregation.",
  },
  {
    title: "County Coordinators & Central Admins",
    detail: "Nonprofit staff manage communities, families, volunteers, churches, permissions, and reporting.",
  },
];

const workflowItems = ["Invite", "Register", "Train", "Activate", "Assign", "Support", "Report", "Improve"];

const supportTypes = ["Meals", "Transportation", "Babysitting", "Errands", "Yardwork", "Prayer", "Celebrations", "Meetings"];

const techStack = [
  ["Frontend", "React, Vite, TypeScript"],
  ["API", "Express 5 and AWS API Gateway"],
  ["Auth", "AWS Cognito with PKCE flow"],
  ["Database", "PostgreSQL with Drizzle ORM"],
  ["Validation", "Zod"],
  ["API Layer", "OpenAPI with Orval React Query codegen"],
];

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
            <button onClick={() => scrollTo("workflow")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Workflow
            </button>
            <button onClick={() => scrollTo("roles")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Roles
            </button>
            <button onClick={() => scrollTo("features")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Features
            </button>
            <button onClick={() => scrollTo("security")} className="text-sm font-semibold text-[#43554e] transition-colors hover:text-[#1f6f5b]">
              Security
            </button>
            <Button className="h-10 rounded-md bg-[#1f6f5b] px-5 text-white hover:bg-[#185846]" onClick={() => scrollTo("demo")}>
              Request a Demo
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
              ["Workflow", "workflow"],
              ["Roles", "roles"],
              ["Features", "features"],
              ["Security", "security"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="border-b border-[#e4ebe5] py-3 text-left font-semibold text-[#263a33]">
                {label}
              </button>
            ))}
            <Button className="mt-2 h-11 rounded-md bg-[#1f6f5b] text-white hover:bg-[#185846]" onClick={() => scrollTo("demo")}>
              Request a Demo
            </Button>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#edf5ef]/55 pt-32 md:pt-40">
          <div className="container mx-auto grid max-w-7xl gap-12 px-5 pb-14 sm:px-6 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#bdd7ca] bg-white/75 px-3 py-2 text-sm font-bold text-[#1f6f5b]">
                <ShieldCheck className="h-4 w-4" />
                Software for Care Communities
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-[1.04] tracking-tight text-[#13201b] md:text-6xl">
                Coordinate care around families from one platform.
              </h1>
              <p className="mb-5 max-w-2xl text-lg leading-relaxed text-[#43554e] md:text-xl">
                Wraparound helps organizations coordinate Care Communities, volunteers, advocates, and families from a single platform built for foster,
                adoptive, kinship, and vulnerable family support.
              </p>
              <p className="mb-8 max-w-2xl text-base font-semibold leading-relaxed text-[#263a33]">
                No family walks alone. Every family gets a dedicated care circle, every need gets a volunteer, and every supporter stays informed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-md bg-[#1f6f5b] px-7 text-base text-white hover:bg-[#185846]" onClick={() => scrollTo("demo")}>
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-md border-[#a8bcb2] bg-white/70 px-7 text-base text-[#263a33] hover:bg-white"
                  onClick={() => scrollTo("features")}
                >
                  Explore Features
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

        <section id="workflow" className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Built Around How Care Communities Actually Work</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Turn the intention to help into organized, trackable action.</h2>
              <p className="text-lg leading-relaxed text-[#52645d]">
                Most organizations manage Care Communities using spreadsheets, emails, text messages, shared calendars, and multiple disconnected systems.
                Wraparound brings the full support rhythm together without adding administrative burden.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflowItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-[#dce5dd] bg-[#f8faf7] p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1f6f5b]" />
                  <span className="font-semibold text-[#263a33]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="bg-[#f8faf7]/55 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Who It Serves</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Five roles, one coordinated care network.</h2>
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

        <section id="features" className="bg-[#f2f7f3]/55 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Core Features</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Everything needed to coordinate ongoing care.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-lg border border-[#dce5dd] bg-white p-6 shadow-sm">
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

        <section className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Designed for Organizations Serving Families</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Structured for real relationships, responsibilities, and follow-through.</h2>
              <p className="text-lg leading-relaxed text-[#52645d]">
                Wraparound was built with input from organizations actively supporting foster, adoptive, kinship, and vulnerable families. Whether serving one
                family or hundreds, it provides a structured system for managing relationships, volunteers, and ongoing care.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {supportTypes.map((type) => (
                  <span key={type} className="rounded-md border border-[#bdd7ca] bg-[#f8faf7] px-3 py-2 text-sm font-bold text-[#1f6f5b]">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#dce5dd] bg-[#f8faf7] p-6">
              <div className="mb-5 flex items-center gap-3">
                <Network className="h-6 w-6 text-[#1f6f5b]" />
                <h3 className="text-xl font-bold text-[#13201b]">Care Circle Flow</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Families share context, preferences, and practical needs.",
                  "Lead Volunteers keep support organized around the family.",
                  "Volunteers claim needs and receive schedule updates.",
                  "Church Advocates and coordinators monitor health across care circles.",
                ].map((item) => (
                  <div key={item} className="rounded-md border border-[#dce5dd] bg-white p-4 font-medium text-[#43554e]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f7f3]/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Training & Administration</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">A complete path from recruit to active volunteer.</h2>
              <p className="text-lg leading-relaxed text-[#52645d]">
                Admins generate secure invite links, trainees register and complete required modules, and finished trainees move into an awaiting activation
                queue before becoming active volunteers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [PackageCheck, "Module Library", "Manage videos, articles, PDFs, links, and required training resources."],
                [TableProperties, "Progress Matrix", "See completion status for every trainee across every module."],
                [UserCheck, "Awaiting Activation", "Review trainees who finished training and activate them from the Volunteers page."],
                [Repeat, "Reference Management", "Maintain support types, volunteer roles, statuses, and other shared tables."],
              ].map(([Icon, title, detail]) => (
                <article key={String(title)} className="rounded-lg border border-[#dce5dd] bg-white p-6 shadow-sm">
                  <Icon className="mb-5 h-6 w-6 text-[#1f6f5b]" />
                  <h3 className="mb-2 text-xl font-bold text-[#13201b]">{title}</h3>
                  <p className="leading-relaxed text-[#52645d]">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="bg-[#13201b]/90 py-16 text-white md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <LockKeyhole className="mb-6 h-10 w-10 text-[#96d8b7]" />
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">Family information deserves careful stewardship.</h2>
              <p className="text-lg leading-relaxed text-[#c7d8d0]">
                Wraparound uses secure authentication, role-based permissions, and modern cloud infrastructure to help organizations manage sensitive
                information responsibly.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Secure authentication", "Role-based permissions", "Appropriate access by role"].map((item) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white/7 p-5">
                  <ShieldCheck className="mb-5 h-6 w-6 text-[#96d8b7]" />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e6f1ea]/55 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Why Wraparound?</p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">
              Supporting families should not require managing five different systems.
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#43554e]">
              Wraparound provides one place to coordinate people, schedules, communication, and care. Simple enough for volunteers. Powerful enough for
              coordinators. Built specifically for Care Communities.
            </p>
          </div>
        </section>

        <section className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Database className="mb-6 h-10 w-10 text-[#1f6f5b]" />
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f5b]">Technology</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">Built on a modern, type-safe stack.</h2>
              <p className="text-lg leading-relaxed text-[#52645d]">
                Wraparound is engineered for maintainable product growth, reliable data workflows, and strongly typed API integration from database to React.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {techStack.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#dce5dd] bg-[#f8faf7] p-5">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#1f6f5b]">{label}</p>
                  <p className="font-semibold text-[#263a33]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="bg-white/55 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-5 text-center sm:px-6">
            <Mail className="mx-auto mb-6 h-10 w-10 text-[#1f6f5b]" />
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#13201b] md:text-5xl">See how Wraparound can support your organization.</h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-[#52645d]">
              Schedule a demo to see how Care Communities, volunteer assignments, family records, scheduling, and communication can work together in one place.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button className="h-12 rounded-md bg-[#1f6f5b] px-8 text-base text-white hover:bg-[#185846]">Schedule a Demo</Button>
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
