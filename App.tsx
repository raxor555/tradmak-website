import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight, BarChart3, Globe2, Zap, BrainCircuit, Container, Activity, TrendingUp, Search, Layers, Box, Cpu, ChevronRight, MessageSquare, Clock, ArrowUp } from 'lucide-react';
import { 
  GridSystem, SwissGrid, Section, HeroHeadline, SectionHeadline, SubHeadline, 
  BodyText, MonoLabel, SectionNumber, 
  ButtonPrimary, ButtonOutline, TextLink, 
  Input, TextArea, Card 
} from './components/UI';
import { AIAgentsPage } from './components/AIAgentsPage';
import { AIChatbotsPage } from './components/AIChatbotsPage';
import { AaaSPage } from './components/AaaSPage';
import { ScheduleDemoPage } from './components/ScheduleDemoPage';

interface FadeInItemProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Animation wrapper component
const FadeInItem: React.FC<FadeInItemProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'} motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>("");
  
  // Routing State
  const [activePage, setActivePage] = useState<'home' | 'ai-agents' | 'ai-chatbots' | 'aaas' | 'schedule-demo'>('home');
  
  // Typing animation state
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 800);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // GMT+4 Time updater
    const timer = setInterval(() => {
      const d = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Dubai', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      };
      setTime(d.toLocaleTimeString('en-US', options));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const word = "Digitalization";
    let typeSpeed = 150;
    
    if (isDeleting) {
      typeSpeed = 75;
    }
    
    if (!isDeleting && typingText === word) {
      typeSpeed = 2000; // Pause at end before deleting
    } else if (isDeleting && typingText === "") {
      typeSpeed = 500; // Pause before starting to type again
    }
    
    const timer = setTimeout(() => {
      if (!isDeleting && typingText === word) {
        setIsDeleting(true);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
      } else {
        setTypingText(prev => {
          if (isDeleting) {
            return word.substring(0, prev.length - 1);
          } else {
            return word.substring(0, prev.length + 1);
          }
        });
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [typingText, isDeleting]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: 'home' | 'ai-agents' | 'ai-chatbots' | 'aaas' | 'schedule-demo', sectionId?: string) => {
    setMobileMenuOpen(false);
    
    if (page !== activePage) {
      setActivePage(page);
      // Wait for render then scroll
      setTimeout(() => {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // Same page navigation
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Company', page: 'home', section: 'about' },
    { label: 'AI Agents', page: 'ai-agents', section: undefined },
    { label: 'AI Chatbots', page: 'ai-chatbots', section: undefined },
    { label: 'AaaS', page: 'aaas', section: undefined },
    { label: 'Contact', page: 'home', section: 'contact' }
  ] as const;

  return (
    <div className="relative min-h-screen bg-creme text-black font-sans selection:bg-blue-swiss selection:text-white overflow-hidden">
      
      {/* Background Grid Lines - Light Mode */}
      <GridSystem />

      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-creme/90 backdrop-blur-xl border-gray-200' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-12 h-20 md:h-24 items-center">
            
            {/* Logo */}
            <div className="col-span-6 md:col-span-3 flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-swiss border border-blue-swiss backdrop-blur-md rounded-none">
                <div className="w-3 h-3 bg-white shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-black leading-none">TRADMAK</span>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase leading-none mt-1">FZCO DUBAI</span>
              </div>
            </div>

            {/* Desktop Nav - Adjusted Spans */}
            <nav className="hidden md:col-span-5 md:flex justify-center h-full">
              <div className="flex h-full items-center gap-1 rounded-full px-2">
                {navItems.map((item) => (
                  <button 
                    key={item.label} 
                    onClick={() => navigateTo(item.page, item.section)}
                    className={`text-xs font-medium uppercase tracking-widest px-3 lg:px-4 py-2 rounded-none transition-all duration-300 ${activePage === item.page && !item.section ? 'text-black bg-black/5 font-bold' : 'text-gray-500 hover:text-black hover:bg-black/5'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop CTA & Time - Adjusted Spans */}
            <div className="hidden md:col-span-4 md:flex justify-end items-center gap-4">
              <div className="hidden xl:block text-right mr-2">
                <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">DXB (GMT+4)</span>
                <span className="block text-xs font-mono text-blue-swiss font-medium">{time}</span>
              </div>
              
              <button 
                onClick={() => navigateTo('schedule-demo')}
                className="group relative bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-5 border border-black transition-all duration-300"
              >
                Schedule Demo
              </button>

              <button 
                onClick={() => navigateTo('home', 'contact')}
                className="group relative bg-white hover:bg-white/80 text-black text-xs font-bold uppercase tracking-wider py-3 px-6 border border-gray-300 transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-blue-swiss transition-colors">Inquire</span>
                <div className="absolute inset-0 bg-blue-swiss/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="col-span-6 md:hidden flex justify-end">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black p-2 border border-gray-300 bg-white/50 backdrop-blur-md">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-creme transform transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <GridSystem />
        <div className="relative z-10 flex flex-col h-full justify-center px-8 space-y-8">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => navigateTo(item.page, item.section)}
              className="text-left text-4xl font-bold text-black uppercase tracking-tighter hover:text-blue-swiss transition-colors border-l-2 border-transparent hover:border-blue-swiss pl-4"
            >
              {item.label}
            </button>
          ))}
          
          <button 
              onClick={() => navigateTo('schedule-demo')}
              className="text-left text-4xl font-bold text-black uppercase tracking-tighter hover:text-blue-swiss transition-colors border-l-2 border-transparent hover:border-blue-swiss pl-4"
          >
              Schedule Demo
          </button>

          <div className="pt-12">
             <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-2">Current Time (DXB)</div>
             <div className="text-xl font-mono text-blue-swiss">{time}</div>
          </div>
        </div>
      </div>

      <main>
        {activePage === 'ai-agents' ? (
          <AIAgentsPage />
        ) : activePage === 'ai-chatbots' ? (
          <AIChatbotsPage />
        ) : activePage === 'aaas' ? (
          <AaaSPage />
        ) : activePage === 'schedule-demo' ? (
          <ScheduleDemoPage />
        ) : (
          <>
            {/* --- PREMIUM HERO SECTION --- */}
            <section id="hero" className="relative h-screen min-h-[600px] flex flex-col overflow-hidden border-b border-gray-200">
              
              {/* Animated Shader Background (Light Mode) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Creme base */}
                <div className="absolute inset-0 bg-creme"></div>
                
                {/* Animated Blobs (Shaders) - Soft Blue and Purple Blend */}
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-swiss/10 rounded-full blur-[120px] mix-blend-multiply animate-blob filter"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-accent/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000 filter"></div>
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-blue-bright/10 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000 filter"></div>
                
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]"></div>
                
                {/* Vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(247,247,245,0.8)_100%)]"></div>
              </div>

              <SwissGrid className="relative z-10 h-full pointer-events-none">
                {/* Left Content: Typography */}
                <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center pb-8 pointer-events-auto relative z-20">
                  <div className="animate-fade-in-up">
                    
                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="h-[1px] w-8 bg-blue-swiss"></div>
                      <span className="text-[10px] font-mono text-blue-swiss uppercase tracking-widest">Next Gen Logistics</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-black leading-[0.9] tracking-tighter uppercase font-sans mb-6">
                      Empowering <br />
                      <span className="text-transparent bg-clip-text bg-gradient-accent">Global Trade</span>
                    </h1>
                    
                    {/* Sub-headline */}
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8 max-w-4xl">
                      <div className="text-xl md:text-2xl font-montserrat font-light text-gray-800 leading-tight">
                        through Intelligent <span className="font-semibold text-blue-swiss">{typingText}</span><span className="animate-blink text-blue-swiss">|</span>
                      </div>
                    </div>

                    {/* Description & CTAs */}
                    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 border-t border-gray-300 pt-6 max-w-2xl">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg">
                        Partnering with manufacturing leaders to optimize international supply chains through advanced digitalization and strategic foresight.
                      </p>
                      
                      <div className="flex gap-4 shrink-0">
                        <ButtonPrimary onClick={() => navigateTo('home', 'services')} className="py-4 px-8 text-xs bg-gradient-accent hover:shadow-purple-accent/30">
                          Explore Capabilities
                        </ButtonPrimary>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content: AI Trade Glassmorphism Component */}
                <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center items-end pointer-events-none md:pointer-events-auto relative z-10 hidden lg:flex">
                  <div className="w-full max-w-[420px] mr-0 animate-fade-in-right delay-200 animate-float">
                    
                    {/* Main Glass Card (Light Mode) */}
                    <div className="relative glass-card p-6 backdrop-blur-xl border border-white/60 shadow-xl">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center gap-3">
                          <div className="relative p-2 bg-blue-swiss/10 border border-blue-swiss/20">
                            <Cpu className="w-5 h-5 text-blue-swiss" />
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-swiss rounded-full animate-pulse shadow-[0_0_8px_#0047FF]"></div>
                          </div>
                          <div>
                            <div className="text-[9px] font-mono text-blue-swiss uppercase tracking-widest mb-0.5">Trade OS v2.4</div>
                            <div className="text-lg font-bold text-black tracking-tight">Supply Chain AI</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] font-mono text-gray-500 uppercase">Optimization</div>
                          <div className="text-green-600 font-mono font-bold text-base">99.1%</div>
                        </div>
                      </div>
                      
                      {/* Visualization Area: Active Route */}
                      <div className="relative h-40 mb-5 bg-white border border-gray-200 p-4 overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        
                        {/* Connection Lines */}
                        <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-gray-300"></div>
                        <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-blue-swiss/50 blur-[1px] animate-pulse"></div>
                        
                        {/* Nodes */}
                        <div className="absolute top-1/2 left-6 w-3 h-3 bg-white border border-gray-500 rounded-full transform -translate-y-1/2 z-10"></div>
                        <div className="absolute top-1/2 right-6 w-3 h-3 bg-blue-swiss border border-blue-swiss rounded-full transform -translate-y-1/2 z-10 shadow-lg"></div>
                        
                        {/* Moving Packet */}
                        <div className="absolute top-1/2 left-6 w-32 h-1 bg-gradient-to-r from-transparent via-blue-swiss to-transparent transform -translate-y-1/2 animate-slide-right z-0"></div>

                        {/* Floating Labels */}
                        <div className="absolute top-6 left-6 text-[9px] font-mono text-gray-500">ORIGIN: DUBAI</div>
                        <div className="absolute bottom-6 right-6 text-[9px] font-mono text-black text-right">DEST: ROTTERDAM<br/><span className="text-green-600">ETA: -2h</span></div>
                      </div>

                      {/* Metrics Rows */}
                      <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-200">
                        <div className="bg-white p-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-2 mb-1.5 text-gray-500">
                            <Box className="w-3 h-3" />
                            <span className="text-[9px] font-mono uppercase">Vol. Metric</span>
                          </div>
                          <div className="text-black font-mono text-xs">42,850 TEU</div>
                        </div>
                        <div className="bg-white p-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-2 mb-1.5 text-gray-500">
                            <Layers className="w-3 h-3" />
                            <span className="text-[9px] font-mono uppercase">Efficiency</span>
                          </div>
                          <div className="text-black font-mono text-xs">+12.4% <span className="text-green-600 text-[9px]">▲</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Layer Underneath */}
                    <div className="absolute -z-10 top-8 -right-4 w-full h-full border border-gray-300 bg-white/40 backdrop-blur-sm"></div>

                  </div>
                </div>

              </SwissGrid>
            </section>

            {/* --- ABOUT SECTION --- */}
            <Section id="about" className="relative overflow-hidden">
              {/* Subtle Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -z-10 pointer-events-none border border-gray-100"></div>

              <SectionNumber number="01" className="left-0 top-0" />
              
              <SwissGrid>
                <div className="col-span-12 lg:col-span-4 pt-4 lg:pt-0">
                  <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Company Profile</MonoLabel>
                  <SectionHeadline>Precision<br/>in Motion</SectionHeadline>
                </div>
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-12 pt-8 lg:pt-0">
                  <div className="border-l border-gray-300 pl-8 md:pl-12">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black font-light leading-snug tracking-tight mb-8">
                      We envision a dynamic ecosystem where technology accelerates trade efficiency, sustainability, and inclusivity.
                    </p>
                    <BodyText className="max-w-3xl text-gray-600">
                      TradMAK leads in industrial B2B business optimization. We don't just move goods; we engineer the flow of international commerce using lean methodologies and cutting-edge SaaS infrastructure to mitigate fragmentation risks.
                    </BodyText>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 pt-8">
                    {[
                      { label: 'Founded', value: 'Dubai' },
                      { label: 'Sector', value: 'Industrial B2B' },
                      { label: 'Focus', value: 'Digital Trade' }
                    ].map(stat => (
                      <div key={stat.label}>
                          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">{stat.label}</div>
                          <div className="text-xl text-black font-medium">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwissGrid>
            </Section>

            {/* --- SERVICES SECTION (TIMELINE) --- */}
            <Section id="services" className="bg-white relative">
              
              <SectionNumber number="02" className="right-0 top-0" />
              
              <SwissGrid className="mb-24">
                <div className="col-span-12 flex flex-col items-center text-center">
                  <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Our Capabilities</MonoLabel>
                  <SectionHeadline className="mb-6">Core Services</SectionHeadline>
                  <p className="text-gray-600 max-w-xl mx-auto text-lg">
                    Integrated solutions across optimization, trade execution, and technological infrastructure.
                  </p>
                </div>
              </SwissGrid>

              <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 pb-24">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2"></div>

                <div className="space-y-32">
                  
                  {/* Block 1 - Left */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    {/* Anchor Point */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-blue-swiss -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-blue-swiss group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
                    
                    {/* Left Content */}
                    <div className="md:text-right md:pr-24 pl-12 md:pl-0 pt-1 md:pt-0 transition-transform duration-500 group-hover:scale-[1.01] origin-right">
                        <div className="font-mono text-8xl font-bold text-gray-100 mb-6 transition-colors duration-500 group-hover:text-blue-swiss/10">01</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6 tracking-tight">Business<br/>Optimization</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 ml-auto max-w-xl transition-colors duration-500 group-hover:text-black">
                          A business process optimization partner for manufacturing units streamlines operations by integrating lean methodologies, advanced analytics, and automation to eliminate inefficiencies.
                        </p>
                        <ul className="space-y-4 flex flex-col md:items-end">
                            {['Trade & Distribution Management', 'Process Analysis & Redesign', 'Sustainability Integration'].map(item => (
                              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-mono uppercase flex-row md:flex-row-reverse group-hover:text-blue-swiss transition-colors duration-300">
                                  <div className="w-1.5 h-1.5 bg-blue-swiss shrink-0 transition-all duration-300 group-hover:bg-blue-bright group-hover:scale-150"></div> 
                                  <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Right Empty -> VISUAL */}
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <BarChart3 className="w-64 h-64 stroke-[0.5]" />
                    </div>
                  </div>

                  {/* Block 2 - Right */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    {/* Anchor Point */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-black -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-black group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
                    
                    {/* Left Empty -> VISUAL */}
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <Globe2 className="w-64 h-64 stroke-[0.5]" />
                    </div>
                    
                    {/* Right Content */}
                    <div className="pl-12 md:pl-24 pt-1 md:pt-0 transition-transform duration-500 group-hover:scale-[1.01] origin-left">
                        <div className="font-mono text-8xl font-bold text-gray-100 mb-6 transition-colors duration-500 group-hover:text-black/5">02</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6 tracking-tight">International<br/>Trade</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl transition-colors duration-500 group-hover:text-black">
                          Leveraging supply chains, regulatory compliance, and market expertise to manage cross-border transactions. Collaboration includes sourcing raw materials and distributing specialty chemicals.
                        </p>
                        <ul className="space-y-4">
                            {['Specialty Chemicals Distribution', 'Regulatory Adherence', 'Blockchain & AI Forecasting'].map(item => (
                              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-mono uppercase group-hover:text-blue-swiss transition-colors duration-300">
                                  <div className="w-1.5 h-1.5 bg-blue-swiss shrink-0 transition-all duration-300 group-hover:bg-blue-bright group-hover:scale-150"></div> 
                                  <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                  </div>

                  {/* Block 3 - Left */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    {/* Anchor Point */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-blue-swiss -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-blue-swiss group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
                    
                    {/* Left Content */}
                    <div className="md:text-right md:pr-24 pl-12 md:pl-0 pt-1 md:pt-0 transition-transform duration-500 group-hover:scale-[1.01] origin-right">
                        <div className="font-mono text-8xl font-bold text-gray-100 mb-6 transition-colors duration-500 group-hover:text-blue-swiss/10">03</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6 tracking-tight">Digitalization<br/>Tech</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 ml-auto max-w-xl transition-colors duration-500 group-hover:text-black">
                          Digitalization in SaaS uses AI, machine learning, and analytics to reshape marketing and operations. Campaigns become personalized, automated, and driven by real-time insight.
                        </p>
                        <ul className="space-y-4 flex flex-col md:items-end">
                            {['Scalable Cloud & DevOps', 'CRM & Predictive Analytics', 'Hyper-personalized Experiences'].map(item => (
                              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-mono uppercase flex-row md:flex-row-reverse group-hover:text-blue-swiss transition-colors duration-300">
                                  <div className="w-1.5 h-1.5 bg-blue-swiss shrink-0 transition-all duration-300 group-hover:bg-blue-bright group-hover:scale-150"></div> 
                                  <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Empty -> VISUAL */}
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <BrainCircuit className="w-64 h-64 stroke-[0.5]" />
                    </div>
                  </div>

                </div>
              </div>
            </Section>

            {/* --- APPROACH / DIFFERENTIATORS --- */}
            <Section id="approach" className="overflow-hidden bg-creme">
              <SectionNumber number="03" className="left-0 top-0" />
              
              <SwissGrid className="mb-20 relative z-10">
                <div className="col-span-12 md:col-span-6">
                  <MonoLabel className="mb-4">Why TradMAK</MonoLabel>
                  <SectionHeadline className="mb-6">The Competitive<br/>Advantage</SectionHeadline>
                </div>
                <div className="col-span-12 md:col-span-6 md:pt-10">
                  <p className="text-xl text-gray-600 max-w-lg leading-relaxed border-l border-gray-300 pl-8">
                    Focused strategic clarity, analytical rigor, and disciplined execution to drive innovation.
                  </p>
                </div>
              </SwissGrid>

              <SwissGrid className="relative z-10">
                {/* Expanded Grid with Gaps */}
                <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: '01', title: 'Strategic Vision', desc: 'Aligning efforts with long-term business objectives to drive purposeful growth and innovation.' },
                    { id: '02', title: 'Process Efficiency', desc: 'Streamlining workflows with precision to eliminate waste and enhance productivity.' },
                    { id: '03', title: 'Data-Driven Insight', desc: 'Leveraging analytics to make informed, objective decisions that prioritize impactful outcomes.' },
                    { id: '04', title: 'Prioritization', desc: 'Identifying and executing high-value tasks that align with organizational goals.' },
                    { id: '05', title: 'Problem Solving', desc: 'Addressing challenges systematically while staying aligned with broader priorities.' },
                    { id: '06', title: 'Collaborative', desc: 'Engaging stakeholders to unify efforts and resources toward shared objectives.' }
                  ].map((item, index) => (
                    <FadeInItem key={item.id} delay={index * 100} className="h-full">
                      <div className="group border border-gray-200 bg-white p-8 md:p-10 hover:border-blue-swiss hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                        {/* Subtle Top Accent */}
                        <div className="absolute top-0 left-0 w-0 h-[3px] bg-blue-swiss transition-all duration-500 group-hover:w-full"></div>
                        
                        <div className="flex justify-between items-start mb-6">
                          <span className="font-mono text-xs text-gray-400 group-hover:text-blue-swiss transition-colors">{item.id}</span>
                          <div className="w-2 h-2 bg-gray-200 group-hover:bg-blue-swiss transition-colors"></div>
                        </div>
                        <h4 className="text-xl font-bold text-black uppercase tracking-wide mb-4 group-hover:text-blue-swiss transition-colors">{item.title}</h4>
                        <p className="text-base text-gray-600 leading-relaxed mt-auto">{item.desc}</p>
                      </div>
                    </FadeInItem>
                  ))}
                </div>
              </SwissGrid>
            </Section>

            {/* --- CONTACT & FOOTER --- */}
            <Section id="contact" className="bg-white pb-0 border-b-0">
              <SectionNumber number="04" className="right-0 top-0" />
              
              <SwissGrid className="relative z-10 mb-24">
                <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
                  <MonoLabel className="mb-4">Get in touch</MonoLabel>
                  <SectionHeadline className="mb-8">Start the<br/>Conversation</SectionHeadline>
                  <p className="text-gray-600 mb-12 max-w-md text-lg leading-relaxed">
                    Contact our trade experts to discuss how we can optimize your supply chain and digital infrastructure.
                  </p>
                  
                  <div className="space-y-10">
                    <div className="border-l border-gray-300 pl-6 group hover:border-blue-swiss transition-colors">
                        <div className="text-xs font-mono text-gray-500 uppercase mb-2 flex items-center gap-2"><MessageSquare size={12} /> Email</div>
                        <a href="mailto:connect@tradmak.com" className="text-xl md:text-2xl text-black hover:text-blue-swiss transition-colors font-medium">connect@tradmak.com</a>
                    </div>
                    <div className="border-l border-gray-300 pl-6 group hover:border-blue-swiss transition-colors">
                        <div className="text-xs font-mono text-gray-500 uppercase mb-2">Location</div>
                        <address className="text-gray-600 not-italic text-lg">
                          TradMAK FZCO<br/>
                          Dubai Silicon Oasis<br/>
                          Dubai, UAE
                        </address>
                    </div>
                    <div className="border-l border-gray-300 pl-6 group hover:border-blue-swiss transition-colors">
                        <TextLink href="https://wa.me/1234567890">WhatsApp Direct</TextLink>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7">
                  <Card className="h-full bg-creme border-gray-200 p-8 md:p-12 shadow-inner">
                      <div className="flex justify-between items-center mb-10">
                        <h3 className="text-2xl font-bold text-black">INQUIRY FORM</h3>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-mono text-green-600 uppercase tracking-widest">Online</span>
                        </div>
                      </div>
                      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input label="First Name" id="fname" type="text" placeholder="John" className="h-16 text-lg px-2" />
                          <Input label="Last Name" id="lname" type="text" placeholder="Doe" className="h-16 text-lg px-2" />
                        </div>
                        <Input label="Corporate Email" id="email" type="email" placeholder="john@company.com" required className="h-16 text-lg px-2" />
                        <TextArea label="Message" id="message" placeholder="Details regarding your inquiry..." className="text-lg px-2 py-2" />
                        
                        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock size={14} />
                            <span className="text-xs">We usually reply within 24 hours.</span>
                          </div>
                          <ButtonPrimary type="submit" className="w-full md:w-auto py-5 px-12 text-base">Submit Inquiry</ButtonPrimary>
                        </div>
                      </form>
                  </Card>
                </div>
              </SwissGrid>

              {/* Big Footer Text - Black accent */}
              <div className="w-full flex justify-center items-center py-12 md:py-24 overflow-hidden bg-black text-white">
                <h2 className="text-[12vw] md:text-[15vw] font-bold text-white leading-none select-none tracking-tighter hover:text-blue-swiss transition-colors duration-500 cursor-default">TRADMAK</h2>
              </div>

              {/* Footer Legal - Dark grounding */}
              <div className="border-t border-gray-800 bg-black py-12 relative z-10 text-white">
                <SwissGrid>
                  <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-swiss"></div>
                        <span className="text-xl font-bold tracking-tight text-white">TRADMAK</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                      © 2025 TradMAK FZCO. All Rights Reserved.
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row justify-end items-end gap-8">
                    <div className="flex gap-6">
                        {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                          <a key={social} href="#" className="text-xs font-mono text-gray-400 hover:text-white uppercase transition-colors relative group">
                              {social}
                              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-swiss transition-all duration-300 group-hover:w-full"></span>
                          </a>
                        ))}
                    </div>
                    <div className="flex gap-6">
                      <a href="#" className="text-xs text-gray-400 hover:text-white font-mono uppercase">Privacy</a>
                      <a href="#" className="text-xs text-gray-400 hover:text-white font-mono uppercase">Terms</a>
                    </div>
                  </div>
                </SwissGrid>
              </div>
            </Section>
          </>
        )}
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 bg-black text-white border border-black shadow-lg transition-all duration-500 transform hover:bg-blue-swiss hover:border-blue-swiss hover:-translate-y-1 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </main>
    </div>
  );
};

export default App;