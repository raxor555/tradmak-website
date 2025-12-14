import React from 'react';
import { SwissGrid } from './UI';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      {/* Big Footer Text - Black accent */}
      <div className="w-full flex justify-center items-center py-12 md:py-24 overflow-hidden bg-black text-white">
        <h2 className="text-[12vw] md:text-[15vw] font-bold text-white leading-none select-none tracking-tighter hover:text-blue-swiss transition-colors duration-500 cursor-default">TRADMAK</h2>
      </div>

      {/* Footer Legal - Dark grounding */}
      <div className="border-t border-gray-800 bg-black py-12 relative z-10 text-white">
        <SwissGrid>
          <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full">
            <div className="mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-swiss"></div>
                <span className="text-xl font-bold tracking-tight text-white">TRADMAK</span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
              © 2023 TradMAK FZCO. All Rights Reserved.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row justify-end items-end gap-8">
            <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                  <a key={social} href="#" className="text-xs font-mono text-gray-400 hover:text-white uppercase transition-colors relative group">
                      {social}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-swiss transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-white font-mono uppercase">Privacy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white font-mono uppercase">Terms</a>
            </div>
          </div>
        </SwissGrid>
      </div>
    </footer>
  );
};