import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Resham Craft",
  description:
    "Terms of Service governing purchases, handloom variations, order processing, and usage of Resham Craft services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex-1 py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Terms of Service</span>
        </nav>

        {/* Header */}
        <div className="border-b border-border/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
            <FileText className="w-4 h-4" /> Legal &amp; Service Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-3">
            Terms of Service
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
            Welcome to <strong>Resham Craft</strong>. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website,{" "}
            <a
              href="https://resham-craft-ecoms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-accent font-semibold"
            >
              https://resham-craft-ecoms.vercel.app/
            </a>
            , and purchases made through it.
          </p>

          <p>
            By using the website or placing an order, you agree to these Terms, subject to applicable law. If you do not agree, please discontinue use of the website.
          </p>

          {/* Section 1 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              1. Business Information
            </h2>
            <p>
              Resham Craft is the brand name used for this online store.
            </p>
            <div className="space-y-1.5 text-sm pl-2">
              <p>
                <strong>Customer Support Email:</strong>{" "}
                <a href="mailto:contact@reshamcraft.com" className="text-primary underline">
                  contact@reshamcraft.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> 70398030XX
              </p>
              <p>
                <strong>Business Location:</strong> Pune, Maharashtra, India
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              The full legal name of the entity operating the store and its complete registered or principal business address will be disclosed on the website once confirmed.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              2. Eligibility and Acceptable Use
            </h2>
            <p>
              You may purchase through the website if you have the legal capacity to enter into a binding contract under applicable law.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Use the website for unlawful or fraudulent purposes.</li>
              <li>Provide materially false or misleading information.</li>
              <li>Attempt unauthorized access to our systems or other customers&apos; information.</li>
              <li>Interfere with website security or operation.</li>
              <li>Copy or exploit protected content without authorization or a legal right to do so.</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              We may take reasonable action against misuse, subject to applicable law.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              3. Product Information and Handmade Variations
            </h2>
            <p>
              We make reasonable efforts to display accurate product descriptions, images, dimensions, materials, prices, and other relevant details.
            </p>
            <p>
              Some craft products may feature minor variations in colour, texture, pattern, finish, or dimensions due to materials, lighting, display settings, and the nature of handcrafted production.
            </p>
            <p>
              Reasonable variations inherent to the disclosed product or craft process do not automatically constitute defects. However, this does not exclude remedies for defective products, material misdescription, incorrect items, or other failures to meet applicable consumer protection requirements.
            </p>
            <p className="text-xs text-muted-foreground">
              Please review the product description and any customization details before placing an order.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              4. Prices, Taxes, and Payments
            </h2>
            <p>
              Prices are displayed in Indian Rupees (INR), unless otherwise stated.
            </p>
            <p>
              Applicable taxes, delivery charges, and other mandatory fees will be disclosed as required by law and shown before you confirm your purchase.
            </p>
            <p>
              Payment methods offered at checkout are subject to the terms of the relevant payment provider.
            </p>
            <p>
              An order may require successful payment authorization before processing. We do not intentionally store complete payment card details on our own systems.
            </p>
            <p>
              If a genuine pricing, availability, or listing error is identified, we will address it in accordance with applicable law and communicate with affected customers as appropriate. We will not rely on an error-correction provision to disregard legal obligations concerning an accepted order.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              5. Orders and Confirmation
            </h2>
            <p>
              After an order is placed, we may send an acknowledgement by email, SMS, or another available communication channel.
            </p>
            <p>
              An acknowledgement confirms receipt of the order details but may not, by itself, constitute final acceptance.
            </p>
            <p>
              Orders are subject to stock availability, payment verification, and the ability to fulfil the delivery request.
            </p>
            <p>
              If we cannot fulfil an order, we will inform you and arrange any applicable cancellation and refund in accordance with law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              6. Order Processing and Delivery
            </h2>
            <p>
              Our standard order processing time is <strong>2–3 business days</strong> after successful order confirmation and payment, where applicable.
            </p>
            <p>
              Our estimated delivery time is <strong>5–7 business days after dispatch</strong> for serviceable addresses in India.
            </p>
            <p>
              These are estimates, not guaranteed delivery dates. Actual delivery may be affected by courier capacity, public holidays, weather, remote locations, inaccurate address information, or other logistical circumstances.
            </p>
            <p className="text-xs text-muted-foreground">
              Shipping charges and applicable delivery conditions will be disclosed at checkout. Further details appear in our{" "}
              <Link href="/shipping-returns" className="text-primary underline">
                Shipping &amp; Returns Policy
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              7. Cancellations, Returns, and Refunds
            </h2>
            <p>
              Cancellation requests should be sent to{" "}
              <a href="mailto:contact@reshamcraft.com" className="text-primary underline font-medium">
                contact@reshamcraft.com
              </a>{" "}
              as soon as possible.
            </p>
            <p>
              An order may be cancellable before dispatch, depending on its processing status and whether it has been customized or prepared specifically for the customer.
            </p>
            <p>
              Returns, exchanges, damaged-product claims, and refunds are governed by our{" "}
              <Link href="/shipping-returns" className="text-primary underline font-medium">
                Shipping &amp; Returns Policy
              </Link>
              .
            </p>
            <p className="text-xs text-muted-foreground">
              Our policies do not exclude any cancellation, refund, replacement, or other remedy required by applicable law.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              8. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, website content—including text, graphics, photographs, logos, product descriptions, branding, and design elements—is owned by or licensed to Resham Craft.
            </p>
            <p>
              You may access the website for personal shopping and other lawful purposes. You may not reproduce, distribute, modify, publish, or commercially exploit protected content without authorization, except where permitted by law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              9. Reviews and User Submissions
            </h2>
            <p>
              If you submit a review, testimonial, photograph, or other content, you confirm that you have the right to submit it and that it does not unlawfully infringe another person&apos;s rights.
            </p>
            <p>
              You must not submit unlawful, fraudulent, defamatory, misleading, or abusive material.
            </p>
            <p>
              Where you voluntarily submit content for publication, you grant Resham Craft a non-exclusive, royalty-free permission to display and use it for website operation and related promotional purposes, to the extent permitted by law and subject to any additional consent required.
            </p>
            <p className="text-xs text-muted-foreground">
              We may moderate or remove content that violates these Terms or applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              10. Website Availability
            </h2>
            <p>
              We aim to keep the website available and functional, but we do not guarantee uninterrupted access.
            </p>
            <p>
              Maintenance, technical issues, third-party service failures, or security incidents may temporarily affect availability. We will take reasonable steps to address material disruptions.
            </p>
            <p className="text-xs text-muted-foreground">
              This section does not limit any consumer rights or remedies that apply to a purchased product or service.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              11. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by law, Resham Craft will not be liable for indirect or consequential losses arising from circumstances outside our reasonable control.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including statutory consumer rights, remedies for defective goods, or liability arising from our own unlawful conduct.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              12. Indemnity
            </h2>
            <p>
              To the extent permitted by applicable law, you are responsible for losses and reasonable costs arising directly from your unlawful use of the website, material breach of these Terms, or infringement of third-party rights.
            </p>
            <p className="text-xs text-muted-foreground">
              This provision does not apply where prohibited by law or to the extent the loss results from our own unlawful conduct.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              13. Privacy
            </h2>
            <p>
              Our collection and use of personal information are described in our{" "}
              <Link href="/privacy-policy" className="text-primary underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              By using the website, you acknowledge that policy. Where consent is required for a particular data-processing activity, we will seek it separately as required by law.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              14. Suspension and Termination
            </h2>
            <p>
              We may restrict access to the website where reasonably necessary to address fraud, security risks, unlawful conduct, or material violations of these Terms.
            </p>
            <p>
              Any restriction will remain subject to applicable law and will not remove rights relating to orders, payments, refunds, or complaints.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              15. Changes to These Terms
            </h2>
            <p>
              We may update these Terms to reflect changes in our operations, services, or legal obligations.
            </p>
            <p>
              The revised Terms will be published on this page with an updated date. Changes will take effect as permitted by law and will not retrospectively remove rights that have already accrued.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              16. Governing Law and Disputes
            </h2>
            <p>
              These Terms are governed by the laws of India, subject to applicable consumer protection laws and other mandatory legal requirements.
            </p>
            <p>
              Disputes will be handled through the appropriate legal and consumer-redressal mechanisms. Nothing in these Terms prevents a consumer from approaching a competent consumer authority or court as permitted by law.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4 pt-4 border-t border-border/40 bg-card p-6 border border-border/60">
            <h2 className="text-2xl font-serif text-primary font-bold">
              17. Contact and Grievance Redressal
            </h2>
            <p>For order-related questions, complaints, or questions about these Terms, contact:</p>
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
                <strong>Grievance Officer:</strong> The designated officer&apos;s name, designation, and direct contact details will be added before publication.
              </p>
            </div>
            <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
              Consumer grievances will be handled in accordance with applicable law, including applicable acknowledgement and resolution deadlines.
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
