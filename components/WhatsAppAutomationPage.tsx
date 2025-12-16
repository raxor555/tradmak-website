import React, { useEffect, useRef, useState } from 'react';
import { 
  MessageCircle, Phone, Users, BarChart3, Bot, Link, Magnet, Heart, 
  ShieldCheck, ChevronDown, ChevronUp, CheckCircle, Zap, Layers, 
  Globe, Server, ArrowRight, Truck, ShoppingBag, Building, Lock, Radio
} from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, Card, ButtonPrimary, ButtonOutline, SectionNumber } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---

const POWER_FEATURES = [
  { 
    icon: Layers, 
    title: "Omnichannel Inbox", 
    desc: "No more switching between apps. Unify contacts and conversations from voice calls, email, WhatsApp, TikTok, Facebook Messenger, Instagram and more." 
  },
  { 
    icon: Phone, 
    title: "Business Calling API", 
    desc: "Don’t worry about losing voice calls when switching to WhatsApp API. Native voice calling support globally available from select BSPs." 
  },
  { 
    icon: Users, 
    title: "Lifecycle Management", 
    desc: "Prioritize high-intent leads, design customer journeys for each lifecycle stage or identify common drop-off points with analytics." 
  },
  { 
    icon: Bot, 
    title: "AI & Automation", 
    desc: "Create an AI Agent to handle FAQs or collect customer data. Then, auto-qualify and route leads to the right agents, automate follow-ups and more." 
  },
  { 
    icon: Link, 
    title: "Native Integrations", 
    desc: "Connect WhatsApp with HubSpot, Salesforce, Google Sheets and more for context at your fingertips while you chat." 
  },
  { 
    icon: Magnet, 
    title: "Lead Gen & Conversion", 
    desc: "Capture leads from Meta ads, automate appointment bookings, share product info instantly with Meta Catalogs and more." 
  },
  { 
    icon: Heart, 
    title: "Retention at Scale", 
    desc: "Grow customer loyalty with targeted WhatsApp broadcasts for promotions, renewals, upgrades and CSAT surveys." 
  },
  { 
    icon: BarChart3, 
    title: "Data-Driven Insights", 
    desc: "Track response times, Meta ad and broadcast performance, and conversions to turn insights into revenue." 
  },
  { 
    icon: ShieldCheck, 
    title: "High Volume Stability", 
    desc: "Never lose leads due to crashes or downtime. Unlike other providers, TradMAK guarantees high platform reliability." 
  }
];

const INDUSTRIES = [
  {
    title: "Logistics",
    icon: Truck,
    desc: "Automate delivery updates, handle reschedule requests instantly, and reduce support ticket volume by 60%."
  },
  {
    title: "Retail & E-comm",
    icon: ShoppingBag,
    desc: "Recover abandoned carts, send back-in-stock alerts, and offer personalized shopping assistance at scale."
  },
  {
    title: "Real Estate",
    icon: Building,
    desc: "Qualify leads instantly, schedule viewings automatically, and share property brochures via rich media messages."
  }
];

const FAQS = [
  { q: "What is the WhatsApp Business API?", a: "The WhatsApp Business API is the enterprise-grade solution for medium to large businesses. Unlike the free App, it supports unlimited users, advanced automation, and integration with your CRM." },
  { q: "Is the API free?", a: "The API has conversation-based pricing (paid to Meta) plus a platform fee. The first 1,000 service conversations per month are free." },
  { q: "Can I use my existing number?", a: "Yes. With TradMAK's Coexistence feature, you can migrate your number to the API while keeping your history, or run them in parallel during transition." },
  { q: "Do you support Green Tick verification?", a: "Yes, our team handles the entire application process with Meta to help you get the Official Business Account (Green Tick) status." },
  { q: "How secure is the platform?", a: "We adhere to banking-grade security standards with end-to-end encryption for messages. Our infrastructure is ISO 27001 certified and GDPR compliant." },
  { q: "Can I broadcast promotional messages?", a: "Yes, the API allows for high-volume broadcasts (newsletters, offers) to opted-in users, provided the message templates are approved by Meta (which we handle)." },
  { q: "What happens if I exceed my message limit?", a: "Your tier automatically upgrades based on your quality rating. We monitor this to ensure your throughput scales with your business needs." }
];

interface WhatsAppAutomationPageProps {
  onScheduleDemo?: () => void;
}

export const WhatsAppAutomationPage: React.FC<WhatsAppAutomationPageProps> = ({ onScheduleDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Elements
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });

      // Feature Cards - using a robust trigger
      gsap.from(".feat-card", {
        scrollTrigger: { 
          trigger: ".features-grid", 
          start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all" // Ensure visibility after animation
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-gray-300 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-swiss/5 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 h-full py-12 lg:py-20 items-center">
          <div className="col-span-12 lg:col-span-6 z-20">
            <MonoLabel className="mb-6 text-green-600 hero-anim" color="text-green-600">Meta Business Partner</MonoLabel>
            <HeroHeadline className="mb-6 text-left hero-anim">
              WhatsApp<br/>Enterprise
            </HeroHeadline>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-xl leading-relaxed border-l-2 border-green-500/30 pl-6 mb-10 hero-anim">
              The official API platform for high-volume teams. Automate sales, support, and marketing on the world's most popular messaging app.
            </p>
            <div className="flex flex-wrap gap-4 hero-anim">
              <ButtonPrimary onClick={onScheduleDemo} className="bg-green-600 hover:bg-green-500 hover:shadow-green-500/20">Schedule Demo</ButtonPrimary>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 hero-anim">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>)}
                </div>
                <div>Trusted by 500+ global brands</div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end mt-12 lg:mt-0 relative hero-anim">
             {/* COMPOSITION: Phone + Dashboard Card */}
             <div className="relative w-full max-w-[500px] h-[600px] flex items-center justify-center">
                
                {/* 1. The Dashboard Card (Backdrop) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl -z-10 rotate-3 flex overflow-hidden">
                    <div className="w-64 bg-gray-50/50 border-r border-white/50 p-6 flex flex-col gap-4">
                        <div className="w-8 h-8 rounded bg-green-100"></div>
                        <div className="h-2 w-24 bg-gray-200 rounded"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded mb-8"></div>
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="h-12 w-full bg-white rounded-lg border border-gray-100 shadow-sm"></div>
                        ))}
                    </div>
                    <div className="flex-1 p-6">
                        <div className="flex justify-between mb-8">
                             <div className="h-8 w-32 bg-gray-200 rounded"></div>
                             <div className="h-8 w-8 bg-blue-swiss rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Open Rate</div>
                                <div className="text-3xl font-bold text-black">98.2%</div>
                            </div>
                            <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Conversions</div>
                                <div className="text-3xl font-bold text-green-600">4,201</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. The Phone (Foreground) - Smaller & Elegant */}
                <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-gray-800 -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>
                    <div className="w-full h-full bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                        {/* Header */}
                        <div className="bg-[#075E54] h-20 pt-8 px-4 flex items-center gap-3 text-white shadow-md z-10">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">TM</div>
                            <div className="flex-1">
                                <div className="text-xs font-bold">TradMAK Verified</div>
                            </div>
                        </div>
                        {/* Messages */}
                        <div className="flex-1 p-3 space-y-3 overflow-hidden relative">
                           <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                           
                           <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] relative z-10 animate-fade-in-up">
                              <div className="text-[10px] text-gray-500 mb-1">AUTOMATED MESSAGE</div>
                              <p className="text-xs text-black leading-relaxed">Your order <span className="font-bold">#8821</span> has arrived at the local hub.</p>
                           </div>

                           <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] relative z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                              <p className="text-xs text-black leading-relaxed mb-2 px-1">How would you like to receive it?</p>
                              <div className="space-y-1">
                                <button className="w-full py-1.5 bg-gray-50 text-blue-500 font-bold text-[10px] rounded border border-gray-100">Deliver to Door</button>
                                <button className="w-full py-1.5 bg-gray-50 text-blue-500 font-bold text-[10px] rounded border border-gray-100">Pick up at Store</button>
                              </div>
                           </div>

                           <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[90%] ml-auto relative z-10 animate-fade-in-up" style={{animationDelay: '1s'}}>
                              <p className="text-xs text-black leading-relaxed">Deliver to Door</p>
                           </div>
                           
                           <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] relative z-10 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                              <div className="flex items-center gap-2 text-xs">
                                  <Truck size={14} className="text-green-600"/>
                                  <span>Driver assigned! ETA 14:00</span>
                              </div>
                           </div>
                        </div>
                        {/* Footer Input */}
                        <div className="bg-gray-100 p-2 flex items-center gap-2">
                           <div className="flex-1 h-8 bg-white rounded-full border border-gray-200"></div>
                           <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center text-white"><ArrowRight size={14}/></div>
                        </div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-20 -right-4 bg-white p-3 rounded-lg shadow-xl border border-gray-100 z-20 animate-float delay-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded text-green-600"><CheckCircle size={16}/></div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Verification</div>
                            <div className="text-xs font-bold">Green Tick Active</div>
                        </div>
                    </div>
                </div>

             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- DIVIDER --- */}
      <div className="w-full bg-creme pt-12">
          <div className="max-w-[1600px] mx-auto px-12">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent relative opacity-70">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-gray-300 rotate-45"></div>
              </div>
          </div>
      </div>

      {/* --- POWER FEATURES --- */}
      <Section className="features-section bg-creme">
          <SwissGrid>
              <div className="col-span-12 mb-16 text-center">
                  <MonoLabel className="justify-center mb-4 text-green-600" color="text-green-600">Platform Capabilities</MonoLabel>
                  <SectionHeadline>Power Features</SectionHeadline>
                  <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                    A comprehensive suite of tools designed to maximize engagement and operational efficiency.
                  </p>
              </div>
              
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 features-grid relative z-10">
                  {/* Subtle Glow Behind Grid */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-green-500/5 blur-[100px] -z-10 rounded-full"></div>

                  {POWER_FEATURES.map((f, i) => (
                      <div key={i} className="feat-card relative group bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,164,218,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col h-full">
                          {/* Inner Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-60"></div>
                          
                          <div className="relative z-10">
                             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:border-green-200 group-hover:text-green-600 transition-colors shadow-sm">
                                <f.icon size={24} className="text-gray-600 group-hover:text-green-600 transition-colors" />
                             </div>
                             <h4 className="text-xl font-bold mb-3 text-black group-hover:text-green-700 transition-colors tracking-tight">{f.title}</h4>
                             <p className="text-gray-600 leading-relaxed text-sm flex-grow">{f.desc}</p>
                          </div>
                          
                          {/* Bottom Border Accent */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-green-400 transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- INDUSTRIES SECTION --- */}
      <Section className="bg-white">
          <SwissGrid>
              <div className="col-span-12 lg:col-span-4">
                  <SectionHeadline>Built for<br/>Your Industry</SectionHeadline>
                  <div className="w-12 h-1 bg-green-500 mt-6 mb-8"></div>
                  <ButtonOutline onClick={onScheduleDemo}>See Case Studies</ButtonOutline>
              </div>
              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {INDUSTRIES.map((ind, i) => (
                      <div key={i} className="p-6 border-l-2 border-gray-100 hover:border-green-500 transition-colors duration-300">
                          <ind.icon className="w-8 h-8 text-gray-400 mb-4" />
                          <h4 className="text-xl font-bold mb-2">{ind.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{ind.desc}</p>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- COEXISTENCE --- */}
      <Section className="bg-black text-white">
         <SectionNumber number="03" className="left-0 top-0 opacity-20" />
         <SwissGrid className="items-center">
             <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
                 <div className="p-2 border border-green-500/30 inline-block rounded-full mb-6">
                    <div className="px-4 py-1 bg-green-500/10 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">Unique Technology</div>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero-Risk<br/>Migration</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                     Most providers force you to delete your WhatsApp App to use the API. TradMAK allows <strong>Coexistence</strong>.
                     Run your API and App on the same number simultaneously.
                 </p>
                 <ButtonPrimary onClick={onScheduleDemo} className="bg-green-600 hover:bg-green-500 border-none text-white">Schedule Demo</ButtonPrimary>
             </div>
             <div className="col-span-12 lg:col-span-6">
                 <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4">
                        <CheckCircle className="text-green-500 shrink-0" />
                        <div>
                            <h4 className="font-bold">Keep Chat History</h4>
                            <p className="text-sm text-gray-500">No data loss during transition.</p>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4">
                        <CheckCircle className="text-green-500 shrink-0" />
                        <div>
                            <h4 className="font-bold">Parallel Operation</h4>
                            <p className="text-sm text-gray-500">Staff can use the App while bots use the API.</p>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4">
                        <CheckCircle className="text-green-500 shrink-0" />
                        <div>
                            <h4 className="font-bold">Fail-Safe Fallback</h4>
                            <p className="text-sm text-gray-500">Instant revert if needed.</p>
                        </div>
                    </div>
                 </div>
             </div>
         </SwissGrid>
      </Section>

      {/* --- FAQ SECTION --- */}
      <Section className="bg-creme">
          <SwissGrid>
              <div className="col-span-12 text-center mb-16">
                  <SectionHeadline>FAQ</SectionHeadline>
              </div>
              <div className="col-span-12 lg:col-start-3 lg:col-span-8 space-y-4">
                  {FAQS.map((faq, i) => (
                      <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- CTA --- */}
      <Section className="bg-white border-b-0">
         <SwissGrid>
             <div className="col-span-12 text-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">Ready to scale?</h2>
                 <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                     Join the ecosystem of high-performing trade businesses.
                 </p>
                 <div className="flex justify-center gap-6">
                     <ButtonPrimary onClick={onScheduleDemo} className="bg-black hover:bg-gray-800">Schedule Demo</ButtonPrimary>
                 </div>
             </div>
         </SwissGrid>
      </Section>
    </div>
  );
};

// Simple Accordion Component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-400 bg-white">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <span className="font-bold text-lg">{question}</span>
                {isOpen ? <ChevronUp className="text-gray-500"/> : <ChevronDown className="text-gray-500"/>}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};