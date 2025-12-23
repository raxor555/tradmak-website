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
            <MonoLabel className="mb-6 text-blue-swiss" color="text-blue-swiss">
              Compliance & Governance
            </MonoLabel>
            <HeroHeadline className="text-left mb-12">Privacy Policy</HeroHeadline>

            <div className="text-gray-700 font-sans">
              <div className="mb-12 flex flex-wrap gap-8 font-mono text-[10px] uppercase tracking-widest border-b border-gray-200 pb-6">
                <div>Effective Date: March 17, 2025</div>
                <div>Last Updated: December 23, 2025</div>
              </div>

              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16">
                This Privacy Policy explains how TradMAK (“Company”, “we”, “us”, or “our”) collects, uses, discloses, and protects your information when you access or use our website, platforms, AI solutions, digital trade services, or related offerings (collectively, the “Service”). It also explains your privacy rights and how applicable laws protect you.
              </p>

              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-16">
                By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <div className="space-y-20">
                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    1. Interpretation and Definitions
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Interpretation</h4>
                      <p className="leading-relaxed text-lg">
                        Words with capitalized initial letters have meanings defined below and apply whether used in singular or plural form.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Definitions</h4>
                      <ul className="list-none space-y-4">
                        {[
                          'Account means a unique account created for you to access the Service or specific features of the Service.',
                          'Affiliate means any entity that controls, is controlled by, or is under common control with a party, where “control” means ownership of 50% or more of voting or equity interests.',
                          'Company refers to TradMAK.',
                          'Cookies are small files placed on your Device that store browsing-related information.',
                          'Device means any device capable of accessing the Service, including computers, mobile phones, and tablets.',
                          'Personal Data means any information relating to an identified or identifiable individual.',
                          'Service refers to the Website and related digital services operated by TradMAK.',
                          'Service Provider means any third party that processes data on behalf of the Company to support the operation, analytics, security, or improvement of the Service.',
                          'Usage Data means data collected automatically through the use of the Service.',
                          'Website refers to TradMAK, accessible at https://www.tradmak.com/',
                          'You means the individual or legal entity accessing or using the Service.'
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    2. Collecting and Using Your Personal Data
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Personal Data</h4>
                      <p className="mb-4 leading-relaxed text-lg">
                        While using the Service, we may collect personally identifiable information, including but not limited to:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Email address</li>
                        <li>• First and last name</li>
                        <li>• Phone number</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Usage Data</h4>
                      <p className="mb-4 leading-relaxed text-lg">
                        Usage Data is collected automatically and may include:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• IP address</li>
                        <li>• Browser type and version</li>
                        <li>• Pages visited and time spent</li>
                        <li>• Device identifiers</li>
                        <li>• Operating system and diagnostic data</li>
                      </ul>
                      <p className="mt-4 leading-relaxed text-lg">
                        When accessing the Service via a mobile device, additional mobile-specific data may be collected.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    3. Tracking Technologies and Cookies
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    We use Cookies and similar tracking technologies (such as beacons, tags, and scripts) to operate, analyze, and improve the Service.
                  </p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'Essential Cookies (Session Cookies) – Required for authentication, security, and core Service functionality.',
                      'Consent Cookies (Persistent Cookies) – Store your cookie consent preferences.',
                      'Functionality Cookies (Persistent Cookies) – Remember user preferences such as language or login details.'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed">
                    You may control Cookies through your browser settings. Disabling Cookies may limit certain features of the Service. For more details, please refer to our Cookies Policy (if applicable).
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    4. Use of Your Personal Data
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    The Company may use Personal Data for the following purposes:
                  </p>
                  <ul className="list-none space-y-4">
                    {[
                      'To provide, operate, and maintain the Service',
                      'To manage your Account and user access',
                      'To perform contractual obligations',
                      'To communicate with you regarding updates, security notices, and services',
                      'To send marketing or promotional communications (subject to opt-out rights)',
                      'To respond to inquiries and manage requests',
                      'To conduct analytics, research, and service improvements',
                      'To support mergers, acquisitions, or business restructuring'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    5. Sharing of Your Personal Data
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    We may share your Personal Data in the following situations:
                  </p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'With Service Providers for analytics, hosting, communications, or operational support',
                      'With Affiliates under common control, subject to this Privacy Policy',
                      'With Business Partners for jointly offered services or promotions',
                      'For Business Transfers during mergers, acquisitions, or asset sales',
                      'With Legal Authorities when required by law',
                      'With your consent for any other disclosed purpose'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed font-medium text-black italic bg-white p-6 border-l-2 border-blue-swiss">
                    We do not sell Personal Data.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    6. Retention of Your Personal Data
                  </h3>
                  <p className="leading-relaxed text-lg">
                    Personal Data is retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements. Usage Data is generally retained for shorter periods unless required for security, analytics, or legal compliance.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    7. Transfer of Your Personal Data
                  </h3>
                  <p className="leading-relaxed text-lg">
                    Your data may be processed and stored outside your country of residence. By using the Service, you consent to such transfers, provided appropriate safeguards are in place. The Company takes reasonable steps to ensure secure handling of data in accordance with applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    8. Your Data Protection Rights
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    You have the right to:
                  </p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'Access, update, or correct your Personal Data',
                      'Request deletion of your Personal Data',
                      'Restrict or object to certain processing',
                      'Withdraw consent where applicable'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed">
                    You may exercise these rights through your Account settings or by contacting us. Certain data may be retained where legally required.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    9. Disclosure of Your Personal Data
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Business Transactions</h4>
                      <p className="leading-relaxed text-lg">
                        Personal Data may be transferred as part of a merger, acquisition, or asset sale, with notice provided where required.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-black uppercase text-xs mb-4 tracking-widest font-mono">Legal Requirements</h4>
                      <p className="leading-relaxed text-lg">
                        The Company may disclose Personal Data to comply with legal obligations, protect rights or property, prevent wrongdoing, or ensure public safety.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    10. Security of Your Personal Data
                  </h3>
                  <p className="leading-relaxed text-lg">
                    We implement commercially reasonable technical and organizational measures to protect Personal Data. However, no method of transmission or storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    11. Children’s Privacy
                  </h3>
                  <p className="leading-relaxed text-lg">
                    The Service is not intended for individuals under the age of 18. We do not knowingly collect Personal Data from minors. If such data is identified, it will be deleted promptly.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    12. Links to Third-Party Websites
                  </h3>
                  <p className="leading-relaxed text-lg">
                    Our Service may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    13. Changes to This Privacy Policy
                  </h3>
                  <p className="leading-relaxed text-lg">
                    We may update this Privacy Policy periodically. Updates will be posted on this page, and material changes may be communicated via email or Service notices. Continued use of the Service after changes become effective constitutes acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    14. AI, Data Usage, and Ownership (Incorporating Key Terms Provisions)
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    Our Services incorporate advanced AI systems. Key provisions from our Terms of Use regarding AI, data processing, and ownership are summarized and incorporated here for clarity:
                  </p>
                  <ul className="list-none space-y-4 mb-8">
                    {[
                      'AI-generated outputs are owned by TradMAK to the maximum extent permitted by law.',
                      'User inputs and interaction data may be used to train, optimize, and improve AI systems (in aggregated or anonymized form where applicable).',
                      'Aggregated, anonymized, or de-identified data is owned exclusively by TradMAK and may be used for any business purpose.',
                      'Inputs to AI systems are not treated as confidential unless explicitly agreed in writing.',
                      'You waive claims to ownership or compensation for derived datasets or AI improvements.'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-swiss mt-2.5 shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed font-medium text-black italic bg-white p-6 border-l-2 border-blue-swiss">
                    Full details on AI usage, restrictions, and data rights are provided in the TradMAK Terms and Conditions of Use.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    15. Regulatory Compliance and Risk Allocation
                  </h3>
                  <p className="leading-relaxed text-lg">
                    You agree not to use the Service in violation of AI governance laws, data protection regulations, export controls, or sector-specific obligations. While we implement reasonable safeguards, you acknowledge risks inherent in AI systems (e.g., hallucinations, errors) and assume responsibility for your use.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    16. Survival of Provisions
                  </h3>
                  <p className="leading-relaxed text-lg">
                    AI-related, data ownership, and liability provisions survive termination of your access to the Service.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight mb-8">
                    17. Contact Us
                  </h3>
                  <p className="leading-relaxed text-lg">
                    If you have any questions about this Privacy Policy or data protection practices, contact us at:
                  </p>
                  <p className="mt-4 text-2xl md:text-3xl font-bold text-blue-swiss">
                    info@tradmak.com
                  </p>
                </section>

                <section className="pt-20 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    © 2025 TradMAK. All Rights Reserved. Confidential and Proprietary.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </SwissGrid>
      </Section>
    </div>
  );
};