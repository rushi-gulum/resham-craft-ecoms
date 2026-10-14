import type { Metadata } from "next";
import Link from "next/link";
import { Truck, ArrowLeft, Mail, Phone, MapPin, AlertCircle, Clock, CheckCircle2, RotateCcw, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Returns Policy | Resham Craft",
  description:
    "Details on insured domestic delivery, order processing times, 7-day returns, handmade variations, and refund procedures at Resham Craft.",
};

export default function ShippingReturnsPage() {
  return (
    <main className="flex-1 py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Shipping &amp; Returns</span>
        </nav>

        {/* Header */}
        <div className="border-b border-border/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
            <Truck className="w-4 h-4" /> Logistics &amp; Client Guarantee
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-3">
            Shipping &amp; Returns Policy
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
            At <strong>Resham Craft</strong>, we aim to process orders carefully, deliver products safely, and provide a transparent process for returns, exchanges, and refunds.
          </p>

          <p>
            This policy applies to purchases made through{" "}
            <a
              href="https://resham-craft-ecoms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-accent font-semibold"
            >
              https://resham-craft-ecoms.vercel.app/
            </a>{" "}
            and covers deliveries within India.
          </p>

          {/* Section 1 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              1. Shipping Coverage
            </h2>
            <p>
              We currently ship to serviceable delivery addresses within India.
            </p>
            <p>
              Delivery availability depends on the courier services operating in the destination PIN code. If an address is not serviceable, we will inform you where reasonably practicable.
            </p>
            <p className="text-muted-foreground italic">
              International shipping is not currently offered under this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              2. Order Processing Time
            </h2>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/15 flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Standard Dispatch Timeline</p>
                <p className="text-sm text-foreground/80">
                  Our standard order processing time is <strong>2–3 business days</strong> after successful order confirmation and payment, where applicable.
                </p>
              </div>
            </div>
            <p>
              Business days exclude Sundays and public holidays observed by our operations, unless otherwise stated.
            </p>
            <p>
              Orders placed during sales, promotional events, or unusually high-volume periods may require additional processing time. Where a material delay becomes apparent, we will make reasonable efforts to notify you.
            </p>
            <p>
              Customized or made-to-order products may require additional time if the product listing specifies a different preparation period.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              3. Estimated Delivery Time
            </h2>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/15 flex items-start gap-3">
              <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Delivery Window Across India</p>
                <p className="text-sm text-foreground/80">
                  Our standard estimated delivery time is <strong>5–7 business days after dispatch</strong> for serviceable addresses in India.
                </p>
              </div>
            </div>
            <p>
              The total time from purchase to delivery therefore generally includes both the <strong>2–3 business-day processing period</strong> and the <strong>5–7 business-day delivery period</strong>.
            </p>
            <p>
              Delivery estimates are indicative and may vary due to courier capacity, public holidays, adverse weather, remote locations, inaccurate address information, or other logistical circumstances.
            </p>
            <p>
              We will provide tracking details where available via email and SMS notifications.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              4. Shipping Charges
            </h2>
            <p>
              Any shipping charge, free-shipping threshold, or location-specific delivery fee will be displayed at checkout before you complete your purchase.
            </p>
            <p>
              We will not impose undisclosed shipping charges after an order is placed, except where permitted by applicable law and properly agreed to by the customer.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              5. Address Accuracy and Failed Delivery
            </h2>
            <p>
              Customers must provide an accurate delivery address, PIN code, and contact number when placing an order.
            </p>
            <p>
              If a parcel cannot be delivered because of incorrect address details, repeated failed delivery attempts, or an inability to contact the recipient, the courier may return the parcel to us.
            </p>
            <p>
              Please contact{" "}
              <a
                href="mailto:contact@reshamcraft.com"
                className="text-primary underline hover:text-accent font-semibold"
              >
                contact@reshamcraft.com
              </a>{" "}
              if this occurs. We will review the circumstances and explain the available options.
            </p>
            <p>
              Any reshipment charge, where applicable, will be disclosed before the reshipment is arranged and handled in accordance with applicable law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              6. Damaged, Defective, Incorrect, or Incomplete Orders
            </h2>
            <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Priority Investigation Window</p>
                <p className="text-sm text-foreground/80">
                  If your order arrives damaged, defective, incorrect, or incomplete, please contact us within <strong>48 hours of delivery</strong>, where possible, so we can investigate promptly.
                </p>
              </div>
            </div>
            <p>Please provide the following details:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-foreground/80">
              <li>Your order number.</li>
              <li>A description of the problem.</li>
              <li>Clear photographs of the item and packaging, where relevant.</li>
              <li>Any other reasonable information needed to investigate the claim.</li>
            </ul>
            <p>
              Please retain the original packaging until the matter has been reviewed.
            </p>
            <p>
              We will assess the issue and communicate an appropriate resolution. Depending on the circumstances and applicable law, this may include a replacement, return, refund, or another remedy.
            </p>
            <p className="text-xs text-muted-foreground">
              The 48-hour reporting request helps us investigate courier and packaging issues. It does not eliminate or restrict statutory consumer rights or remedies.
            </p>
            <p>
              For products confirmed to be defective, damaged, incorrect, or otherwise eligible for a remedy under applicable law, we will bear or reimburse reasonable return shipping costs as required.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              7. Seven-Day Return Window
            </h2>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/15 flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Hassle-Free Return Eligibility</p>
                <p className="text-sm text-foreground/80">
                  Eligible products may be requested for return within <strong>7 days of delivery</strong>.
                </p>
              </div>
            </div>
            <p>
              To initiate a return, email{" "}
              <a
                href="mailto:contact@reshamcraft.com"
                className="text-primary underline hover:text-accent font-semibold"
              >
                contact@reshamcraft.com
              </a>{" "}
              with your order number, the product concerned, and the reason for the request.
            </p>
            <p>
              Unless the return concerns a defective, damaged, incorrect, or otherwise legally protected claim, the product should generally be:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-foreground/80">
              <li>Unused and unworn.</li>
              <li>In its original condition.</li>
              <li>Returned with original packaging, tags, accessories, and documentation, where applicable.</li>
              <li>Accompanied by proof of purchase or the order number.</li>
            </ul>
            <p>
              We will review the request and provide return instructions.
            </p>
            <p className="text-xs text-muted-foreground">
              The seven-day policy is a voluntary return window for eligible items. It does not restrict any longer or different remedy that applicable law requires in a particular case.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              8. Change-of-Mind Returns
            </h2>
            <p>
              For eligible change-of-mind returns requested within the seven-day window, the customer is responsible for the return shipping cost.
            </p>
            <p>
              The item must meet the applicable return conditions in this policy.
            </p>
            <p>
              Please obtain return authorization and instructions from our support team before sending an item back. We cannot guarantee processing of unsolicited parcels sent to an unconfirmed address.
            </p>
            <p>
              Any return-related charge will be disclosed in advance and will comply with applicable law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              9. Non-Returnable Products
            </h2>
            <p>
              Subject to applicable law, change-of-mind returns may be unavailable for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-foreground/80">
              <li>Customized or personalized products.</li>
              <li>Products made to the customer&apos;s specific requirements.</li>
              <li>Products clearly identified as non-returnable before purchase.</li>
              <li>Products that cannot reasonably be resold for hygiene or safety reasons, where such exclusion is legally permitted.</li>
            </ul>
            <p className="text-sm text-foreground/80">
              These exclusions do not apply where the customer is entitled to a return, replacement, refund, or other remedy under applicable law, including in cases of defective, incorrect, or materially misdescribed products.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              10. Handmade Product Variations
            </h2>
            <p>
              Some Resham Craft products may be handcrafted or produced using artisan techniques. Minor variations in colour, texture, pattern, finish, or dimensions may occur naturally.
            </p>
            <p>
              Such variations do not automatically qualify as defects where they are consistent with the product description and reasonably expected characteristics of the craft.
            </p>
            <p>
              However, significant undisclosed differences, material misdescription, or genuine defects will be assessed individually and handled in accordance with applicable consumer rights.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              11. Refund Processing
            </h2>
            <div className="p-4 rounded-xl border border-border/60 bg-secondary/15 flex items-start gap-3">
              <PackageCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Target Reimbursement Window</p>
                <p className="text-sm text-foreground/80">
                  Our target refund processing time is <strong>5–7 business days after approval</strong>.
                </p>
              </div>
            </div>
            <p>
              Once an approved return or refund request has been reviewed and the applicable conditions have been satisfied, we will notify you of the outcome.
            </p>
            <p>
              Approved refunds will ordinarily be processed to the original payment method where possible. If an alternative method is necessary, we will communicate the available options.
            </p>
            <p>
              The time taken for the amount to appear in your account may depend on your bank or payment provider. The target above refers to our processing period, not necessarily the time taken by a bank to credit the funds. Refunds will be handled within the timeframe required by applicable law.
            </p>
            <p>
              Where a refund is due for a cancelled order, defective product, incorrect item, or other legally protected claim, applicable refund obligations will take precedence over any discretionary return conditions.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              12. Order Cancellations
            </h2>
            <p>
              If you wish to cancel an order, contact{" "}
              <a
                href="mailto:contact@reshamcraft.com"
                className="text-primary underline hover:text-accent font-semibold"
              >
                contact@reshamcraft.com
              </a>{" "}
              as soon as possible and include your order number.
            </p>
            <p>
              Cancellation may be possible before dispatch, depending on the order&apos;s processing status and whether the item has been customized or prepared specifically for you.
            </p>
            <p>
              If an order has already been dispatched, cancellation may not be operationally possible. Our support team will explain the applicable return or refund options.
            </p>
            <p>
              Any cancellation fee or restriction will be applied only as permitted by law. Nothing in this section excludes a cancellation or refund right available under applicable law.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              13. Delayed, Lost, or Undelivered Orders
            </h2>
            <p>
              If your order has not arrived within the estimated delivery period, contact{" "}
              <a
                href="mailto:contact@reshamcraft.com"
                className="text-primary underline hover:text-accent font-semibold"
              >
                contact@reshamcraft.com
              </a>{" "}
              with your order number and tracking details.
            </p>
            <p>
              We will investigate the shipment with the relevant courier and provide an update.
            </p>
            <p>
              If the parcel is confirmed lost or undelivered, we will assess the circumstances and arrange an appropriate replacement, refund, or other remedy as required by applicable law.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4 pt-4 border-t border-border/40">
            <h2 className="text-2xl font-serif text-primary font-bold">
              14. Contact Information
            </h2>
            <p>
              For shipping queries, return requests, exchanges, damaged-product claims, and refunds, contact:
            </p>

            <div className="bg-secondary/20 p-6 rounded-2xl border border-border/60 space-y-3 mt-4">
              <p className="font-serif font-bold text-lg text-primary">Resham Craft</p>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@reshamcraft.com"
                    className="underline text-primary hover:text-accent"
                  >
                    contact@reshamcraft.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <strong>Phone:</strong> 70398030XX
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <strong>Business Location:</strong> Pune, Maharashtra, India
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Please include your order number in all order-related communications.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Grievance Officer:</strong> The designated officer&apos;s name, designation, and direct contact details must be published once confirmed.
            </p>
          </section>
        </div>

        {/* Return Button */}
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
