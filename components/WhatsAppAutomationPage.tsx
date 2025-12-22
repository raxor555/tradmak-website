
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
  { icon: Layers, title: "Omnichannel Inbox", desc: "No more switching between apps. Unify contacts and conversations from all platforms." },
  { icon: Phone, title: "Business Calling API", desc: "Native voice calling support globally available from select BSPs." },
  { icon: Users, title: "Lifecycle Management", desc: "Prioritize high-intent leads and design targeted customer journeys." },
  { icon: Bot, title: "AI & Automation", desc: "Create AI Agents to handle FAQs and route leads automatically." },
  { icon: Link, title: "Native Integrations", desc: "Connect WhatsApp with HubSpot, Salesforce, and more." },
  { icon: Magnet, title: "Lead Gen & Conversion", desc: "Capture leads from Meta ads and automate bookings." },
  { icon: Heart, title: "Retention at Scale", desc: "Grow customer loyalty with targeted WhatsApp broadcasts." },
  { icon: BarChart3, title: "Data-Driven Insights", desc: "Track response times and conversion performance." },
  { icon: ShieldCheck, title: "High Volume Stability", desc: "Guaranteed platform reliability for large scale teams." }
];

const INDUSTRIES = [
  { title: "Logistics", icon: Truck, desc: "Automate delivery updates and handle reschedule requests instantly." },
  { title: "Retail & E-comm", icon: ShoppingBag, desc: "Recover abandoned carts and send back-in-stock alerts." },
  { title: "Real Estate", icon: Building, desc: "Qualify leads instantly and schedule viewings automatically." }
];

const FAQS = [
  { q: "What is the WhatsApp Business API?", a: "The WhatsApp Business API is the enterprise-grade solution for medium to large businesses." },
  { q: "Is the API free?", a: "The API has conversation-based pricing. The first 1,000 service conversations per month are free." },
  { q: "Can I use my existing number?", a: "Yes. With TradMAK's Coexistence feature, you can migrate your number while keeping your history." }
];

interface WhatsAppAutomationPageProps {
  onScheduleDemo?: () => void;
}

export const WhatsAppAutomationPage: React.FC<WhatsAppAutomationPageProps> = ({ onScheduleDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 });
      gsap.from(".feat-card", { scrollTrigger: { trigger: ".features-grid", start: "top 85%" }, y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", clearProps: "all" });
      gsap.from(".ind-card", { scrollTrigger: { trigger: ".industries-section", start: "top 85%" }, y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", clearProps: "all" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative border-b border-gray-300 overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-swiss/5 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 items-center">
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
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end mt-12 lg:mt-0 relative hero-anim">
             <div className="relative w-full max-w-[500px] h-[600px] flex items-center justify-center">
                
                {/* Back Card (Metrics) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[75%] bg-white/60 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl -z-10 rotate-3 flex overflow-hidden">
                    <div className="w-1/3 bg-gray-50/50 border-r border-white/50 p-6 flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                            <MessageCircle size={20} className="text-green-600" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
                            <div className="h-1.5 w-20 bg-gray-200 rounded-full"></div>
                            <div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-1 p-8 flex flex-col justify-center">
                        <div className="flex gap-4 mb-8">
                            <div className="flex-1 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Open Rate</div>
                                <div className="text-3xl font-bold text-black font-sans">98%</div>
                            </div>
                            <div className="flex-1 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">CTR</div>
                                <div className="text-3xl font-bold text-green-600 font-sans">45%</div>
                            </div>
                        </div>
                        <div className="h-32 w-full bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden">
                             <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-between px-4 pb-2">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="w-2 bg-green-200 rounded-t-sm" style={{height: `${h}%`}}></div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border-[4px] border-gray-800 -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10 overflow-hidden ring-4 ring-gray-900/50">
                    
                    {/* Screen */}
                    <div className="w-full h-full bg-[#E5DDD5] rounded-[32px] overflow-hidden relative flex flex-col font-sans">
                        
                        {/* Notch Area */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-black/20 z-20 flex justify-between px-6 items-center backdrop-blur-sm">
                            <span className="text-[10px] font-medium text-white">9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full border border-white/30"></div>
                                <div className="w-3 h-3 rounded-full border border-white/30"></div>
                            </div>
                        </div>

                        {/* App Header */}
                        <div className="bg-[#075E54] pt-10 pb-3 px-4 flex items-center gap-3 text-white shadow-md z-10 shrink-0">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-[#075E54]">TM</div>
                            <div className="flex-1">
                                <div className="text-xs font-bold leading-none">TradMAK Logistics</div>
                                <div className="text-[9px] opacity-80 leading-none mt-1">Business Account</div>
                            </div>
                            <div className="flex gap-3 text-white/80">
                                <Phone size={14} />
                                <div className="w-1 h-1 rounded-full bg-white/80 box-content border-2 border-transparent"></div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                           <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-10 pointer-events-none"></div>
                           
                           <div className="flex justify-center my-4">
                               <span className="bg-[#E1F3FB] text-gray-600 text-[9px] px-2 py-1 rounded shadow-sm">Today</span>
                           </div>

                           {/* Bot Message */}
                           <div className="flex flex-col items-start max-w-[85%] animate-fade-in-up delay-100">
                              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-black leading-relaxed relative">
                                 <p>Hello! Your shipment <span className="font-bold text-blue-600">#TR-8821</span> has cleared customs in Jebel Ali.</p>
                                 <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:42 AM</span>
                              </div>
                           </div>

                           {/* User Message */}
                           <div className="flex flex-col items-end max-w-[85%] self-end ml-auto animate-fade-in-up delay-300">
                              <div className="bg-[#D9FDD3] p-3 rounded-lg rounded-tr-none shadow-sm text-xs text-black leading-relaxed relative">
                                 <p>Great! Can I schedule delivery for tomorrow?</p>
                                 <span className="text-[9px] text-gray-500 absolute bottom-1 right-2 flex items-center gap-0.5">10:43 AM <CheckCircle size={8} className="text-blue-500" /></span>
                              </div>
                           </div>

                           {/* Bot Response with Options */}
                           <div className="flex flex-col items-start max-w-[85%] animate-fade-in-up delay-500">
                              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-black leading-relaxed relative mb-2">
                                 <p>Certainly. Please select a preferred time slot:</p>
                                 <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:43 AM</span>
                              </div>
                              <div className="flex flex-col gap-2 w-full">
                                  <button className="bg-white border border-gray-200 text-green-600 text-xs py-2 px-3 rounded text-center shadow-sm font-medium">09:00 AM - 12:00 PM</button>
                                  <button className="bg-white border border-gray-200 text-green-600 text-xs py-2 px-3 rounded text-center shadow-sm font-medium">02:00 PM - 06:00 PM</button>
                              </div>
                           </div>

                        </div>

                        {/* Input Area */}
                        <div className="bg-[#F0F2F5] p-2 flex items-center gap-2 px-3 pb-6">
                            <div className="w-6 h-6 rounded-full text-gray-500 flex items-center justify-center">+</div>
                            <div className="flex-1 bg-white h-8 rounded-full border border-gray-200"></div>
                            <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center text-white">
                                <Radio size={14} />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- FEATURES --- */}
      <Section className="features-section bg-creme">
          <SectionNumber number="01" className="left-0 top-0" />
          <SwissGrid>
              <div className="col-span-12 mb-16 text-center">
                  <MonoLabel className="justify-center mb-4 text-green-600" color="text-green-600">Platform Capabilities</MonoLabel>
                  <SectionHeadline>Power Features</SectionHeadline>
              </div>
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 features-grid">
                  {POWER_FEATURES.map((f, i) => (
                      <div key={i} className="feat-card bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-2xl flex flex-col h-full hover:shadow-xl transition-all group">
                          <f.icon size={24} className="text-gray-600 mb-6 group-hover:text-green-600 transition-colors" />
                          <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                          <p className="text-gray-600 text-sm">{f.desc}</p>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- INDUSTRIES --- */}
      <Section className="industries-section bg-white">
          <SectionNumber number="02" className="right-0 top-0" />
          <SwissGrid>
              <div className="col-span-12 lg:col-span-4">
                  <MonoLabel className="mb-4 text-green-600" color="text-green-600">Sectors</MonoLabel>
                  <SectionHeadline className="mb-8">Built for<br/>Scale</SectionHeadline>
                  <p className="text-gray-600 text-lg leading-relaxed">
                      Tailored workflows for high-velocity industries requiring instant customer communication.
                  </p>
              </div>
              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {INDUSTRIES.map((ind, i) => (
                      <div key={i} className="ind-card bg-creme border border-gray-200 p-8 hover:border-green-600 transition-all duration-300 group">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                              <ind.icon size={20} />
                          </div>
                          <h4 className="text-lg font-bold uppercase mb-3">{ind.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{ind.desc}</p>
                      </div>
                  ))}
              </div>
          </SwissGrid>
      </Section>

      {/* --- FAQ --- */}
      <Section className="bg-creme">
          <SwissGrid>
              <div className="col-span-12 lg:col-span-5">
                  <SectionHeadline>Frequently<br/>Asked</SectionHeadline>
              </div>
              <div className="col-span-12 lg:col-span-7">
                  {FAQS.map((faq, i) => (
                      <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
              </div>
          </SwissGrid>
      </Section>

      <Section className="bg-white border-b-0">
         <SwissGrid>
             <div className="col-span-12 text-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">Ready to scale?</h2>
                 <ButtonPrimary onClick={onScheduleDemo} className="bg-black hover:bg-gray-800">Schedule Demo</ButtonPrimary>
             </div>
         </SwissGrid>
      </Section>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-4 transition-all duration-300 hover:shadow-md">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-6 text-left">
                <span className={`font-bold text-lg ${isOpen ? 'text-green-600' : 'text-black'}`}>{question}</span>
                {isOpen ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-gray-400" />}
            </button>
            {isOpen && <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 leading-relaxed">{answer}</div>}
        </div>
    );
};
