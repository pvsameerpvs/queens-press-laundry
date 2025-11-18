import { Metadata } from "next";
import Image from "next/image";
import hero from "@/public/about.png";
import { ValuePropsSection } from "@/components/value-props";
import { HowItWorks } from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "About Us | Queens Press Laundry",
};

export default function AboutPage() {
  return (
    <div className=" relative overflow-hidden">
      {/* Curved Line Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 C 250 150, 450 450, 900 250"
          fill="none"
          stroke="#C4E7E7" /* slightly softer inside #D7F3F3 family */
          strokeWidth="50"
          strokeLinecap="round"
        />
        <path
          d="M0 500 C 300 350, 600 650, 1100 400"
          fill="none"
          stroke="#D7F3F3"
          strokeWidth="0"
          strokeLinecap="round"
        />
      </svg>

      <div className=" py-12 space-y-10 relative z-10">
        <section className="grid md:grid-cols-[0.9fr,1.1fr] gap-10 items-center">
          {/* LEFT — Image */}
          <div className="relative h-72 md:h-full rounded-2xl overflow-hidden shadow-soft order-1 md:order-none bg-white/40 backdrop-blur-sm">
            <Image
              src={hero}
              alt="Queens Press Laundry staff working"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT — Text */}
          <div className="space-y-4 order-2 md:order-none">
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
              <div className="p-4 space-y-1 rounded-xl bg-[#D7F3F3]">
                <h2 className="font-semibold">Our Values</h2>
                <p className="text-sm text-slate-600">
                  Quality cleaning, on-time delivery, fair pricing and genuine
                  customer care.
                </p>
              </div>

              <div className="p-4 space-y-1 rounded-xl bg-[#D7F3F3]">
                <h2 className="font-semibold">Licensed &amp; Compliant</h2>
                <p className="text-sm text-slate-600">
                  Queens Press Laundry is fully licensed by the Dubai Department
                  of Economy &amp; Tourism (Professional License No.{" "}
                  <strong>122428</strong> – Dry Cleaning Services).
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-10 md:mt-16 py-10 ">
          <ValuePropsSection />
        </div>
        <HowItWorks />
      </div>
    </div>
  );
}
