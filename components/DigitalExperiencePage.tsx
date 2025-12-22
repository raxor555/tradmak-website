
import React, { useEffect, useRef } from 'react';
import { Monitor, Smartphone, Share2, Code, PenTool, BarChart3, Globe, Zap, Layout, Search, ArrowUpRight, Cpu, Layers, Server } from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, ButtonPrimary, ButtonOutline, SectionNumber, Card } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { id: "01", title: "Web Engineering", desc: "Building high-performance platforms from headless commerce to dashboards.", icon: Code, tags: ["React", "Headless CMS", "3D WebGL"] },
  { id: "02", title: "Social Ecosystems", desc: "Strategic content distribution across LinkedIn, X, and Instagram.", icon: Share2, tags: ["Content Strategy", "B2B Lead Gen"] },
  { id: "03", title: "Experience Design", desc: "User-centric interfaces rooted in Swiss design principles.", icon: PenTool, tags: ["UI/UX", "Design Systems"] }
];

interface DigitalExperiencePageProps {
  onScheduleDemo?: () => void;
}

export const DigitalExperiencePage: React.FC<DigitalExperiencePageProps> = ({ onScheduleDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", { y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" });
      gsap.from(".service-card", { scrollTrigger: { trigger: ".services-grid", start: "top 80%" }, y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
      gsap.from(".process-step", { scrollTrigger: { trigger: ".process-section", start: "top 75%" }, x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative border-b border-gray-300 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-swiss/5 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]"></div>
        </div>

        <SwissGrid className="relative z-10 items-center">
          <div className="col-span-12 lg:col-span-7 z-20">
            <MonoLabel className="mb-6 text-blue-swiss hero-anim" color="text-blue-swiss">Digital Ecosystems</MonoLabel>
            <HeroHeadline className="mb-8 text-left hero-anim">
              Architecting<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-swiss to-purple-600">Digital Reality</span>
            </HeroHeadline>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-xl leading-relaxed border-l-2 border-black pl-8 mb-12 hero-anim">
              We merge high-performance engineering with narrative-driven design to build digital experiences that convert.
            </p>
            <div className="flex flex-wrap gap-4 hero-anim">
              <ButtonPrimary onClick={onScheduleDemo}>Start Project</ButtonPrimary>
              <ButtonOutline icon>View Portfolio</ButtonOutline>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0 relative hero-anim">
             <div className="relative w-full max-w-md aspect-square">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white border border-gray-200 shadow-2xl rounded-lg p-6 z-10 animate-float">
                    <div className="space-y-3 font-mono text-xs text-gray-400">
                        <div><span className="text-blue-swiss">const</span> <span className="text-purple-600">Experience</span> = () ={'>'} {'{'}</div>
                        <div className="pl-4 text-green-600">// Optimizing user journey</div>
                        <div>{'}'}</div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-black border border-gray-800 shadow-2xl rounded-lg p-6 z-20 animate-float animation-delay-2000">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-800 rounded w-5/6"></div>
                    </div>
                </div>
             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- SERVICES --- */}
      <Section className="services-grid bg-white">
        <SectionNumber number="01" className="right-0 top-0" />
        <SwissGrid>
            <div className="col-span-12 mb-16">
                <SectionHeadline>The Digital Trinity</SectionHeadline>
            </div>
            {SERVICES.map((srv, i) => (
                <div key={i} className="col-span-12 md:col-span-4 service-card group">
                    <Card className="h-full flex flex-col justify-between hover:border-blue-swiss transition-all duration-500">
                        <div>
                            <srv.icon size={24} className="mb-8 text-black group-hover:text-blue-swiss transition-colors" />
                            <h3 className="text-2xl font-bold uppercase mb-4">{srv.title}</h3>
                            <p className="text-gray-600 mb-8">{srv.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {srv.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono border border-gray-200 px-2 py-1 uppercase">{tag}</span>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </SwissGrid>
      </Section>

      {/* --- PROCESS --- */}
      <Section className="process-section bg-creme">
          <SectionNumber number="02" className="left-0 top-0" />
          <SwissGrid>
              <div className="col-span-12 lg:col-span-4 mb-12">
                  <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Methodology</MonoLabel>
                  <SectionHeadline>Our Process</SectionHeadline>
              </div>
              <div className="col-span-12 lg:col-span-8">
                  <div className="space-y-12">
                      {[
                          { step: "01", title: "Discovery & Strategy", icon: Search, desc: "We analyze your market, user personas, and business goals to architect a roadmap." },
                          { step: "02", title: "Design & Prototype", icon: Layout, desc: "High-fidelity UI/UX design with interactive prototypes to validate user flows." },
                          { step: "03", title: "Development", icon: Code, desc: "Agile engineering using modern frameworks for speed, scalability, and SEO." },
                          { step: "04", title: "Launch & Iterate", icon: ArrowUpRight, desc: "Deployment to edge networks with continuous monitoring and optimization." }
                      ].map((item, i) => (
                          <div key={i} className="process-step flex flex-col md:flex-row gap-6 md:gap-12 border-t border-gray-300 pt-8 group">
                              <div className="font-mono text-3xl font-bold text-gray-300 group-hover:text-blue-swiss transition-colors">{item.step}</div>
                              <div className="flex-1">
                                  <div className="flex items-center gap-4 mb-3">
                                      <h4 className="text-2xl font-bold uppercase">{item.title}</h4>
                                      <item.icon size={20} className="text-gray-400 group-hover:text-blue-swiss transition-colors" />
                                  </div>
                                  <p className="text-gray-600 max-w-xl">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </SwissGrid>
      </Section>

      {/* --- TECH STACK --- */}
      <Section className="bg-white">
          <SectionNumber number="03" className="right-0 top-0" />
          <SwissGrid>
              <div className="col-span-12 text-center mb-16">
                  <MonoLabel className="justify-center mb-4 text-blue-swiss" color="text-blue-swiss">Technology</MonoLabel>
                  <SectionHeadline>Modern Stack</SectionHeadline>
              </div>
              <div className="col-span-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {[
                          { icon: Monitor, label: "Frontend", items: ["React", "Next.js", "Vue"] },
                          { icon: Server, label: "Backend", items: ["Node.js", "Python", "Go"] },
                          { icon: Layers, label: "CMS", items: ["Sanity", "Strapi", "Contentful"] },
                          { icon: Cpu, label: "Infrastructure", items: ["AWS", "Vercel", "Docker"] },
                          { icon: Zap, label: "Performance", items: ["Redis", "CDN", "Edge"] }
                      ].map((stack, i) => (
                          <div key={i} className="p-6 border border-gray-100 hover:border-blue-swiss/50 bg-gray-50/50 hover:bg-white transition-all duration-300 text-center group">
                              <stack.icon size={24} className="mx-auto mb-4 text-gray-400 group-hover:text-blue-swiss transition-colors" />
                              <h5 className="font-bold uppercase text-xs mb-3">{stack.label}</h5>
                              <ul className="space-y-1">
                                  {stack.items.map(tech => (
                                      <li key={tech} className="text-[10px] font-mono text-gray-500">{tech}</li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>
          </SwissGrid>
      </Section>

      <Section className="bg-creme border-b-0">
         <SwissGrid>
            <div className="col-span-12 text-center">
               <h2 className="text-5xl md:text-7xl font-bold text-black uppercase mb-8 tracking-tighter">Start Building</h2>
               <div className="flex justify-center gap-4">
                   <ButtonPrimary onClick={onScheduleDemo}>
                      Start Project
                   </ButtonPrimary>
                   <ButtonOutline icon>
                      View Case Studies
                   </ButtonOutline>
               </div>
            </div>
         </SwissGrid>
      </Section>
    </div>
  );
};
