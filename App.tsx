import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowUp, ChevronDown, Cpu, MessageSquare, Zap, Globe, Clock, Box, Layers, BrainCircuit, BarChart3, Monitor, CheckCircle, Activity, Database, Workflow } from 'lucide-react';
import { 
  GridSystem, SwissGrid, Section, HeroHeadline, SectionHeadline, SubHeadline, 
  BodyText, MonoLabel, SectionNumber, 
  ButtonPrimary, ButtonOutline, TextLink, 
  Input, TextArea, Card 
} from './components/UI';
import { AIAgentsPage } from './components/AIAgentsPage';
import { AIChatbotsPage } from './components/AIChatbotsPage';
import { AaaSPage } from './components/AaaSPage';
import { WhatsAppAutomationPage } from './components/WhatsAppAutomationPage';
import { DigitalExperiencePage } from './components/DigitalExperiencePage';
import { ScheduleDemoPage } from './components/ScheduleDemoPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { DataProtectionPage } from './components/DataProtectionPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostDetailPage } from './components/BlogPostDetailPage';
import { Footer } from './components/Footer';
import ChatWidget from './components/Chatbot';
import { BLOG_POSTS } from './constants/blogData';

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

type PageType = 'home' | 'ai-agents' | 'ai-chatbots' | 'whatsapp-automation' | 'aaas' | 'digital-experience' | 'schedule-demo' | 'privacy-policy' | 'data-protection' | 'blog' | 'blog-post';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  
  const [time, setTime] = useState<string>("");
  const [locationLabel, setLocationLabel] = useState<string>("DXB (GMT+4)");
  const [userTimezone, setUserTimezone] = useState<string>("Asia/Dubai");
  
  // Routing State
  const [activePage, setActivePage] = useState<PageType>('home');
  const [activeBlogPostId, setActiveBlogPostId] = useState<string | null>(null);

  // reCAPTCHA State
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  // Handle Hash-based Routing
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash;
      
      // Handle Blog Post Detail Pages
      if (hash.startsWith('#/blog/')) {
        const postId = hash.replace('#/blog/', '');
        const postExists = BLOG_POSTS.find(p => p.id === postId);
        if (postExists) {
          setActivePage('blog-post');
          setActiveBlogPostId(postId);
          window.scrollTo(0, 0);
          return;
        }
      }

      // Standardize the hash string
      if (hash.startsWith('#/')) {
        hash = hash.slice(2);
      } else if (hash.startsWith('#')) {
        hash = hash.slice(1);
      } else {
        hash = 'home';
      }

      const validPages: PageType[] = ['home', 'ai-agents', 'ai-chatbots', 'whatsapp-automation', 'aaas', 'digital-experience', 'schedule-demo', 'privacy-policy', 'data-protection', 'blog'];
      
      if (validPages.includes(hash as PageType)) {
        setActivePage(hash as PageType);
        setActiveBlogPostId(null);
        window.scrollTo(0, 0);
      } else {
        setActivePage('home');
        setActiveBlogPostId(null);
        if (hash && hash !== 'home' && hash !== '/') {
          setTimeout(() => {
             const el = document.getElementById(hash);
             if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize reCAPTCHA when on home page
  useEffect(() => {
    if (activePage === 'home' && recaptchaRef.current && (window as any).grecaptcha) {
      try {
        (window as any).grecaptcha.render(recaptchaRef.current, {
          sitekey: '6LfRWTAsAAAAAOZmxRFgahi0R4eq8d3EP_xKdgt8',
          callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(null)
        });
      } catch (e) {
        console.warn("reCAPTCHA rendering issue:", e);
      }
    }
  }, [activePage]);

  // Typing animation state
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 800);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch Location and Timezone
  useEffect(() => {
    fetch('https://ipwho.is/')
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const cityDisplay = data.city ? data.city.toUpperCase() : 'LOCAL';
                const offset = data.timezone.utc;
                setLocationLabel(`${cityDisplay} (GMT${offset})`);
                setUserTimezone(data.timezone.id);
            }
        })
        .catch(e => console.log('Location fetch failed', e));
  }, []);

  // Timer Effect based on userTimezone
  useEffect(() => {
    const updateTime = () => {
        const d = new Date();
        const options: Intl.DateTimeFormatOptions = { 
          timeZone: userTimezone, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit',
          hour12: false 
        };
        setTime(d.toLocaleTimeString('en-US', options));
    };

    updateTime(); 
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [userTimezone]);

  // Typing animation effect
  useEffect(() => {
    const word = "Digitalization";
    let typeSpeed = 150;
    
    if (isDeleting) typeSpeed = 75;
    
    if (!isDeleting && typingText === word) {
      typeSpeed = 2000; 
    } else if (isDeleting && typingText === "") {
      typeSpeed = 500; 
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

  const navigateTo = (page: PageType, param?: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    
    let newHash = '';
    if (page === 'home') {
      newHash = param ? `#${param}` : '#/';
    } else if (page === 'blog-post' && param) {
      newHash = `#/blog/${param}`;
    } else {
      newHash = `#/${page}`;
    }
    
    window.location.hash = newHash;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the security verification.");
      return;
    }

    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://n8n.srv1040836.hstgr.cloud/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          'g-recaptcha-response': captchaToken
        }),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const currentPost = activePage === 'blog-post' ? BLOG_POSTS.find(p => p.id === activeBlogPostId) : null;

  return (
    <div className="relative min-h-screen bg-creme text-black font-sans selection:bg-blue-swiss selection:text-white overflow-hidden">
      
      <GridSystem />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className={`relative flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border border-white/50 shadow-sm rounded-full px-6 h-16' : 'h-20'}`}>
            
            <div className="flex items-center gap-3 cursor-pointer z-50" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-swiss border border-blue-swiss backdrop-blur-md rounded-lg shadow-lg shadow-blue-swiss/20">
                <div className="w-3 h-3 bg-white shadow-sm rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-black leading-none">TRADMAK</span>
                <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase leading-none mt-1">ECOSYSTEM</span>
              </div>
            </div>

            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${!isScrolled && 'bg-white/40 backdrop-blur-lg border border-white/40 shadow-sm hover:shadow-md hover:bg-white/60'}`}>
                
                <button 
                  onClick={() => navigateTo('home', 'about')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activePage === 'home' ? 'text-blue-swiss bg-white' : 'text-gray-600 hover:text-black hover:bg-white/90'}`}
                >
                  Company
                </button>

                <div 
                  className="relative group"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                    <button 
                      className={`flex items-center gap-1 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${productsDropdownOpen ? 'bg-black text-white' : 'text-gray-600 hover:text-black hover:bg-white/90'}`}
                    >
                      Products <ChevronDown size={14} className={`transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''}`}/>
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 origin-top ${productsDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                       <div className="bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-2xl p-2 overflow-hidden flex flex-col gap-1">
                          
                          <button 
                            onClick={() => navigateTo('whatsapp-automation')}
                            className="text-left px-4 py-4 rounded-xl hover:bg-white transition-all duration-300 group/item flex items-center gap-4 hover:shadow-sm"
                          >
                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
                                <MessageSquare size={18}/>
                             </div>
                             <div>
                               <div className="text-xs font-bold text-black uppercase mb-0.5">WhatsApp API</div>
                               <div className="text-[10px] text-gray-500 font-medium">Enterprise Automation</div>
                             </div>
                          </button>

                          <button 
                            onClick={() => navigateTo('ai-chatbots')}
                            className="text-left px-4 py-4 rounded-xl hover:bg-white transition-all duration-300 group/item flex items-center gap-4 hover:shadow-sm"
                          >
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-swiss group-hover/item:text-white transition-colors">
                                <Zap size={18}/>
                             </div>
                             <div>
                               <div className="text-xs font-bold text-black uppercase mb-0.5">AI Chatbot</div>
                               <div className="text-[10px] text-gray-500 font-medium">Conversational Intelligence</div>
                             </div>
                          </button>
                          
                          <button 
                            onClick={() => navigateTo('digital-experience')}
                            className="text-left px-4 py-4 rounded-xl hover:bg-white transition-all duration-300 group/item flex items-center gap-4 hover:shadow-sm"
                          >
                             <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover/item:bg-purple-vivid group-hover/item:text-white transition-colors">
                                <Monitor size={18}/>
                             </div>
                             <div>
                               <div className="text-xs font-bold text-black uppercase mb-0.5">Digital Exp</div>
                               <div className="text-[10px] text-gray-500 font-medium">Web, Social & DX</div>
                             </div>
                          </button>
                       </div>
                    </div>
                </div>

                <button 
                  onClick={() => navigateTo('ai-agents')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activePage === 'ai-agents' ? 'text-blue-swiss bg-white' : 'text-gray-600 hover:text-black hover:bg-white/90'}`}
                >
                  AI Agents
                </button>

                <button 
                  onClick={() => navigateTo('aaas')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activePage === 'aaas' ? 'text-blue-swiss bg-white' : 'text-gray-600 hover:text-black hover:bg-white/90'}`}
                >
                  AaaS
                </button>
                
                <button 
                  onClick={() => navigateTo('blog')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activePage === 'blog' ? 'text-blue-swiss bg-white' : 'text-gray-600 hover:text-black hover:bg-white/90'}`}
                >
                  Blog
                </button>
                
                <button 
                  onClick={() => navigateTo('home', 'contact')}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:bg-white/90 transition-all duration-300"
                >
                  Contact
                </button>

              </div>
            </nav>

            <div className="hidden md:flex justify-end items-center gap-4 z-50">
              <div className={`hidden xl:block text-right mr-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">{locationLabel}</span>
                <span className="block text-xs font-mono text-blue-swiss font-medium">{time}</span>
              </div>
              
              <button 
                onClick={() => navigateTo('schedule-demo')}
                className="group relative bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full border border-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule Demo
              </button>
            </div>

            <div className="md:hidden flex justify-end z-50">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black p-2 rounded-full bg-white/50 backdrop-blur-md border border-white/50">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-creme transform transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <GridSystem />
        <div className="relative z-10 flex flex-col h-full justify-center px-8 space-y-6">
          <button onClick={() => navigateTo('home', 'about')} className="text-left text-3xl font-bold text-black uppercase tracking-tighter">Company</button>
          
          <div className="py-2 border-l-2 border-gray-200 pl-4 space-y-4">
             <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Products</div>
             <button onClick={() => navigateTo('whatsapp-automation')} className="block text-left text-2xl font-bold text-black uppercase tracking-tighter">WhatsApp Auto</button>
             <button onClick={() => navigateTo('ai-chatbots')} className="block text-left text-2xl font-bold text-black uppercase tracking-tighter">AI Chatbot</button>
             <button onClick={() => navigateTo('digital-experience')} className="block text-left text-2xl font-bold text-black uppercase tracking-tighter">Digital Exp</button>
          </div>

          <button onClick={() => navigateTo('ai-agents')} className="text-left text-3xl font-bold text-black uppercase tracking-tighter">AI Agents</button>
          <button onClick={() => navigateTo('aaas')} className="text-left text-3xl font-bold text-black uppercase tracking-tighter">AaaS</button>
          <button onClick={() => navigateTo('blog')} className="text-left text-3xl font-bold text-black uppercase tracking-tighter">Blog</button>
          <button onClick={() => navigateTo('home', 'contact')} className="text-left text-3xl font-bold text-black uppercase tracking-tighter">Contact</button>
          
          <button 
              onClick={() => navigateTo('schedule-demo')}
              className="text-left text-3xl font-bold text-blue-swiss uppercase tracking-tighter mt-4"
          >
              Schedule Demo
          </button>
        </div>
      </div>

      <main>
        {activePage === 'ai-agents' ? (
          <AIAgentsPage onScheduleDemo={() => navigateTo('schedule-demo')} />
        ) : activePage === 'ai-chatbots' ? (
          <AIChatbotsPage />
        ) : activePage === 'whatsapp-automation' ? (
          <WhatsAppAutomationPage onScheduleDemo={() => navigateTo('schedule-demo')} />
        ) : activePage === 'digital-experience' ? (
          <DigitalExperiencePage onScheduleDemo={() => navigateTo('schedule-demo')} />
        ) : activePage === 'aaas' ? (
          <AaaSPage />
        ) : activePage === 'schedule-demo' ? (
          <ScheduleDemoPage />
        ) : activePage === 'privacy-policy' ? (
          <PrivacyPolicyPage />
        ) : activePage === 'data-protection' ? (
          <DataProtectionPage />
        ) : activePage === 'blog' ? (
          <BlogPage onPostClick={(id) => navigateTo('blog-post', id)} />
        ) : activePage === 'blog-post' && currentPost ? (
          <BlogPostDetailPage post={currentPost} onBack={() => navigateTo('blog')} />
        ) : (
          <>
            <section id="hero" className="relative h-screen min-h-[600px] flex flex-col overflow-hidden border-b border-gray-200">
              
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-creme"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-swiss/10 rounded-full blur-[120px] mix-blend-multiply animate-blob filter"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-accent/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000 filter"></div>
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-blue-bright/10 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000 filter"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(247,247,245,0.8)_100%)]"></div>
              </div>

              <SwissGrid className="relative z-10 h-full pointer-events-none">
                <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center pb-8 pointer-events-auto relative z-20">
                  <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="h-[1px] w-8 bg-blue-swiss"></div>
                      <span className="text-[10px] font-mono text-blue-swiss uppercase tracking-widest">Next Gen Automation</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-black leading-[0.9] tracking-tighter uppercase font-sans mb-6">
                      Empowering <br />
                      <span className="text-transparent bg-clip-text bg-gradient-accent">Global Trade</span>
                    </h1>
                    
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8 max-w-4xl">
                      <div className="text-xl md:text-2xl font-montserrat font-light text-gray-800 leading-tight">
                        through Intelligent <span className="font-semibold text-blue-swiss">{typingText}</span><span className="animate-blink text-blue-swiss">|</span>
                      </div>
                    </div>

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

                <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center items-end pointer-events-none md:pointer-events-auto relative z-10 hidden lg:flex">
                  <div className="w-full max-w-[420px] mr-0 animate-fade-in-right delay-200 animate-float">
                    
                    <div className="relative glass-card p-6 backdrop-blur-xl border border-white/60 shadow-xl">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center gap-3">
                          <div className="relative p-2 bg-blue-swiss/10 border border-blue-swiss/20">
                            <Cpu className="w-5 h-5 text-blue-swiss" />
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-swiss rounded-full animate-pulse shadow-[0_0_8px_#00A4DA]"></div>
                          </div>
                          <div>
                            <div className="text-[9px] font-mono text-blue-swiss uppercase tracking-widest mb-0.5">Trade OS v2.4</div>
                            <div className="text-lg font-bold text-black tracking-tight">Global Trade AI</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] font-mono text-gray-500 uppercase">Optimization</div>
                          <div className="text-green-600 font-mono font-bold text-base">99.1%</div>
                        </div>
                      </div>
                      
                      <div className="relative h-40 mb-5 bg-white border border-gray-200 p-4 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-gray-300"></div>
                        <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-blue-swiss/50 blur-[1px] animate-pulse"></div>
                        <div className="absolute top-1/2 left-6 w-3 h-3 bg-white border border-gray-500 rounded-full transform -translate-y-1/2 z-10"></div>
                        <div className="absolute top-1/2 right-6 w-3 h-3 bg-blue-swiss border border-blue-swiss rounded-full transform -translate-y-1/2 z-10 shadow-lg"></div>
                        <div className="absolute top-1/2 left-6 w-32 h-1 bg-gradient-to-r from-transparent via-blue-swiss to-transparent transform -translate-y-1/2 animate-slide-right z-0"></div>
                        <div className="absolute top-6 left-6 text-[9px] font-mono text-gray-500">ORIGIN: DUBAI</div>
                        <div className="absolute bottom-6 right-6 text-[9px] font-mono text-black text-right">DEST: ROTTERDAM<br/><span className="text-green-600">ETA: -2h</span></div>
                      </div>

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

                    <div className="absolute -z-10 top-8 -right-4 w-full h-full border border-gray-300 bg-white/40 backdrop-blur-sm"></div>

                  </div>
                </div>

              </SwissGrid>
            </section>

            <Section id="about" className="relative overflow-hidden">
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
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl">
                      TradMAK leads in industrial B2B business optimization. We don't just move goods; we engineer the flow of international commerce using lean methodologies and cutting-edge SaaS infrastructure to mitigate fragmentation risks.
                    </p>
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
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2"></div>

                <div className="space-y-32">
                  
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-blue-swiss -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-blue-swiss group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
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
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <BarChart3 className="w-64 h-64 stroke-[0.5]" />
                    </div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-black -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-black group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <Globe className="w-64 h-64 stroke-[0.5]" />
                    </div>
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

                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 group">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border border-blue-swiss -translate-x-[7px] md:-translate-x-[8px] mt-2 md:mt-10 z-10 group-hover:bg-blue-swiss group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_4px_#F7F7F5]"></div>
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
                    <div className="hidden md:flex justify-center items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 group-hover:text-black">
                        <BrainCircuit className="w-64 h-64 stroke-[0.5]" />
                    </div>
                  </div>

                </div>
              </div>
            </Section>

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
                        <div className="text-xs font-mono text-gray-500 uppercase mb-2">Location</div>
                        <address className="text-gray-600 not-italic text-lg">
                          TradMAK FZCO<br/>
                          Dubai Silicon Oasis<br/>
                          Dubai, UAE
                        </address>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7">
                  <Card className="h-full bg-creme border-gray-200 p-8 md:p-12 shadow-inner">
                      <div className="flex justify-between items-center mb-10">
                        <h3 className="text-2xl font-bold text-black">INQUIRY FORM</h3>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${formStatus === 'submitting' ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
                          <span className={`text-[10px] font-mono ${formStatus === 'submitting' ? 'text-yellow-600' : 'text-green-600'} uppercase tracking-widest`}>
                            {formStatus === 'submitting' ? 'Sending...' : 'Online'}
                          </span>
                        </div>
                      </div>
                      <form className="space-y-8" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input 
                            label="First Name" 
                            id="fname" 
                            type="text" 
                            placeholder="John" 
                            className="h-16 text-lg px-2"
                            value={formData.fname}
                            onChange={handleInputChange}
                            disabled={formStatus === 'submitting' || formStatus === 'success'}
                          />
                          <Input 
                            label="Last Name" 
                            id="lname" 
                            type="text" 
                            placeholder="Doe" 
                            className="h-16 text-lg px-2"
                            value={formData.lname}
                            onChange={handleInputChange}
                            disabled={formStatus === 'submitting' || formStatus === 'success'}
                          />
                        </div>
                        <Input 
                          label="Corporate Email" 
                          id="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          required 
                          className="h-16 text-lg px-2"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={formStatus === 'submitting' || formStatus === 'success'}
                        />
                        <TextArea 
                          label="Message" 
                          id="message" 
                          placeholder="Details regarding your inquiry..." 
                          className="text-lg px-2 py-2"
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={formStatus === 'submitting' || formStatus === 'success'}
                        />
                        
                        <div className="space-y-4">
                           <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Security Verification</label>
                           <div ref={recaptchaRef} className="g-recaptcha" data-sitekey="6LfRWTAsAAAAAOZmxRFgahi0R4eq8d3EP_xKdgt8"></div>
                        </div>

                        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock size={14} />
                            <span className="text-xs">We usually reply within 24 hours.</span>
                          </div>
                          <ButtonPrimary 
                            type="submit" 
                            className={`w-full md:w-auto py-5 px-12 text-base ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                            disabled={formStatus === 'submitting' || formStatus === 'success' || !captchaToken}
                          >
                             {formStatus === 'submitting' ? (
                               'Submitting...'
                             ) : formStatus === 'success' ? (
                               <>
                                 <CheckCircle size={18} /> Your form has been submitted
                               </>
                             ) : (
                               'Submit Inquiry'
                             )}
                          </ButtonPrimary>
                        </div>
                      </form>
                  </Card>
                </div>
              </SwissGrid>
            </Section>
          </>
        )}

        <Footer onNavigate={(page) => navigateTo(page)} />
        
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 left-8 z-50 p-4 bg-black text-white border border-black shadow-lg transition-all duration-500 transform hover:bg-blue-swiss hover:border-blue-swiss hover:-translate-y-1 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>

        <ChatWidget />
      </main>
    </div>
  );
};

export default App;