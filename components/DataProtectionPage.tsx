import React, { useEffect } from 'react';
import { SwissGrid, Section, HeroHeadline, MonoLabel, SectionNumber } from './UI';

export const DataProtectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-creme text-black pt-20">
      <Section className="border-b-0 pb-24">
        <SectionNumber number="SECURE" className="right-0 top-0" />
        <SwissGrid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">Security & Governance</MonoLabel>
            <HeroHeadline className="text-left mb-12 leading-none">Data Security<br/>& Protection</HeroHeadline>
            
            <div className="text-gray-700 font-sans">
              <div className="mb-12 flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-widest border-b border-gray-200 pb-6">
                <div>Effective Date: [●]</div>
                <div>Last Updated: [●]</div>
              </div>

              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16 max-w-4xl">
                This Data Protection & Data Security Policy (“Policy”) outlines the principles, technical
                safeguards, organizational controls, and governance measures implemented by TradMAK
                FZCO (“TradMAK”, “we”, “our”, or “us”) to protect data processed through our AI solutions,
                digital trade platforms, automation systems, and related services (collectively, the “Services”).
              </p>

              <div className="space-y-24">
                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-blue-swiss pl-8">1. Purpose & Objectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {[
                      'Protect the confidentiality, integrity, and availability of data',
                      'Prevent unauthorized access, disclosure, alteration, or loss',
                      'Ensure compliance with applicable data protection and cybersecurity regulations',
                      'Preserve TradMAK’s intellectual property, trade secrets, and commercial interests',
                      'Establish accountability and governance for data protection practices'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">2. Regulatory & Standards Alignment</h3>
                  <div className="flex flex-col gap-6 bg-white p-10 border border-gray-200">
                    <p className="text-lg leading-relaxed">TradMAK’s data protection framework aligns with:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        'UAE PDPL (Federal Decree-Law No. 45 of 2021)',
                        'Saudi Arabia PDPL & SOCII-aligned cybersecurity principles',
                        'EU GDPR',
                        'ISO/IEC 27001-inspired security controls',
                        'Industry best practices for AI, cloud, and automation systems'
                      ].map(std => (
                        <div key={std} className="px-4 py-3 bg-gray-50 text-xs font-mono text-gray-500 uppercase tracking-widest">{std}</div>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">3. Scope of This Policy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {[
                      'All data processed by TradMAK systems',
                      'Employees, contractors, consultants, and authorized third parties',
                      'AI agents, automation workflows, APIs, analytics engines, and cloud infrastructure',
                      'Physical, digital, and virtual data environments'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">4. Data Classification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                    <div className="bg-creme p-10 group hover:bg-white transition-colors">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono group-hover:text-blue-swiss">4.1 Restricted Data</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Personal data under PDPL/GDPR</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Confidential business and trade data</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Client credentials and security artifacts</p>
                    </div>
                    <div className="bg-creme p-10 group hover:bg-white transition-colors">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono group-hover:text-blue-swiss">4.2 Confidential Data</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Commercial agreements</p>
                      <p className="text-sm text-gray-600 leading-relaxed">System configurations</p>
                      <p className="text-sm text-gray-600 leading-relaxed">AI model parameters and training artifacts</p>
                    </div>
                    <div className="bg-creme p-10 group hover:bg-white transition-colors">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono group-hover:text-blue-swiss">4.3 Internal Data</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Operational metrics</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Logs and monitoring data</p>
                    </div>
                    <div className="bg-creme p-10 group hover:bg-white transition-colors">
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono group-hover:text-blue-swiss">4.4 Derived & Anonymized Data</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Aggregated analytics</p>
                      <p className="text-sm text-gray-600 leading-relaxed">AI-generated insights</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Performance and benchmarking datasets</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">5. Data Protection Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {[
                      'Data minimization – collect only what is necessary',
                      'Purpose limitation – process data for defined business purposes',
                      'Security by design & by default',
                      'Controlled access on a need-to-know basis',
                      'Risk-based governance'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">6. Technical Security Measures</h3>
                  <div className="space-y-12">
                    {[
                      { title: 'Infrastructure Security', content: 'Secure cloud environments, network segmentation, firewalls, DDoS protection, and intrusion detection.' },
                      { title: 'Data Encryption', content: 'Encryption at rest and in transit using industry standards with secure key management practices.' },
                      { title: 'Access Controls', content: 'Role-based access control (RBAC), multi-factor authentication (MFA), and periodic access reviews.' },
                      { title: 'System Monitoring', content: 'Continuous logging, audit trails, automated anomaly detection, and threat detection.' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                        <div className="md:w-64 shrink-0 font-mono text-[10px] uppercase text-blue-swiss tracking-[0.2em]">{item.title}</div>
                        <div className="text-lg text-black font-light leading-relaxed">{item.content}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">7. Organizational & Administrative Controls</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Confidentiality obligations for employees and contractors</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Mandatory security awareness and data protection training</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Segregation of duties</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Controlled onboarding and offboarding procedures</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">8. AI, Automation & Model Security</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Controlled access to training datasets</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Secure prompt and output handling</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Model integrity and version controls</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Protection against prompt injection, data leakage, and model abuse</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <p className="text-gray-700 font-medium">Users acknowledge that:</p>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">AI outputs may be probabilistic</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">TradMAK is not liable for decisions made solely based on AI-generated outputs</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">9. Data Sharing & Third-Party Security</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">TradMAK may engage third parties for infrastructure, analytics, or support services.</p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Due diligence and risk assessments</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Contractual data protection and confidentiality clauses</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Limited access to the minimum necessary data</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-6">TradMAK is not responsible for independent security failures of third-party platforms beyond agreed contractual obligations.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">10. Cross-Border Data Processing</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">Data may be processed or stored outside the country of origin.</p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Legal transfer mechanisms</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Security assessments</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Contractual protections</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">11. Incident Management & Breach Response</h3>
                  <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-swiss/10 rounded-full blur-[80px]"></div>
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl font-light mb-10 opacity-90 leading-relaxed">TradMAK maintains an incident response framework that includes:</p>
                      <div className="flex flex-wrap gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-60">
                        <span>Detection</span>
                        <span>Containment</span>
                        <span>Notification</span>
                        <span>Remediation</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">12. Data Retention & Disposal</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Data is retained only as long as necessary for legal, contractual, or operational purposes</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Secure deletion or anonymization methods are applied</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Anonymized and derived data may be retained indefinitely</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">13. User & Client Responsibilities</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">Users and clients are responsible for:</p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Maintaining confidentiality of access credentials</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Ensuring lawful use of TradMAK Services</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Avoiding submission of unlawful, excessive, or prohibited data</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-6">TradMAK shall not be liable for data security incidents caused by user negligence or misuse.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">14. Limitations of Liability</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">To the maximum extent permitted by law:</p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">TradMAK disclaims liability for indirect, incidental, or consequential damages</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">TradMAK does not guarantee uninterrupted or error-free security</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Security obligations are subject to reasonable commercial and technical feasibility</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">15. Audits & Continuous Improvement</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">TradMAK periodically:</p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Reviews security controls</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Conducts internal risk assessments</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                        <span className="text-gray-700">Updates policies based on evolving threats and regulations</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">16. Policy Updates</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">TradMAK may update this Policy at its sole discretion.</p>
                    <p className="text-gray-700">Continued use of the Services constitutes acceptance of the revised Policy.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-10 border-l-4 border-gray-300 pl-8">17. Governing Law</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed mb-4">This Policy shall be governed by:</p>
                    <div className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-swiss mt-2 shrink-0"></div>
                      <span className="text-gray-700">Laws of the United Arab Emirates,</span>
                    </div>
                    <p className="text-gray-700">with consideration of applicable Saudi Arabian and international data protection regulations.</p>
                  </div>
                </section>

                <section className="pt-20 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-6">Security Desk</h3>
                    <div className="space-y-4">
                      <p className="font-bold text-black uppercase tracking-widest text-sm font-mono">TradMAK FZCO</p>
                      <address className="not-italic text-gray-600 leading-relaxed">
                        Global Security Operations<br/>
                        Dubai, UAE
                      </address>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Incident Reporting</span>
                      <a href="mailto:security@tradmak.com" className="text-2xl md:text-3xl font-bold text-black hover:text-blue-swiss transition-colors underline decoration-blue-swiss decoration-2 underline-offset-8">security@tradmak.com</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Compliance Office</span>
                      <a href="mailto:privacy@tradmak.com" className="text-2xl font-bold text-gray-500 hover:text-blue-swiss transition-colors">privacy@tradmak.com</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase text-gray-400 tracking-widest">Website</span>
                      <a href="https://www.tradmak.com" className="text-2xl font-bold text-gray-500 hover:text-blue-swiss transition-colors">https://www.tradmak.com</a>
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