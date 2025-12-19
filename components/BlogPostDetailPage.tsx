import React, { useEffect } from 'react';
import { ArrowLeft, Clock, User, Share2, Calendar, Tag, ChevronRight, MessageSquare } from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, MonoLabel, SectionNumber, ButtonPrimary } from './UI';
import { BlogPost } from '../constants/blogData';

interface BlogPostDetailPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      {/* --- ARTICLE HEADER --- */}
      <header className="relative pt-20 pb-16 border-b border-gray-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <SwissGrid>
          <div className="col-span-12 mb-12">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-blue-swiss transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Journal
            </button>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-mono text-blue-swiss font-bold uppercase tracking-widest">{post.category}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl italic">
              {post.subtitle}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="relative aspect-[16/7] w-full overflow-hidden border border-gray-200">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end lg:pl-12 mt-8 lg:mt-0">
            <div className="border-t border-black pt-8 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Authored by</div>
                    <div className="text-sm font-bold uppercase">{post.author}</div>
                  </div>
                </div>
                <button className="p-3 border border-gray-200 rounded-full hover:bg-blue-swiss hover:text-white transition-all">
                  <Share2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-gray-100">
                  <div className="text-[9px] font-mono text-gray-400 uppercase mb-1">Read Time</div>
                  <div className="text-sm font-bold">{post.readTime}</div>
                </div>
                <div className="p-4 bg-white border border-gray-100">
                  <div className="text-[9px] font-mono text-gray-400 uppercase mb-1">Engagement</div>
                  <div className="text-sm font-bold">{post.views.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </SwissGrid>
      </header>

      {/* --- CONTENT SECTION --- */}
      <Section className="bg-white">
        <SwissGrid>
          <div className="col-span-12 lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase bg-creme px-2 py-1 border border-gray-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Related Intelligence</h4>
                <div className="space-y-4">
                  <div className="group cursor-pointer">
                    <div className="text-[9px] font-mono text-blue-swiss mb-1">AUTOMATION</div>
                    <div className="text-xs font-bold uppercase group-hover:text-blue-swiss transition-colors">Trade AI Protocols</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-[9px] font-mono text-blue-swiss mb-1">LOGISTICS</div>
                    <div className="text-xs font-bold uppercase group-hover:text-blue-swiss transition-colors">Port Orchestration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="col-span-12 lg:col-span-7 lg:col-start-5">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-xl text-gray-700 leading-relaxed mb-10 font-light">
                  {paragraph}
                </p>
              ))}
              
              <div className="my-20 p-12 bg-creme border-l-4 border-blue-swiss relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <MessageSquare size={120} />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Strategic Insight</h3>
                <p className="text-lg text-gray-800 leading-relaxed italic relative z-10">
                  "The competitive advantage in 2024 industrial trade is no longer about who has the most data, but who has the most autonomous execution layer."
                </p>
              </div>

              <div className="h-px bg-gray-200 w-full my-16"></div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h4 className="text-sm font-bold uppercase mb-2">Continue the Intelligence Loop</h4>
                  <p className="text-sm text-gray-500">Stay informed on global trade digital transformation.</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 border border-black text-[10px] font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Download Whitepaper
                  </button>
                  <button className="px-6 py-3 bg-blue-swiss text-white text-[10px] font-mono uppercase tracking-widest hover:bg-blue-bright transition-all">
                    Contact Specialist
                  </button>
                </div>
              </div>
            </div>
          </article>
        </SwissGrid>
      </Section>

      {/* --- NEXT ARTICLE CTA --- */}
      <footer className="bg-creme border-t border-gray-200 py-32">
        <SwissGrid>
          <div className="col-span-12 text-center">
             <MonoLabel className="justify-center mb-6 text-blue-swiss" color="text-blue-swiss">Next in Journal</MonoLabel>
             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 hover:text-blue-swiss transition-colors cursor-pointer">
                Scaling Intimacy: WhatsApp for B2B
             </h2>
             <button onClick={onBack} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 flex items-center gap-2 mx-auto group">
                Back to Archive
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </SwissGrid>
      </footer>
    </div>
  );
};