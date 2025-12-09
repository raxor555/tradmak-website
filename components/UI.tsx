import React from 'react';
import { ArrowRight, ArrowDown, ChevronRight } from 'lucide-react';

// --- Layout Primitives ---

export const GridSystem: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className="fixed inset-0 pointer-events-none z-0 flex justify-center px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
    <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 border-x border-gray-900/30 h-full">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={`hidden md:block border-r border-gray-900/30 h-full ${i === 0 ? 'border-l' : ''} ${i < 4 ? 'block' : ''}`}></div>
      ))}
    </div>
  </div>
);

export const SwissGrid: React.FC<{ children: React.ReactNode; className?: string; as?: any }> = ({ children, className = '', as: Component = 'div' }) => (
  <Component className={`relative z-10 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 ${className}`}>
    {children}
  </Component>
);

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`relative py-24 md:py-32 lg:py-48 border-b border-gray-900 ${className}`}>
    {children}
  </section>
);

// --- Typography ---

export const HeroHeadline: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h1 className={`text-[12vw] md:text-[8vw] lg:text-[7.5rem] font-bold text-white leading-ultra-tight tracking-tighter uppercase font-sans ${className}`}>
    {children}
  </h1>
);

export const SectionHeadline: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter uppercase ${className}`}>
    {children}
  </h2>
);

export const SubHeadline: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl lg:text-3xl font-normal text-gray-200 leading-snug tracking-tight ${className}`}>
    {children}
  </h3>
);

export const MonoLabel: React.FC<{ children: React.ReactNode; className?: string; color?: string }> = ({ children, className = '', color = 'text-gray-500' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className={`w-1.5 h-1.5 ${color === 'text-accent-primary' ? 'bg-accent-primary' : 'bg-gray-700'}`}></div>
    <span className={`font-mono text-[10px] md:text-xs uppercase tracking-wider ${color}`}>
      {children}
    </span>
  </div>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg text-gray-400 leading-relaxed font-normal max-w-2xl ${className}`}>
    {children}
  </p>
);

// --- Graphic Elements ---

export const AccentLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`h-[2px] bg-accent-primary w-12 mb-8 ${className}`} />
);

export const SectionNumber: React.FC<{ number: string; className?: string }> = ({ number, className = '' }) => (
  <div className={`absolute -z-0 select-none overflow-hidden ${className}`}>
    <span className="block text-[18vw] leading-none font-bold text-gray-900/40 tracking-tighter font-sans translate-y-[-10%]">
      {number}
    </span>
  </div>
);

// --- Interactive Elements ---

export const ButtonPrimary: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, onClick, className = '', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      group relative inline-flex items-center justify-center gap-3
      bg-accent-primary text-white font-bold text-sm
      py-5 px-10 tracking-widest uppercase overflow-hidden
      transition-all duration-300 ease-out
      hover:bg-accent-bright
      focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-black-rich
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
    {/* Hover slide effect */}
    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
  </button>
);

export const ButtonOutline: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}> = ({ children, onClick, className = '', icon = false }) => (
  <button
    onClick={onClick}
    className={`
      group inline-flex items-center justify-center gap-3
      bg-transparent text-white font-medium text-sm
      py-5 px-10 tracking-widest uppercase
      border border-gray-700
      transition-all duration-300 ease-out
      hover:border-accent-primary hover:text-accent-primary
      ${className}
    `}
  >
    {children}
    {icon && <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />}
  </button>
);

export const TextLink: React.FC<{ 
  children: React.ReactNode; 
  href: string; 
  className?: string;
}> = ({ children, href, className = '' }) => (
  <a 
    href={href}
    className={`
      group inline-flex items-center gap-3
      text-white font-medium text-sm tracking-widest uppercase
      ${className}
    `}
  >
    <span className="relative">
      {children}
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gray-700 group-hover:bg-accent-primary transition-colors duration-300"></span>
    </span>
    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
    </div>
  </a>
);

// --- Form Elements ---

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, className = '', ...props }) => (
  <div className="w-full group">
    <div className="flex justify-between mb-3">
      <label htmlFor={id} className="text-xs font-mono text-gray-500 uppercase tracking-wider group-focus-within:text-accent-primary transition-colors">
        {label}
      </label>
      <div className="w-1 h-1 bg-gray-800 group-focus-within:bg-accent-primary transition-colors"></div>
    </div>
    <input
      id={id}
      className={`
        w-full h-14 bg-transparent border-b border-gray-800 
        text-white font-sans text-lg
        focus:border-accent-primary focus:outline-none
        placeholder-gray-800 transition-all duration-300
        ${className}
      `}
      {...props}
    />
  </div>
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, id, className = '', ...props }) => (
  <div className="w-full group">
    <div className="flex justify-between mb-3">
      <label htmlFor={id} className="text-xs font-mono text-gray-500 uppercase tracking-wider group-focus-within:text-accent-primary transition-colors">
        {label}
      </label>
      <div className="w-1 h-1 bg-gray-800 group-focus-within:bg-accent-primary transition-colors"></div>
    </div>
    <textarea
      id={id}
      className={`
        w-full min-h-[160px] bg-transparent border-b border-gray-800 
        text-white font-sans text-lg
        focus:border-accent-primary focus:outline-none
        placeholder-gray-800 transition-all duration-300 resize-none
        ${className}
      `}
      {...props}
    />
  </div>
);

// --- Cards ---

export const Card: React.FC<{ children: React.ReactNode; className?: string; noHover?: boolean }> = ({ children, className = '', noHover = false }) => (
  <div className={`
    relative bg-black-card border border-gray-800 p-8 md:p-12
    ${!noHover && 'group hover:border-accent-primary transition-colors duration-300'}
    ${className}
  `}>
    {children}
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);