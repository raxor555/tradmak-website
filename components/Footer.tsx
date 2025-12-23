
import React, { useState } from 'react';
import { SwissGrid } from './UI';

interface FooterProps {
  onNavigate?: (page: any, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (onNavigate && href.startsWith('#/')) {
      e.preventDefault();
      const page = href.slice(2) || 'home';
      onNavigate(page);
    }
  };

  // Data object defined locally to ensure availability during render
  const footerLinks = {
    products: [
      { label: 'Whatsapp', href: '#/whatsapp-automation' },
      { label: 'AI Agents', href: '#/ai-agents' },
      { label: 'AaaS', href: '#/aaas' },
      { label: 'Digital Experience', href: '#/digital-experience' },
      { label: 'AI Chatbots', href: '#/ai-chatbots' }
    ],
    companyLinks: [
      { label: 'About Us', href: '#/home' },
      { label: 'Blog', href: '#/blog' },
      { label: 'Privacy Policy', href: '#/privacy-policy' },
      { label: 'Terms & Condition', href: '#/data-protection' },
      { label: 'Schedule Demo', href: '#/schedule-demo' },
      { label: 'Contact', href: '#/home' }
    ],
    socialMedia: [
       { label: 'Linkedin', href: 'https://www.linkedin.com/company/tradmak/posts/?feedView=all' }
    ]
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-swiss/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-purple-accent/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <SwissGrid className="relative z-10 mb-24">
        <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-swiss rounded-lg">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white uppercase">TRADMAK</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            TradMAK FZCO is a global trade and digital innovation firm specializing in industrial automation, AI-driven workflows, and global supply chain optimization. We partner with leaders to engineer modern, efficient, and resilient trade ecosystems.
          </p>
          <form onSubmit={handleSubscribe} className="relative max-w-sm">
            <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 focus-within:border-blue-swiss/50 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 px-6 text-sm text-white placeholder-gray-600"
                required
              />
              <button 
                type="submit"
                className="bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-blue-swiss hover:text-white transition-all duration-300"
              >
                {subscribed ? 'Sent' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">Products</h4>
          <ul className="space-y-4">
            {(footerLinks.products || []).map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-400 hover:text-blue-swiss text-sm font-medium transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">Company</h4>
          <ul className="space-y-4">
            {(footerLinks.companyLinks || []).map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-400 hover:text-blue-swiss text-sm font-medium transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">Social Media</h4>
          <ul className="space-y-4">
            {(footerLinks.socialMedia || []).map(link => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-swiss text-sm font-medium transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </SwissGrid>

      <div className="pt-12">
        <SwissGrid>
          <div className="col-span-12 text-center">
            <p className="text-[11px] text-gray-700 font-medium tracking-wide">
              Copyright 2023 By TradMAK FZCO. All rights reserved
            </p>
          </div>
        </SwissGrid>
      </div>
    </footer>
  );
};
