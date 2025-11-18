import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BranchSelector } from "@/components/branch-selector";

export const metadata: Metadata = {
  title: "Contact Us | Queens Press Laundry",
};

export default function ContactPage() {
  return (
    <div className="container py-12 space-y-10">
      {/* CONTACT FORM SECTION */}
      <section className="grid md:grid-cols-[1.2fr,0.8fr] gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-600">
            Have a question about our services, pricing or pickup &amp;
            delivery? Send us a message and our team will get back to you as
            soon as possible.
          </p>

          <ContactForm />
        </div>

        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="p-6 space-y-2 rounded-2xl border border-slate-200 bg-[#D7F3F3] shadow-sm w-full">
            <h2 className="font-semibold text-lg text-center">
              Business Hours
            </h2>
            <p className="text-sm text-slate-600 text-center">
              Daily: <strong>9:00 AM – 11:00 PM</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 👉 BRANCH SELECTOR MOVED TO BOTTOM */}
      <BranchSelector />
    </div>
  );
}
