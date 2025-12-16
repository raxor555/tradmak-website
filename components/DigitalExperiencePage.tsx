import React, { useEffect, useRef } from 'react';
import { 
  Monitor, Smartphone, Share2, Code, PenTool, BarChart3, 
  Globe, Zap, Layout, Search, ArrowUpRight, Cpu, Layers, Server
} from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, ButtonPrimary, ButtonOutline, SectionNumber, Card } from './UI';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "Web Engineering",
    desc: "Building high-performance, scalable digital platforms. From headless commerce to complex B2B trade dashboards, we engineer speed and reliability.",
    icon: Code,
    tags: ["React / Next.js", "Headless CMS", "3D WebGL", "PWA"]
  },
  {
    id: "02",
    title: "Social Ecosystems",
    desc: "Strategic content distribution that positions your brand as an industry authority. We manage narratives across LinkedIn, X, and Instagram.",
    icon: Share2,
    tags: ["Content Strategy", "B2B Lead Gen", "Community Mgmt", "Paid Performance"]
  },
  {
    id: "03",
    title: "Experience Design",
    desc: "User-centric interfaces rooted in Swiss design principles. We remove friction and enhance clarity to drive conversion and retention.",
    icon: PenTool,
    tags: ["UI/UX", "Prototyping", "User Research", "Design Systems"]
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Discovery", desc: "We audit your current digital footprint and define KPIs." },
  { step: "02", title: "Architecture", desc: "Wireframing the user journey and selecting the tech stack." },
  { step: "03", title: "Execution", desc: "Agile development sprints with weekly stakeholder reviews." },
  { step: "04", title: "Optimization", desc: "Post-launch analytics, A/B testing, and continuous iteration." }
];

interface DigitalExperiencePageProps {
  onScheduleDemo?: () => void;
}

export const DigitalExperiencePage: React.FC<DigitalExperiencePageProps> = ({ onScheduleDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Service Cards
      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Process Steps
      gsap.from(".process-step", {
        scrollTrigger: { trigger: ".process-section", start: "top 75%" },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-creme text-black pt-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-gray-300 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-swiss/5 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]"></div>
        </div>

        <SwissGrid className="relative z-10 h-full py-20 items-center">
          <div className="col-span-12 lg:col-span-7 z-20">
            <MonoLabel className="mb-6 text-blue-swiss hero-anim" color="text-blue-swiss">Digital Ecosystems</MonoLabel>
            <HeroHeadline className="mb-8 text-left hero-anim">
              Architecting<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-swiss to-purple-600">Digital Reality</span>
            </HeroHeadline>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-xl leading-relaxed border-l-2 border-black pl-8 mb-12 hero-anim">
              We merge high-performance engineering with narrative-driven design to build digital experiences that convert, retain, and inspire.
            </p>
            <div className="flex flex-wrap gap-4 hero-anim">
              <ButtonPrimary onClick={onScheduleDemo}>Start Project</ButtonPrimary>
              <ButtonOutline icon>View Portfolio</ButtonOutline>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0 relative hero-anim">
             {/* Abstract Interface Visual */}
             <div className="relative w-full max-w-md aspect-square">
                {/* Floating Elements */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white border border-gray-200 shadow-2xl rounded-lg p-6 z-10 animate-float">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-3 font-mono text-xs text-gray-400">
                        <div className="flex gap-2"><span className="text-blue-swiss">import</span> <span className="text-black">React</span> <span className="text-blue-swiss">from</span> 'react';</div>
                        <div className="flex gap-2"><span className="text-blue-swiss">const</span> <span className="text-purple-600">Experience</span> = () ={'>'} {'{'}</div>
                        <div className="pl-4 text-green-600">// Optimizing user journey</div>
                        <div className="pl-4"><span className="text-blue-swiss">return</span> <span className="text-black">{'<Scale />'}</span>;</div>
                        <div>{'}'}</div>
                    </div>
                    {/* Visual Graph */}
                    <div className="mt-8 flex items-end gap-1 h-20 opacity-50">
                        {[40, 60, 45, 80, 55, 90, 70, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-swiss" style={{height: `${h}%`}}></div>
                        ))}
                    </div>
                </div>
                
                {/* Back Layer */}
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-black p-6 rounded-lg z-0">
                    <div className="h-full border border-gray-800 flex items-center justify-center">
                        <Globe className="text-gray-800 w-32 h-32 stroke-[0.5]" />
                    </div>
                </div>
             </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- SERVICES GRID --- */}
      <Section className="services-grid bg-white">
        <SectionNumber number="01" className="right-0 top-0" />
        <SwissGrid>
            <div className="col-span-12 mb-16">
                <SectionHeadline>The Digital Trinity</SectionHeadline>
                <div className="w-12 h-1 bg-blue-swiss mt-6 mb-8"></div>
                <p className="text-gray-600 max-w-2xl text-lg">
                    A holistic approach combining code, content, and design.
                </p>
            </div>
            
            {SERVICES.map((srv, i) => (
                <div key={i} className="col-span-12 md:col-span-4 service-card group">
                    <Card className="h-full flex flex-col justify-between hover:border-blue-swiss hover:shadow-xl transition-all duration-500">
                        <div>
                            <div className="w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-lg mb-8 group-hover:bg-blue-swiss group-hover:text-white transition-colors duration-300">
                                <srv.icon size={24} />
                            </div>
                            <div className="flex items-baseline justify-between mb-4">
                                <h3 className="text-2xl font-bold uppercase">{srv.title}</h3>
                                <span className="font-mono text-xs text-gray-300 group-hover:text-blue-swiss transition-colors">{srv.id}</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {srv.desc}
                            </p>
                        </div>
                        <div className="border-t border-gray-100 pt-6">
                            <div className="flex flex-wrap gap-2">
                                {srv.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 bg-gray-50 text-gray-500 border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </SwissGrid>
      </Section>

      {/* --- WEB DEVELOPMENT DEEP DIVE --- */}
      <Section className="bg-creme border-b-0">
         <SwissGrid className="items-center">
             <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                 {/* Tech Stack Visual */}
                 <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                         <Layout className="w-8 h-8 text-blue-swiss mb-4" />
                         <h4 className="font-bold mb-2">Frontend</h4>
                         <p className="text-xs text-gray-500">React, Vue, Tailwind, Three.js</p>
                     </div>
                     <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg mt-8">
                         <Server className="w-8 h-8 text-purple-600 mb-4" />
                         <h4 className="font-bold mb-2">Backend</h4>
                         <p className="text-xs text-gray-500">Node.js, Python, PostgreSQL, AWS</p>
                     </div>
                     <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg -mt-8">
                         <Layers className="w-8 h-8 text-green-600 mb-4" />
                         <h4 className="font-bold mb-2">CMS</h4>
                         <p className="text-xs text-gray-500">Sanity, Contentful, Shopify</p>
                     </div>
                     <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                         <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                         <h4 className="font-bold mb-2">Performance</h4>
                         <p className="text-xs text-gray-500">Vercel Edge, Redis, CDN</p>
                     </div>
                 </div>
             </div>
             <div className="col-span-12 lg:col-span-7 pl-0 lg:pl-16 mb-12 lg:mb-0 order-1 lg:order-2">
                 <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Web Development</MonoLabel>
                 <SectionHeadline className="mb-6">Engineering<br/>Performance</SectionHeadline>
                 <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                     Your website is your global headquarters. We move beyond templates to engineer custom, high-velocity digital products. 
                     Whether it's a B2B trade portal or an immersive brand experience, we focus on speed, scalability, and SEO dominance.
                 </p>
                 <ul className="space-y-4 mb-8">
                     {["Headless Architecture for speed", "PWA (Progressive Web Apps)", "Advanced 3D/WebGL Interactions", "Automated CI/CD Pipelines"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3">
                             <CheckCircle className="w-5 h-5 text-green-500" />
                             <span className="text-black font-medium">{item}</span>
                         </li>
                     ))}
                 </ul>
                 <ButtonOutline>Explore Tech Stack</ButtonOutline>
             </div>
         </SwissGrid>
      </Section>

      {/* --- SOCIAL & MARKETING --- */}
      <div className="bg-black text-white py-24 md:py-32 border-b border-gray-800">
          <SwissGrid className="items-center">
              <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
                  <MonoLabel className="mb-4 text-white" color="text-white">Social Growth</MonoLabel>
                  <SectionHeadline className="mb-6 text-white">Amplified<br/>Narratives</SectionHeadline>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                      In the B2B industrial sector, trust is currency. We manage your reputation across LinkedIn and emerging channels, transforming technical expertise into thought leadership.
                  </p>
                  <div className="flex gap-4">
                      <div className="flex-1 p-4 border border-gray-800 bg-gray-900 rounded">
                          <div className="text-3xl font-bold text-blue-swiss mb-1">+40%</div>
                          <div className="text-[10px] text-gray-500 uppercase">Avg. Engagement</div>
                      </div>
                      <div className="flex-1 p-4 border border-gray-800 bg-gray-900 rounded">
                          <div className="text-3xl font-bold text-blue-swiss mb-1">3x</div>
                          <div className="text-[10px] text-gray-500 uppercase">Lead Quality</div>
                      </div>
                  </div>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:pl-12">
                   <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-xl">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                            <div className="flex-1">
                                <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                                <div className="h-3 w-20 bg-gray-800 rounded"></div>
                            </div>
                            <Share2 className="text-gray-600" />
                        </div>
                        <div className="space-y-3 mb-6">
                            <div className="h-3 w-full bg-gray-800 rounded"></div>
                            <div className="h-3 w-full bg-gray-800 rounded"></div>
                            <div className="h-3 w-2/3 bg-gray-800 rounded"></div>
                        </div>
                        <div className="h-48 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                            <BarChart3 className="text-gray-600 w-16 h-16" />
                        </div>
                   </div>
              </div>
          </SwissGrid>
      </div>

      {/* --- PROCESS SECTION --- */}
      <Section className="process-section bg-creme">
         <SwissGrid>
             <div className="col-span-12 mb-16 text-center">
                 <MonoLabel className="justify-center mb-4 text-blue-swiss" color="text-blue-swiss">Methodology</MonoLabel>
                 <SectionHeadline>The Blueprint</SectionHeadline>
             </div>
             
             <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {PROCESS_STEPS.map((step, i) => (
                     <div key={i} className="process-step border-t-2 border-gray-200 pt-6 hover:border-blue-swiss transition-colors duration-300">
                         <div className="text-3xl font-bold text-gray-300 mb-4 font-mono">{step.step}</div>
                         <h4 className="text-xl font-bold uppercase mb-3">{step.title}</h4>
                         <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                     </div>
                 ))}
             </div>
         </SwissGrid>
      </Section>

      {/* --- CTA --- */}
      <Section className="bg-white border-b-0">
         <SwissGrid>
            <div className="col-span-12 text-center">
               <h2 className="text-5xl md:text-7xl font-bold text-black uppercase mb-8 tracking-tighter">Elevate Your Brand</h2>
               <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
                  Let's build a digital presence that reflects the precision of your business.
               </p>
               <div className="flex justify-center">
                   <ButtonPrimary onClick={onScheduleDemo}>
                      Schedule Consultation
                   </ButtonPrimary>
               </div>
            </div>
         </SwissGrid>
      </Section>
    </div>
  );
};

// Helper for check circle icon
const CheckCircle = ({className}: {className?: string}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);