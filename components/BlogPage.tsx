import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Tag, ChevronRight, User, Share2, Mail, ExternalLink, Eye } from 'lucide-react';
import { SwissGrid, Section, HeroHeadline, SectionHeadline, MonoLabel, Card, ButtonPrimary, SectionNumber, BodyText } from './UI';
import { BLOG_POSTS, BlogPost } from '../constants/blogData';

interface BlogPageProps {
  onPostClick: (postId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onPostClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      {/* --- EDITORIAL HERO --- */}
      <section className="relative pt-20 pb-20 border-b border-gray-300">
        <SwissGrid>
          <div className="col-span-12 mb-16">
            <div className="flex items-center justify-between border-b border-black pb-4 mb-4">
              <MonoLabel className="text-blue-swiss" color="text-blue-swiss">Intelligence Reports</MonoLabel>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} EDITION</div>
            </div>
            <HeroHeadline className="text-left leading-none tracking-tighter">
              Trade<br/>Intelligence
            </HeroHeadline>
          </div>

          {/* Featured Post Layout */}
          <div 
            className="col-span-12 lg:col-span-8 group cursor-pointer"
            onClick={() => onPostClick(featuredPost.id)}
            onMouseEnter={() => setHoveredPost(featuredPost.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className={`aspect-[16/8] w-full overflow-hidden border border-gray-200 mb-8 transition-all duration-300 ${hoveredPost === featuredPost.id ? 'border-blue-swiss/30' : ''}`}>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="flex items-center gap-6 mb-4">
              <span className="text-[10px] font-mono text-blue-swiss font-bold uppercase tracking-widest">{featuredPost.category}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{featuredPost.date}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-6 group-hover:text-blue-swiss transition-colors duration-300">
              {featuredPost.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 py-4 border-y border-gray-100 mb-8">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gray-400" />
                <span className="text-[10px] font-mono uppercase text-gray-500">{featuredPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gray-400" />
                <span className="text-[10px] font-mono uppercase text-gray-500">{featuredPost.readTime}</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Eye size={14} className="text-gray-400" />
                <span className="text-[10px] font-mono uppercase text-gray-500">{featuredPost.views?.toLocaleString()} views</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ButtonPrimary className="px-8 py-3 text-sm">
                Read Full Article
              </ButtonPrimary>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pl-12 flex flex-col gap-12">
            <div className="bg-white p-8 border border-gray-200">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Trending</h4>
              <div className="space-y-8">
                {remainingPosts.slice(0, 3).map((post, idx) => (
                  <div 
                    key={post.id} 
                    className="group cursor-pointer"
                    onClick={() => onPostClick(post.id)}
                  >
                    <div className="text-[9px] font-mono text-gray-400 mb-1">0{idx + 1} / {post.category}</div>
                    <h5 className="text-lg font-bold uppercase tracking-tight leading-snug group-hover:text-blue-swiss transition-colors">
                      {post.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-blue-swiss text-white">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest mb-4">Newsletter</h4>
              <p className="text-sm mb-6 opacity-80">Industrial trade intelligence delivered directly to your workstation.</p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="CORPORATE EMAIL" 
                  className="w-full bg-white/10 border border-white/20 p-3 mb-4 font-mono text-xs placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                />
                <button type="submit" className="w-full bg-white text-blue-swiss font-bold text-xs py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  {subscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </SwissGrid>
      </section>

      {/* --- GRID FEED --- */}
      <Section className="bg-white">
        <SectionNumber number="REPORTS" className="left-0 top-0" />
        <SwissGrid className="gap-y-24">
          {remainingPosts.map((post) => (
            <div 
              key={post.id} 
              className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col h-full cursor-pointer"
              onClick={() => onPostClick(post.id)}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className={`aspect-[4/3] w-full overflow-hidden border border-gray-100 transition-all duration-500 mb-8 ${hoveredPost === post.id ? 'border-blue-swiss/30' : ''}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[9px] font-mono text-blue-swiss uppercase tracking-widest font-bold">{post.category}</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-blue-swiss transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-blue-swiss/30 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-gray-400">{post.readTime}</span>
                  <span className="text-[10px] font-mono text-gray-400">By {post.author}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-swiss group-hover:border-blue-swiss group-hover:text-white transition-all">
                  <ArrowRight size={14} className="-rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </SwissGrid>
      </Section>
    </div>
  );
};