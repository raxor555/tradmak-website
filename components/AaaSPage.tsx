import React, { useEffect, useRef } from 'react';
import { Settings, RefreshCw, TrendingUp, CheckCircle, ArrowRight, Layers, Workflow, Server } from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, BodyText, Card, ButtonPrimary } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AaaSPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-headline", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
        .from(".hero-text", { x: -30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.6");

      // Process Steps Animation
      gsap.from(".process-step", {
        scrollTrigger: {
            trigger: ".process-section",
            start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out"
      });

      // Pricing Cards Animation
      gsap.from(".pricing-card", {
        scrollTrigger: {
            trigger: ".pricing-section",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-gray-300">
        
        {/* ENHANCED SHADER BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-blue-swiss/5 rounded-full blur-[140px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-accent/5 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 h-full py-20">
          <div className="col-span-12 lg:col-span-9">
            <div className="hero-label">
                <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Agency Model</MonoLabel>
            </div>
            <div className="hero-headline">
                <HeroHeadline className="mb-8 text-left">
                Automation<br/>as a Service
                </HeroHeadline>
            </div>
            <div className="hero-text">
                <p className="text-xl md:text-3xl text-gray-800 font-light leading-snug mb-12 border-l-4 border-black pl-8 max-w-4xl">
                We don't just sell software. We operate as your dedicated automation department. We audit, build, deploy, and manage your entire digital infrastructure.
                </p>
            </div>
            <div className="hero-btn">
                <ButtonPrimary>Get an Audit</ButtonPrimary>
            </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- THE MODEL --- */}
      <Section className="bg-white process-section">
         <SwissGrid>
            <div className="col-span-12 lg:col-span-4">
               <SectionHeadline>The Process</SectionHeadline>
               <p className="text-gray-600 mt-6 text-lg max-w-xs">A cyclical methodology designed for continuous improvement.</p>
               <div className="w-12 h-1 bg-black mt-8"></div>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-16">
               
               <div className="flex flex-col md:flex-row gap-8 items-start group process-step">
                  <div className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-blue-swiss group-hover:border-blue-swiss group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl rounded-sm">
                     <span className="font-mono text-2xl font-bold">01</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold uppercase mb-3 flex items-center gap-3">
                        Discovery & Audit
                        <RefreshCw className="w-5 h-5 text-gray-400 group-hover:text-blue-swiss transition-colors opacity-0 group-hover:opacity-100" />
                     </h3>
                     <BodyText>
                        We embed with your team to map out every manual workflow. We identify bottlenecks, repetitive tasks, and data silos that are costing you man-hours.
                     </BodyText>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 items-start group process-step">
                  <div className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-blue-swiss group-hover:border-blue-swiss group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl rounded-sm">
                     <span className="font-mono text-2xl font-bold">02</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold uppercase mb-3 flex items-center gap-3">
                        Architect & Build
                        <Workflow className="w-5 h-5 text-gray-400 group-hover:text-blue-swiss transition-colors opacity-0 group-hover:opacity-100" />
                     </h3>
                     <BodyText>
                        Our engineers develop custom scripts, API connectors, and agentic workflows. We build the "pipes" that allow your disparate software stack to talk to each other.
                     </BodyText>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 items-start group process-step">
                  <div className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-blue-swiss group-hover:border-blue-swiss group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl rounded-sm">
                     <span className="font-mono text-2xl font-bold">03</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold uppercase mb-3 flex items-center gap-3">
                        Manage & Scale
                        <Server className="w-5 h-5 text-gray-400 group-hover:text-blue-swiss transition-colors opacity-0 group-hover:opacity-100" />
                     </h3>
                     <BodyText>
                        Automation isn't "set and forget". APIs change, businesses evolve. We provide ongoing maintenance, error handling, and iterative improvements as a subscription service.
                     </BodyText>
                  </div>
               </div>

            </div>
         </SwissGrid>
      </Section>

      {/* --- PRICING / ENGAGEMENT --- */}
      <Section className="bg-creme pricing-section">
          <SwissGrid>
             <div className="col-span-12 text-center mb-20">
                <MonoLabel className="justify-center mb-4 text-blue-swiss" color="text-blue-swiss">Engagement Models</MonoLabel>
                <SectionHeadline>Partnership Tiers</SectionHeadline>
             </div>

             <div className="col-span-12 md:col-span-4 pricing-card">
                <Card className="h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 bg-white">
                   <div className="mb-6 text-xs font-mono uppercase text-gray-400 tracking-widest">Starter</div>
                   <h3 className="text-3xl font-bold mb-2">Project Basis</h3>
                   <div className="w-12 h-1 bg-gray-200 mb-8"></div>
                   <p className="text-gray-600 mb-10 flex-grow text-lg">Best for specific, one-off integrations or MVP development.</p>
                   <ul className="space-y-4 mb-10">
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> Single Workflow</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> Documentation Handoff</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> 30 Days Support</li>
                   </ul>
                   <ButtonPrimary className="w-full bg-black hover:bg-gray-800">Inquire</ButtonPrimary>
                </Card>
             </div>

             <div className="col-span-12 md:col-span-4 pricing-card relative">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-swiss text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg z-20">Most Popular</div>
                
                <Card className="h-full flex flex-col border-blue-swiss shadow-xl relative overflow-hidden bg-white hover:-translate-y-2 transition-all duration-500 transform scale-105 z-10">
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-swiss"></div>
                   <div className="mb-6 text-xs font-mono uppercase text-blue-swiss tracking-widest font-bold">Growth</div>
                   <h3 className="text-3xl font-bold mb-2">Retainer</h3>
                   <div className="w-12 h-1 bg-blue-swiss mb-8"></div>
                   <p className="text-gray-600 mb-10 flex-grow text-lg">Dedicated engineering hours per month for continuous build and optimization.</p>
                   <ul className="space-y-4 mb-10">
                      <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-blue-swiss"/> 40 Dev Hours/Mo</li>
                      <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-blue-swiss"/> Priority SLA</li>
                      <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-blue-swiss"/> Weekly Strategy Calls</li>
                   </ul>
                   <ButtonPrimary className="w-full shadow-blue-swiss/20">Start Growth</ButtonPrimary>
                </Card>
             </div>

             <div className="col-span-12 md:col-span-4 pricing-card">
                <Card className="h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 bg-white">
                   <div className="mb-6 text-xs font-mono uppercase text-gray-400 tracking-widest">Enterprise</div>
                   <h3 className="text-3xl font-bold mb-2">Dedicated Team</h3>
                   <div className="w-12 h-1 bg-black mb-8"></div>
                   <p className="text-gray-600 mb-10 flex-grow text-lg">Full-time automation squad embedded within your organization.</p>
                   <ul className="space-y-4 mb-10">
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> Full Stack Team</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> 24/7 Monitoring</li>
                      <li className="flex items-center gap-3 text-sm"><CheckCircle size={18} className="text-green-600"/> On-Premise Deployment</li>
                   </ul>
                   <ButtonPrimary className="w-full bg-black hover:bg-gray-800">Contact Sales</ButtonPrimary>
                </Card>
             </div>

          </SwissGrid>
      </Section>
    </div>
  );
};
