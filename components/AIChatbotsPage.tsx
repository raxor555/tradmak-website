
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Zap, Globe, Shield, Code, Sparkles, MessageCircle, Bot, Cpu } from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, Card, ButtonPrimary, ButtonOutline, SectionNumber } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AIChatbotsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-headline", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
        .from(".hero-visual", { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");

      // Features Cards Animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Use Cases Animation
      gsap.from(".use-case-item", {
        scrollTrigger: {
          trigger: ".use-cases-section",
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Border Draw Animation
      gsap.from(".use-case-border", {
        scrollTrigger: {
          trigger: ".use-cases-section",
          start: "top 75%",
        },
        scaleX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.inOut",
        transformOrigin: "left center"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO --- */}
      <section ref={heroRef} className="relative border-b border-gray-300 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        
        {/* ENHANCED SHADER BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-swiss/10 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-bright/5 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 h-full items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="hero-label">
                <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Conversational Intelligence</MonoLabel>
            </div>
            <div className="hero-headline">
                <HeroHeadline className="mb-8 text-left">
                Hyper-Real<br/>Chatbots
                </HeroHeadline>
            </div>
            <div className="hero-text">
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-xl leading-relaxed border-l-2 border-blue-swiss/20 pl-8 mb-12">
                Beyond simple scripts. Our chatbots utilize RAG (Retrieval-Augmented Generation) to understand context, intent, and nuance, delivering human-tier support at infinite scale.
                </p>
            </div>
            <div className="hero-btns flex flex-wrap gap-4">
              <ButtonPrimary>Build Your Bot</ButtonPrimary>
              <ButtonOutline icon>Live Demo</ButtonOutline>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end mt-16 lg:mt-0 hero-visual">
             <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white shadow-2xl relative rounded-xl overflow-hidden glass-card">
                <div className="bg-black/95 text-white p-4 flex justify-between items-center border-b border-gray-800">
                   <div className="flex items-center gap-3">
                      <div className="relative">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse z-10 relative"></div>
                          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="flex flex-col">
                          <span className="font-mono text-xs uppercase tracking-wider font-bold">Support_Agent_01</span>
                          <span className="text-[9px] text-gray-400">Active • 12ms Latency</span>
                      </div>
                   </div>
                   <Bot size={18} className="text-blue-swiss" />
                </div>
                
                <div className="p-6 h-[450px] flex flex-col gap-6 overflow-hidden relative bg-gradient-to-b from-transparent to-gray-50/50">
                   <div className="self-start group">
                      <div className="bg-white border border-gray-200 p-4 max-w-[90%] rounded-2xl rounded-tl-sm shadow-sm group-hover:shadow-md transition-shadow">
                        <p className="text-sm text-gray-800 leading-relaxed">Hello. I am analyzing your shipment #TR-9920. It appears to be held at customs due to missing HS Code documentation.</p>
                      </div>
                      <span className="text-[10px] text-gray-400 ml-2 mt-1 block">10:42 AM</span>
                   </div>

                   <div className="self-end group flex flex-col items-end">
                      <div className="bg-blue-swiss text-white p-4 max-w-[90%] rounded-2xl rounded-tr-sm shadow-md group-hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-swiss to-blue-600">
                        <p className="text-sm leading-relaxed">Can you generate the required forms?</p>
                      </div>
                      <span className="text-[10px] text-gray-400 mr-2 mt-1 block">10:43 AM</span>
                   </div>

                   <div className="self-start group w-full">
                      <div className="bg-white border border-gray-200 p-4 max-w-[90%] rounded-2xl rounded-tl-sm shadow-sm group-hover:shadow-md transition-shadow">
                        <p className="text-sm text-gray-800 mb-3 leading-relaxed">Affirmative. Generating commercial invoice and packing list with corrected HS Codes...</p>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-blue-50/50 transition-colors cursor-pointer group/file">
                           <div className="w-10 h-10 bg-red-100/50 flex items-center justify-center text-red-500 rounded-lg group-hover/file:bg-red-100 transition-colors"><Code size={20}/></div>
                           <div>
                               <div className="text-xs font-bold text-gray-800">invoice_corrected.pdf</div>
                               <div className="text-[10px] text-gray-500">142 KB • PDF Document</div>
                           </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 ml-2 mt-1 block">10:43 AM</span>
                   </div>
                   
                   <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                      <span className="text-[10px] font-mono text-gray-400 uppercase">Agent typing</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-blue-swiss rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-swiss rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-blue-swiss rounded-full animate-bounce delay-200"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- FEATURES --- */}
      <Section className="features-section bg-white">
         <SectionNumber number="01" className="right-0 top-0" />
         <SwissGrid>
            <div className="col-span-12 mb-16">
               <SectionHeadline>Capabilities</SectionHeadline>
            </div>
            
            <div className="col-span-12 md:col-span-4 feature-card">
               <Card className="h-full hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-blue-swiss/5 flex items-center justify-center rounded-lg mb-6 border border-blue-swiss/10">
                    <Globe className="w-7 h-7 text-blue-swiss" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Multi-Lingual</h3>
                  <p className="text-gray-600 leading-relaxed">Native fluency in 95+ languages. Engage with global partners in their local dialect without translation layers.</p>
               </Card>
            </div>
            <div className="col-span-12 md:col-span-4 feature-card">
               <Card className="h-full hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-blue-swiss/5 flex items-center justify-center rounded-lg mb-6 border border-blue-swiss/10">
                    <Zap className="w-7 h-7 text-blue-swiss" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant RAG</h3>
                  <p className="text-gray-600 leading-relaxed">Connects to your internal wikis, Sharepoint, and Notion. Answers are grounded in your specific company data.</p>
               </Card>
            </div>
            <div className="col-span-12 md:col-span-4 feature-card">
               <Card className="h-full hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-blue-swiss/5 flex items-center justify-center rounded-lg mb-6 border border-blue-swiss/10">
                    <Shield className="w-7 h-7 text-blue-swiss" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise Grade</h3>
                  <p className="text-gray-600 leading-relaxed">PII redaction, role-based access control, and full audit logs ensuring compliance with GDPR and ISO standards.</p>
               </Card>
            </div>
         </SwissGrid>
      </Section>

      {/* --- CONVERSATION DESIGN (New Section to fill content) --- */}
      <Section className="bg-creme">
         <SectionNumber number="02" className="left-0 top-0" />
         <SwissGrid>
            <div className="col-span-12 lg:col-span-5">
               <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Design Philosophy</MonoLabel>
               <SectionHeadline className="mb-8">Beyond<br/>Text</SectionHeadline>
               <p className="text-gray-600 leading-relaxed mb-8">
                  We design conversational flows that feel human, purposeful, and brand-aligned.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                        <MessageSquare size={18} className="text-blue-swiss" />
                     </div>
                     <div>
                        <h4 className="font-bold uppercase text-sm mb-1">Contextual Memory</h4>
                        <p className="text-xs text-gray-500">Remembers past interactions for seamless continuity.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                        <Sparkles size={18} className="text-blue-swiss" />
                     </div>
                     <div>
                        <h4 className="font-bold uppercase text-sm mb-1">Personality Tuning</h4>
                        <p className="text-xs text-gray-500">Adjust tone from professional to empathetic.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-span-12 lg:col-span-7 flex items-center justify-center mt-12 lg:mt-0">
               <div className="relative w-full max-w-lg aspect-video bg-white border border-gray-200 shadow-xl p-8 flex flex-col justify-center gap-4">
                  <div className="flex gap-3 items-end">
                     <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                     <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none text-sm text-gray-600">Can you analyze the Q3 report?</div>
                  </div>
                  <div className="flex gap-3 items-end flex-row-reverse">
                     <div className="w-8 h-8 bg-blue-swiss rounded-full"></div>
                     <div className="bg-blue-swiss text-white p-3 rounded-2xl rounded-br-none text-sm shadow-md">
                        Processing Q3 data. Revenue is up 12% YoY. Would you like a breakdown by region?
                     </div>
                  </div>
               </div>
            </div>
         </SwissGrid>
      </Section>

      {/* --- USE CASES --- */}
      <Section className="bg-white use-cases-section">
         <SectionNumber number="03" className="right-0 top-0" />
         <SwissGrid>
            <div className="col-span-12 lg:col-span-4">
               <MonoLabel className="mb-4">Applications</MonoLabel>
               <SectionHeadline className="mb-8">Deployed<br/>Across</SectionHeadline>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
               {[
                 { id: "01", title: "Customer Support", desc: "24/7 Tier 1 support resolution. Handles returns, tracking queries, and FAQ automatically." },
                 { id: "02", title: "Sales Engineering", desc: "Qualifies leads by asking technical requirement questions before routing to human sales reps." },
                 { id: "03", title: "Internal HR", desc: "Instant answers for employees regarding benefits, leave policy, and IT troubleshooting." },
                 { id: "04", title: "Data Analyst", desc: "\"Chat with your Database\" interface allowing non-technical staff to query SQL via natural language." }
               ].map((item, i) => (
                  <div key={item.id} className="relative pt-6 use-case-item group">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-black use-case-border origin-left"></div>
                    <div className="flex justify-between items-start mb-3">
                        <div className="text-xs font-mono text-gray-500">{item.id}</div>
                        <ArrowOutline />
                    </div>
                    <h4 className="text-xl font-bold uppercase mb-3 group-hover:text-blue-swiss transition-colors">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </SwissGrid>
      </Section>

      <Section className="bg-creme border-b-0">
         <SwissGrid>
             <div className="col-span-12 text-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">Ready to Automate?</h2>
                 <ButtonPrimary onClick={() => {}} className="bg-black hover:bg-gray-800">Start Building</ButtonPrimary>
             </div>
         </SwissGrid>
      </Section>
    </div>
  );
};

const ArrowOutline = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 group-hover:text-blue-swiss transition-colors">
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square"/>
    </svg>
);
