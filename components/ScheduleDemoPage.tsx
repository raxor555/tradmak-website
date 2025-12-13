import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { SwissGrid, Section, HeroHeadline, MonoLabel } from './UI';

export const ScheduleDemoPage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"initial-sales-call"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      <Section className="min-h-screen border-b-0">
         <SwissGrid>
            <div className="col-span-12 lg:col-span-5 mb-8">
               <MonoLabel className="mb-4 text-blue-swiss" color="text-blue-swiss">Consultation</MonoLabel>
               <HeroHeadline className="text-left mb-8">Schedule<br/>Demo</HeroHeadline>
               <p className="text-xl text-gray-600 max-w-lg leading-relaxed border-l-2 border-blue-swiss/20 pl-6">
                  Book a time with our solutions engineering team to see how TradMAK can optimize your trade infrastructure.
               </p>
            </div>
            <div className="col-span-12 lg:col-span-7 h-[700px] bg-white border border-gray-200 shadow-xl overflow-hidden relative rounded-sm">
                 <Cal 
                    namespace="initial-sales-call"
                    calLink="rayyan-shaikh-i8uftl/initial-sales-call"
                    style={{width:"100%",height:"100%",overflow:"scroll"}}
                    config={{"layout":"month_view","theme":"light"}}
                  />
            </div>
         </SwissGrid>
      </Section>
    </div>
  );
};
