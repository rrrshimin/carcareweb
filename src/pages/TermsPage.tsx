import { useEffect } from "react";
import { Logo } from "./landing/Logo";
import { Link } from "react-router-dom";
import { LandingFooter } from "./landing/LandingFooter";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#0C111F",
        color: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.02] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
        <div
          className="absolute bottom-[-100px] left-[30%] w-[700px] h-[400px] rounded-full opacity-[0.025] blur-[140px]"
          style={{ backgroundColor: "#0051E8" }}
        />
      </div>

      <div className="relative z-10">
        <header
          className="px-6 sm:px-10 lg:px-16 xl:px-20 py-4"
          style={{
            backgroundColor: "rgba(12, 17, 31, 0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #1F2740",
          }}
        >
          <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            <Logo />
            <Link
              to="/"
              className="text-[14px] transition-colors hover:text-white"
              style={{ color: "#A3ACBF" }}
            >
              &larr; Back to Home
            </Link>
          </div>
        </header>

        <main className="px-6 sm:px-10 lg:px-16 xl:px-20 py-12 md:py-20">
          <div className="max-w-[800px] mx-auto">
            <h1
              className="text-[32px] md:text-[44px] leading-tight mb-4"
              style={{ fontWeight: 800 }}
            >
              Terms and Conditions
            </h1>
            <p className="text-[14px] mb-12" style={{ color: "#A3ACBF" }}>
              Effective Date: 16 Mar 2026 &middot; Last Updated: 16 Mar 2026
            </p>

            <div className="space-y-10 text-[15px] md:text-[16px] leading-relaxed" style={{ color: "#C8CEDB" }}>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the CarCare
                Diary mobile application, website, web application, and related services
                (collectively, the "Service"), operated by Sorami, LLC ("Sorami," "we," "us," or
                "our").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you do
                not agree to these Terms, do not use the Service.
              </p>

              <Section number="1" title="Eligibility">
                <p>
                  You must be at least 13 years old to use the Service. If you are under the age of
                  majority in your jurisdiction, you may use the Service only with the involvement
                  and consent of a parent or legal guardian.
                </p>
                <p>
                  By using the Service, you represent and warrant that you meet these requirements
                  and that you have the legal capacity to enter into these Terms.
                </p>
              </Section>

              <Section number="2" title="Description of the Service">
                <p>
                  CarCare Diary is a vehicle maintenance tracking and analytics platform intended
                  for personal and business use. The Service may allow users to:
                </p>
                <BulletList
                  items={[
                    "create and manage vehicle records;",
                    "record maintenance logs, mileage, service history, and related expenses;",
                    "receive reminders and notifications;",
                    "view analytics and summaries regarding maintenance activity and spending;",
                    "generate, export, or share reports, summaries, invoices, CSV files, PDF files, and similar output;",
                    "access certain features through paid subscription plans.",
                  ]}
                />
                <p>The features and functionality of the Service may change from time to time.</p>
              </Section>

              <Section number="3" title="Accounts and Authentication">
                <p>
                  Certain features require an account. You may be able to access the Service
                  through third-party authentication providers such as Google, Apple, or other
                  supported login methods.
                </p>
                <p>You are responsible for:</p>
                <BulletList
                  items={[
                    "maintaining the confidentiality of your login credentials;",
                    "ensuring the accuracy of the information associated with your account;",
                    "all activity occurring under your account.",
                  ]}
                />
                <p>
                  You agree to notify us promptly at{" "}
                  <a href="mailto:hello@carcarediary.com" className="underline" style={{ color: "#367DFF" }}>
                    hello@carcarediary.com
                  </a>{" "}
                  if you suspect unauthorized access to your account.
                </p>
              </Section>

              <Section number="4" title="User Data and Responsibility">
                <p>
                  You are solely responsible for the accuracy, completeness, and legality of all
                  information you input into the Service, including but not limited to:
                </p>
                <BulletList
                  items={[
                    "mileage or odometer values;",
                    "maintenance records;",
                    "service intervals;",
                    "expenses and cost amounts;",
                    "company or billing details;",
                    "exported or shared records.",
                  ]}
                />
                <p>
                  The Service relies on user-provided information. If the data you provide is
                  incomplete, inaccurate, outdated, or misleading, the outputs, reminders,
                  analytics, exports, and recommendations generated by the Service may also be
                  inaccurate, incomplete, or misleading.
                </p>
              </Section>

              <Section number="5" title="No Mechanical, Technical, Legal, Tax, or Accounting Advice">
                <p>
                  The Service is provided for informational, organizational, and convenience
                  purposes only.
                </p>
                <p>CarCare Diary does not provide:</p>
                <BulletList
                  items={[
                    "mechanical advice;",
                    "engineering advice;",
                    "inspection or diagnostic services;",
                    "professional maintenance advice;",
                    "legal advice;",
                    "tax advice;",
                    "accounting advice;",
                    "safety certification;",
                    "regulatory compliance advice.",
                  ]}
                />
                <p>
                  Any maintenance intervals, reminders, due calculations, estimated timelines,
                  analytics, cost summaries, or other outputs provided by the Service are general
                  guidance only and may be based on average assumptions, user-entered data,
                  simplified logic, or configurable settings.
                </p>
                <p>You are solely responsible for:</p>
                <BulletList
                  items={[
                    "following the recommendations, schedules, and requirements of the vehicle manufacturer;",
                    "consulting qualified mechanics, service professionals, accountants, tax advisers, or legal advisers where appropriate;",
                    "determining whether maintenance, repairs, inspections, replacements, or business/accounting actions are necessary;",
                    "verifying the accuracy of all records, exports, reports, invoices, and other output before relying on them.",
                  ]}
                />
              </Section>

              <Section number="6" title="Maintenance and Reminder Disclaimer">
                <p>
                  Vehicle maintenance requirements vary significantly depending on the specific
                  vehicle, manufacturer guidance, age, mileage, usage conditions, climate,
                  operating environment, service history, and other factors.
                </p>
                <p>Accordingly:</p>
                <BulletList
                  items={[
                    "reminders, notifications, and suggested maintenance intervals provided by the Service may be approximate only;",
                    "the Service may not reflect the actual condition of a vehicle or the true urgency of any maintenance need;",
                    "delayed, missing, inaccurate, or mistimed reminders may occur;",
                    "analytics and due calculations may not capture all relevant factors affecting vehicle health or service needs.",
                  ]}
                />
                <p>
                  You acknowledge and agree that the Service is only an assistant and
                  organizational tool. It is not a substitute for professional inspection,
                  manufacturer recommendations, or independent judgment.
                </p>
              </Section>

              <Section number="7" title="Export, Invoice, and Reporting Disclaimer">
                <p>
                  The Service may allow users to generate invoices, CSV exports, PDF exports,
                  summaries, reports, and similar documents.
                </p>
                <p>
                  These outputs are generated from user-provided data and system logic and are
                  provided for convenience only. Sorami does not guarantee that any export,
                  invoice, report, or file is accurate, complete, compliant, audit-ready, legally
                  valid, tax-compliant, or suitable for accounting, regulatory, insurance, resale,
                  or business use.
                </p>
                <p>You are solely responsible for:</p>
                <BulletList
                  items={[
                    "reviewing and verifying all exported or generated content;",
                    "determining whether it is suitable for accounting, invoicing, tax, legal, compliance, fleet management, resale, or business purposes;",
                    "correcting any inaccuracies before sharing, filing, submitting, or relying upon such outputs.",
                  ]}
                />
              </Section>

              <Section number="8" title="Subscriptions and Paid Features">
                <p>
                  Certain features of the Service may require a paid subscription. By purchasing a
                  subscription, you agree to pay all fees disclosed to you at the time of purchase.
                </p>
                <p>Subscriptions may:</p>
                <BulletList
                  items={[
                    "renew automatically unless canceled;",
                    "be billed through third-party platforms such as app stores, payment processors, or web checkout providers;",
                    "be governed in part by the billing rules of those third-party providers.",
                  ]}
                />
                <p>
                  You are responsible for managing your subscription, including cancellation and
                  payment method updates, through the applicable billing platform unless we
                  expressly provide another method.
                </p>
                <p>Except where required by law, all fees are non-refundable.</p>
                <p>
                  We may change subscription pricing, features, or plan structures at any time,
                  but such changes will not affect the current billing period already paid for
                  unless otherwise stated.
                </p>
              </Section>

              <Section number="9" title="Company and Business Information">
                <p>
                  For certain business or Pro features, you may be invited to provide company
                  details, billing email addresses, or related business information.
                </p>
                <p>
                  You are solely responsible for ensuring that such information is accurate and up
                  to date. We are not responsible for errors, omissions, failed delivery,
                  inaccurate invoice details, or reporting issues resulting from incorrect or
                  incomplete company information provided by you.
                </p>
              </Section>

              <Section number="10" title="Acceptable Use">
                <p>You agree not to:</p>
                <BulletList
                  items={[
                    "use the Service for any unlawful, fraudulent, deceptive, or abusive purpose;",
                    "interfere with or disrupt the Service or its security;",
                    "attempt to gain unauthorized access to accounts, systems, or data;",
                    "upload malicious code, malware, or harmful content;",
                    "use the Service in a way that infringes the rights of others;",
                    "use automated means to scrape, abuse, or overload the Service except as expressly authorized;",
                    "misrepresent vehicle, company, billing, or personal information;",
                    "use the Service to create false, misleading, or fraudulent records or reports.",
                  ]}
                />
              </Section>

              <Section number="11" title="Suspension and Termination">
                <p>
                  We may suspend, restrict, or terminate your access to the Service, with or
                  without notice, if we reasonably believe that:
                </p>
                <BulletList
                  items={[
                    "you have violated these Terms;",
                    "your use of the Service poses a security, legal, operational, or reputational risk;",
                    "you engage in fraud, abuse, illegal conduct, or misuse of the Service.",
                  ]}
                />
                <p>
                  You may stop using the Service at any time. If account deletion is available,
                  deleting your account may result in permanent loss of access to your data,
                  subject to applicable law and our retention practices.
                </p>
              </Section>

              <Section number="12" title="Intellectual Property">
                <p>
                  The Service, including its software, design, branding, text, graphics,
                  interfaces, and underlying technology, is owned by Sorami, LLC or its licensors
                  and is protected by applicable intellectual property laws.
                </p>
                <p>
                  Subject to your compliance with these Terms, we grant you a limited,
                  non-exclusive, non-transferable, revocable license to use the Service for its
                  intended purpose.
                </p>
                <p>You may not:</p>
                <BulletList
                  items={[
                    "copy, modify, distribute, reverse engineer, or create derivative works from the Service, except as permitted by law;",
                    "use our name, logo, or branding without permission.",
                  ]}
                />
              </Section>

              <Section number="13" title="Third-Party Services">
                <p>
                  The Service may integrate with or rely on third-party services, including
                  authentication providers, hosting providers, storage providers, analytics
                  providers, app stores, payment processors, email providers, and web services.
                </p>
                <p>
                  We are not responsible for the acts, omissions, products, services, or terms of
                  any third party. Your use of third-party services may be subject to separate
                  terms and privacy policies.
                </p>
              </Section>

              <Section number="14" title="Availability and Changes">
                <p>
                  We do not guarantee that the Service will always be available, uninterrupted,
                  error-free, secure, or compatible with your devices, browsers, or operating
                  systems.
                </p>
                <p>
                  We may add, remove, modify, suspend, or discontinue any part of the Service at
                  any time, with or without notice.
                </p>
              </Section>

              <Section number="15" title="Disclaimer of Warranties">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED "AS IS" AND "AS
                  AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY,
                  OR OTHERWISE.
                </p>
                <p>
                  WITHOUT LIMITING THE FOREGOING, SORAMI, LLC DISCLAIMS ALL WARRANTIES, INCLUDING
                  ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AVAILABILITY, SECURITY, OR THAT
                  THE SERVICE WILL MEET YOUR REQUIREMENTS.
                </p>
                <p>WE DO NOT WARRANT THAT:</p>
                <BulletList
                  items={[
                    "THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED;",
                    "REMINDERS OR NOTIFICATIONS WILL ARRIVE ON TIME OR AT ALL;",
                    "CALCULATIONS, ANALYTICS, EXPORTS, INVOICES, OR REPORTS WILL BE ACCURATE OR COMPLETE;",
                    "THE SERVICE WILL PREVENT VEHICLE DAMAGE, MISSED MAINTENANCE, BUSINESS LOSS, OR FINANCIAL LOSS.",
                  ]}
                />
              </Section>

              <Section number="16" title="Limitation of Liability">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SORAMI, LLC AND ITS MEMBERS, MANAGERS,
                  OFFICERS, EMPLOYEES, CONTRACTORS, AFFILIATES, LICENSORS, AND SERVICE PROVIDERS
                  SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, BUSINESS,
                  GOODWILL, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO:
                </p>
                <BulletList
                  items={[
                    "YOUR USE OF OR INABILITY TO USE THE SERVICE;",
                    "MISSED, DELAYED, OR INACCURATE REMINDERS OR NOTIFICATIONS;",
                    "VEHICLE DAMAGE, BREAKDOWN, MAINTENANCE FAILURE, OR SAFETY ISSUES;",
                    "RELIANCE ON MAINTENANCE INTERVALS, ANALYTICS, REPORTS, EXPORTS, OR INVOICES;",
                    "INACCURATE OR INCOMPLETE USER-PROVIDED DATA;",
                    "UNAUTHORIZED ACCESS, SECURITY INCIDENTS, OR DATA LOSS;",
                    "THIRD-PARTY SERVICES OR FAILURES.",
                  ]}
                />
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR ANY
                  CLAIMS RELATING TO THE SERVICE SHALL NOT EXCEED THE GREATER OF:
                </p>
                <BulletList
                  items={[
                    "THE AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR",
                    "FIFTY U.S. DOLLARS (US $50).",
                  ]}
                />
                <p>
                  SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY, SO SOME OF
                  THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                </p>
              </Section>

              <Section number="17" title="Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless Sorami, LLC and its
                  affiliates, officers, members, managers, employees, contractors, licensors, and
                  service providers from and against any claims, liabilities, damages, judgments,
                  losses, costs, expenses, and fees (including reasonable attorneys' fees) arising
                  out of or relating to:
                </p>
                <BulletList
                  items={[
                    "your use of the Service;",
                    "your data, content, exports, or reports;",
                    "your violation of these Terms;",
                    "your violation of any law or the rights of any third party;",
                    "your reliance on the Service for maintenance, business, accounting, invoicing, or compliance purposes.",
                  ]}
                />
              </Section>

              <Section number="18" title="Governing Law">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the
                  State of Delaware, without regard to its conflict of laws principles.
                </p>
              </Section>

              <Section number="19" title="Dispute Resolution">
                <p>
                  Any dispute, claim, or controversy arising out of or relating to these Terms or
                  the Service shall be resolved exclusively in the state or federal courts located
                  in Delaware, and you consent to the personal jurisdiction and venue of those
                  courts, except where applicable law requires otherwise.
                </p>
              </Section>

              <Section number="20" title="Changes to These Terms">
                <p>
                  We may update these Terms from time to time. If we make material changes, we may
                  provide notice through the Service, website, or by other reasonable means.
                </p>
                <p>
                  Your continued use of the Service after updated Terms become effective
                  constitutes your acceptance of the revised Terms.
                </p>
              </Section>

              <Section number="21" title="Contact Information">
                <p>If you have questions about these Terms, you may contact us at:</p>
                <div
                  className="rounded-md border p-6 mt-4"
                  style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
                >
                  <p className="font-semibold text-white mb-2">Sorami, LLC</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@carcarediary.com"
                      className="underline"
                      style={{ color: "#367DFF" }}
                    >
                      hello@carcarediary.com
                    </a>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2
        className="text-[20px] md:text-[24px] text-white"
        style={{ fontWeight: 700 }}
      >
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
