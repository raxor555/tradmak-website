import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Search, Network, ShieldCheck, FileText, BarChart, Users, Layers, Database, Lock, MessageCircle, ArrowLeft, ArrowRight, Smartphone } from 'lucide-react';
import { SwissGrid, Section, SectionHeadline, HeroHeadline, MonoLabel, BodyText, SectionNumber, ButtonPrimary, ButtonOutline } from './UI';

// Terminal Data
const TERMINAL_LINES = [
  { text: "> initializing_core_sequence...", type: "cmd" },
  { text: "[OK] Neural Link Established", type: "success" },
  { text: "[OK] Global Trade Database Connected", type: "success" },
  { text: "> ./deploy_agent --id=vesta-alpha", type: "cmd" },
  { text: "   Loading Vesta Module (v3.4.1)...", type: "info" },
  { text: "> analyzing_market_volatility --target='Steel Rebar'", type: "cmd" },
  { text: "   REGION: SE Asia", type: "output" },
  { text: "   PREDICTION: +4.2% (7d)", type: "warning" },
  { text: "   ACTION: Initiating RFQ sequence...", type: "output" },
  { text: "> ./optimize_route --shipment=4920", type: "cmd" },
  { text: "   ROUTE: Dubai -> Rotterdam", type: "output" },
  { text: "   STATUS: Optimization Complete (Saved 14h)", type: "success" },
  { text: "> _", type: "cursor" }
];

// Agent Templates Data
const AGENTS = [
  {
    id: "nexus",
    name: "Nexus",
    role: "WhatsApp Trade Concierge",
    desc: "Automated B2B communication on WhatsApp. Handles quote requests, order status updates, and document retrieval via natural language interface.",
    version: "v1.2.0",
    stat: "24/7 Availability",
    icon: Smartphone,
    color: "text-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    id: "vesta",
    name: "Vesta",
    role: "Sourcing & Procurement",
    desc: "Scours global markets for raw materials, analyzing price volatility and supplier reliability scores in real-time. Automatically initiates RFQs.",
    version: "v3.4.1",
    stat: "98.2% Accuracy",
    icon: Search,
    color: "text-blue-swiss",
    bgColor: "bg-blue-swiss/10",
    borderColor: "border-blue-swiss/20"
  },
  {
    id: "mercury",
    name: "Mercury",
    role: "Logistics & Arbitration",
    desc: "Optimizes multi-modal shipping routes dynamically. Predicts port congestion and re-routes shipments instantly. Handles freight arbitration.",
    version: "v2.1.0",
    stat: "-14% Transit Time",
    icon: Network,
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    borderColor: "border-purple-accent/20"
  },
  {
    id: "janus",
    name: "Janus",
    role: "Risk & Compliance",
    desc: "Ensures trade compliance across 140+ jurisdictions. Validates HS codes, sanctions lists, and automates letter of credit documentation.",
    version: "v4.0.2",
    stat: "ISO 27001",
    icon: ShieldCheck,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
  {
    id: "atlas",
    name: "Atlas",
    role: "Document Processing",
    desc: "Intelligent OCR and semantic analysis for Bills of Lading and Invoices. Converts unstructured PDF data into ERP-ready JSON.",
    version: "v5.1.0",
    stat: "0.02s Latency",
    icon: FileText,
    color: "text-gray-700",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20"
  },
  {
    id: "orion",
    name: "Orion",
    role: "Predictive Forecasting",
    desc: "Analyzes historical trade data against micro-economic indicators to forecast demand surges and supply shortages.",
    version: "v2.8.4",
    stat: "94% Precision",
    icon: BarChart,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20"
  },
  {
    id: "vulcan",
    name: "Vulcan",
    role: "Supplier Negotiation",
    desc: "Autonomous negotiation agent for tail-spend procurement. Engages with suppliers to secure optimal pricing within guardrails.",
    version: "v1.5.0",
    stat: "+12% Savings",
    icon: Users,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20"
  }
];

interface AIAgentsPageProps {
  onScheduleDemo: () => void;
}

export const AIAgentsPage: React.FC<AIAgentsPageProps> = ({ onScheduleDemo }) => {
  // Terminal Typing Logic
  const [displayedLines, setDisplayedLines] = useState<Array<{text: string, type: string}>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  // Carousel Logic
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) return;

    const currentLine = TERMINAL_LINES[currentLineIndex];
    
    // If it's the cursor line, just show it immediately
    if (currentLine.type === 'cursor') {
      setDisplayedLines(prev => [...prev, currentLine]);
      return;
    }

    const timeout = setTimeout(() => {
      // Create a temporary version of the line with only substring char index
      const partialText = currentLine.text.slice(0, currentCharIndex + 1);
      
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (currentCharIndex === 0) {
          // Add new line
          newLines.push({ ...currentLine, text: partialText });
        } else {
          // Update last line
          newLines[newLines.length - 1] = { ...currentLine, text: partialText };
        }
        return newLines;
      });

      if (currentCharIndex < currentLine.text.length - 1) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Line finished
        setCurrentCharIndex(0);
        setCurrentLineIndex(prev => prev + 1);
      }
    }, 20); // Faster typing speed

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage < AGENTS.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 >= 0 ? prev - 1 : Math.max(0, AGENTS.length - itemsPerPage)));
  };

  const visibleAgents = AGENTS.slice(startIndex, startIndex + itemsPerPage);
  // Fill with start if we are at the end to maintain 3 items (optional visual polish)
  while (visibleAgents.length < itemsPerPage && visibleAgents.length > 0) {
      // Logic to wrap around can be complex, for simplicity we limit navigation
      break; 
  }

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      
      {/* --- HERO SECTION REDESIGNED --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-gray-300 overflow-hidden">
        
        {/* Animated Shader Background (Light) */}
        <div className="absolute inset-0 z-0 bg-creme pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-swiss/10 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
           <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-bright/5 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000"></div>
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        </div>

        <SwissGrid className="relative z-10 h-full py-20">
          
          {/* Left: Typography (Aligned Left Corner) */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start text-left">
            <div className="animate-fade-in-up w-full">
                <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Neural Orchestration Layer</MonoLabel>
                
                {/* Fixed Title Size using HeroHeadline to match Home Page */}
                <HeroHeadline className="mb-8 text-left">
                  AI Agents
                </HeroHeadline>
                
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-xl leading-relaxed border-l-2 border-blue-swiss/20 pl-8 mb-12 text-left">
                  Deploy autonomous synthetic workers that don't just chat—they analyze, negotiate, and execute complex trade workflows in real-time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonPrimary>Deploy Swarm</ButtonPrimary>
                  <ButtonOutline icon>View Architecture</ButtonOutline>
                </div>
            </div>
          </div>

          {/* Right: UI Component (Swarm Monitor) - Aligned Right Corner */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-end mt-12 lg:mt-0">
             <div className="w-full max-w-[500px] animate-fade-in-right delay-200">
                <div className="relative glass-card bg-white/60 border border-white/60 p-1 shadow-2xl backdrop-blur-md">
                   {/* Top Bar */}
                   <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">Swarm_Monitor_v1.0</span>
                      </div>
                      <div className="flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                   </div>

                   {/* Main Monitor Area */}
                   <div className="p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between bg-white/40">
                      {/* Grid bg */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      {/* Central Node Visual */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <div className="relative w-32 h-32 flex items-center justify-center">
                            <div className="absolute inset-0 border border-blue-swiss/30 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute inset-0 border border-blue-swiss/20 rounded-full w-[120%] h-[120%] -top-[10%] -left-[10%] animate-spin-slow border-dashed"></div>
                            <div className="w-16 h-16 bg-blue-swiss/5 rounded-full border border-blue-swiss backdrop-blur flex items-center justify-center z-10 shadow-[0_0_30px_rgba(0,164,218,0.1)]">
                               <Cpu className="text-blue-swiss w-8 h-8" />
                            </div>
                            
                            {/* Satellites */}
                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full animate-float"></div>
                            <div className="absolute bottom-0 left-4 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="absolute top-10 -left-10 w-8 h-8 border border-gray-300 bg-white/80 backdrop-blur rounded flex items-center justify-center">
                               <Bot size={14} className="text-gray-600"/>
                            </div>
                         </div>
                      </div>

                      {/* Stats Overlay */}
                      <div className="relative z-10 flex justify-between items-end">
                         <div className="space-y-4">
                            <div>
                               <div className="text-[10px] text-gray-500 font-mono uppercase">Active Agents</div>
                               <div className="text-2xl font-bold text-black font-mono">14</div>
                            </div>
                            <div>
                               <div className="text-[10px] text-gray-500 font-mono uppercase">Tasks/Sec</div>
                               <div className="text-xl font-bold text-blue-swiss font-mono">2,492</div>
                            </div>
                         </div>
                         
                         {/* Mini Graph */}
                         <div className="flex items-end gap-1 h-12">
                            {[30, 50, 40, 70, 50, 80, 60, 90, 75, 50].map((h, i) => (
                               <div key={i} className="w-2 bg-gray-200 hover:bg-blue-swiss transition-colors duration-300" style={{ height: `${h}%` }}></div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </SwissGrid>
      </section>

      {/* --- AGENT CATALOG --- */}
      <Section id="catalog">
        <SectionNumber number="01" className="right-0 top-0" />
        <SwissGrid className="mb-12">
          <div className="col-span-12 flex flex-col md:flex-row justify-between items-end gap-6">
             <div className="max-w-3xl">
                <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Agent Catalog</MonoLabel>
                <SectionHeadline className="mb-6">AI Agent Templates</SectionHeadline>
                <p className="text-xl text-gray-600 leading-relaxed">
                   Choose from production-ready templates. Customize in minutes. Deploy immediately.
                </p>
             </div>
             
             {/* Slider Controls */}
             <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowRight size={20} />
                </button>
             </div>
          </div>
        </SwissGrid>

        {/* --- CAROUSEL ROW --- */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visibleAgents.map((agent) => (
              <div key={agent.id} className="relative group h-full min-h-[450px]">
                 {/* GLASSMORPHISM CARD with SHADER GRADIENT */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white/60 shadow-lg rounded-xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-swiss/30 overflow-hidden">
                    
                    {/* Shader / Gradient Blob Effect */}
                    <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-40 transition-all duration-700 group-hover:scale-150 ${agent.id === 'nexus' ? 'bg-green-400' : 'bg-blue-swiss'}`}></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50 group-hover:via-blue-swiss group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative p-8 h-full flex flex-col justify-between z-10">
                        <div>
                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border backdrop-blur-sm ${agent.bgColor} ${agent.borderColor}`}>
                                  <agent.icon size={28} className={agent.color} />
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/50 backdrop-blur-sm">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wide">Ready</span>
                              </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-3xl font-bold text-black uppercase mb-3 leading-none group-hover:text-blue-swiss transition-colors">{agent.name}</h3>
                            <div className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">{agent.role}</div>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                              {agent.desc}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200/60 pt-6 mt-4">
                            <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                              <span>{agent.version}</span>
                              <span className="font-bold text-gray-800">{agent.stat}</span>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar for Slider */}
          <div className="mt-12 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
             <div 
               className="h-full bg-black transition-all duration-500 ease-out"
               style={{ width: `${((startIndex + 1) / (AGENTS.length - itemsPerPage + 1)) * 100}%` }} // Simplified progress calc
             ></div>
          </div>
        </div>
      </Section>

      {/* --- TECHNICAL SPECS / TERMINAL --- */}
      <Section className="bg-gray-100/50">
         <SectionNumber number="02" className="left-0 top-0" />
         <SwissGrid>
            <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
               <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Under the Hood</MonoLabel>
               <SectionHeadline className="mb-8">Neural<br/>Architecture</SectionHeadline>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our agents are built on a proprietary Large Action Model (LAM) fine-tuned on decades of industrial trade data. They don't just chat; they execute.
               </p>
               
               <ul className="space-y-6">
                  {[
                     { title: 'Semantic Routing', desc: 'Intelligently directs tasks to the most capable specialist agent.' },
                     { title: 'Long-term Memory', desc: 'Vector database retains context across months of complex negotiations.' },
                     { title: 'Multi-Modal Input', desc: 'Processes text, PDFs, invoices, and satellite imagery.' }
                  ].map((feature, i) => (
                     <li key={i} className="flex gap-4">
                        <div className="mt-1 w-2 h-2 bg-blue-swiss shrink-0"></div>
                        <div>
                           <h4 className="text-black font-bold uppercase text-sm mb-1">{feature.title}</h4>
                           <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-12">
               {/* Terminal UI - FIXED: Auto height, no scrolling, no blank space */}
               <div className="w-full bg-[#050505] border border-gray-800 font-mono text-xs md:text-sm rounded-none shadow-2xl flex flex-col">
                  {/* Terminal Header */}
                  <div className="bg-[#111] border-b border-gray-800 p-3 flex items-center justify-between shrink-0">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                     </div>
                     <div className="text-gray-500">tradmak-agent-core — bash — 80x24</div>
                  </div>
                  {/* Terminal Body - using h-auto/min-h-0 to fit content exactly */}
                  <div className="p-6 bg-[#050505] text-gray-300 space-y-2 h-auto min-h-[300px] relative">
                     
                     {/* Rendered Lines */}
                     {displayedLines.map((line, i) => (
                       <div key={i} className={`${line.type === 'success' ? 'text-green-500' : line.type === 'warning' ? 'text-yellow-500' : line.type === 'cmd' ? 'text-white' : 'text-gray-400'} font-mono leading-relaxed break-all relative z-10`}>
                         {line.text}
                         {line.type === 'cursor' && <span className="animate-pulse inline-block ml-1">_</span>}
                       </div>
                     ))}

                     {/* Graphic Overlay inside terminal */}
                     <div className="absolute bottom-6 right-6 p-4 border border-gray-800 bg-black/90 backdrop-blur pointer-events-none z-20">
                        <div className="text-[10px] text-gray-500 uppercase mb-2">System Load</div>
                        <div className="flex items-end gap-1 h-12 w-32">
                           {[40, 65, 30, 80, 50, 90, 45, 70, 60, 50, 85, 40].map((h, i) => (
                              <div key={i} className="flex-1 bg-blue-swiss/50" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SwissGrid>
      </Section>

      {/* --- TECHNICAL SPECS (New) --- */}
      <Section id="specs" className="bg-white">
         <SectionNumber number="03" className="right-0 top-0" />
         <SwissGrid>
            <div className="col-span-12 mb-12">
                <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Deep Dive</MonoLabel>
                <SectionHeadline>Technical Specifications</SectionHeadline>
            </div>
            
            {/* Column 1: Model Arch */}
            <div className="col-span-12 md:col-span-4">
                <div className="border-t border-blue-swiss pt-6">
                    <Layers className="w-8 h-8 text-black mb-6" />
                    <h3 className="text-2xl font-bold text-black uppercase mb-4">Model Architecture</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Built on a mixture-of-experts (MoE) transformer architecture optimized for tabular industrial data. Our 70B parameter core model utilizes Low-Rank Adaptation (LoRA) for task-specific fine-tuning, ensuring high accuracy with minimal inference latency.
                    </p>
                </div>
            </div>

            {/* Column 2: Data Processing */}
            <div className="col-span-12 md:col-span-4">
                <div className="border-t border-gray-300 pt-6">
                    <Database className="w-8 h-8 text-black mb-6" />
                    <h3 className="text-2xl font-bold text-black uppercase mb-4">Data Processing</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Real-time ingestion pipeline capable of processing 50k+ events/second. Supports unstructured data (PDFs, emails) via OCR and NLP vectorization, normalizing outputs into structured JSON schemas for ERP integration.
                    </p>
                </div>
            </div>

             {/* Column 3: Security */}
            <div className="col-span-12 md:col-span-4">
                <div className="border-t border-gray-300 pt-6">
                    <Lock className="w-8 h-8 text-black mb-6" />
                    <h3 className="text-2xl font-bold text-black uppercase mb-4">Security Protocols</h3>
                    <p className="text-gray-600 leading-relaxed">
                        End-to-end encryption (AES-256) for data at rest and in transit. SOC 2 Type II compliant infrastructure with air-gapped deployment options for sensitive defense and government trade applications.
                    </p>
                </div>
            </div>
         </SwissGrid>
      </Section>

      {/* --- DEPLOYING YOUR AGENTS (New) --- */}
      <Section id="deploy" className="bg-creme">
         <SectionNumber number="04" className="left-0 top-0" />
         <SwissGrid className="items-center">
             <div className="col-span-12 lg:col-span-6">
                 <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Onboarding</MonoLabel>
                 <SectionHeadline className="mb-8">Deploying Your<br/>Agents</SectionHeadline>
                 <BodyText className="mb-8">
                     Our deployment pipeline is designed for velocity. From template selection to production activation, the process is streamlined to get your synthetic workforce operational in under 48 hours.
                 </BodyText>
                 <div className="space-y-6 mb-10">
                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-mono text-black shrink-0">01</div>
                         <div>
                             <h4 className="text-black font-bold uppercase mb-1">Select Template</h4>
                             <p className="text-sm text-gray-500">Choose from our library of pre-trained agents.</p>
                         </div>
                     </div>
                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-mono text-black shrink-0">02</div>
                         <div>
                             <h4 className="text-black font-bold uppercase mb-1">Connect Data Sources</h4>
                             <p className="text-sm text-gray-500">Securely link your ERP, CRM, and logistics feeds.</p>
                         </div>
                     </div>
                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-blue-swiss flex items-center justify-center text-sm font-mono text-white shrink-0">03</div>
                         <div>
                             <h4 className="text-black font-bold uppercase mb-1">Activate</h4>
                             <p className="text-sm text-gray-500">Go live with monitored autonomous execution.</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
                 {/* Visual for Deployment - Simple Abstract UI */}
                 <div className="bg-white border border-gray-300 p-2 relative shadow-lg">
                     <div className="absolute top-0 left-0 w-full h-1 bg-blue-swiss animate-pulse"></div>
                     <div className="bg-gray-50 p-8 border border-gray-200 flex flex-col gap-4">
                         <div className="h-2 w-1/3 bg-gray-300 rounded"></div>
                         <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                         <div className="h-32 bg-white border border-gray-200 mt-4 flex items-center justify-center shadow-inner">
                             <div className="text-xs font-mono text-blue-swiss animate-pulse">INITIALIZING DEPLOYMENT SEQUENCE...</div>
                         </div>
                         <div className="grid grid-cols-3 gap-2 mt-2">
                             <div className="h-20 bg-gray-200/50 border border-gray-200"></div>
                             <div className="h-20 bg-gray-200/50 border border-gray-200"></div>
                             <div className="h-20 bg-gray-200/50 border border-gray-200"></div>
                         </div>
                     </div>
                 </div>
             </div>
         </SwissGrid>
      </Section>

      {/* --- INTEGRATION CTA --- */}
      <Section className="border-b-0 bg-white">
         <SwissGrid>
            <div className="col-span-12 text-center">
               <div className="inline-block p-4 border border-blue-swiss/30 bg-blue-swiss/5 mb-8 rounded-full">
                  <Cpu className="w-8 h-8 text-blue-swiss" />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6">Ready to Automate?</h2>
               <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
                  Integrate TradMAK agents into your existing ERP via our REST API. Full documentation and sandbox environment available.
               </p>
               <ButtonPrimary onClick={onScheduleDemo}>
                  Schedule Demo
               </ButtonPrimary>
            </div>
         </SwissGrid>
      </Section>

    </div>
  );
};