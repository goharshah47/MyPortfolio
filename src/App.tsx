/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowUp, ArrowLeft, ArrowRight, Linkedin, Mail, FileText, Moon, Sun, MapPin, ChevronDown, Download, Briefcase } from "lucide-react";

interface CareerItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  logo?: string;
}

const CAREER_ITEMS: CareerItem[] = [
  {
    role: "Senior Product Designer",
    company: "GotPhoto",
    period: "June 2025 – Present",
    logo: "https://picsum.photos/seed/gotphoto/100/100",
    highlights: [
      "Led end-to-end design of Online Shop 2025",
      "Increased GMV per activated job (~10%)",
      "Delivered mobile-first flows used by 80%+ customers",
      "Improved mobile conversion by 44%",
      "Resolved parity gaps to accelerate legacy migration",
      "Designed monetisation experiences increasing AOV",
      "Extended and scaled the design system"
    ]
  },
  {
    role: "Senior Product Designer",
    company: "MYCS",
    period: "2023 – 2025",
    logo: "https://picsum.photos/seed/mycs/100/100",
    highlights: [
      "Revamped furniture configurator (30% sales increase)",
      "Improved checkout and reduced drop-offs",
      "Introduced onboarding experience increasing engagement",
      "Implemented organisation-wide design system (20% faster delivery)"
    ]
  },
  {
    role: "Design Consultant",
    company: "nuSoft",
    period: "2021 – 2026",
    logo: "https://picsum.photos/seed/nusoft/100/100",
    highlights: [
      "Designed AI-driven SaaS and FP&A tools",
      "Built UX architecture for supply chain software",
      "Worked across ERP, fintech, IoT, and platform products"
    ]
  },
  {
    role: "Senior Product Designer (Design System)",
    company: "heycar",
    period: "2022 (Berlin-Germany)",
    logo: "https://picsum.photos/seed/heycar/100/100",
    highlights: [
      "Built global design system foundations",
      "Improved accessibility to AA standards",
      "Partnered with frontend on scalable component library"
    ]
  },
  {
    role: "Senior Product Designer",
    company: "Retailo",
    period: "2021-2022 (Riyadh-KSA)",
    logo: "https://picsum.photos/seed/retailo/100/100",
    highlights: [
      "Led UX across mobile and B2B flows",
      "Conducted research, prototyping, usability testing",
      "Designed for accessibility and scale"
    ]
  },
  {
    role: "Product Designer",
    company: "Fiber Mountain",
    period: "US",
    logo: "https://picsum.photos/seed/fm/100/100",
    highlights: [
      "Built design system for enterprise data center platform",
      "Conducted interviews with technical operators",
      "Rebranded digital presence"
    ]
  }
];

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-brand-ink text-brand-bg rounded-full shadow-2xl z-[100] hover:scale-110 transition-transform flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-ink selection:text-brand-bg bg-brand-bg text-brand-ink transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-brand-bg/80 backdrop-blur-lg border-b border-brand-ink/5 transition-all duration-500">
        <Link to="/" className="text-xl font-bold tracking-tighter cursor-pointer text-brand-ink">SGA.</Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-ink">
            <Link to="/" className={`hover:opacity-50 transition-opacity cursor-pointer ${location.pathname === '/' ? 'underline underline-offset-8' : ''}`}>HOME</Link>
            <Link to="/case-studies" className={`hover:opacity-50 transition-opacity cursor-pointer ${location.pathname.startsWith('/case-studies') ? 'underline underline-offset-8' : ''}`}>CASE STUDIES</Link>
            {location.pathname === '/' && (
              <>
                <a href="#experience" className="hover:opacity-50 transition-opacity">EXPERIENCE</a>
                <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
              </>
            )}
            <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 hover:opacity-50 transition-opacity cursor-pointer text-brand-ink"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <main className="px-6 md:px-12 pt-48 pb-24 max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="mb-48">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1 className="text-6xl md:text-[8vw] font-bold tracking-tighter leading-[0.85] mb-16">
                      Designing clarity in <br />
                      <span className="italic font-serif font-normal">complex products.</span>
                    </h1>
                    <div className="max-w-2xl">
                      <p className="text-xl md:text-2xl leading-relaxed text-brand-ink/80 mb-12">
                        Senior product designer with 9+ years of experience building and scaling complex digital platforms across Europe and MENA. I operate at the intersection of product strategy, systems thinking, and execution.
                      </p>
                      <div className="flex flex-wrap gap-6">
                        <Link
                          to="/case-studies"
                          className="px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-bold text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-block"
                        >
                          VIEW CASE STUDIES
                        </Link>
                        <a
                          href="#contact"
                          className="px-8 py-4 border border-brand-ink/20 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-ink/5 transition-all"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Career Section */}
                <section id="experience" className="mb-48">
                  <div className="flex flex-row justify-between items-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">My Career</h2>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 px-5 py-2.5 border border-brand-ink/20 rounded-full text-sm font-bold hover:bg-brand-ink hover:text-brand-bg transition-all duration-300 whitespace-nowrap"
                    >
                      Download CV <Download size={16} strokeWidth={2.5} />
                    </a>
                  </div>

                  <div className="space-y-3">
                    {CAREER_ITEMS.map((item, index) => (
                      <CareerAccordionItem key={`${item.company}-${item.role}-${index}`} item={item} />
                    ))}
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="mb-48 grid grid-cols-1 md:grid-cols-12 gap-16">
                  <div className="md:col-span-4">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">About</h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-3xl md:text-4xl font-medium leading-[1.2] mb-16 tracking-tight">
                      I work at the intersection of strategy, systems, and execution. I partner closely with product and engineering to shape direction, validate with research, and deliver measurable impact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-ink/50">Strengths</h4>
                        <ul className="space-y-5 text-brand-ink/90 font-medium">
                          <li className="flex items-center gap-4">
                            <div className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                            Complex workflow simplification
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                            End-to-end product thinking
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                            Design systems & scalability
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                            Cross-functional leadership
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                            Data-informed decision making
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-ink/50">Human</h4>
                        <p className="text-brand-ink/80 leading-relaxed text-lg">
                          Outside of work, I train for marathons, lift heavy, cycle on weekends, and have played squash for over 15 years.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-32 py-32 border-t border-brand-ink/10">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
                      If you're building ambitious products and need clarity in complexity, let’s talk.
                    </h2>
                    <div className="flex flex-wrap gap-10">
                      <a href="mailto:goharshah3@gmail.com" className="group flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-300">
                          <Mail size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Email</span>
                          <span className="font-bold text-sm">goharshah3@gmail.com</span>
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/goharshah/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-300">
                          <Linkedin size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">LinkedIn</span>
                          <span className="font-bold text-sm">Syed Gohar Ali</span>
                        </div>
                      </a>
                      <a href="#" className="group flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-300">
                          <FileText size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Resume</span>
                          <span className="font-bold text-sm">Download PDF</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
              </main>
            </motion.div>
          } />
          <Route path="/case-studies" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CaseStudies 
                onNavigateToMYCS={() => navigate('/case-studies/mycs')} 
                onNavigateToRetailo={() => navigate('/case-studies/retailo')}
                onNavigateToGotPhoto={() => navigate('/case-studies/gotphoto')}
                onNavigateToHeycar={() => navigate('/case-studies/heycar')}
                onNavigateToZyprova={() => navigate('/case-studies/zyprova')}
                onNavigateToHisaab={() => navigate('/case-studies/hisaab')}
              />
            </motion.div>
          } />
          <Route path="/case-studies/mycs" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MYCSCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/retailo" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RetailoCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/nbula" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NbulaCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/gotphoto" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GotPhotoCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/nusoft" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NuSoftCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/zyprova" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ZyprovaCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/hisaab" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HisaabCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="/case-studies/heycar" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeycarCaseStudy onBack={() => navigate('/case-studies')} />
            </motion.div>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/30">
        <div>© 2026 Syed Gohar Ali — Berlin, Germany</div>
      </footer>
    </div>
  );
}

function CaseStudies({ onNavigateToMYCS, onNavigateToRetailo, onNavigateToGotPhoto, onNavigateToHeycar, onNavigateToZyprova, onNavigateToHisaab }: { onNavigateToMYCS: () => void; onNavigateToRetailo: () => void; onNavigateToGotPhoto: () => void; onNavigateToHeycar: () => void; onNavigateToZyprova: () => void; onNavigateToHisaab: () => void }) {
  const tabs = ['All', 'Mobile App', 'Desktop', 'Design System'] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('All');

  return (
    <main className="px-6 md:px-12 pt-48 pb-24 max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-8 mb-24 border-b border-brand-ink/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer ${
              activeTab === tab 
                ? 'text-brand-ink border-b-2 border-brand-ink' 
                : 'text-brand-ink/30 hover:text-brand-ink/60'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-64"
        >
          {(activeTab === 'All' || activeTab === 'Mobile App') && (
            <div className="space-y-64">
              {/* Featured Case Study 01 — GOTPHOTO */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-7">
                    <div 
                      onClick={onNavigateToGotPhoto}
                      className="aspect-[16/10] bg-brand-ink/[0.04] dark:bg-brand-ink/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-brand-ink/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/gotphoto-hero/1200/800" 
                        alt="GotPhoto Case Study" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">GotPhoto</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">2025</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Rebuilding a Legacy E-commerce Platform for Scale
                    </h2>
                    <div className="space-y-8 text-brand-ink dark:text-brand-ink/90">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Senior Product Designer — Shop Team</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Led end-to-end design of the Online Shop 2025 edition, replacing a legacy monolithic shop architecture.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink dark:text-brand-ink">
                            <li>~10% GMV Increase</li>
                            <li>44% Mobile Conv.</li>
                            <li>Higher AOV</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToGotPhoto}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Case Study — RETAILO */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-5 order-2 lg:order-1 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">Retailo</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">2024</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Designing Operational UX for B2B Logistics
                    </h2>
                    <div className="space-y-8 text-brand-ink dark:text-brand-ink/90">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Senior Product Designer</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Streamlining delivery and payment workflows for field agents in KSA.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink dark:text-brand-ink">
                            <li>Reduced Friction</li>
                            <li>Faster Deliveries</li>
                            <li>Payment Clarity</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToRetailo}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <div 
                      onClick={onNavigateToRetailo}
                      className="aspect-[16/10] bg-brand-ink/[0.04] dark:bg-white/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-white/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/retailo-hero/1200/800" 
                        alt="Retailo Case Study" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Case Study — HISAAB */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-7">
                    <div 
                      onClick={onNavigateToHisaab}
                      className="aspect-[16/10] bg-brand-ink/[0.04] dark:bg-brand-ink/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-brand-ink/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/hisaab-hero/1200/800" 
                        alt="Hisaab Case Study" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">Hisaab</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">2025</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Simplifying Financial Tracking for Small Businesses
                    </h2>
                    <div className="space-y-8 text-brand-ink dark:text-brand-ink/90">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Product Designer</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Designing a clear, trustworthy digital ledger experience for daily transaction management.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink dark:text-brand-ink">
                            <li>Financial Clarity</li>
                            <li>Trust-Driven UX</li>
                            <li>Scalable Ledger</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToHisaab}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {(activeTab === 'All' || activeTab === 'Desktop') && (
            <div className="space-y-64">
              {/* Featured Case Study 00 — ZYPROVA */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-7">
                    <div 
                      onClick={onNavigateToZyprova}
                      className="aspect-[16/10] bg-brand-ink/5 rounded-3xl overflow-hidden border border-brand-ink/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/zyprova-hero/1200/800" 
                        alt="Zyprova Case Study" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">Zyprova</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">2025</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Designing a 0→1 AI-Powered SaaS Platform
                    </h2>
                    <div className="space-y-8 text-brand-ink/80 dark:text-brand-ink/80">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Senior Product Designer</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Translating product vision into scalable workflows and AI-driven systems.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink">
                            <li>Product Foundation</li>
                            <li>AI Clarity</li>
                            <li>Scalable UX</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToZyprova}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Case Study — MYCS */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-7">
                    <div 
                      onClick={onNavigateToMYCS}
                      className="aspect-[16/10] bg-brand-ink/[0.04] dark:bg-brand-ink/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-brand-ink/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/mycs-hero/1200/800" 
                        alt="MYCS Furniture Configurator" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">MYCS</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">2024</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Modernising a Complex Product Configurator
                    </h2>
                    <div className="space-y-8 text-brand-ink dark:text-brand-ink/90">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Lead Product Designer</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Revamped an outdated furniture configurator and checkout experience.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink dark:text-brand-ink">
                            <li>30% Sales Increase</li>
                            <li>Reduced Friction</li>
                            <li>20% Faster Delivery</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToMYCS}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {(activeTab === 'All' || activeTab === 'Design System') && (
            <div className="space-y-64">
              {/* Featured Case Study — HEYCAR */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-7">
                    <div 
                      onClick={onNavigateToHeycar}
                      className="aspect-[16/10] bg-brand-ink/[0.04] dark:bg-white/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-white/5 group cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/heycar/1200/800" 
                        alt="heycar Case Study" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-ink/5 dark:bg-brand-ink/10 rounded-full">heycar</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">2022</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                      Scaling Design Foundations Globally
                    </h2>
                    <div className="space-y-8 text-brand-ink dark:text-brand-ink/90">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Role</h4>
                        <p className="text-sm">Senior Product Designer (Design System)</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-brand-ink/60">Context</h4>
                        <p className="text-sm">Building a multi-market design system to unify the car buying experience.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-brand-ink/60">Impact</h4>
                          <ul className="space-y-2 text-xs font-bold text-brand-ink dark:text-brand-ink">
                            <li>AA Accessibility</li>
                            <li>Faster Development</li>
                            <li>Brand Consistency</li>
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={onNavigateToHeycar}
                            className="flex items-center gap-2 text-sm font-bold group cursor-pointer text-brand-ink"
                          >
                            VIEW FULL CASE STUDY <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Design Principles Section */}
      <section className="mb-64 py-32 border-y border-brand-ink/10">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50 mb-24">HOW I WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Strategy Before Screens", desc: "I align design decisions with business and product outcomes." },
            { title: "Systems Thinking", desc: "I build scalable foundations, not isolated screens." },
            { title: "Data + Research Driven", desc: "I validate ideas through research, usability testing, and real behavioral metrics." },
            { title: "Product Trio Collaboration", desc: "I work closely with PMs and Engineers from discovery to delivery." }
          ].map((principle, i) => (
            <div key={i}>
              <div className="text-brand-ink/40 dark:text-brand-ink/40 text-4xl font-serif italic mb-6">0{i+1}</div>
              <h3 className="text-lg font-bold mb-4 leading-tight">{principle.title}</h3>
              <p className="text-sm text-brand-ink/80 dark:text-brand-ink/80 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="mb-32 py-32 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-12 max-w-4xl mx-auto">
          Interested in building impactful products together?
        </h2>
        <a 
          href="mailto:goharshah3@gmail.com"
          className="inline-flex items-center gap-4 px-12 py-6 bg-brand-ink text-brand-bg rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all"
        >
          Let’s Talk <Mail size={18} />
        </a>
        
        <div className="mt-24 flex justify-center gap-12">
          <a href="mailto:goharshah3@gmail.com" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 hover:text-brand-ink transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/goharshah/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 hover:text-brand-ink transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 hover:text-brand-ink transition-colors">Resume</a>
        </div>
      </section>
    </main>
  );
}

const CareerAccordionItem: React.FC<{ item: CareerItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 md:p-6 flex items-center gap-4 md:gap-6 bg-brand-bg dark:bg-brand-ink/[0.03] border border-brand-ink/10 dark:border-brand-ink/10 rounded-xl md:rounded-2xl hover:border-brand-ink/20 dark:hover:border-brand-ink/20 transition-all duration-300 group text-left shadow-sm hover:shadow-md"
      >
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-brand-ink/[0.05] dark:bg-brand-ink/10 flex items-center justify-center text-brand-ink overflow-hidden">
          {item.logo ? (
            <img 
              src={item.logo} 
              alt={`${item.company} logo`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <Briefcase size={20} strokeWidth={1.5} />
          )}
        </div>
        
        <div className="flex-grow flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          <h3 className="text-base md:text-lg font-bold tracking-tight">
            {item.role} <span className="text-brand-ink/40 dark:text-brand-ink/40 font-medium">@</span> {item.company}
          </h3>
          <span className="text-xs md:text-sm text-brand-ink/60 dark:text-brand-ink/60 font-medium">
            ({item.period})
          </span>
        </div>

        <div className={`flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} className="text-brand-ink/50 dark:text-brand-ink/50 group-hover:text-brand-ink" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-24 py-8 space-y-4">
              <ul className="space-y-4">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm md:text-base leading-relaxed text-brand-ink/80 flex gap-4">
                    <span className="text-brand-ink/40 mt-1.5">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MYCSCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'The Challenge' },
    { id: 'role', label: 'My Role' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'design-system', label: 'Design System' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'demonstrates', label: 'Demonstrates' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen pb-24">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="pt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 hover:text-brand-ink transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Work
        </button>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12">
        {/* Sticky Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-12">
          <nav className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-6">Jump to section</h4>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="block text-xs font-bold uppercase tracking-widest hover:text-brand-ink/50 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-12 border-t border-brand-ink/10 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Role</h4>
              <p className="text-sm font-bold">Lead Product Designer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Impact</h4>
              <p className="text-sm font-bold">+30% Sales Increase</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Tools</h4>
              <p className="text-sm font-bold">Hotjar, GA, Figma</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Deliverables</h4>
              <p className="text-sm font-bold">UX Strategy, UI Kit, Prototypes</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 max-w-[960px] space-y-32">
          {/* 1. Hero */}
          <section id="hero" className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                MYCS — Redesigning a Complex Furniture Configurator to Drive 30% Sales Growth
              </h1>
              <p className="text-xl md:text-2xl text-brand-ink/60 font-serif italic mb-12">
                Simplifying decision-heavy configuration into a guided purchase journey.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y border-brand-ink/10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Role</h4>
                  <p className="text-xs font-bold">Lead Product Designer</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Timeline</h4>
                  <p className="text-xs font-bold">Jan 2023 – Mar 2025</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Platform</h4>
                  <p className="text-xs font-bold">Web (Config + Checkout)</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Team</h4>
                  <p className="text-xs font-bold">Product + Eng + Mktg</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/30 mb-2">Methods</h4>
                  <p className="text-xs font-bold">Hotjar, GA, Research</p>
                </div>
              </div>
            </motion.div>

            <div className="aspect-[16/9] bg-brand-ink/[0.04] dark:bg-brand-ink/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5 dark:border-brand-ink/5">
              <img 
                src="https://picsum.photos/seed/mycs-header/1200/800" 
                alt="Redesigned MYCS Furniture Configurator Hero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* 2. Overview */}
          <section id="overview" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-brand-ink/80">
                MYCS is a custom furniture e-commerce company with highly configurable products (dimensions, materials, colors, add-ons). The existing configurator was outdated and fragmented, causing usability friction and decision overload. I led the redesign of configurator + checkout, resulting in a 30% increase in sales.
              </p>
            </div>
            <ImagePlaceholder 
              label="PLACEHOLDER: Product Context / Example Config" 
              caption="Show an example of how many options a user configures to convey complexity." 
            />
          </section>

          {/* 3. The Challenge */}
          <section id="challenge" className="space-y-24">
            <div className="space-y-12">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">A) High Cognitive Load</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Customers had to manage many variables, understand pricing changes, and navigate steps without clarity. Weak visual hierarchy, low guidance, and overwhelming choices made the process exhausting.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">B) Decision Friction → Drop-offs</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Hotjar recordings and GA funnel analysis showed significant drop-offs during configuration steps. Confusion around pricing updates and checkout hesitation indicated a lack of product education.
                  </p>
                  <p className="text-lg font-bold italic border-l-2 border-brand-ink/20 pl-6">
                    “The problem wasn’t demand — it was usability.”
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImagePlaceholder 
                label="PLACEHOLDER: Before UI (Old Configurator)" 
                caption="Old UI with cluttered hierarchy. Show what made decisions hard." 
              />
              <ImagePlaceholder 
                label="PLACEHOLDER: Funnel / Drop-off Snapshot" 
                caption="Show where users dropped and what step was problematic." 
              />
            </div>
          </section>

          {/* 4. My Role */}
          <section id="role" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">My Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xl font-medium leading-relaxed">
                  I operated as the Lead Product Designer, driving experience strategy and execution.
                </p>
                <ul className="space-y-4">
                  {[
                    "Led discovery and UX strategy",
                    "Conducted user research + behavioural analysis",
                    "Defined information architecture + interaction model",
                    "Designed UI + interaction patterns",
                    "Introduced scalable design system",
                    "Partnered closely with Product & Engineering through rollout"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-ink/90">
                      <div className="w-1.5 h-1.5 bg-brand-ink/20 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ImagePlaceholder 
                label="PLACEHOLDER: Collaboration / Process Photo" 
                caption="A workshop photo or Miro snapshot showing cross-functional alignment." 
              />
            </div>
          </section>

          {/* 5. Strategy */}
          <section id="strategy" className="space-y-24">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Strategy</h2>
            
            <div className="space-y-32">
              {/* Shift 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="text-4xl font-serif italic text-brand-ink/10">01</div>
                  <h3 className="text-3xl font-bold tracking-tight">From Configuration Tool → Guided Purchase Journey</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    We shifted from a settings panel to decision-support. This included clear step progression, a persistent summary, transparent pricing updates, and grouping unnecessary choices.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <ImagePlaceholder 
                    label="PLACEHOLDER: New Stepper + Summary Pattern" 
                    caption="Show how progression + summary reduced confusion and supported confident decisions." 
                  />
                </div>
              </div>

              {/* Shift 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <ImagePlaceholder 
                    label="PLACEHOLDER: Hierarchy Improvements (Before/After)" 
                    caption="Side-by-side comparison focusing on hierarchy, spacing, and readability." 
                  />
                </div>
                <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                  <div className="text-4xl font-serif italic text-brand-ink/10">02</div>
                  <h3 className="text-3xl font-bold tracking-tight">Improve Information Hierarchy & Visual Clarity</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Prioritizing high-impact decisions while reducing visual noise. We implemented clear typography hierarchy, stronger CTA clarity, and better microcopy.
                  </p>
                </div>
              </div>

              {/* Shift 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="text-4xl font-serif italic text-brand-ink/10">03</div>
                  <h3 className="text-3xl font-bold tracking-tight">Optimize Checkout for Momentum</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Simplified checkout structure with reduced form complexity and improved trust signals. The goal was to preserve momentum after the configuration phase.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <ImagePlaceholder 
                    label="PLACEHOLDER: Checkout Improvements" 
                    caption="Highlight fewer steps, clearer form fields, and trust cues." 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 6. Design System */}
          <section id="design-system" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Design System Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-brand-ink/70 leading-relaxed">
                  Inconsistency was a major blocker. I introduced a scalable design system with components, patterns, and documentation to improve brand consistency and iteration cycles.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Improved brand consistency",
                    "Faster iteration cycles",
                    "Better collaboration with engineering",
                    "~20% faster delivery across projects"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-brand-ink/5 rounded-xl">
                      <div className="w-1.5 h-1.5 bg-brand-ink/40 rounded-full" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ImagePlaceholder 
                label="PLACEHOLDER: Component Library Snapshot" 
                caption="Show key components used in configurator + checkout (buttons, steppers, cards, inputs)." 
              />
            </div>
          </section>

          {/* 7. Outcomes */}
          <section id="outcomes" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Outcomes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Sales Increase", value: "+30%" },
                { label: "Drop-offs", value: "-24%" },
                { label: "Checkout Conv.", value: "+18%" },
                { label: "Delivery Speed", value: "+20%" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-brand-ink text-brand-bg rounded-3xl text-center">
                  <div className="text-4xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl">
              <p className="text-xl leading-relaxed text-brand-ink/80">
                Most importantly, we transformed the configurator from a friction point into a growth lever.
              </p>
            </div>
            <ImagePlaceholder 
              label="PLACEHOLDER: Results / KPI Screenshot" 
              caption="Show KPI movement or dashboard snippet (anonymized if needed)." 
            />
          </section>

          {/* 8. What This Demonstrates */}
          <section id="demonstrates" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">What This Demonstrates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Simplifying decision-heavy systems",
                "Data-informed product design",
                "Conversion optimization in high-consideration commerce",
                "Cross-functional collaboration",
                "Balancing usability with business performance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 border border-brand-ink/10 rounded-3xl">
                  <div className="text-2xl font-serif italic text-brand-ink/20">0{i+1}</div>
                  <span className="text-lg font-bold tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Reflection */}
          <section id="reflection" className="py-32 border-t border-brand-ink/10">
            <blockquote className="max-w-3xl mx-auto text-center space-y-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic font-serif">
                “This project reinforced my belief that complex products don’t need more features — they need clearer decisions. By combining research, systems thinking, and visual clarity, we turned complexity into conversion.”
              </p>
              <footer className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/60">
                Syed Gohar Ali — Lead Product Designer
              </footer>
            </blockquote>
          </section>

          {/* 10. Footer */}
          <CaseStudyFooter currentId="mycs" onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

const CASE_STUDIES_NAV = [
  { id: 'gotphoto', title: 'GotPhoto', path: '/case-studies/gotphoto' },
  { id: 'retailo', title: 'Retailo', path: '/case-studies/retailo' },
  { id: 'hisaab', title: 'Hisaab', path: '/case-studies/hisaab' },
  { id: 'zyprova', title: 'Zyprova', path: '/case-studies/zyprova' },
  { id: 'mycs', title: 'MYCS', path: '/case-studies/mycs' },
  { id: 'heycar', title: 'heycar', path: '/case-studies/heycar' },
];

function CaseStudyFooter({ currentId, onBack }: { currentId: string; onBack: () => void }) {
  const navigate = useNavigate();
  const currentIndex = CASE_STUDIES_NAV.findIndex(cs => cs.id === currentId);
  
  const prev = currentIndex > 0 ? CASE_STUDIES_NAV[currentIndex - 1] : null;
  const next = currentIndex < CASE_STUDIES_NAV.length - 1 ? CASE_STUDIES_NAV[currentIndex + 1] : null;

  return (
    <footer className="pt-24 pb-12 border-t border-brand-ink/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div className="flex flex-wrap gap-8">
        <button onClick={onBack} className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity cursor-pointer">Back to Work</button>
        {prev && (
          <button 
            onClick={() => navigate(prev.path)} 
            className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft size={12} /> Previous: {prev.title}
          </button>
        )}
        {next && (
          <button 
            onClick={() => navigate(next.path)} 
            className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity cursor-pointer flex items-center gap-2"
          >
            Next: {next.title} <ArrowRight size={12} />
          </button>
        )}
      </div>
      <div className="flex flex-col md:items-end gap-2">
        <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">
          Detailed flows and prototypes available upon request.
        </p>
        <div className="flex gap-6">
           <a href="mailto:goharshah3@gmail.com" className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">Contact</a>
           <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">© 2026 Syed Gohar Ali</span>
        </div>
      </div>
    </footer>
  );
}

function NbulaCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'context', label: 'Context' },
    { id: 'challenge', label: 'Core Challenge' },
    { id: 'role', label: 'My Role' },
    { id: 'principles', label: 'Strategic Principles' },
    { id: 'product-areas', label: 'Key Product Areas' },
    { id: 'design-system', label: 'Design System' },
    { id: 'impact', label: 'Impact' },
    { id: 'demonstrates', label: 'What This Demonstrates' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen pb-24">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="pt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 hover:text-brand-ink transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Work
        </button>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12">
        {/* Sticky Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-12">
          <nav className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-6">Jump to section</h4>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="block text-xs font-bold uppercase tracking-widest hover:text-brand-ink/50 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-12 border-t border-brand-ink/10 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Role</h4>
              <p className="text-sm font-bold">Product Designer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Platform</h4>
              <p className="text-sm font-bold">Web SaaS</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Domain</h4>
              <p className="text-sm font-bold">B2B / Enterprise Workflow</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 max-w-[960px] space-y-32">
          {/* 1. Hero */}
          <section id="hero" className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                Nbula — Designing Scalable Workflow UX for Enterprise SaaS
              </h1>
              <p className="text-xl md:text-2xl text-brand-ink/60 font-serif italic mb-8">
                Transforming complex operational requirements into structured, usable product systems.
              </p>
              
              <div className="p-8 bg-brand-ink/5 rounded-3xl mb-12">
                <p className="text-lg font-bold tracking-tight">
                  “Designed structured workflows and dashboard systems for high-complexity enterprise use cases.”
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-brand-ink/10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Role</h4>
                  <p className="text-xs font-bold">Product Designer</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Users</h4>
                  <p className="text-xs font-bold">Ops Teams / Business Users</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Team</h4>
                  <p className="text-xs font-bold">Product + Engineering</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Timeline</h4>
                  <p className="text-xs font-bold">2024</p>
                </div>
              </div>
            </motion.div>

            <ImagePlaceholder 
              label="PLACEHOLDER: Nbula Platform Overview" 
              caption="High-level dashboard view showing structured layout and workflow modules." 
            />
          </section>

          {/* 2. Context */}
          <section id="context" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Context</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-xl leading-relaxed text-brand-ink/80">
                Nbula is a B2B SaaS platform designed to support operational and business workflows. Users rely on the platform to manage structured processes, track states and outcomes, coordinate tasks, and make informed decisions.
              </p>
              <p className="text-2xl font-bold italic border-l-2 border-brand-ink/20 pl-8 py-4">
                “How do you make complex enterprise workflows feel structured rather than overwhelming?”
              </p>
              <ImagePlaceholder 
                label="PLACEHOLDER: System Overview Diagram" 
                caption="High-level representation of modules and workflow relationships." 
              />
            </div>
          </section>

          {/* 3. Core Challenge */}
          <section id="challenge" className="space-y-24">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Core Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">A) Workflow Complexity</h3>
                <ul className="space-y-2 text-sm text-brand-ink/70">
                  <li>Multi-step processes</li>
                  <li>Multiple roles</li>
                  <li>State transitions</li>
                  <li>Data-heavy views</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">B) Information Architecture</h3>
                <ul className="space-y-2 text-sm text-brand-ink/70">
                  <li>Overview vs Detail pages</li>
                  <li>Preventing clutter</li>
                  <li>Fast navigation support</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">C) Scalability & Extensibility</h3>
                <ul className="space-y-2 text-sm text-brand-ink/70">
                  <li>Flexible layouts</li>
                  <li>Future module support</li>
                  <li>Surface consistency</li>
                </ul>
              </div>
            </div>
            <div className="p-8 bg-brand-ink text-brand-bg rounded-3xl">
              <p className="text-xl font-bold text-center">“In enterprise systems, structure reduces friction at scale.”</p>
            </div>
            <ImagePlaceholder 
              label="PLACEHOLDER: Early Workflow Layout" 
              caption="Initial interface showing complexity or unclear hierarchy." 
            />
          </section>

          {/* 4. My Role */}
          <section id="role" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">My Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xl font-medium leading-relaxed">
                  Operated as a system-level thinker, shaping both interface structure and workflow logic.
                </p>
                <ul className="space-y-4">
                  {[
                    "Defined core workflow architecture",
                    "Designed dashboard and detail views",
                    "Structured state-based UI patterns",
                    "Improved information hierarchy",
                    "Built reusable components",
                    "Collaborated closely with engineering for scalable implementation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-ink/70">
                      <div className="w-1.5 h-1.5 bg-brand-ink/20 rounded-full mt-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-brand-ink/5 rounded-3xl flex items-center justify-center p-12">
                <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-ink/50">
                  Placeholder: System Thinking / Logic Diagram
                </p>
              </div>
            </div>
          </section>

          {/* 5. Strategic Design Principles */}
          <section id="principles" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Strategic Design Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Make Workflow States Explicit", points: ["Clear status indicators", "Predictable transitions", "Visual consistency"] },
                { title: "Separate Overview from Action", points: ["Summary dashboards", "Drill-down details", "Reduced cognitive switching"] },
                { title: "Design for Role Clarity", points: ["Different user types", "Context-aware interfaces", "Permission-aware patterns"] },
                { title: "Build for Modularity", points: ["Reusable layout blocks", "Consistent navigation patterns", "Extensible component logic"] }
              ].map((p, i) => (
                <div key={i} className="p-8 border border-brand-ink/10 rounded-3xl space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.points.map((point, j) => (
                      <li key={j} className="text-sm text-brand-ink/60 flex items-center gap-3">
                        <div className="w-1 h-1 bg-brand-ink/20 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ImagePlaceholder 
              label="PLACEHOLDER: Improved Workflow Hierarchy" 
              caption="Demonstrate structured layout with clearer state management." 
            />
          </section>

          {/* 6. Key Product Areas */}
          <section id="product-areas" className="space-y-32">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Key Product Areas</h2>
            
            <div className="space-y-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">A) Dashboard & Overview Layer</h3>
                  <ul className="space-y-2 text-sm text-brand-ink/70">
                    <li>High-level summaries</li>
                    <li>KPIs</li>
                    <li>Status tracking</li>
                    <li>Navigation clarity</li>
                  </ul>
                </div>
                <ImagePlaceholder 
                  label="PLACEHOLDER: Dashboard UI" 
                  caption="Show clear hierarchy and KPI grouping." 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ImagePlaceholder 
                  label="PLACEHOLDER: Workflow Detail View" 
                  caption="Highlight structured state transitions and reduced clutter." 
                />
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">B) Workflow Execution Screens</h3>
                  <ul className="space-y-2 text-sm text-brand-ink/70">
                    <li>Step progression</li>
                    <li>Status visibility</li>
                    <li>Context preservation</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">C) Management & Configuration Layer</h3>
                  <ul className="space-y-2 text-sm text-brand-ink/70">
                    <li>Structured forms</li>
                    <li>Logical grouping</li>
                    <li>Clear data entry patterns</li>
                  </ul>
                </div>
                <ImagePlaceholder 
                  label="PLACEHOLDER: Configuration UI" 
                  caption="Demonstrate structured form patterns and clean hierarchy." 
                />
              </div>
            </div>
          </section>

          {/* 7. Design System */}
          <section id="design-system" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Design System & Scalability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-brand-ink/70 leading-relaxed">
                  I built a foundation for long-term growth by standardizing the building blocks of the platform.
                </p>
                <ul className="space-y-4">
                  {[
                    "Built reusable enterprise components",
                    "Standardized spacing & layout logic",
                    "Defined interaction patterns",
                    "Improved engineering collaboration",
                    "Created scalable design foundation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-ink/70">
                      <div className="w-1.5 h-1.5 bg-brand-ink/20 rounded-full mt-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ImagePlaceholder 
                label="PLACEHOLDER: Nbula Component System" 
                caption="Reusable components across dashboards, forms, and state indicators." 
              />
            </div>
          </section>

          {/* 8. Impact */}
          <section id="impact" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/30">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <ul className="space-y-4">
                  {[
                    "Improved workflow clarity",
                    "Reduced cognitive load in multi-step processes",
                    "Enabled scalable feature expansion",
                    "Increased consistency across modules",
                    "Strengthened cross-team alignment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-ink/80 font-bold text-sm uppercase tracking-tight">
                      <div className="w-2 h-2 bg-brand-ink rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold italic pt-8">
                  “By structuring complexity into predictable systems, we enabled more confident and efficient user workflows.”
                </p>
              </div>
              <ImagePlaceholder 
                label="PLACEHOLDER: Before/After Comparison" 
                caption="Show improved clarity and structure versus earlier layout." 
              />
            </div>
          </section>

          {/* 9. What This Demonstrates */}
          <section id="demonstrates" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">What This Project Demonstrates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Enterprise workflow design",
                "Systems-level thinking",
                "Information architecture in complex SaaS",
                "State-driven UI patterns",
                "Cross-functional collaboration",
                "Designing for scalability"
              ].map((item, i) => (
                <div key={i} className="p-6 border border-brand-ink/10 rounded-2xl text-center">
                  <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Reflection */}
          <section id="reflection" className="py-32 border-t border-brand-ink/10">
            <blockquote className="max-w-3xl mx-auto text-center space-y-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic font-serif">
                “In enterprise products, clarity is not about simplicity — it is about structure. Nbula reinforced my ability to design systems that scale without sacrificing usability.”
              </p>
              <footer className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/60">
                Syed Gohar Ali — Product Designer
              </footer>
            </blockquote>
          </section>

          {/* 11. Footer */}
          <CaseStudyFooter currentId="nbula" onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function RetailoCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'context', label: 'Marketplace Context' },
    { id: 'challenge', label: 'The Challenge' },
    { id: 'role', label: 'My Role' },
    { id: 'principles', label: 'Strategic Principles' },
    { id: 'flows', label: 'High-Impact Flows' },
    { id: 'design-system', label: 'Design System' },
    { id: 'impact', label: 'Impact' },
    { id: 'shows', label: 'What This Shows' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen pb-24">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="pt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 hover:text-brand-ink transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Work
        </button>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12">
        {/* Sticky Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-12">
          <nav className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-6">Jump to section</h4>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="block text-xs font-bold uppercase tracking-widest hover:text-brand-ink/50 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-12 border-t border-brand-ink/10 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Role</h4>
              <p className="text-sm font-bold">Senior Product Designer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Market</h4>
              <p className="text-sm font-bold">Saudi Arabia (KSA)</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Platform</h4>
              <p className="text-sm font-bold">Mobile (Retailers + Agents)</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 max-w-[960px] space-y-32">
          {/* 1. Hero */}
          <section id="hero" className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                Retailo — Designing Operational UX for High-Frequency Commerce & Logistics
              </h1>
              <p className="text-xl md:text-2xl text-brand-ink/60 font-serif italic mb-8">
                Enabling retailers and field agents to move faster, make fewer errors, and scale reliably under operational pressure.
              </p>
              
              <div className="p-8 bg-brand-ink/5 rounded-3xl mb-12">
                <p className="text-lg font-bold tracking-tight">
                  “Designed mobile workflows used daily by field agents and retailers operating under real-world time pressure.”
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-brand-ink/10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Role</h4>
                  <p className="text-xs font-bold">Senior Product Designer</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Domain</h4>
                  <p className="text-xs font-bold">Logistics + Payments</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Team</h4>
                  <p className="text-xs font-bold">Product + Eng + Ops</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50 mb-2">Market</h4>
                  <p className="text-xs font-bold">KSA (MENA)</p>
                </div>
              </div>
            </motion.div>

            <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/retailo-screens/1200/800" 
                alt="Retailo Agent App Overview" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* 2. Marketplace Context */}
          <section id="context" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">The Marketplace Context</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-xl leading-relaxed text-brand-ink/80">
                Retailo operates as a B2B commerce marketplace connecting small retailers with suppliers. Revenue depends on fast order cycles, reliable logistics, accurate payment reconciliation, and high repeat frequency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-brand-ink/10 rounded-3xl space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-ink/40">Operational UX Impacts</h4>
                  <ul className="space-y-3 text-sm font-bold">
                    <li>Order Velocity</li>
                    <li>Delivery Success Rates</li>
                    <li>Cash Flow</li>
                    <li>Marketplace Trust</li>
                  </ul>
                </div>
                <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
                  <img 
                    src="https://picsum.photos/seed/retailo-option/1200/800" 
                    alt="Marketplace Ecosystem" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <p className="p-4 text-xs text-brand-ink/60 italic">Retailer ↔ Agent ↔ Warehouse relationship visualization.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. The Core Challenge */}
          <section id="challenge" className="space-y-24">
            <div className="space-y-12">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">The Core Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">A) High-Frequency Friction</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">
                    Agents complete dozens of deliveries daily. Retailers reorder inventory quickly. Every extra tap compounds into operational cost.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">B) Fragmented Workflows</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">
                    Ordering, route management, delivery confirmation, and payments were loosely connected, leading to errors and delays.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">C) Scaling Inconsistency</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">
                    Rapid expansion without a strong design system created inconsistency and slower iteration cycles across teams.
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold italic border-l-2 border-brand-ink/20 pl-8 py-4">
                “In operational marketplaces, small UX inefficiencies scale into systemic friction.”
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
              <img 
                src="https://picsum.photos/seed/retailo-frame/1200/800" 
                alt="Complex Operational Flows" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <p className="p-4 text-xs text-brand-ink/60 italic">Visualizing the complexity of fragmented legacy workflows.</p>
            </div>
          </section>

          {/* 4. My Role */}
          <section id="role" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">My Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-xl font-medium leading-relaxed">
                  I led the redesign of core mobile workflows across ordering, delivery, and payment capture.
                </p>
                <ul className="space-y-4">
                  {[
                    "Conducted contextual usability testing with field agents",
                    "Defined operational information architecture",
                    "Built scalable mobile-first component system",
                    "Supported engineering through implementation and QA",
                    "Worked closely with Product and Ops to balance usability with logistical constraints"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-ink/70">
                      <div className="w-1.5 h-1.5 bg-brand-ink/20 rounded-full mt-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-lg bg-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/retailo-myday/1200/800" 
                  alt="Field Research Context" 
                  className="w-full h-auto opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>

          {/* 5. Strategic Principles */}
          <section id="principles" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Strategic Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Design for Speed", points: ["Reduced taps", "Prioritized high-frequency actions", "Clear state visibility"] },
                { title: "Design for Pressure", points: ["One-hand usability", "Large tap targets", "Error prevention patterns"] },
                { title: "Design for Reliability", points: ["Explicit status indicators", "Clear payment states", "Reduced ambiguity"] },
                { title: "Design for Scale", points: ["Standardized components", "RTL/LTR support", "Modular flow architecture"] }
              ].map((p, i) => (
                <div key={i} className="p-8 border border-brand-ink/10 rounded-3xl space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.points.map((point, j) => (
                      <li key={j} className="text-sm text-brand-ink/60 flex items-center gap-3">
                        <div className="w-1 h-1 bg-brand-ink/20 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
              <img 
                src="https://picsum.photos/seed/retailo-map-filter/1200/800" 
                alt="Streamlined Delivery Flow" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <p className="p-4 text-xs text-brand-ink/60 italic">Optimized map views with active filtering for route efficiency.</p>
            </div>
          </section>

          {/* 6. High-Impact Flows */}
          <section id="flows" className="space-y-32">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">High-Impact Flows</h2>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">A) Retailer Ordering Loop</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Focusing on repeat ordering, price transparency, and inventory clarity to ensure retailers can restock in seconds.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/retailo-shops/1200/800" alt="Shops List" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/retailo-shops-filter/1200/800" alt="Shops Filter" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/retailo-map/1200/800" alt="Agent Map" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/retailo-delivery/1200/800" alt="Delivery View" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">B) Agent Delivery Execution</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Optimizing for route clarity, order verification, and seamless payment capture to reduce time spent per stop.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">C) Payment State Transparency</h3>
                  <p className="text-brand-ink/70 leading-relaxed">
                    Differentiating between cash and digital payments clearly to reduce reconciliation errors at the end of the day.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/retailo-dashboard/1200/800" alt="Shop Dashboard" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/retailo-endday/1200/800" alt="End Day" className="rounded-2xl border border-brand-ink/10 shadow-sm" referrerPolicy="no-referrer" />
                </div>
              </div>

              <div className="pt-16 space-y-12">
                <h3 className="text-xs uppercase tracking-widest font-bold text-brand-ink/40 text-center">Operational Interface Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { src: "https://picsum.photos/seed/retailo-todo/1200/800", alt: "Task Management" },
                    { src: "https://picsum.photos/seed/retailo-startvisit/1200/800", alt: "Start Visit" },
                    { src: "https://picsum.photos/seed/retailo-endvisit/1200/800", alt: "End Visit" },
                    { src: "https://picsum.photos/seed/retailo-geofence/1200/800", alt: "Geofencing" },
                    { src: "https://picsum.photos/seed/retailo-delivery-route/1200/800", alt: "Delivery Route" },
                    { src: "https://picsum.photos/seed/retailo-list/1200/800", alt: "Retailer List" }
                  ].map((img, i) => (
                    <div key={i} className="aspect-[9/16] rounded-xl overflow-hidden border border-brand-ink/10 shadow-sm">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. Design System */}
          <section id="design-system" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">Design System at Scale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-brand-ink/70 leading-relaxed">
                  I built a mobile-first design system that introduced a token structure and standardized interaction patterns, supporting both LTR and Arabic RTL layouts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Token Structure", "RTL Support", "Accessibility", "Faster Rollout"].map((item, i) => (
                    <div key={i} className="p-4 bg-brand-ink/5 rounded-xl text-center">
                      <span className="text-[10px] uppercase tracking-widest font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
                  <img 
                    src="https://picsum.photos/seed/retailo-img121/1200/800" 
                    alt="Design System Components" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
                  <img 
                    src="https://picsum.photos/seed/retailo-img122/1200/800" 
                    alt="Visual Language" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="p-4 text-xs text-brand-ink/60 italic">Standardized interaction patterns, component tokens, and visual language.</p>
              </div>
            </div>
          </section>

          {/* 8. Impact */}
          <section id="impact" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/30">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {[
                    "Reduced operational friction across agent workflows",
                    "Improved task completion efficiency for retailers",
                    "Lower delivery confirmation errors",
                    "Increased clarity in payment tracking",
                    "Enabled faster product iteration cycles"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-ink/80 font-bold text-sm uppercase tracking-tight">
                      <div className="w-2 h-2 bg-brand-ink rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold italic pt-8">
                  “By aligning operational clarity with marketplace velocity, we strengthened the reliability layer of the platform.”
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden border border-brand-ink/10 shadow-xl">
                <img 
                  src="https://picsum.photos/seed/retailo-todo-perf/1200/800" 
                  alt="Impact Visualization" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <p className="p-4 text-xs text-brand-ink/60 italic">Tracking agent performance and operational KPIs.</p>
              </div>
            </div>
          </section>

          {/* 9. What This Shows */}
          <section id="shows" className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/50">What This Shows</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Operational UX at scale",
                "Marketplace systems thinking",
                "Logistics & fintech complexity",
                "High-frequency mobile usage",
                "Cross-functional collaboration",
                "Regional adaptability (MENA)"
              ].map((item, i) => (
                <div key={i} className="p-6 border border-brand-ink/10 rounded-2xl text-center">
                  <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Reflection */}
          <section id="reflection" className="py-32 border-t border-brand-ink/10">
            <blockquote className="max-w-3xl mx-auto text-center space-y-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic font-serif">
                “In high-scale marketplaces, product design is not about visual polish — it’s about enabling movement. When agents move faster, retailers restock faster, and payments reconcile cleanly, the marketplace grows.”
              </p>
              <footer className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/40">
                Syed Gohar Ali — Senior Product Designer
              </footer>
            </blockquote>
          </section>

          {/* 11. Footer */}
          <CaseStudyFooter currentId="retailo" onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function ImagePlaceholder({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="space-y-4">
      <div className="aspect-[16/9] bg-brand-ink/[0.04] dark:bg-brand-ink/[0.04] rounded-3xl border border-brand-ink/5 dark:border-brand-ink/5 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">{label}</span>
      </div>
      <p className="text-sm text-brand-ink/60 italic leading-relaxed max-w-2xl">
        {caption}
      </p>
    </div>
  );
}

function GotPhotoCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'context', label: 'Context' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'role', label: 'Role' },
    { id: 'approach', label: 'Approach' },
    { id: 'product', label: 'Product' },
    { id: 'systems', label: 'Systems' },
    { id: 'impact', label: 'Impact' },
    { id: 'demonstrates', label: 'Demonstrates' },
    { id: 'reflection', label: 'Reflection' },
  ];

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg font-sans">
      <ScrollToTop />
      {/* Sticky Nav (Desktop) */}
      <aside className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 w-48 z-40">
        <nav className="space-y-4">
          <button onClick={onBack} className="block text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity mb-12">← Back</button>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                activeSection === section.id ? 'text-brand-ink translate-x-2' : 'text-brand-ink/20 hover:text-brand-ink/40'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Nav (Collapsible) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-md z-50 border-b border-brand-ink/5">
        <details className="group">
          <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
            <span className="text-[10px] uppercase tracking-widest font-bold">Jump to section</span>
            <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
          </summary>
          <nav className="px-6 pb-6 space-y-4 bg-brand-bg">
            <button onClick={onBack} className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">← Back to Work</button>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 hover:text-brand-ink"
                onClick={() => {
                  const details = document.querySelector('details');
                  if (details) (details as any).open = false;
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </details>
      </div>

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[960px] mx-auto space-y-32">
        {/* HERO */}
        <header id="hero" className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              GotPhoto — Rebuilding a High-Scale Commerce Platform for Photographers & Parents
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-brand-ink/60 max-w-3xl leading-tight">
              Transforming a legacy shop into a mobile-first, scalable marketplace experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-brand-ink/10">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Role</h4>
              <p className="text-sm font-bold">Senior Product Designer (Shop Team)</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Location</h4>
              <p className="text-sm font-bold">Berlin</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Platform</h4>
              <p className="text-sm font-bold">Web + Mobile</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Domain</h4>
              <p className="text-sm font-bold">B2B2C Marketplace</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              “Led end-to-end design of a high-volume commerce platform used by photographers and parents at scale.”
            </p>
            <p className="text-xl md:text-2xl font-medium text-brand-ink/60">
              “Contributed to ~10% GMV growth and +44% higher mobile conversion through system-level improvements.”
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[16/9] bg-brand-ink/[0.04] rounded-3xl overflow-hidden border border-brand-ink/5">
              <img 
                src="https://picsum.photos/seed/gotphoto-cs/1200/800" 
                alt="Shop Experience Overview" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs italic text-brand-ink/40 text-center">“High-level view of the redesigned shop experience across mobile and desktop.”</p>
          </div>
        </header>

        {/* MARKETPLACE CONTEXT */}
        <section id="context" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Marketplace Context</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-brand-ink/80">
                GotPhoto operates a B2B2C marketplace where photographers create jobs and products, and parents browse and purchase photos.
              </p>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Key Complexity</h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li>— Event-based commerce (not traditional catalog)</li>
                  <li>— Multi-step purchase journeys</li>
                  <li>— Multiple monetisation models (Prepay, Proofing, Hybrid)</li>
                  <li>— 80%+ mobile usage</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-bold leading-tight">
                “How do you design a seamless commerce experience across multiple user roles and business models?”
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder 
              label="PLACEHOLDER: Marketplace Ecosystem Diagram" 
              caption="Relationship between Photographer → Platform → Parent (shopper journey)."
            />
          </div>
        </section>

        {/* CORE CHALLENGE */}
        <section id="challenge" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Core Challenge</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">A) Fragmented Shopper Experience</h3>
              <ul className="text-sm text-brand-ink/60 space-y-1">
                <li>• Registration friction</li>
                <li>• Multi-job complexity</li>
                <li>• Confusing pricing</li>
                <li>• Weak mobile experience</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">B) Legacy Monolith Constraints</h3>
              <ul className="text-sm text-brand-ink/60 space-y-1">
                <li>• Slow iteration cycles</li>
                <li>• Inconsistent UX</li>
                <li>• Limited flexibility</li>
                <li>• Ownership ambiguity</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">C) Adoption Blockers</h3>
              <ul className="text-sm text-brand-ink/60 space-y-1">
                <li>• Missing parity features</li>
                <li>• Photographers hesitant to migrate</li>
                <li>• Incomplete workflows</li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold border-l-4 border-brand-ink pl-8 py-2">
            “In marketplace systems, experience fragmentation directly limits growth.”
          </p>
          <div className="space-y-4">
            <ImagePlaceholder 
              label="PLACEHOLDER: Legacy Shop Experience" 
              caption="Old shop showing fragmented flows and weak hierarchy."
            />
          </div>
        </section>

        {/* MY ROLE */}
        <section id="role" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">My Role</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-lg font-medium">
              <li>— Led end-to-end design of the new shop experience</li>
              <li>— Worked in a product trio (Design, Product, Engineering)</li>
              <li>— Conducted discovery through research and data</li>
              <li>— Translated complex B2B2C models into user-friendly journeys</li>
              <li>— Extended design system for scalability</li>
              <li>— Supported implementation and design QA</li>
            </ul>
            <div className="flex items-center">
              <p className="text-xl font-medium text-brand-ink/60">
                “Operated as a system-level designer, aligning user experience with business and technical constraints.”
              </p>
            </div>
          </div>
        </section>

        {/* STRATEGIC APPROACH */}
        <section id="approach" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Strategic Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'From Feature Flows → End-to-End Journeys', desc: 'Structured linear purchase flow, persistent context across steps, reduced cognitive load.' },
              { title: 'Simplify Monetisation Models', desc: 'Unified Prepay, Proofing, Hybrid logic. Clear mental models and consistent interaction patterns.' },
              { title: 'Mobile-First as Default', desc: 'Thumb-friendly navigation, reduced steps, optimized hierarchy for small screens.' },
              { title: 'Design for Adoption & Scale', desc: 'Close parity gaps, modular system design, enable faster iteration.' }
            ].map((principle, i) => (
              <div key={i} className="p-8 bg-brand-ink/[0.02] rounded-3xl border border-brand-ink/5 space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Principle 0{i+1}</h4>
                <h3 className="text-xl font-bold">{principle.title}</h3>
                <p className="text-sm text-brand-ink/60 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <ImagePlaceholder 
              label="PLACEHOLDER: New Shopper Journey Flow" 
              caption="Visual representation of structured end-to-end journey replacing fragmented flows."
            />
          </div>
        </section>

        {/* KEY PRODUCT AREAS */}
        <section id="product" className="space-y-24 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Key Product Areas</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">A) Prepay Shop (New Revenue Model)</h3>
              <p className="text-brand-ink/60">Enabled early revenue capture, opened new market segments, and integrated with Proofing.</p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Prepay Flow" 
                caption="Show how users purchase before photo availability with clear expectations."
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">B) Registration & Access</h3>
              <p className="text-brand-ink/60">Reduced entry friction, simplified onboarding, and improved clarity before purchase.</p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Registration Flow" 
                caption="Clearer entry into the shop experience."
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">C) Multi-Job Shopping</h3>
              <p className="text-brand-ink/60">Unified shopping across multiple events while maintaining cart consistency.</p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Multi-Job Experience" 
                caption="Demonstrate continuity across multiple jobs."
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">D) Monetisation & Upsell</h3>
              <p className="text-brand-ink/60">Package selection flows, retouching services, and increased AOV without harming conversion.</p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Upsell Experience" 
                caption="Highlight package selection and upsell clarity."
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">E) Checkout Optimization</h3>
              <p className="text-brand-ink/60">Simplified flow, reduced friction, and maintained purchase momentum.</p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Checkout Flow" 
                caption="Streamlined checkout with minimal friction."
              />
            </div>
          </div>
        </section>

        {/* SYSTEMS & SCALABILITY */}
        <section id="systems" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Systems & Scalability</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-brand-ink/80 leading-relaxed">
                Transition from monolithic system to modular flows, reusable UI patterns, and clear ownership boundaries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-brand-ink/5 rounded-2xl text-center">
                  <p className="text-xl font-bold">Faster</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Iteration Cycles</p>
                </div>
                <div className="p-4 bg-brand-ink/5 rounded-2xl text-center">
                  <p className="text-xl font-bold">Safer</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Releases</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder 
                label="PLACEHOLDER: Design System Components" 
                caption="Reusable components powering the shop experience."
              />
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 bg-brand-ink text-brand-bg rounded-[40px] space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">~10%</h3>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">GMV increase per activated job</p>
            </div>
            <div className="p-12 bg-brand-ink text-brand-bg rounded-[40px] space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">+44%</h3>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Higher mobile conversion rate</p>
            </div>
            <div className="p-12 bg-brand-ink text-brand-bg rounded-[40px] space-y-4">
              <h3 className="text-6xl font-bold tracking-tighter">AOV</h3>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Increased Average Order Value</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-center py-12">
            “By aligning experience, business logic, and system architecture, we transformed the shop into a scalable growth engine.”
          </p>
          <div className="space-y-4">
            <ImagePlaceholder 
              label="PLACEHOLDER: KPI Dashboard" 
              caption="Anonymized metrics showing performance improvements."
            />
          </div>
        </section>

        {/* WHAT THIS DEMONSTRATES */}
        <section id="demonstrates" className="space-y-12 pt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">What this demonstrates</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-lg font-medium">
              <li>— Marketplace product design</li>
              <li>— B2B2C systems thinking</li>
              <li>— Mobile-first optimization at scale</li>
              <li>— Monetisation design</li>
              <li>— Cross-functional leadership</li>
              <li>— Designing for growth and scalability</li>
            </ul>
          </div>
        </section>

        {/* CLOSING REFLECTION */}
        <section id="reflection" className="py-32 border-t border-brand-ink/10">
          <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-center max-w-4xl mx-auto">
            “In marketplace products, growth comes from removing friction across the entire system — not just improving individual screens. This project reinforced my approach to aligning UX, business models, and technical architecture into one cohesive product experience.”
          </p>
        </section>

        {/* FOOTER */}
        <CaseStudyFooter currentId="gotphoto" onBack={onBack} />
      </div>
    </div>
  );
}

function ZyprovaCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'context', label: 'Context' },
    { id: 'challenge', label: 'Core Challenge' },
    { id: 'role', label: 'My Role' },
    { id: 'approach', label: 'Strategic Approach' },
    { id: 'product', label: 'Key Product Areas' },
    { id: 'systems', label: 'Systems' },
    { id: 'impact', label: 'Impact' },
    { id: 'demonstrates', label: 'Demonstrates' },
    { id: 'reflection', label: 'Reflection' },
  ];

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg font-sans">
      <ScrollToTop />
      {/* Sticky Nav (Desktop) */}
      <aside className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 w-48 z-40">
        <nav className="space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                activeSection === section.id ? 'text-brand-ink translate-x-2' : 'text-brand-ink/20 hover:text-brand-ink/40'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Nav (Collapsible) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-md z-50 border-b border-brand-ink/5">
        <details className="group">
          <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
            <span className="text-[10px] uppercase tracking-widest font-bold">Jump to section</span>
            <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
          </summary>
          <nav className="px-6 pb-6 space-y-4 bg-brand-bg">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 hover:text-brand-ink"
                onClick={() => {
                  const details = document.querySelector('details');
                  if (details) (details as any).open = false;
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </details>
      </div>

      <div className="max-w-[960px] mx-auto px-6 lg:px-0">
        {/* Hero Section */}
        <header id="hero" className="pt-32 lg:pt-48 pb-24 border-b border-brand-ink/5">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 hover:text-brand-ink transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Work
          </button>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
            Zyprova — Designing a 0→1 AI-Powered SaaS Platform
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-brand-ink/60 max-w-3xl leading-tight mb-16">
            Translating product vision into scalable workflows, systems, and user clarity.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-brand-ink/5 mb-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Role</h4>
              <p className="text-sm font-bold">Product Designer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Stage</h4>
              <p className="text-sm font-bold">0 → 1 Product</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Platform</h4>
              <p className="text-sm font-bold">Web SaaS</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 mb-2">Domain</h4>
              <p className="text-sm font-bold">AI-Enabled Platform</p>
            </div>
          </div>

          <div className="space-y-16">
            <p className="text-xl md:text-2xl font-bold leading-tight">
              “Led end-to-end product design from early concept through structured platform architecture.”
            </p>
            
            <div className="space-y-4">
              <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/zyprova-cs/1200/800" 
                  alt="Zyprova Dashboard Overview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs italic text-brand-ink/40">“High-level dashboard showing the platform's modular structure and AI-driven insights.”</p>
            </div>
          </div>
        </header>

        {/* Context Section */}
        <section id="context" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Zyprova started as an early-stage SaaS concept aiming to solve complex operational challenges through AI. As the primary design partner, I was tasked with turning an abstract vision into a functional, scalable platform.
              </p>
              <div className="space-y-4">
                <h4 className="text-sm font-bold">The challenge:</h4>
                <ul className="space-y-3">
                  <li className="text-sm text-brand-ink/60 flex gap-3">
                    <span className="text-brand-ink/20">—</span> No established product structure
                  </li>
                  <li className="text-sm text-brand-ink/60 flex gap-3">
                    <span className="text-brand-ink/20">—</span> Undefined workflows
                  </li>
                  <li className="text-sm text-brand-ink/60 flex gap-3">
                    <span className="text-brand-ink/20">—</span> Evolving feature scope
                  </li>
                  <li className="text-sm text-brand-ink/60 flex gap-3">
                    <span className="text-brand-ink/20">—</span> Ambiguous user needs
                  </li>
                  <li className="text-sm text-brand-ink/60 flex gap-3">
                    <span className="text-brand-ink/20">—</span> Early technical constraints
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-12">
            <p className="text-2xl font-bold italic">“How do you design clarity when the product itself is still forming?”</p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
              <img 
                src="https://picsum.photos/seed/zyprova-cap/1200/800" 
                alt="Early Concept Exploration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs italic text-brand-ink/40">“Initial exploration of capacity planning and system mapping.”</p>
          </div>
        </section>

        {/* Core Challenge Section */}
        <section id="challenge" className="py-24 space-y-16 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Core Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Ambiguity in Product Direction</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• Undefined scope</li>
                <li>• Feature creep risk</li>
                <li>• Changing priorities</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Workflow Architecture</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• How users move through the system</li>
                <li>• How AI integrates into workflows</li>
                <li>• What should be automated vs manual</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Scalability from Day One</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• Avoid short-term UI decisions</li>
                <li>• Create extensible patterns</li>
                <li>• Think modular</li>
              </ul>
            </div>
          </div>
          <p className="text-xl font-bold">“In early-stage products, structure is strategy.”</p>
          <div className="space-y-4">
            <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
              <img 
                src="https://picsum.photos/seed/zyprova-ia/1200/800" 
                alt="Information Architecture Diagram" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs italic text-brand-ink/40">“Information architecture map showing the complex system structure and user flows.”</p>
          </div>
        </section>

        {/* My Role Section */}
        <section id="role" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">My Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              <ul className="space-y-4">
                {[
                  "Defined platform information architecture",
                  "Designed core workflows",
                  "Translated AI capabilities into understandable UI patterns",
                  "Structured user journeys end-to-end",
                  "Created reusable design components",
                  "Partnered directly with founders and engineering"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold pt-8">“Operated as the primary product design partner during the 0→1 phase.”</p>
            </div>
          </div>
        </section>

        {/* Strategic Design Approach Section */}
        <section id="approach" className="py-24 space-y-16 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Strategic Design Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1) Define Core Value Loop",
                points: ["Identify key user actions", "Structure around repeated behavior", "Clarify output vs input"]
              },
              {
                title: "2) Make AI Explainable",
                points: ["Clear system feedback", "Transparent states", "Avoid black-box confusion"]
              },
              {
                title: "3) Modular System Thinking",
                points: ["Reusable patterns", "Extensible layout logic", "Scalable architecture"]
              },
              {
                title: "4) Reduce Onboarding Friction",
                points: ["Guided setup", "Contextual help", "Progressive disclosure"]
              }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-brand-ink/5 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <ul className="space-y-2 text-sm text-brand-ink/60">
                  {card.points.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
              <img 
                src="https://picsum.photos/seed/zyprova-analytics/1200/800" 
                alt="Refined Analytics Workflow" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs italic text-brand-ink/40">“Structured analytics workflow replacing early ambiguity with data clarity.”</p>
          </div>
        </section>

        {/* Key Product Areas Section */}
        <section id="product" className="py-24 space-y-24 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Key Product Areas</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">A) Onboarding & Organization Setup</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Reduce activation friction and clarify the first success moment through guided organization creation.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/zyprova-org/1200/800" 
                  alt="Organization Creation Flow" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs italic text-brand-ink/40">“Clear first-run experience guiding users through organization setup.”</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">B) Permissions & Role-Based Access (RBAC)</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Granular control over user access and system permissions in a multi-tenant environment.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/zyprova-rbac/1200/800" 
                  alt="RBAC Management UI" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs italic text-brand-ink/40">“Demonstrating clarity in complex permission management and role definitions.”</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">C) Financial Management & Billing</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Structured overview of financial data, billing cycles, and resource allocation.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/9] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/zyprova-finance/1200/800" 
                  alt="Financial Management Dashboard" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs italic text-brand-ink/40">“Organized financial layout with scalable modular structure for billing data.”</p>
            </div>
          </div>
        </section>

        {/* Systems Section */}
        <section id="systems" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Systems & Design Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {[
                  "Built foundational component library",
                  "Defined interaction patterns",
                  "Established visual language",
                  "Ensured extensibility for future modules",
                  "Created alignment between product and engineering"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* No image for systems foundation yet */}
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {[
                  "Created structured product foundation from ambiguity",
                  "Reduced cognitive friction in AI workflows",
                  "Enabled scalable feature expansion",
                  "Strengthened product clarity and usability",
                  "Improved cross-functional alignment"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold pt-8">“By defining structure early, we prevented complexity from compounding.”</p>
            </div>
          </div>
          {/* No image for impact comparison yet */}
        </section>

        {/* Demonstrates Section */}
        <section id="demonstrates" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">What This Project Demonstrates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4">
              {[
                "0→1 product thinking",
                "Workflow architecture",
                "AI interaction design"
              ].map((item, i) => (
                <li key={i} className="text-lg flex gap-4">
                  <span className="text-brand-ink/20">—</span> {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "Systems-level thinking",
                "Cross-functional partnership",
                "Designing under ambiguity"
              ].map((item, i) => (
                <li key={i} className="text-lg flex gap-4">
                  <span className="text-brand-ink/20">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="py-24 space-y-12">
          <p className="text-2xl md:text-4xl font-light leading-tight italic text-brand-ink/80">
            “In early-stage products, design is not just interface — it is the act of defining structure. Zyprova strengthened my ability to turn evolving ideas into scalable product systems.”
          </p>
        </section>

        {/* Footer Section */}
        <CaseStudyFooter currentId="zyprova" onBack={onBack} />
      </div>
    </div>
  );
}
function HisaabCaseStudy({ onBack }: { onBack: () => void }) {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'context', label: 'Context' },
    { id: 'challenge', label: 'Core Challenge' },
    { id: 'role', label: 'My Role' },
    { id: 'principles', label: 'Strategic Principles' },
    { id: 'flows', label: 'Key Flows' },
    { id: 'system', label: 'Design System' },
    { id: 'impact', label: 'Impact' },
    { id: 'demonstrates', label: 'Demonstrates' },
    { id: 'reflection', label: 'Reflection' },
  ];

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg font-sans">
      <ScrollToTop />
      {/* Sticky Nav (Desktop) */}
      <aside className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 w-48 z-40">
        <nav className="space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                activeSection === section.id ? 'text-brand-ink translate-x-2' : 'text-brand-ink/20 hover:text-brand-ink/40'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Nav (Collapsible) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-md z-50 border-b border-brand-ink/5">
        <details className="group">
          <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
            <span className="text-[10px] uppercase tracking-widest font-bold">Jump to section</span>
            <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
          </summary>
          <nav className="px-6 pb-6 space-y-4 bg-brand-bg">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 hover:text-brand-ink"
                onClick={() => {
                  const details = document.querySelector('details');
                  if (details) (details as any).open = false;
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </details>
      </div>

      <div className="max-w-[960px] mx-auto px-6 lg:px-0">
        {/* Hero Section */}
        <header id="hero" className="pt-32 lg:pt-48 pb-24 border-b border-brand-ink/5">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40 hover:text-brand-ink transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Work
          </button>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
            Hisaab — Simplifying Financial Tracking for Small Businesses
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-brand-ink/60 max-w-3xl leading-tight mb-16">
            Designing a clear, trustworthy digital ledger experience for daily transaction management.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-brand-ink/5 mb-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Role</h4>
              <p className="text-sm font-bold">Product Designer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Platform</h4>
              <p className="text-sm font-bold">Mobile</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Domain</h4>
              <p className="text-sm font-bold">Fintech / Ledger</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-2">Users</h4>
              <p className="text-sm font-bold">Small Business Owners</p>
            </div>
          </div>

          <div className="space-y-16">
            <p className="text-xl md:text-2xl font-bold leading-tight">
              “Designed financial interfaces where clarity directly impacts trust and decision-making.”
            </p>
            
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl overflow-hidden border border-brand-ink/5">
                <img 
                  src="https://picsum.photos/seed/hisaab-cs/1200/800" 
                  alt="Hisaab Ledger Overview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs italic text-brand-ink/40">“High-level ledger dashboard showing balance, recent transactions, and account summaries.”</p>
            </div>
          </div>
        </header>

        {/* Context Section */}
        <section id="context" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Many small businesses rely on informal bookkeeping methods (paper records, memory, spreadsheets). Financial tracking errors lead to cash flow confusion, missed payments, disputes, and poor business visibility.
              </p>
              <p className="text-lg leading-relaxed">
                Hisaab was designed to digitize and simplify daily financial tracking, moving businesses from "mental math" to a structured digital record.
              </p>
            </div>
          </div>
          <div className="py-12">
            <p className="text-2xl font-bold italic">“How do you make financial data approachable for non-technical business owners?”</p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: User Context Scenario</span>
            </div>
            <p className="text-xs italic text-brand-ink/40">“Example scenario of small retailer managing daily transactions.”</p>
          </div>
        </section>

        {/* Core Challenge Section */}
        <section id="challenge" className="py-24 space-y-16 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Core Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Financial Clarity vs Data Overload</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• Transaction lists</li>
                <li>• Running balances</li>
                <li>• Credits vs debits</li>
                <li>• Historical records</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Trust & Transparency</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• Users must trust calculations</li>
                <li>• Errors reduce product credibility</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Mental Models</h3>
              <ul className="space-y-2 text-sm text-brand-ink/60">
                <li>• Non-financially trained users</li>
                <li>• Need intuitive structure</li>
              </ul>
            </div>
          </div>
          <p className="text-xl font-bold">“In fintech products, clarity builds trust — and trust builds retention.”</p>
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Early Ledger Layout</span>
            </div>
            <p className="text-xs italic text-brand-ink/40">“Initial layout showing complexity or unclear transaction hierarchy.”</p>
          </div>
        </section>

        {/* My Role Section */}
        <section id="role" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">My Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              <ul className="space-y-4">
                {[
                  "Defined financial information architecture",
                  "Designed transaction list + detail views",
                  "Structured balance & account overview patterns",
                  "Simplified credit/debit visualization",
                  "Conducted usability testing",
                  "Collaborated closely with engineering"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold pt-8">“Worked at the intersection of financial logic and user comprehension.”</p>
            </div>
          </div>
        </section>

        {/* Strategic Design Principles Section */}
        <section id="principles" className="py-24 space-y-16 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Strategic Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1) Make Financial States Explicit",
                points: ["Clear credit vs debit indicators", "Running balance visibility", "Consistent visual semantics"]
              },
              {
                title: "2) Reduce Cognitive Math",
                points: ["Pre-calculated totals", "Automatic summaries", "Clear grouping"]
              },
              {
                title: "3) Support Daily Habit Loops",
                points: ["Quick add transaction", "Easy editing", "Search & filtering"]
              },
              {
                title: "4) Design for Trust",
                points: ["Transparent history", "Clear confirmations", "Minimal ambiguity"]
              }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-brand-ink/5 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <ul className="space-y-2 text-sm text-brand-ink/60">
                  {card.points.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Improved Ledger Hierarchy</span>
            </div>
            <p className="text-xs italic text-brand-ink/40">“Show clearer credit/debit distinction and running balance visibility.”</p>
          </div>
        </section>

        {/* Key Flows Section */}
        <section id="flows" className="py-24 space-y-24 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Key Flows</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">A) Transaction Logging</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Fast entry, error prevention, and clear category selection.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Add Transaction Flow</span>
              </div>
              <p className="text-xs italic text-brand-ink/40">“Streamlined transaction entry with minimal friction.”</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">B) Ledger Overview</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Daily summaries, account-level clarity, and visual grouping.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Ledger Grouped View</span>
              </div>
              <p className="text-xs italic text-brand-ink/40">“Grouped transactions by date with running balances.”</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">C) Account Detail & History</h3>
              <p className="text-brand-ink/60 max-w-2xl">Focus: Drill-down clarity, historical transparency, and reduced ambiguity.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Account Detail Screen</span>
              </div>
              <p className="text-xs italic text-brand-ink/40">“Transaction breakdown with clear financial state indicators.”</p>
            </div>
          </div>
        </section>

        {/* Design System Section */}
        <section id="system" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Design System & Scalability</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {[
                  "Established consistent color semantics (green/red etc.)",
                  "Standardized typography for financial data",
                  "Built reusable financial UI components",
                  "Created scalable layout foundation"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Financial Component System</span>
            </div>
            <p className="text-xs italic text-brand-ink/40">“Reusable components for balances, transaction cards, and summaries.”</p>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {[
                  "Improved financial clarity for small business owners",
                  "Reduced confusion in credit/debit tracking",
                  "Increased confidence in transaction history",
                  "Created scalable foundation for future fintech features"
                ].map((item, i) => (
                  <li key={i} className="text-lg flex gap-4">
                    <span className="text-brand-ink/20">—</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold pt-8">“By simplifying financial visibility, we enabled better day-to-day business decisions.”</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-brand-ink/5 rounded-2xl flex items-center justify-center border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/20">PLACEHOLDER: Before/After Comparison</span>
            </div>
            <p className="text-xs italic text-brand-ink/40">“Show improved clarity and structure versus earlier version.”</p>
          </div>
        </section>

        {/* Demonstrates Section */}
        <section id="demonstrates" className="py-24 space-y-12 border-b border-brand-ink/5">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-ink/40">What This Project Demonstrates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4">
              {[
                "Fintech UX literacy",
                "Financial information architecture",
                "Designing for trust"
              ].map((item, i) => (
                <li key={i} className="text-lg flex gap-4">
                  <span className="text-brand-ink/20">—</span> {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "Mental model simplification",
                "Clear transaction systems",
                "Cross-functional collaboration"
              ].map((item, i) => (
                <li key={i} className="text-lg flex gap-4">
                  <span className="text-brand-ink/20">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="py-24 space-y-12">
          <p className="text-2xl md:text-4xl font-light leading-tight italic text-brand-ink/80">
            “In financial products, design is not decoration — it is risk mitigation. Clear transaction systems reduce anxiety, increase confidence, and build long-term user trust.”
          </p>
        </section>

        {/* Footer Section */}
        <CaseStudyFooter currentId="hisaab" onBack={onBack} />
      </div>
    </div>
  );
}

function NuSoftCaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg">
      <ScrollToTop />
      <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <button onClick={onBack} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity cursor-pointer">Back</button>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold">nuSoft — 2023</div>
      </nav>
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-[960px] mx-auto space-y-24">
        <header className="space-y-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            nuSoft: AI-Powered SaaS for Supply Chain
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-brand-ink/80 max-w-4xl leading-tight">
            Building 0→1 product architecture for complex enterprise workflows, integrating AI to drive operational efficiency.
          </p>
        </header>
        <section className="py-32 border-y border-brand-ink/10 flex items-center justify-center bg-brand-ink/5 rounded-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/40">Full Case Study Content Coming Soon</p>
        </section>
        <CaseStudyFooter currentId="nusoft" onBack={onBack} />
      </div>
    </div>
  );
}

function HeycarCaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg">
      <ScrollToTop />
      <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <button onClick={onBack} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity cursor-pointer">Back</button>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold">heycar — 2022</div>
      </nav>
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-[960px] mx-auto space-y-24">
        <header className="space-y-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            heycar: Scaling Design Foundations Globally
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-brand-ink/80 max-w-4xl leading-tight">
            Building a multi-market design system to unify the car buying experience across different regions and platforms.
          </p>
        </header>
        <section className="py-32 border-y border-brand-ink/10 flex items-center justify-center bg-brand-ink/5 rounded-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-ink/40">Full Case Study Content Coming Soon</p>
        </section>
        <CaseStudyFooter currentId="heycar" onBack={onBack} />
      </div>
    </div>
  );
}
