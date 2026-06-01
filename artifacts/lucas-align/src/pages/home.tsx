import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Lightbulb, 
  Sparkles, 
  Menu,
  X,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";
import logoMark from "@assets/lucas-align-logo-mark.png";
import logoFull from "@assets/lucas-align-logo.png";

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
          <button type="button" aria-label="Lucas Align home" className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <img src={logoMark} alt="" className="h-9 w-auto" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('why-us')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</button>
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
            <button onClick={() => scrollTo('why-us')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-50">About</button>
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
                  <Button variant="outline" className="h-12 px-8 text-base border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full" onClick={() => scrollTo('why-us')}>
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <div className="relative lg:h-[600px] w-full hidden md:block">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-2xl opacity-70"></div>
                  <div className="relative grid grid-cols-1 gap-6 w-full max-w-md">
                    {[
                      { icon: Heart, title: "People", desc: "Built around the humans you serve." },
                      { icon: Settings, title: "Processes", desc: "Streamlined to fit how you work." },
                      { icon: Lightbulb, title: "Purpose", desc: "Aligned with your mission." },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                        className={`flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-blue-900/5 ${i === 1 ? 'md:translate-x-8' : ''}`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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

        {/* STATISTICS */}
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">100%</div>
                <div className="text-blue-100 font-medium tracking-wide">Custom Solutions Around Your Mission</div>
              </div>
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">100+</div>
                <div className="text-blue-100 font-medium tracking-wide">Hours Saved Per Month</div>
              </div>
              <div className="py-6 md:py-0 px-4">
                <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-md">1:1</div>
                <div className="text-blue-100 font-medium tracking-wide">Partnership With Every Organization</div>
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
          <div className="flex flex-col items-center md:items-start">
            <img src={logoFull} alt="Lucas Align" className="h-14 w-auto mb-3" />
            <p className="text-sm text-gray-500">Technology that aligns people, processes, and purpose.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollTo('why-us')} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollTo('process')} className="hover:text-blue-600 transition-colors">Process</button>
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
