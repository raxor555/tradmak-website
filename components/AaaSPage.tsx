
import React, { useEffect, useRef, useState } from 'react';
import { 
  Settings, RefreshCw, TrendingUp, CheckCircle, ArrowRight, Layers, Workflow, 
  Server, Cpu, Factory, Scissors, Truck, Building, Zap, FlaskConical, Signal, 
  Landmark, ShieldCheck, BrainCircuit, Users, Database, Terminal
} from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, BodyText, Card, ButtonPrimary, ButtonOutline, SectionNumber } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

const BotIcon = ({size, className}: {size?:number, className?:string}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="10" x="3" y="11" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" x2="8" y1="16" y2="16" />
        <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
);

// --- DATA CONSTANTS ---

const TICKER_ITEMS = [
  "Quicker Innovation", "Virtual Assistance", "Adaptable Solutions", 
  "Tailored Experiences", "Economical", "Instant Insights", 
  "Automation", "Data-Based Choices"
];

const SERVICES = [
  {
    title: "Agent & Workflow Engineering",
    desc: "We build autonomous AI agents and workflows that map out, judge, and operate across systems—transforming intricate processes into self-governing operations that conserve duration and expand smartly.",
    icon: BotIcon
  },
  {
    title: "Protocol Design & Implementation",
    desc: "We devise and implement custom protocols that specify how your AI systems correspond, coordinate, and execute—ensuring uniformity, dependability, and effortless automation across workflows.",
    icon: Workflow
  },
  {
    title: "Local Private AI Secure LLM",
    desc: "We assist businesses in deploying powerful language models (LLMs) locally—no data exits your environment. Gain the advantages of advanced AI whilst preserving complete authority.",
    icon: ShieldCheck
  },
  {
    title: "System Prompt & Context Engineering",
    desc: "We craft precise prompts and context frameworks that direct your AI to contemplate, reply, and act precisely as you require—enhancing dependability, correctness, and alignment with your objectives.",
    icon: Terminal
  }
];

const INDUSTRIES = [
  {
    id: "01",
    title: "AI Operations OS",
    subtitle: "Core Agent Layer",
    purpose: "Functions as the core of the enterprise. Autonomous agents coordinate assignments, workflows, authorizations, memory, and learning across all components.",
    outcome: "Singular intelligent control stratum superseding fragmented software suites.",
    icon: Cpu
  },
  {
    id: "02",
    title: "Manufacturing Intelligence",
    subtitle: "Production & Quality",
    purpose: "Better production, servicing, quality, and resource allocation using autonomous judgment.",
    outcome: "Less downtime, greater output, reduced operational expense.",
    icon: Factory
  },
  {
    id: "03",
    title: "Fashion & Design",
    subtitle: "Trend & Lifecycle",
    purpose: "Facilitate AI-driven imagination, trend gauging, and supply-demand harmonization.",
    outcome: "Expedited design phases, diminished unsold stock, higher sell-through.",
    icon: Scissors
  },
  {
    id: "04",
    title: "Logistics Agents",
    subtitle: "Supply Chain",
    purpose: "Independently manage transit of goods, suppliers, and storage facilities.",
    outcome: "Lower transit costs, immediate insight, robust supply chains.",
    icon: Truck
  },
  {
    id: "05",
    title: "Real Estate Intelligence",
    subtitle: "Property Management",
    purpose: "Centralize property administration, appraisal, sales, and tenant cycle.",
    outcome: "Greater asset utilization, sounder investments, automated processes.",
    icon: Building
  },
  {
    id: "06",
    title: "Electrical & Utilities",
    subtitle: "Infrastructure",
    purpose: "Observe, anticipate, and enhance electrical infrastructure and power consumption.",
    outcome: "Improved dependability, fewer interruptions, optimized energy utilization.",
    icon: Zap
  },
  {
    id: "07",
    title: "Chemical Processing",
    subtitle: "Safety & Compliance",
    purpose: "Oversee complex chemical workflows, safety adherence, and process enhancement.",
    outcome: "Greater output, safer activities, regulatory assurance.",
    icon: FlaskConical
  },
  {
    id: "08",
    title: "Telecom Network",
    subtitle: "Connectivity",
    purpose: "Self-regulating networks with predictive and autonomous command.",
    outcome: "Reduced interruptions, superior QoS, forward-looking network administration.",
    icon: Signal
  },
  {
    id: "09",
    title: "Financial Risk",
    subtitle: "Decision Engine",
    purpose: "Serve as an autonomous financial guardian and decision engine.",
    outcome: "Decreased financial exposure, shrewder capital distribution, regulatory preparedness.",
    icon: Landmark
  }
];

const FAQS = [
  { q: "How does the 'Human In The Loop' work?", a: "We enable your team by granting them the final determination; be it for amplified collaboration, or vital judgment calls. The AI proposes, the human disposes." },
  { q: "What is 80% Automation?", a: "Our goal is to automate 80% of repetitive, high-volume tasks, leaving the strategic 20% to your human experts, ultimately reducing operational costs to 10%." },
  { q: "Do you handle data migration?", a: "Yes. We commence with your data: refining, organizing, and structuring it so your enterprise is truly AI-ready before any agents are deployed." },
  { q: "What are MCP and A2A?", a: "We utilize advanced protocols like Model Context Protocol (MCP) for tool application and Agent-to-Agent (A2A) communication for secure, smooth teamwork between AI systems." }
];

export const AaaSPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-anim", { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" });

      // Metric Counter Animation
      gsap.from(".metric-value", {
        scrollTrigger: { trigger: ".metrics-section", start: "top 85%" },
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 0.2
      });

      // Industry Cards
      gsap.from(".ind-card", {
        scrollTrigger: { trigger: ".industries-grid", start: "top 95%" },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "all"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative border-b border-gray-300 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-blue-swiss/5 rounded-full blur-[140px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-accent/5 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 items-center">
          <div className="col-span-12 lg:col-span-6 z-20">
            <MonoLabel className="mb-6 text-blue-swiss hero-anim" color="text-blue-swiss">AIAaS — Solution</MonoLabel>
            <HeroHeadline className="mb-6 text-left hero-anim">
              Ready. Set.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-swiss to-purple-600">Automate.</span>
            </HeroHeadline>
            <p className="text-xl md:text-2xl text-gray-800 font-light leading-snug mb-10 hero-anim max-w-lg border-l-2 border-black pl-6">
               Our goal? To render AI and automations obtainable for everyone. That is how we even the playing field.
            </p>
            <div className="flex flex-wrap gap-4 hero-anim">
                <ButtonPrimary onClick={() => scrollToSection('about')}>Who we are</ButtonPrimary>
                <ButtonOutline onClick={() => scrollToSection('services')} icon>See Our Offerings</ButtonOutline>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex justify-center items-center mt-12 lg:mt-0 relative hero-anim">
             <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                <div className="absolute w-full h-full border border-gray-200 rounded-full animate-spin-slow opacity-30"></div>
                <div className="absolute w-[80%] h-[80%] border border-dashed border-blue-swiss rounded-full animate-spin-reverse-slow opacity-20"></div>
                <div className="absolute w-[60%] h-[60%] border border-gray-300 rounded-full animate-pulse opacity-40"></div>
                
                <div className="relative w-40 h-40 bg-white/10 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl flex items-center justify-center rotate-45 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-swiss/20 to-purple-500/20 rounded-2xl"></div>
                    <BrainCircuit size={64} className="text-black -rotate-45 relative z-20" />
                </div>

                <div className="absolute top-0 left-1/2 w-16 h-16 bg-white border border-gray-200 shadow-lg rounded-xl flex items-center justify-center animate-float z-20">
                    <Database size={24} className="text-gray-600"/>
                </div>
                <div className="absolute bottom-10 right-0 w-16 h-16 bg-white border border-gray-200 shadow-lg rounded-xl flex items-center justify-center animate-float z-20" style={{animationDelay: '1s'}}>
                    <Users size={24} className="text-gray-600"/>
                </div>
                <div className="absolute bottom-10 left-0 w-16 h-16 bg-white border border-gray-200 shadow-lg rounded-xl flex items-center justify-center animate-float z-20" style={{animationDelay: '2s'}}>
                    <Terminal size={24} className="text-gray-600"/>
                </div>
             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- TICKER --- */}
      <div className="w-full bg-blue-swiss py-4 overflow-hidden border-t border-b border-blue-bright/20">
         <div className="flex gap-12 whitespace-nowrap animate-marquee">
             {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-white font-mono uppercase tracking-widest text-sm font-bold">
                     <span>{item}</span>
                     <div className="w-2 h-2 bg-black/20 rounded-full"></div>
                 </div>
             ))}
         </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <Section id="about" className="bg-white">
          <SwissGrid>
              <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                  <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">About AAAS</MonoLabel>
                  <SectionHeadline>Why We’re Constructed Differently</SectionHeadline>
              </div>
              <div className="col-span-12 lg:col-span-7">
                  <p className="text-xl text-gray-800 leading-relaxed mb-8">
                     We’re a collective of enthusiastic builders forging something remarkable. AAAS isn’t just another tech shop—it’s a community utilizing AI to unlock new avenues for individuals and businesses as sectors change.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                     We’re creating cool things and seeking innovators to join us. Whether you’re into UI/UX, product advancement, or AI, this is a space to explore, grasp, and devise.
                  </p>
                  <div className="p-6 bg-creme border-l-4 border-blue-swiss">
                      <p className="text-base text-gray-700 font-medium mb-4">
                          Our staff of 50+ operates as one network, exchanging expertise so every project is high-caliber, economical, and prompt.
                      </p>
                      <ButtonOutline>Join the Network</ButtonOutline>
                  </div>
              </div>
          </SwissGrid>
      </Section>

      {/* --- THE ENGINE --- */}
      <Section className="metrics-section bg-creme">
         <SwissGrid>
             <div className="col-span-12 mb-12 text-center">
                 <MonoLabel className="justify-center mb-4 text-blue-swiss" color="text-blue-swiss">The Engine</MonoLabel>
                 <SectionHeadline>Operational Logic</SectionHeadline>
             </div>
             
             <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="group relative p-8 bg-white border border-gray-200 hover:border-blue-swiss transition-all duration-500 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                       <Database size={100} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                       <div className="w-12 h-12 bg-creme rounded-lg border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-swiss group-hover:text-white transition-colors">
                          <Database className="w-6 h-6 text-gray-700 group-hover:text-white" />
                       </div>
                       <h3 className="text-lg font-bold uppercase mb-3 text-black">Structured<br/>Intelligence</h3>
                       <p className="text-sm text-gray-600 leading-relaxed">Refining, organizing, and structuring data so your enterprise is truly AI-ready.</p>
                       <div className="mt-auto pt-6">
                          <div className="h-1 w-12 bg-gray-200 group-hover:bg-blue-swiss transition-all duration-500"></div>
                       </div>
                    </div>
                 </div>

                 <div className="group relative p-8 bg-white border border-gray-200 hover:border-blue-swiss transition-all duration-500 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                       <Users size={100} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                       <div className="w-12 h-12 bg-creme rounded-lg border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-swiss group-hover:text-white transition-colors">
                          <Users className="w-6 h-6 text-gray-700 group-hover:text-white" />
                       </div>
                       <h3 className="text-lg font-bold uppercase mb-3 text-black">Human In<br/>The Loop</h3>
                       <p className="text-sm text-gray-600 leading-relaxed">Granting your team final determination for amplified collaboration and judgment.</p>
                       <div className="mt-auto pt-6">
                          <div className="h-1 w-12 bg-gray-200 group-hover:bg-blue-swiss transition-all duration-500"></div>
                       </div>
                    </div>
                 </div>

                 <div className="group relative p-8 bg-black text-white border border-black rounded-xl overflow-hidden col-span-1 lg:col-span-1 shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                     <div className="absolute inset-0 bg-blue-swiss/10 group-hover:bg-blue-swiss/20 transition-colors"></div>
                     <div className="absolute -right-10 -bottom-10 opacity-20 text-white">
                        <TrendingUp size={140} />
                     </div>
                     <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="mb-6">
                           <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-bold text-blue-swiss metric-value">80</span>
                              <span className="text-xl text-blue-swiss">%</span>
                           </div>
                           <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mt-1">Automation</div>
                        </div>
                        <div className="w-full h-px bg-gray-800 my-4"></div>
                        <div>
                           <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-bold text-green-500 metric-value">10</span>
                              <span className="text-xl text-green-500">%</span>
                           </div>
                           <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mt-1">Operational Cost</div>
                        </div>
                     </div>
                 </div>

                 <div className="group relative p-8 bg-white border border-gray-200 hover:border-blue-swiss transition-all duration-500 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                       <Workflow size={100} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                       <div className="w-12 h-12 bg-creme rounded-lg border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-swiss group-hover:text-white transition-colors">
                          <Workflow className="w-6 h-6 text-gray-700 group-hover:text-white" />
                       </div>
                       <h3 className="text-lg font-bold uppercase mb-3 text-black">Protocol<br/>Mastery</h3>
                       <p className="text-sm text-gray-600 leading-relaxed">Unleashing AI capability via MCP and A2A for secure, smooth teamwork.</p>
                       <div className="mt-auto pt-6">
                          <div className="h-1 w-12 bg-gray-200 group-hover:bg-blue-swiss transition-all duration-500"></div>
                       </div>
                    </div>
                 </div>
             </div>
         </SwissGrid>
      </Section>

      {/* --- SERVICES --- */}
      <Section id="services" className="bg-white">
          <SectionNumber number="01" className="right-0 top-0" />
          <SwissGrid>
              <div className="col-span-12 text-center mb-16">
                  <MonoLabel className="justify-center mb-4 text-blue-swiss" color="text-blue-swiss">Services</MonoLabel>
                  <SectionHeadline>AI-Driven Offerings</SectionHeadline>
                  <p className="text-xl text-gray-600 mt-4">If you can conceive it, we can construct it.</p>
              </div>

              <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SERVICES.map((srv, i) => (
                      <div key={i} className="bg-creme p-10 border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:border-blue-swiss rounded-sm">
                          <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                              <srv.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-blue-swiss transition-colors">{srv.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- INDUSTRIES --- */}
      <Section id="categories" className="bg-creme">
         <SectionNumber number="02" className="left-0 top-0" />
         <SwissGrid>
             <div className="col-span-12 mb-12">
                 <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Sectors</MonoLabel>
                 <SectionHeadline>Agent Categories</SectionHeadline>
             </div>
             
             <div className="col-span-12 industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {INDUSTRIES.map((ind) => (
                     <div key={ind.id} className="ind-card bg-white p-8 border border-gray-200 hover:border-blue-swiss transition-all duration-300 flex flex-col h-full group hover:shadow-xl rounded-sm relative">
                         <div className="flex justify-between items-start mb-6">
                             <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-blue-swiss group-hover:text-white transition-colors">
                                 <ind.icon size={20} />
                             </div>
                             <span className="font-mono text-xs text-gray-400">{ind.id}</span>
                         </div>
                         <h4 className="text-lg font-bold uppercase mb-1 group-hover:text-blue-swiss transition-colors">{ind.title}</h4>
                         <div className="text-xs font-mono text-blue-swiss mb-4 uppercase tracking-wider">{ind.subtitle}</div>
                         
                         <div className="mb-4">
                             <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Purpose</span>
                             <p className="text-sm text-gray-600 leading-relaxed">{ind.purpose}</p>
                         </div>
                         
                         <div className="mt-auto pt-4 border-t border-gray-100">
                             <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Outcome</span>
                             <p className="text-sm text-black font-medium">{ind.outcome}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </SwissGrid>
      </Section>

      {/* --- FAQ --- */}
      <Section className="bg-white">
          <SwissGrid>
              <div className="col-span-12 lg:col-span-4">
                  <SectionHeadline>How It<br/>All Works</SectionHeadline>
                  <div className="w-12 h-1 bg-blue-swiss mt-6 mb-8"></div>
                  <p className="text-gray-600">From rates to performance, discover the essentials about all things AAAS.ai.</p>
              </div>
              <div className="col-span-12 lg:col-span-8 space-y-4">
                  {FAQS.map((faq, i) => (
                      <div key={i} className="border border-gray-200 bg-creme p-6 hover:border-gray-400 transition-colors group">
                          <h4 className="font-bold text-lg mb-2 group-hover:text-blue-swiss transition-colors">{faq.q}</h4>
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      <Section className="bg-creme border-b-0">
         <SwissGrid>
            <div className="col-span-12 text-center">
               <h2 className="text-5xl md:text-7xl font-bold text-black uppercase mb-8 tracking-tighter">NextGen Automation</h2>
               <div className="flex justify-center">
                   <ButtonPrimary onClick={() => {}}>
                      Schedule an appointment
                   </ButtonPrimary>
               </div>
            </div>
         </SwissGrid>
      </Section>

    </div>
  );
};
