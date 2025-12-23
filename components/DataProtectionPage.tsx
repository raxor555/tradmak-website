import React, { useEffect } from 'react';
import { SwissGrid, Section, HeroHeadline, MonoLabel, SectionNumber } from './UI';

export const DataProtectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      <Section className="border-b-0 pb-24">
        <SectionNumber number="TERMS" className="right-0 top-0" />
        <SwissGrid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Legal Framework</MonoLabel>
            <HeroHeadline className="text-left mb-12 leading-none">Terms and Conditions<br/>of Use</HeroHeadline>
            
            <div className="text-gray-700 font-sans">
              <div className="mb-12 flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-widest border-b border-gray-200 pb-6">
                <div>Last Updated: [December 23, 2025]</div>
              </div>

              <div className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16 max-w-4xl">
                <p className="mb-6">These Terms and Conditions of Use (these “Terms”) constitute a legally binding agreement between TradMAK FZCO, including its affiliates, subsidiaries, successors, and assigns (collectively, “TradMAK,” “we,” “us,” or “our”), and you when you access, browse, crawl, scrape, interact with, or otherwise use any TradMAK website, platform, application, digital interface, or online service that displays or links to these Terms (collectively, the “Services”).</p>
                
                <p className="mb-6">If you use the Services on behalf of, or for the benefit of, an organization, “you” refers to both you individually and that organization, and you represent that you are authorized to bind such organization to these Terms.</p>
                
                <p className="mb-6">By accessing or using the Services, you represent, warrant, and agree that you:</p>
                
                <div className="ml-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-swiss font-bold">•</span>
                    <span>Have read, understood, and agree to be legally bound by these Terms in full;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-swiss font-bold">•</span>
                    <span>Have the authority to accept these Terms on behalf of any organization you represent;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-swiss font-bold">•</span>
                    <span>Are of legal age in your jurisdiction; and</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-swiss font-bold">•</span>
                    <span>Will comply with all applicable laws and regulations.</span>
                  </div>
                </div>
                
                <p className="mt-6">If you do not agree to these Terms, you must not access or use the Services.</p>
              </div>

              <div className="space-y-24">
                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-blue-swiss pl-8">1. Limited License and Permitted Use</h3>
                  <p className="text-lg leading-relaxed mb-4">Subject to your strict compliance with these Terms, TradMAK grants you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use the Services solely for lawful business, informational, or relationship-initiating purposes related to TradMAK’s products and services (“Authorized Purposes”).</p>
                  <p className="text-lg leading-relaxed">All rights not expressly granted are reserved by TradMAK.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">2. Intellectual Property Rights</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">2.1 Ownership</h4>
                      <p className="text-lg leading-relaxed mb-4">All content, materials, data, designs, software, code, interfaces, algorithms, documentation, trademarks, logos, trade names, graphics, videos, audio, text, AI outputs, system architecture, compilations, and arrangements available through the Services (collectively, “Content”) are owned by or licensed to TradMAK and are protected by applicable intellectual property, unfair competition, and proprietary rights laws.</p>
                      <p className="text-lg leading-relaxed">No ownership or intellectual property rights are transferred to you by virtue of using the Services.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">2.2 User Content License</h4>
                      <p className="text-lg leading-relaxed mb-4">If you submit, upload, transmit, or otherwise provide any data, content, or materials to TradMAK (“User Content”), you grant TradMAK a perpetual, irrevocable, royalty-free, worldwide, transferable, sublicensable license to use, reproduce, modify, analyze, commercialize, distribute, create derivative works from, and otherwise exploit such User Content for any lawful business purpose, without compensation or attribution.</p>
                      
                      <p className="text-lg leading-relaxed mb-4">You represent and warrant that:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>You have all necessary rights to submit User Content;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>User Content is accurate and lawful; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>User Content does not infringe third-party rights or contain malicious code.</span>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed">TradMAK may remove or refuse any User Content at its sole discretion and has no obligation to use or retain it.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">3. Prohibited Uses</h3>
                  <p className="text-lg leading-relaxed mb-4">You agree not to, directly or indirectly:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Use the Services for any unlawful, deceptive, fraudulent, or malicious activity;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Infringe TradMAK’s or any third party’s intellectual property or proprietary rights;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Use the Services beyond the Authorized Purposes;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Develop, train, benchmark, or assist competing platforms, AI systems, or services;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Scrape, crawl, mine, reverse engineer, decompile, or extract data or code;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Bypass or interfere with security, access controls, or usage limits;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Impersonate any person or entity or misrepresent affiliation;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Introduce malware, exploits, or harmful components;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Copy, modify, distribute, sell, sublicense, or exploit the Services or Content without authorization.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">Any violation constitutes a material breach of these Terms.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">4. Suspension and Termination</h3>
                  <p className="text-lg leading-relaxed mb-4">TradMAK may, at its sole discretion and without notice, suspend or terminate access to the Services if:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>You violate or are reasonably suspected of violating these Terms;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Required by law, regulation, or governmental authority;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Necessary to protect TradMAK’s systems, data, or business interests; or</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>The Services are modified or discontinued.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">Upon termination, all licenses granted to you immediately cease.</p>
                  <p className="text-lg leading-relaxed">Sections 2 through 9 shall survive termination.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">5. Privacy and Data Use</h3>
                  <p className="text-lg leading-relaxed mb-4">Your use of the Services is subject to TradMAK’s Privacy Policy and Data Protection Policies, which are incorporated by reference.</p>
                  <p className="text-lg leading-relaxed">Where legally required, TradMAK will obtain consent; otherwise, your continued use constitutes consent to data processing in accordance with applicable laws.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">6. Disclaimers, Limitation of Liability, and Indemnification</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">A. Disclaimers</h4>
                      <p className="text-lg leading-relaxed mb-4">The Services are provided “AS IS” and “AS AVAILABLE.”</p>
                      <p className="text-lg leading-relaxed mb-4">TradMAK disclaims all warranties, express or implied, including accuracy, reliability, fitness for a particular purpose, non-infringement, and uninterrupted availability.</p>
                      <p className="text-lg leading-relaxed">You assume all risk arising from your use of the Services.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">B. Limitation of Liability</h4>
                      <p className="text-lg leading-relaxed mb-4">To the maximum extent permitted by law, TradMAK shall not be liable for any indirect, incidental, special, consequential, punitive, or economic damages, including loss of profits, data, business, or goodwill.</p>
                      <p className="text-lg leading-relaxed">TradMAK’s total aggregate liability shall not exceed USD $5.00.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">C. Indemnification</h4>
                      <p className="text-lg leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless TradMAK and its affiliates, officers, directors, employees, and partners from any claims, damages, losses, liabilities, or expenses arising from:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Your use of the Services;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Your violation of these Terms; or</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Your infringement of third-party rights.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">7. Governing Law and Dispute Resolution</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">A. Governing Law</h4>
                      <p className="text-lg leading-relaxed">These Terms are governed by the laws of the United Arab Emirates, or such other jurisdiction expressly designated by TradMAK, without regard to conflict of law principles.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">B. Dispute Resolution</h4>
                      <p className="text-lg leading-relaxed mb-4">Any dispute shall first be resolved through good-faith negotiations.</p>
                      <p className="text-lg leading-relaxed">If unresolved within 30 days, disputes shall be subject to exclusive jurisdiction of courts designated by TradMAK. TradMAK may seek injunctive relief in any competent jurisdiction.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">8. Modifications</h3>
                  <p className="text-lg leading-relaxed mb-4">TradMAK may amend these Terms or modify the Services at any time. Continued use after changes constitutes acceptance. Where legally required, notice will be provided.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">9. General Provisions</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">These Terms constitute the entire agreement between you and TradMAK;</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">TradMAK may assign these Terms without restriction;</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">You may not assign or transfer rights without prior written consent;</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Failure to enforce any provision does not constitute a waiver;</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Invalid provisions shall not affect remaining enforceable provisions.</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">10. Artificial Intelligence, Agentic Systems, and Automated Technologies</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">10.1 Use of AI and Agentic Systems</h4>
                      <p className="text-lg leading-relaxed mb-4">TradMAK’s Services may include or rely upon artificial intelligence, machine learning models, autonomous or semi-autonomous agentic systems, orchestration engines, decision-support systems, and automated workflows (collectively, “AI Systems”).</p>
                      
                      <p className="text-lg leading-relaxed mb-4">You acknowledge and agree that:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>AI Systems may generate outputs probabilistically and may not be error-free;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>AI-generated outputs are informational and assistive only and do not constitute professional, legal, financial, or operational advice; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>You remain solely responsible for any decisions, actions, or outcomes resulting from reliance on AI-generated outputs.</span>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed">TradMAK does not guarantee the accuracy, completeness, reliability, or suitability of any AI-generated output.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">10.2 AI Outputs and Ownership</h4>
                      <p className="text-lg leading-relaxed mb-4">All AI-generated outputs, recommendations, insights, predictions, workflows, automations, or decisions generated by TradMAK’s AI Systems (“AI Outputs”) are:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Provided without warranty of correctness or fitness; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Owned by TradMAK to the maximum extent permitted by law, including all underlying models, architectures, weights, prompts, orchestration logic, and system improvements.</span>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed mb-4">Where applicable law grants you limited rights in outputs derived from your input, such rights are non-exclusive, non-transferable, and subject to these Terms.</p>
                      
                      <p className="text-lg leading-relaxed">Nothing in these Terms grants you ownership or rights in:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>AI models or agents;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Training data or derived datasets;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>System prompts, logic, or orchestration layers; or</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Improvements or learnings generated through use of the Services.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">10.3 Training, Optimization, and System Improvement</h4>
                      <p className="text-lg leading-relaxed">You expressly acknowledge and agree that TradMAK may use:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>User Content;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Interaction data;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Metadata;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>System logs;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Behavioral patterns; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Aggregated or anonymized information</span>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed">to train, optimize, validate, secure, enhance, and improve its AI Systems, agentic frameworks, and Services.</p>
                      <p className="text-lg leading-relaxed">Such use may continue even after termination of your access, provided data is processed in accordance with applicable law.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">11. Data Usage, Processing, and Analytics</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">11.1 Data Collection and Processing</h4>
                      <p className="text-lg leading-relaxed mb-4">By using the Services, you authorize TradMAK to collect, process, store, analyze, transform, and utilize data generated through:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Your interactions with the Services;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Automated agents acting on your behalf;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>System-level monitoring and telemetry; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Integrated third-party platforms.</span>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed">This processing may be performed by TradMAK or its authorized affiliates, vendors, or subprocessors.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">11.2 Aggregated and Anonymized Data</h4>
                      <p className="text-lg leading-relaxed mb-4">TradMAK may create aggregated, anonymized, or de-identified datasets derived from User Content or system usage data.</p>
                      
                      <p className="text-lg leading-relaxed mb-4">Such data:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Is not considered personal data once anonymized;</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>May be used for analytics, benchmarking, research, commercialization, or product development; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Is owned exclusively by TradMAK.</span>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed">You waive any claims to ownership, compensation, or control over such datasets.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black uppercase text-sm mb-3 tracking-widest font-mono">11.3 No Confidentiality of Inputs Unless Expressly Agreed</h4>
                      <p className="text-lg leading-relaxed mb-4">Unless explicitly agreed in writing:</p>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>Inputs submitted to AI Systems are not considered confidential; and</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-swiss font-bold">•</span>
                          <span>TradMAK shall not be responsible for protecting such inputs beyond standard security controls.</span>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed">You are responsible for ensuring that no restricted, regulated, or confidential data is submitted unless contractually authorized.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">12. AI Usage Restrictions</h3>
                  <p className="text-lg leading-relaxed mb-4">You shall not, directly or indirectly:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Use AI Systems to violate laws, regulations, or third-party rights;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Use outputs to train competing AI models or services;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Attempt to extract, infer, reverse engineer, or replicate AI models, agents, or prompts;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Circumvent AI safety, rate limits, or usage controls;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Use the Services for surveillance, profiling, or automated decision-making prohibited by law.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">TradMAK may monitor AI usage patterns to detect abuse, misuse, or policy violations.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">13. Automated Decision-Making Disclaimer</h3>
                  <p className="text-lg leading-relaxed mb-4">Certain Services may involve automated or semi-automated decision-making, including recommendations, prioritization, routing, or optimization.</p>
                  <p className="text-lg leading-relaxed mb-4">You acknowledge that:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Such decisions may be based on statistical inference;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Human oversight may be limited or optional; and</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>TradMAK shall not be liable for outcomes resulting from automated decisions.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">Where legally required, TradMAK will provide mechanisms for human review.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">14. Third-Party AI and Integrated Systems</h3>
                  <p className="text-lg leading-relaxed mb-4">The Services may integrate third-party AI models, APIs, or data sources. TradMAK:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Does not control third-party systems;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Makes no warranties regarding their accuracy or availability; and</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Is not liable for third-party AI behavior or outputs.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">Your use of such integrations may be subject to third-party terms.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">15. Data Security and Risk Allocation</h3>
                  <p className="text-lg leading-relaxed mb-4">While TradMAK implements commercially reasonable safeguards, you acknowledge that:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>No AI or data system is completely secure;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>AI Systems may be targeted by misuse, adversarial inputs, or exploitation; and</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>You assume all risks associated with submission of data to the Services.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">TradMAK shall not be liable for damages resulting from:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Model drift;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>AI hallucinations;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Automation errors; or</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Data inference risks.</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">16. Regulatory Compliance and Export Controls</h3>
                  <p className="text-lg leading-relaxed mb-4">You agree not to use the Services in violation of:</p>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>AI governance laws;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Data protection regulations;</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Export control or sanctions laws; or</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-swiss font-bold">•</span>
                      <span>Sector-specific compliance obligations.</span>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-4">TradMAK may restrict or suspend access to ensure regulatory compliance.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">17. Survival</h3>
                  <p className="text-lg leading-relaxed">Sections 10 through 17 shall survive termination of these Terms.</p>
                </section>

                <section className="pt-20 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-6">Legal Department</h3>
                    <div className="space-y-4">
                      <p className="font-bold text-black uppercase tracking-widest text-sm font-mono">TradMAK FZCO</p>
                      <address className="not-italic text-gray-600 leading-relaxed">
                        Legal Affairs<br/>
                        Dubai, UAE
                      </address>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Legal Inquiries</span>
                      <a href="mailto:legal@tradmak.com" className="text-2xl md:text-3xl font-bold text-black hover:text-blue-swiss transition-colors underline decoration-blue-swiss decoration-2 underline-offset-8">legal@tradmak.com</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Compliance Office</span>
                      <a href="mailto:compliance@tradmak.com" className="text-2xl font-bold text-gray-500 hover:text-blue-swiss transition-colors">compliance@tradmak.com</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Website</span>
                      <a href="https://www.tradmak.com" className="text-2xl font-bold text-gray-500 hover:text-blue-swiss transition-colors">https://www.tradmak.com</a>
                    </div>
                  </div>
                </section>

                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                  <p className="font-mono text-sm text-gray-500 tracking-widest">© 2025 TradMAK. All Rights Reserved. Confidential and Proprietary.</p>
                </div>
              </div>
            </div>
          </div>
        </SwissGrid>
      </Section>
    </div>
  );
};
