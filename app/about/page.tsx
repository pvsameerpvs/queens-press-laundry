import { Metadata } from "next";
import Image from "next/image";
import hero from "@/public/shedule2.jpg";

export const metadata: Metadata = {
  title: "About Us | Queens Press Laundry",
};

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-10">
      <section className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-dark">
            About Queens Press Laundry
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Professional dry cleaning in Dubai since 1991.
          </h1>
          <p className="text-slate-600">
            Queens Press Laundry is a professional dry cleaning and laundry
            company based in Dubai. We have been serving residents and
            businesses since 1991, offering reliable and high-quality cleaning
            services with a friendly, neighborhood feel.
          </p>
          <p className="text-slate-600">
            We started with our first branch in Bur Dubai and have since
            expanded to Jumeirah 1 and Port Rashid / Mina Street to serve more
            communities. Our team combines modern cleaning technology with
            careful hand finishing for a crisp, fresh result every time.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card-glass p-4 space-y-1">
              <h2 className="font-semibold">Our Values</h2>
              <p className="text-sm text-slate-600">
                Quality cleaning, on-time delivery, fair pricing and genuine
                customer care.
              </p>
            </div>
            <div className="card-glass p-4 space-y-1">
              <h2 className="font-semibold">Licensed &amp; Compliant</h2>
              <p className="text-sm text-slate-600">
                Queens Press Laundry is fully licensed by the Dubai Department
                of Economy &amp; Tourism (Professional License No.{" "}
                <strong>122428</strong> – Dry Cleaning Services).
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-72 md:h-full rounded-2xl overflow-hidden shadow-soft">
          <Image
            src={hero}
            alt="Queens Press Laundry staff working"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </section>
    </div>
  );
}
