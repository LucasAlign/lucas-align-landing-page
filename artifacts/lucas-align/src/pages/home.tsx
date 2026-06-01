import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/dashboard-mockups";
import { 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Lightbulb, 
  Sparkles, 
  Zap,
  Users,
  BrainCircuit,
  Menu,
  X,
  BookOpen,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-[100dvh] bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <button type="button" aria-label="Lucas Align home" className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Lucas Align</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('products')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Solutions</button>
            <button onClick={() => scrollTo('why-us')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Why Us</button>
            <button onClick={() => scrollTo('process')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Process</button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-sm shadow-blue-200">
              Schedule a Demo
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollTo('products')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-50">Solutions</button>
            <button onClick={() => scrollTo('why-us')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-50">Why Us</button>
            <button onClick={() => scrollTo('process')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-50">Process</button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-full mt-2">
              Schedule a Demo
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Technology that aligns people, processes, and purpose.</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  Technology Built <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Around People</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Custom software, AI solutions, and workflow automation designed to help organizations spend less time managing systems and more time changing lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-200/50">
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="h-12 px-8 text-base border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full" onClick={() => scrollTo('products')}>
                    Explore Our Solutions
                  </Button>
                </div>
              </motion.div>
              
              <div className="relative lg:h-[600px] w-full hidden md:block">
                <HeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="py-12 border-y border-gray-50 bg-gray-50/30">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <p className="text-sm font-medium text-gray-500 mb-8 tracking-wide uppercase">Built for organizations making a difference</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Keystone Family Alliance', 'Churches', 'Nonprofits', 'Schools', 'Small Businesses'].map((name, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-gray-400">
                  <div className="w-6 h-6 rounded-md bg-gray-200"></div>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Purpose-built platforms for specific missions, alongside custom development for unique challenges.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Wraparound */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users className="w-32 h-32 text-blue-600" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Wraparound</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Engineered support for foster, adoptive, and kinship families.</p>
                <ul className="space-y-3 mb-8">
                  {['Care Community Management', 'Volunteer Coordination', 'Family Support Tracking', 'County-Level Oversight'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold group/btn">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* GrantFlow */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BrainCircuit className="w-32 h-32 text-emerald-600" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">GrantFlow</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">AI-powered grant writing assistant for mission-driven organizations.</p>
                <ul className="space-y-3 mb-8">
                  {['Smart Application Assistance', 'Organizational Knowledge Base', 'Autofill Repetitive Questions', 'Funding Opportunity Alerts'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="p-0 h-auto text-emerald-600 font-semibold group/btn">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* AnchorOne */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen className="w-32 h-32 text-indigo-600" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AnchorOne</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">The homeschool command center for organized, effective learning.</p>
                <ul className="space-y-3 mb-8">
                  {['Curriculum Management', 'Student Dashboards', 'AI-Assisted Grading', 'Daily Learning Plans'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="p-0 h-auto text-indigo-600 font-semibold group/btn">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Custom AI Solutions */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-gray-900 text-white shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Custom AI Solutions</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">Need something unique? We develop custom web applications, dashboards, and automations tailored to your organization.</p>
                  <ul className="space-y-3 mb-8">
                    {['Workflow Automation', 'CRM Integrations', 'Custom Dashboards', 'Reporting Systems'].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full group/btn border-0 shadow-lg">
                    Let's Build It <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">1000+</div>
                <div className="text-blue-100 font-medium tracking-wide">Potential Care Communities Supported</div>
              </div>
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">100+</div>
                <div className="text-blue-100 font-medium tracking-wide">Hours Saved Per Month</div>
              </div>
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">100%</div>
                <div className="text-blue-100 font-medium tracking-wide">Custom Solutions Around Your Mission</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY LUCAS ALIGN */}
        <section id="why-us" className="py-24 md:py-32 bg-gray-50/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Why Lucas Align</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't just write code. We partner with you to understand your mission deeply before building a single feature.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Built Around Your Workflow</h3>
                <p className="text-gray-600 leading-relaxed">We adapt technology to your process—not the other way around. Your software should feel like a natural extension of your team.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Human-Centered Design</h3>
                <p className="text-gray-600 leading-relaxed">Simple, clean interfaces that people actually enjoy using. We believe powerful tools don't have to be complicated.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Where It Helps</h3>
                <p className="text-gray-600 leading-relaxed">Practical AI integrations that save time without adding complexity. No gimmicks, just smart automation that works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">How We Work</h2>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { num: "1", title: "Discover", desc: "We learn your workflow, pain points, and goals in depth." },
                  { num: "2", title: "Design", desc: "We create intuitive solutions that fit your organization perfectly." },
                  { num: "3", title: "Build", desc: "We develop scalable software using modern, reliable technologies." },
                  { num: "4", title: "Launch", desc: "We deploy, train your team, and provide ongoing support." }
                ].map((step, i) => (
                  <div key={i} className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="mb-8 opacity-20">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed mb-10 text-gray-100">
              "Lucas Align understands both technology and people. Their solutions simplify complex processes and allow us to focus on serving families."
            </p>
            <div className="inline-flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                <span className="text-gray-400 font-medium">NL</span>
              </div>
              <div>
                <div className="font-bold text-white">Nonprofit Leader</div>
                <div className="text-sm text-gray-400">Community Partner</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Let's Build Something Meaningful</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you're supporting families, educating students, managing volunteers, or growing your organization, Lucas Align can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-200/50">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="h-14 px-10 text-lg border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-gray-900 mb-2">Lucas Align</div>
            <p className="text-sm text-gray-500">Technology that aligns people, processes, and purpose.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-blue-600 transition-colors">Home</button>
            <button className="hover:text-blue-600 transition-colors">Wraparound</button>
            <button className="hover:text-blue-600 transition-colors">GrantFlow</button>
            <button className="hover:text-blue-600 transition-colors">AnchorOne</button>
            <button className="hover:text-blue-600 transition-colors">Contact</button>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lucas Align.
          </div>
        </div>
      </footer>
    </div>
  );
}
