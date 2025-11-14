import { Metadata } from "next";
import { WhatsappOrderSection } from "@/components/whatsapp-order-section";

export const metadata: Metadata = {
  title: "Pickup & Delivery | Queens Press Laundry"
};

export default function PickupDeliveryPage() {
  return (
    <div className="container py-12 space-y-10">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Free Pickup &amp; Delivery
        </h1>
        <p className="text-slate-600">
          Save time with our free pickup and delivery service in selected areas
          of Dubai including Bur Dubai, Karama, Jumeirah 1 and Port Rashid.
        </p>
      </div>
      <WhatsappOrderSection />
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card-glass p-6 space-y-2">
          <h2 className="font-semibold text-lg">Areas Covered</h2>
          <p className="text-slate-600 text-sm">
            Bur Dubai, Karama, Jumeirah 1, Port Rashid surroundings and nearby
            communities. Call us to confirm coverage for your building.
          </p>
        </div>
        <div className="card-glass p-6 space-y-2">
          <h2 className="font-semibold text-lg">How to Book</h2>
          <p className="text-slate-600 text-sm">
            Call any branch, send us a WhatsApp message or use the online form
            above. Choose your preferred pickup time and share any special
            instructions.
          </p>
        </div>
        <div className="card-glass p-6 space-y-2">
          <h2 className="font-semibold text-lg">Timings &amp; Minimums</h2>
          <p className="text-slate-600 text-sm">
            Same-day and next-day service available. Typical pickup slots are{" "}
            <strong>10 AM – 1 PM</strong> and <strong>4 PM – 9 PM</strong>.
            Minimum order for free pickup is usually around <strong>AED 40</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
