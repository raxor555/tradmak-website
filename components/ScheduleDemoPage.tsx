import React, { useEffect } from 'react';
import { SwissGrid, Section, HeroHeadline, MonoLabel } from './UI';

export const ScheduleDemoPage: React.FC = () => {
  useEffect(() => {
    // Cal.com Embed Logic adapted for React from provided snippet
    (function (C: any, A, L) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          let script = d.createElement("script");
          script.src = A; 
          d.head.appendChild(script); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = (window as any).Cal;

    Cal("init", "tradmak-gtm-team", {origin:"https://app.cal.eu"});
    
    Cal.ns["tradmak-gtm-team"]("inline", {
      elementOrSelector:"#my-cal-inline-tradmak-gtm-team",
      config: {"layout":"month_view", "theme":"light"},
      calLink: "tradmak-gtm-team/tradmak-gtm-team",
    });
    
    Cal.ns["tradmak-gtm-team"]("ui", {"hideEventTypeDetails":false,"layout":"month_view", "theme":"light"});
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      <Section className="min-h-screen border-b-0 py-10 md:py-12 lg:py-16">
         <SwissGrid>
            <div className="col-span-12 lg:col-span-5 mb-8">
               <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Consultation</MonoLabel>
               <HeroHeadline className="text-left mb-8">Schedule<br/>Demo</HeroHeadline>
               <p className="text-xl text-gray-600 max-w-lg leading-relaxed border-l-2 border-blue-swiss/20 pl-6">
                  Book a time with our solutions engineering team to see how TradMAK can optimize your trade infrastructure.
               </p>
            </div>
            <div className="col-span-12 lg:col-span-7 h-[700px] bg-white border border-gray-200 shadow-xl overflow-hidden relative rounded-sm">
                 <div 
                   id="my-cal-inline-tradmak-gtm-team" 
                   style={{width:"100%", height:"100%", overflow:"scroll"}}
                 ></div>
            </div>
         </SwissGrid>
      </Section>
    </div>
  );
};