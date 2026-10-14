import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Resham Craft",
  description:
    "Privacy Policy for Resham Craft. Learn how we collect, use, protect, and handle your personal and order data responsibly.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-border/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
            <ShieldCheck className="w-4 h-4" /> Client Trust & Transparency
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-medium">
            <span>Effective Date: October 14, 2026</span>
            <span>•</span>
            <span>Last Updated: October 14, 2026</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-foreground/85 leading-relaxed text-sm md:text-base">
          <p>
            <strong>Resham Craft</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit{" "}
            <a
              href="https://resham-craft-ecoms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-accent font-semibold"
            >
              https://resham-craft-ecoms.vercel.app/
            </a>
            , place an order, or contact us.
          </p>

          <p>
            By using our website, you acknowledge this Privacy Policy. Where consent is required by applicable law, we will obtain it separately.
          </p>

          {/* Section 1 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              1. Information We Collect
            </h2>
            <div className="space-y-3 pl-2">
              <div>
                <h3 className="font-semibold text-primary">Personal Information</h3>
                <p>
                  When you place an order or contact us, we may collect your name, email address, phone number, billing address, shipping address, and information you voluntarily provide to customer support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Order and Payment Information</h3>
                <p>
                  We may collect order details, products purchased, transaction references, payment status, delivery information, and refund records.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Payments may be processed through third-party payment providers. We do not intentionally store complete payment card details on our own systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Technical Information</h3>
                <p>
                  When you visit our website, we or our service providers may collect technical information such as browser type, device information, IP address, pages visited, referring URLs, and website interaction data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Cookies</h3>
                <p>
                  We may use cookies and similar technologies to support shopping cart functionality, remember preferences, maintain security, and understand website performance. Where required by law, we will obtain consent before using non-essential tracking technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              2. How We Use Your Information
            </h2>
            <p>We use personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-foreground/80">
              <li>Processing, confirming, and fulfilling orders.</li>
              <li>Arranging delivery and sharing tracking updates.</li>
              <li>Responding to enquiries and providing customer support.</li>
              <li>Processing eligible cancellations, returns, exchanges, and refunds.</li>
              <li>Maintaining transaction records and meeting accounting and tax obligations.</li>
              <li>Detecting fraud, preventing unauthorized activity, and protecting website security.</li>
              <li>Improving our products, services, and website experience.</li>
              <li>Sending promotional communications where legally permitted and, where required, with your consent.</li>
              <li>Complying with applicable legal and regulatory obligations.</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              We will not use personal information for purposes incompatible with the purposes disclosed to you, except where permitted by law.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              3. Legal Basis and Consent
            </h2>
            <p>
              We handle personal information in accordance with applicable Indian data protection and privacy laws.
            </p>
            <p>
              Depending on the circumstances and the laws in force, we may process information to fulfil your order, respond to your requests, comply with legal obligations, protect our legitimate business interests where permitted, or act on valid consent.
            </p>
            <p>
              Where processing requires consent, you may withdraw that consent through the method we provide or by contacting us. Withdrawal does not invalidate processing lawfully completed before withdrawal.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              4. Sharing of Information
            </h2>
            <p className="font-semibold text-primary">
              We do not sell your personal information.
            </p>
            <p>We may share relevant information with:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-foreground/80">
              <li>Payment gateways and payment processing providers.</li>
              <li>Courier companies and logistics partners.</li>
              <li>Website hosting and technical service providers.</li>
              <li>Customer support and communication platforms.</li>
              <li>Analytics and security providers, where applicable.</li>
              <li>Professional advisers, auditors, or authorities where required for legitimate business or legal purposes.</li>
            </ul>
            <p>
              We limit disclosures to information reasonably necessary for the relevant purpose and expect service providers to handle the information in accordance with applicable requirements.
            </p>
            <p>
              We may also disclose information where required by law or necessary to establish, exercise, or defend legal claims.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              5. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including order fulfilment, customer support, financial records, fraud prevention, dispute resolution, and legal compliance.
            </p>
            <p>
              Retention periods depend on the type of information and the applicable legal requirements. When information is no longer required, we will take reasonable steps to delete or anonymize it, subject to lawful retention obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              6. Data Security
            </h2>
            <p>
              We use reasonable technical and organizational measures intended to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse.
            </p>
            <p className="text-xs text-muted-foreground">
              No electronic transmission or storage method is completely secure. Although we take reasonable precautions, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              7. Your Rights and Requests
            </h2>
            <p>
              Subject to applicable law, you may have the right to request access to, correction of, or deletion of personal information, withdraw consent where applicable, and raise a complaint concerning our handling of your information.
            </p>
            <p>
              You may also opt out of promotional emails by using the unsubscribe mechanism included in those communications, where available.
            </p>
            <p>
              To submit a privacy request, contact{" "}
              <a
                href="mailto:contact@reshamcraft.com"
                className="text-primary underline hover:text-accent font-semibold"
              >
                contact@reshamcraft.com
              </a>
              . We may request reasonable information to verify your identity before processing the request. We will handle requests within the applicable legal timeframe.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              8. Third-Party Services
            </h2>
            <p>
              Our website may use third-party services for payment processing, hosting, delivery, analytics, or other functions. Those services may process information under their own terms and privacy practices.
            </p>
            <p>
              We are not responsible for the independent privacy practices of third-party websites or services that we do not control. Please review their policies where relevant.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website is intended for general shoppers. We do not knowingly seek to collect personal information from children in circumstances prohibited by applicable law.
            </p>
            <p>
              If you believe that personal information has been collected unlawfully from a child, contact us so we can review the matter and take appropriate action.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              10. International Transfers
            </h2>
            <p>
              Our website or service providers may process information using infrastructure located outside India. Where personal information is transferred internationally, we will comply with applicable Indian law and any restrictions or safeguards that apply to the transfer.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy to reflect changes in our business practices, website features, service providers, or legal obligations.
            </p>
            <p>
              The revised version will be published on this page with an updated revision date. Where required by law, we will provide additional notice or seek consent for material changes.
            </p>
          </section>

          {/* Section 12: Contact */}
          <section className="space-y-4 pt-4 border-t border-border/40 bg-card p-6 border border-border/60">
            <h2 className="text-2xl font-serif text-primary font-bold">
              12. Contact and Privacy Complaints
            </h2>
            <p>For privacy questions or requests, contact:</p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-primary">Brand: Resham Craft</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:contact@reshamcraft.com"
                    className="text-primary underline font-medium"
                  >
                    contact@reshamcraft.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>Phone: 70398030XX</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Business Location: Pune, Maharashtra, India</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                <strong>Grievance Officer:</strong> The designated officer&apos;s name, designation, and direct contact details will be published once formally appointed.
              </p>
            </div>
            <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
              This policy should be read alongside our{" "}
              <Link href="/terms-of-service" className="text-primary underline font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/shipping-returns" className="text-primary underline font-medium">
                Shipping &amp; Returns Policy
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Boutique
          </Link>
        </div>
      </div>
    </main>
  );
}
