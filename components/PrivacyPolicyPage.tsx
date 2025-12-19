import React, { useEffect } from 'react';
import { SwissGrid, Section, HeroHeadline, MonoLabel, SectionNumber } from './UI';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      <Section className="border-b-0 pb-24">
        <SectionNumber number="LEGAL" className="right-0 top-0" />
        <SwissGrid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Compliance & Governance</MonoLabel>
            <HeroHeadline className="text-left mb-12">Privacy Policy</HeroHeadline>
            
            <div className="text-gray-700 font-sans">
              <div className="mb-12 flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-widest border-b border-gray-200 pb-6">
                <div>Effective Date: [●]</div>
                <div>Last Updated: [●]</div>
              </div>

              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16">
                This Privacy Policy explains how TradMAK FZCO (“TradMAK”, “we”, “our”, or “us”)
                collects, uses, processes, stores, shares, and protects personal and non-personal data when you
                access or use our website, platforms, AI solutions, digital trade services, or related offerings
                (collectively, the “Services”).
              </p>

              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16">
                By accessing or using our Services, you acknowledge that you have read, understood, and agreed
                to this Privacy Policy.
              </p>

              <div className="space-y-20">
                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">1. Regulatory Framework & Compliance</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK processes data in accordance with applicable data protection laws and standards, including but not limited to:</p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'UAE Personal Data Protection Law (PDPL) – Federal Decree-Law No. 45 of 2021',
                      'Saudi Arabia PDPL & SOCII-aligned cybersecurity and data governance principles',
                      'EU General Data Protection Regulation (GDPR)',
                      'Applicable international data protection and cybersecurity best practices'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed font-medium text-black italic bg-white p-6 border-l-2 border-blue-swiss">Where conflicts arise, TradMAK reserves the right to apply the framework that best protects its legal, operational, and commercial interests, to the maximum extent permitted by law.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">2. Scope of This Policy</h3>
                  <p className="mb-6 leading-relaxed text-lg">This Policy applies to:</p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'Website visitors',
                      'Business clients and partners',
                      'Users of AI agents, automation systems, analytics tools, APIs, and platforms',
                      'Individuals interacting with TradMAK via digital trade, CRM, chatbots, or integrations'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-black mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed">This Policy does not apply to third-party websites or platforms linked from our Services.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">3. Categories of Data We Collect</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="border-t border-blue-swiss pt-8">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">3.1 Personal Data</h4>
                      <p className="text-base text-gray-600 leading-relaxed">May include, but is not limited to:</p>
                      <ul className="space-y-2 mt-2 text-sm text-gray-600">
                        <li>• Name, job title, company name</li>
                        <li>• Email address, phone number</li>
                        <li>• Business identifiers</li>
                        <li>• Login credentials</li>
                        <li>• IP address, device identifiers</li>
                        <li>• Communication records</li>
                      </ul>
                    </div>
                    <div className="border-t border-gray-300 pt-8">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">3.2 Business & Commercial Data</h4>
                      <ul className="space-y-2 mt-2 text-sm text-gray-600">
                        <li>• Trade-related data</li>
                        <li>• Supply chain, logistics, transaction metadata</li>
                        <li>• Business workflows and operational inputs</li>
                        <li>• CRM, ERP, and automation-related information</li>
                      </ul>
                    </div>
                    <div className="border-t border-gray-300 pt-8">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">3.3 AI & System-Generated Data</h4>
                      <ul className="space-y-2 mt-2 text-sm text-gray-600">
                        <li>• Prompts, inputs, outputs, logs, and performance data</li>
                        <li>• Aggregated, anonymized, or pseudonymized datasets</li>
                        <li>• Model interaction data and usage analytics</li>
                      </ul>
                    </div>
                    <div className="border-t border-gray-300 pt-8">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">3.4 Non-Personal & Derived Data</h4>
                      <ul className="space-y-2 mt-2 text-sm text-gray-600">
                        <li>• Statistical, analytical, or inferred data</li>
                        <li>• Behavioral patterns and usage trends</li>
                        <li>• Insights generated through AI processing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 p-8 bg-black text-white text-xs font-mono uppercase tracking-widest leading-loose">
                    <span className="font-bold text-blue-swiss">Important:</span> Derived, inferred, aggregated, or anonymized data does not constitute personal data and is owned by TradMAK.
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">4. Lawful Basis for Processing</h3>
                  <p className="mb-6 leading-relaxed text-lg">We process data based on one or more of the following lawful grounds:</p>
                  <ul className="list-none space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Performance of a contract</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Legitimate business interests of TradMAK</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Legal and regulatory obligations</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">User consent (where required)</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Protection of TradMAK’s rights, assets, and intellectual property</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">5. Purpose of Data Processing</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK processes data to:</p>
                  <ul className="list-none space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Deliver AI solutions and digital trade services</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Train, optimize, validate, and enhance AI models and automation systems</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Provide analytics, insights, and decision intelligence</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Ensure cybersecurity, fraud prevention, and system integrity</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Conduct research, benchmarking, and market intelligence</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Comply with legal and regulatory requirements</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Enforce contractual, legal, and usage rights</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">6. AI, Automation & Data Usage Rights</h3>
                  <div className="space-y-6">
                    <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">6.1 Company Protection & Ownership</h4>
                    <p className="text-lg leading-relaxed mb-4">To the fullest extent permitted by law:</p>
                    <ul className="list-none space-y-4">
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">TradMAK retains all rights, title, and interest in:</span>
                      </li>
                      <li className="flex gap-4 items-start ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">AI models</span>
                      </li>
                      <li className="flex gap-4 items-start ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Algorithms</span>
                      </li>
                      <li className="flex gap-4 items-start ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">System architectures</span>
                      </li>
                      <li className="flex gap-4 items-start ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Training methodologies</span>
                      </li>
                      <li className="flex gap-4 items-start ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Derived datasets and insights</span>
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">User-provided data may be used:</p>
                    <ul className="list-none space-y-4">
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">In aggregated, anonymized, or pseudonymized form</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">For model training, analytics, benchmarking, and service improvement</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">For commercial, operational, and strategic purposes</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-6">Users waive any ownership, claim, or royalty rights over AI outputs, insights, or derivative works created by TradMAK systems.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">7. Data Sharing & Third Parties</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK may share data with:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Cloud service providers</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">AI infrastructure and analytics partners</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Legal, compliance, and cybersecurity providers</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Government or regulatory authorities (where legally required)</span>
                    </li>
                  </ul>
                  <div className="space-y-6">
                    <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">7.1 Third-Party Usage Safeguards</h4>
                    <ul className="list-none space-y-4">
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Data shared is subject to contractual confidentiality and security obligations</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">TradMAK is not responsible for third-party privacy practices beyond contractual controls</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">TradMAK may share non-personal, anonymized, or aggregated data without restriction</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">8. Cross-Border Data Transfers</h3>
                  <p className="mb-6 leading-relaxed text-lg">Data may be processed or stored outside your country of residence, including in jurisdictions with different data protection regimes.</p>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK ensures appropriate safeguards such as:</p>
                  <ul className="list-none space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Contractual clauses</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Technical and organizational security measures</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Risk-based assessments</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">9. Data Retention</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK retains data:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">As long as necessary for business, legal, and operational purposes</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">To comply with regulatory obligations</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">To protect TradMAK’s legal and commercial interests</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">Anonymized or aggregated data may be retained indefinitely.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">10. Data Security Measures</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK implements industry-standard safeguards, including:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Encryption</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Access control and authentication</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Network and application security</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">SOC-aligned monitoring and incident response</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">However, no system is completely secure, and TradMAK does not guarantee absolute security.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">11. User Rights (Conditional & Lawful)</h3>
                  <p className="mb-6 leading-relaxed text-lg">Subject to applicable law and TradMAK’s legitimate interests, users may request:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Access to personal data</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Correction of inaccurate data</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Restriction or objection to processing</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Data portability (where applicable)</span>
                    </li>
                  </ul>
                  <div className="space-y-6">
                    <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Important Limitation</h4>
                    <p className="text-gray-700">Requests shall not apply to:</p>
                    <ul className="list-none space-y-4">
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Anonymized or derived data</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">AI training data</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Trade secrets, proprietary analytics, or system intelligence</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-6">TradMAK reserves the right to deny or limit requests that:</p>
                    <ul className="list-none space-y-4">
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Compromise intellectual property</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Affect system security or integrity</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">Conflict with legal or contractual obligations</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">12. Cookies & Tracking Technologies</h3>
                  <p className="mb-6 leading-relaxed text-lg">TradMAK uses cookies and similar technologies for:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Functionality and performance</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Analytics and usage tracking</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Security and fraud prevention</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">Users may manage cookie preferences via browser settings.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">13. Children’s Data</h3>
                  <p className="text-gray-700">TradMAK Services are not intended for individuals under 18.</p>
                  <p className="text-gray-700 mt-4">We do not knowingly collect children’s data.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">14. Policy Updates</h3>
                  <p className="text-gray-700">TradMAK reserves the right to update this Privacy Policy at any time.</p>
                  <p className="text-gray-700 mt-4">Continued use of the Services constitutes acceptance of the updated Policy.</p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">15. Governing Law & Jurisdiction</h3>
                  <p className="text-gray-700">This Privacy Policy is governed by:</p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Laws of the United Arab Emirates, and where applicable</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">Saudi Arabian data and cybersecurity regulations</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">International data protection principles</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">Exclusive jurisdiction shall lie with courts determined by TradMAK.</p>
                </section>

                <section className="pt-20 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <p className="font-bold text-black uppercase tracking-widest text-sm font-mono">TradMAK FZCO</p>
                      <address className="not-italic text-gray-600 leading-relaxed">
                        Dubai Silicon Oasis<br/>
                        Dubai, UAE
                      </address>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Inquiries</span>
                      <a href="mailto:privacy@tradmak.com" className="text-2xl md:text-3xl font-bold text-blue-swiss hover:text-blue-bright transition-colors">privacy@tradmak.com</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Global Portal</span>
                      <a href="https://www.tradmak.com" className="text-lg text-black hover:text-blue-swiss transition-colors">www.tradmak.com</a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </SwissGrid>
      </Section>
    </div>
  );
};