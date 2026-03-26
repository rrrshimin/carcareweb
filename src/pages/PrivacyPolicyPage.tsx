import { useEffect } from "react";
import { Logo } from "./landing/Logo";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
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
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
        <div
          className="absolute bottom-[-100px] left-[30%] w-[700px] h-[400px] rounded-full opacity-[0.06] blur-[140px]"
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
              Privacy Policy
            </h1>
            <p className="text-[14px] mb-12" style={{ color: "#A3ACBF" }}>
              Effective Date: 10 Mar 2026 &middot; Last Updated: 10 Mar 2026
            </p>

            <div className="space-y-10 text-[15px] md:text-[16px] leading-relaxed" style={{ color: "#C8CEDB" }}>
              <p>
                This Privacy Policy describes how Sorami LLC ("Sorami," "Company," "we," "us," or
                "our") collects, uses, stores, discloses, and otherwise processes information in
                connection with the CarCare Diary mobile application, the website located at
                carcarediary.com, and any related services we make available (collectively, the
                "Services").
              </p>
              <p>
                By accessing or using the Services, you acknowledge that you have read and understood
                this Privacy Policy.
              </p>

              <Section number="1" title="Scope">
                <p>
                  This Privacy Policy applies to information processed by us in connection with your
                  use of the Services, including when you:
                </p>
                <BulletList
                  items={[
                    "download, install, access, or use the CarCare Diary mobile application;",
                    "visit carcarediary.com;",
                    "create, manage, or share vehicle maintenance records through the Services;",
                    "subscribe to paid features made available through the Apple App Store or Google Play; or",
                    "contact us for support or other inquiries.",
                  ]}
                />
                <p>
                  This Privacy Policy does not govern the privacy practices of third parties,
                  including Apple, Google, or other third-party platforms, websites, or services that
                  may be linked to or integrated with the Services.
                </p>
              </Section>

              <Section number="2" title="Information We Collect">
                <p>
                  We collect only the information reasonably necessary to operate, maintain, secure,
                  and improve the Services.
                </p>

                <SubSection title="2.1 Information You Provide Directly">
                  <p>
                    We may collect information that you choose to submit through the Services,
                    including:
                  </p>
                  <BulletList
                    items={[
                      "vehicle information, such as make, model, year, fuel type, transmission type, and odometer values;",
                      "vehicle images or photos uploaded by you;",
                      "maintenance records and service history entries;",
                      "notes and other content you enter in connection with vehicle maintenance tracking;",
                      "information associated with public sharing features, where you choose to enable them; and",
                      "support communications you send to us, including messages sent to hello@thesorami.com.",
                    ]}
                  />
                </SubSection>

                <SubSection title="2.2 Authentication Information">
                  <p>
                    You may choose to access certain features using Sign in with Apple or Sign in
                    with Google. In such cases, we may receive limited account-related information
                    from the relevant authentication provider, subject to that provider's settings
                    and permissions.
                  </p>
                  <p>We do not collect or store your password for these sign-in methods.</p>
                  <p>
                    Use of optional sign-in does not prevent limited use of the Services without
                    account authentication where such functionality is made available.
                  </p>
                </SubSection>

                <SubSection title="2.3 Device and Technical Information">
                  <p>
                    We may collect limited device and technical information necessary to provide and
                    secure the Services, including a device-associated identifier used to distinguish
                    a device and associate app data with that device.
                  </p>
                  <p>
                    We do not represent that this identifier directly identifies you by name.
                  </p>
                </SubSection>

                <SubSection title="2.4 Subscription Information">
                  <p>
                    If you purchase a subscription through the Apple App Store or Google Play, we may
                    receive information necessary to verify subscription status and entitlement.
                  </p>
                  <p>
                    We do not collect or store full payment card details. Billing and payment
                    processing are handled by the applicable app marketplace provider.
                  </p>
                </SubSection>

                <SubSection title="2.5 Information We Do Not Intentionally Collect">
                  <p>
                    Based on the current operation of the Services, we do not intentionally collect
                    the following categories of information through the app as part of normal product
                    functionality:
                  </p>
                  <BulletList
                    items={[
                      "precise location information;",
                      "contact lists or address book data;",
                      "telephone number data collected through the app itself;",
                      "passwords for Apple or Google sign-in;",
                      "advertising identifiers for third-party advertising purposes; or",
                      "user-provided payment card details.",
                    ]}
                  />
                </SubSection>
              </Section>

              <Section number="3" title="How We Use Information">
                <p>We may use information we collect for the following purposes:</p>
                <BulletList
                  items={[
                    "to provide, operate, maintain, and improve the Services;",
                    "to create, store, display, and manage vehicle and maintenance history records;",
                    "to calculate service intervals, reminders, and maintenance status;",
                    "to enable optional account-related functionality, including sign-in and subscription entitlement recognition;",
                    "to generate and manage public vehicle-history sharing links at your direction;",
                    "to communicate with you regarding support requests, service-related notices, and administrative matters;",
                    "to monitor, protect, and enhance the security, integrity, and stability of the Services;",
                    "to investigate suspected misuse, fraud, abuse, or violations of our legal terms;",
                    "to comply with applicable law, regulation, legal process, or enforceable governmental request; and",
                    "to establish, exercise, or defend legal claims.",
                  ]}
                />
                <p>
                  We may also use information in aggregated or de-identified form where permitted by
                  applicable law.
                </p>
              </Section>

              <Section number="4" title="Public Sharing Functionality">
                <p>
                  The Services may allow you to generate a public link that displays selected vehicle
                  information and maintenance history on a publicly accessible webpage. This
                  functionality is core to the product's sharing use case.
                </p>
                <p>If you enable public sharing:</p>
                <BulletList
                  items={[
                    "the shared page may be accessible to any person who has the link;",
                    "information you have chosen to make available through that feature may be viewed without logging in; and",
                    "the link may be copied, forwarded, or otherwise redistributed by others.",
                  ]}
                />
                <p>
                  By enabling a public share link, you instruct us to make the selected information
                  available in that manner.
                </p>
                <p>
                  You may disable public sharing at any time through the Services. Once disabled, the
                  associated public page should no longer remain publicly accessible, subject to
                  ordinary technical limitations such as temporary caching or archived copies outside
                  our control.
                </p>
              </Section>

              <Section number="5" title="Legal Bases for Processing">
                <p>
                  To the extent applicable under relevant privacy laws, we process personal
                  information on one or more of the following legal bases:
                </p>
                <BulletList
                  items={[
                    "performance of a contract or steps taken at your request prior to entering into a contract;",
                    "our legitimate interests in operating, securing, improving, and administering the Services, provided such interests are not overridden by your rights;",
                    "your consent, where required by law;",
                    "compliance with legal obligations; and",
                    "protection of vital interests or other lawful bases recognized by applicable law.",
                  ]}
                />
              </Section>

              <Section number="6" title="Disclosure of Information">
                <p>We do not sell your personal information for money.</p>
                <p>We may disclose information in the following circumstances:</p>

                <SubSection title="6.1 Service Providers">
                  <p>
                    We may disclose information to vendors, contractors, and service providers who
                    perform services on our behalf, such as hosting, infrastructure support,
                    analytics, authentication, customer support tooling, and subscription-related
                    administration. Such parties are authorized to access information only as
                    reasonably necessary to perform services for us and are expected to handle
                    information in a confidential and secure manner.
                  </p>
                </SubSection>

                <SubSection title="6.2 App Marketplace and Authentication Providers">
                  <p>
                    Where relevant to subscriptions or login, information may be processed in
                    coordination with Apple, Google, and their related services in accordance with
                    their own terms and privacy practices.
                  </p>
                </SubSection>

                <SubSection title="6.3 Legal Compliance and Protection">
                  <p>
                    We may disclose information if we believe in good faith that such disclosure is
                    necessary or appropriate to:
                  </p>
                  <BulletList
                    items={[
                      "comply with applicable law, regulation, subpoena, court order, or legal process;",
                      "respond to lawful requests from public authorities;",
                      "enforce our agreements, policies, or terms;",
                      "detect, prevent, or address fraud, abuse, security issues, or technical issues; or",
                      "protect the rights, property, safety, or legal interests of Sorami, our users, or others.",
                    ]}
                  />
                </SubSection>

                <SubSection title="6.4 Business Transfers">
                  <p>
                    We may disclose or transfer information in connection with an actual or proposed
                    merger, acquisition, financing, asset sale, reorganization, bankruptcy,
                    dissolution, or similar corporate transaction.
                  </p>
                </SubSection>
              </Section>

              <Section number="7" title="Analytics and Product Improvement">
                <p>
                  We may use third-party analytics or similar measurement tools to better understand
                  how users interact with the Services, evaluate feature performance, improve
                  usability, and support product development.
                </p>
                <p>
                  These tools may process limited technical and usage-related information. We do not
                  use the Services to serve third-party behavioral advertising, and the app does not
                  include third-party advertising at this time.
                </p>
              </Section>

              <Section number="8" title="Data Retention">
                <p>
                  We retain information for as long as reasonably necessary to fulfill the purposes
                  described in this Privacy Policy, including to:
                </p>
                <BulletList
                  items={[
                    "provide the Services;",
                    "maintain your records and preferences;",
                    "verify subscription status;",
                    "comply with legal, tax, accounting, or regulatory obligations;",
                    "resolve disputes; and",
                    "enforce our agreements.",
                  ]}
                />
                <p>
                  Retention periods may vary depending on the type of information and the reason it
                  was collected.
                </p>
                <p>
                  Where you request deletion of your account through the in-app deletion feature, we
                  will delete or de-identify applicable data associated with your account, vehicle
                  records, and maintenance logs within a reasonable period, except to the extent
                  retention is necessary for legitimate business purposes, compliance with law,
                  dispute resolution, fraud prevention, or enforcement of our agreements.
                </p>
              </Section>

              <Section number="9" title="Data Security">
                <p>
                  We use reasonable administrative, technical, and organizational safeguards designed
                  to protect information against unauthorized access, disclosure, alteration, misuse,
                  or destruction.
                </p>
                <p>
                  Notwithstanding the foregoing, no method of transmission over the internet, no
                  mobile platform, and no electronic storage system is completely secure. Accordingly,
                  we cannot guarantee absolute security.
                </p>
                <p>
                  You are responsible for using the Services in a secure manner and for exercising
                  caution when choosing what information to store or share publicly through the
                  Services.
                </p>
              </Section>

              <Section number="10" title="International Data Transfers">
                <p>
                  The Services may be operated using service providers and infrastructure located in
                  multiple jurisdictions. As a result, your information may be transferred to, stored
                  in, or processed in countries other than the country in which you reside.
                </p>
                <p>
                  Where required by applicable law, we will take appropriate steps designed to ensure
                  that such transfers are subject to adequate safeguards.
                </p>
              </Section>

              <Section number="11" title="Your Rights and Choices">
                <p>
                  Depending on your jurisdiction, you may have certain rights regarding your personal
                  information, subject to legal limitations and exceptions. These may include the
                  right to:
                </p>
                <BulletList
                  items={[
                    "request access to personal information we hold about you;",
                    "request correction of inaccurate or incomplete information;",
                    "request deletion of your information;",
                    "object to or request restriction of certain processing;",
                    "withdraw consent, where processing is based on consent; and",
                    "request data portability, where applicable.",
                  ]}
                />
                <p>
                  You may also delete your account from within the app settings, which is intended to
                  remove your associated vehicles, maintenance records, and related data from active
                  use within the Services.
                </p>
                <p>
                  To exercise additional privacy rights, you may contact us at{" "}
                  <a href="mailto:hello@thesorami.com" className="underline" style={{ color: "#367DFF" }}>
                    hello@thesorami.com
                  </a>
                  . We may request information necessary to verify your identity before acting on
                  your request.
                </p>
              </Section>

              <Section number="12" title="Children's Privacy">
                <p>
                  The Services are not directed to children under the age of 13, and we do not
                  knowingly collect personal information from children under 13.
                </p>
                <p>
                  If you believe that a child under 13 has provided information to us in violation of
                  this Privacy Policy, please contact us at{" "}
                  <a href="mailto:hello@thesorami.com" className="underline" style={{ color: "#367DFF" }}>
                    hello@thesorami.com
                  </a>
                  . If we become aware that we have collected such information without appropriate
                  authorization, we will take reasonable steps to delete it.
                </p>
              </Section>

              <Section number="13" title="Third-Party Services and Links">
                <p>
                  The Services may include links to third-party websites, services, or platforms,
                  including the Apple App Store, Google Play, Google Sign-In, and Sign in with Apple.
                  Any access to and use of those third-party services is governed by the privacy
                  policies and terms of those third parties, not by this Privacy Policy.
                </p>
                <p>
                  We are not responsible for the privacy, security, or content practices of
                  third-party services.
                </p>
              </Section>

              <Section number="14" title="Changes to This Privacy Policy">
                <p>
                  We may amend or update this Privacy Policy from time to time in our sole
                  discretion. When we do so, we will revise the "Effective Date" or "Last Updated"
                  date at the top of this page.
                </p>
                <p>
                  Any changes will become effective when the updated Privacy Policy is posted, unless
                  otherwise required by applicable law.
                </p>
                <p>
                  Your continued use of the Services following the posting of an updated Privacy
                  Policy constitutes your acknowledgment of the updated terms, to the extent
                  permitted by law.
                </p>
              </Section>

              <Section number="15" title="Contact Us">
                <p>
                  If you have any questions, requests, or concerns regarding this Privacy Policy or
                  our privacy practices, you may contact us at:
                </p>
                <div
                  className="rounded-[12px] border p-6 mt-4"
                  style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
                >
                  <p className="font-semibold text-white mb-2">Sorami LLC</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@thesorami.com"
                      className="underline"
                      style={{ color: "#367DFF" }}
                    >
                      hello@thesorami.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://carcarediary.com"
                      className="underline"
                      style={{ color: "#367DFF" }}
                    >
                      carcarediary.com
                    </a>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </main>

        <footer
          className="border-t px-6 sm:px-10 lg:px-16 xl:px-20 py-10"
          style={{ borderColor: "#1F2740" }}
        >
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo />
            <div className="flex items-center gap-6 text-[14px]" style={{ color: "#A3ACBF" }}>
              <Link to="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="text-[14px]" style={{ color: "#A3ACBF" }}>
              &copy; {new Date().getFullYear()} CarCare Diary. All rights reserved.
            </p>
          </div>
        </footer>
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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 mt-6">
      <h3
        className="text-[17px] md:text-[18px] text-white"
        style={{ fontWeight: 600 }}
      >
        {title}
      </h3>
      {children}
    </div>
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
