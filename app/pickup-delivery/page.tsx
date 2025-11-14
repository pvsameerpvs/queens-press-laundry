import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  MapPin,
  Clock3,
  Truck,
  PhoneCall,
  CheckCircle2,
  CalendarCheck,
  PackageOpen,
  Sparkles,
  Home,
} from "lucide-react";
import { WhatsappOrderSection } from "@/components/whatsapp-order-section";

export const metadata: Metadata = {
  title: "Pickup & Delivery | Queens Press Laundry",
};

const howItWorksSteps = [
  {
    number: 1,
    title: "Book your pickup",
    text: "Use WhatsApp, call us or submit the form with your building details and preferred time.",
    Icon: CalendarCheck,
  },
  {
    number: 2,
    title: "Rider collects",
    text: "Our rider arrives at your location, labels your bags and notes any special requests.",
    Icon: PackageOpen,
  },
  {
    number: 3,
    title: "We clean with care",
    text: "Items are sorted, cleaned and pressed according to fabric and care labels.",
    Icon: Sparkles,
  },
  {
    number: 4,
    title: "Delivered back fresh",
    text: "We deliver everything back folded or on hangers, ready to go into your wardrobe.",
    Icon: Home,
  },
];

export default function PickupDeliveryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#B9E3DE_0,transparent_55%),radial-gradient(circle_at_bottom,#ffffff_0,#ffffff_55%)]">
      <div className="container py-12 md:py-16 space-y-12">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.3fr,minmax(0,1fr)] items-center">
          {/* Left: text */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B9E3DE]/70 bg-white/70 px-3 py-1 shadow-sm text-xs text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#34d399]" />
              Free pickup &amp; delivery in selected Dubai areas
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Free Pickup &amp; Delivery
              </h1>
              <p className="text-slate-600 text-sm md:text-base">
                Save time with our door-to-door service in Bur Dubai, Karama,
                Jumeirah 1, Port Rashid and nearby communities. Our rider
                collects, our team cleans, and we deliver everything back fresh
                and neatly packed.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid gap-3 sm:grid-cols-3">
              <HighlightPill
                icon={<Truck className="h-4 w-4" />}
                label="Free pickup over AED 40"
              />
              <HighlightPill
                icon={<Clock3 className="h-4 w-4" />}
                label="Same-day / next-day"
              />
              <HighlightPill
                icon={<MapPin className="h-4 w-4" />}
                label="Bur Dubai & nearby"
              />
            </div>

            {/* Small reassurance line */}
            <p className="text-xs text-slate-500">
              Exact pickup windows and availability may vary by area. Our team
              will confirm everything with you on call or WhatsApp.
            </p>
          </div>

          {/* Right: image / visual card */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#B9E3DE]/60 bg-[#B9E3DE] shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
              {/* Gradient overlay on brand color */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.45)_0,transparent_45%),radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.4)_0,transparent_40%)]" />

              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="space-y-2 text-white drop-shadow-sm">
                  <p className="text-xs uppercase tracking-[0.25em]">
                    Queens Press Laundry
                  </p>
                  <p className="text-lg font-semibold">
                    Doorstep pickup, gentle cleaning, on-time delivery.
                  </p>
                  <p className="text-[11px] text-slate-100/90">
                    Ideal for busy families, hotel guests and working
                    professionals in central Dubai.
                  </p>
                </div>

                {/* Image block */}
                <div className="relative mt-2 rounded-2xl overflow-hidden border border-white/40 bg-white/80">
                  <div className="relative h-40">
                    <Image
                      src="/test.JPG"
                      alt="Queens Press Laundry pickup van"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-3 w-full rounded-2xl bg-white/90 border border-white/60 p-3 text-[11px] text-slate-700 space-y-1 shadow-sm">
                  <p className="font-semibold text-slate-800">Before pickup</p>
                  <p>
                    Separate delicate items like abayas, suits and silk pieces,
                    and mention them to our rider. We&apos;ll mark them for
                    extra care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp order CTA */}
        <WhatsappOrderSection />

        {/* Info cards */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="card-glass p-6 space-y-3 border border-[#B9E3DE]/40 shadow-sm bg-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-700" />
              <h2 className="font-semibold text-lg">Areas Covered</h2>
            </div>
            <p className="text-slate-600 text-sm">
              Bur Dubai, Karama, Jumeirah 1, Port Rashid surroundings and nearby
              communities.
            </p>
            <p className="text-xs text-slate-500">
              Not sure if your building is included? Call us or send a WhatsApp
              message and we&apos;ll confirm coverage right away.
            </p>
          </div>

          <div className="card-glass p-6 space-y-3 border border-[#B9E3DE]/40 shadow-sm bg-white/80">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-slate-700" />
              <h2 className="font-semibold text-lg">How to Book</h2>
            </div>
            <p className="text-slate-600 text-sm">
              Call any branch, send us a WhatsApp message or use the online
              order form above.
            </p>
            <ul className="text-xs text-slate-600 space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 mt-[2px] text-emerald-500" />
                <span>Choose your preferred pickup window.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 mt-[2px] text-emerald-500" />
                <span>
                  Share your building name, flat number and access notes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 mt-[2px] text-emerald-500" />
                <span>Mention any stains or special fabric care needed.</span>
              </li>
            </ul>
          </div>

          <div className="card-glass p-6 space-y-3 border border-[#B9E3DE]/40 shadow-sm bg-white/80">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-slate-700" />
              <h2 className="font-semibold text-lg">Timings &amp; Minimums</h2>
            </div>
            <p className="text-slate-600 text-sm">
              Same-day and next-day service is available on most days.
            </p>
            <p className="text-slate-600 text-sm">
              Typical pickup slots are <strong>10 AM – 1 PM</strong> and{" "}
              <strong>4 PM – 9 PM</strong>. Minimum order for free pickup is
              usually around <strong>AED 40</strong>.
            </p>
            <p className="text-xs text-slate-500">
              Express service, heavy items and special fabrics may have an
              additional charge.
            </p>
          </div>
        </section>

        {/* How it works strip */}
        <section className="rounded-3xl border border-[#B9E3DE]/60 bg-[radial-gradient(circle_at_top_left,#B9E3DE_0,rgba(185,227,222,0.15)_30%,#ffffff_70%)] shadow-[0_18px_60px_rgba(0,0,0,0.06)] px-5 py-7 md:px-8 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                Simple process
              </p>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
                How pickup &amp; delivery works
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-600 max-w-md">
              A smooth four-step journey from your doorstep to our laundry and
              back — designed for busy Dubai residents and hotel guests.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-6 md:gap-4">
              {howItWorksSteps.map((step, idx) => (
                <StepCard
                  key={step.number}
                  step={step}
                  isLast={idx === howItWorksSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Small UI pieces */

function HighlightPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white/80 border border-[#B9E3DE]/60 px-3 py-2 shadow-sm">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B9E3DE]/70">
        {icon}
      </span>
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  );
}

function StepCard({
  step,
  isLast,
}: {
  step: (typeof howItWorksSteps)[number];
  isLast: boolean;
}) {
  const { number, title, text, Icon } = step;

  return (
    <div className="flex md:flex-1 gap-3 md:gap-4 items-start">
      {/* Bullet + connector */}
      <div className="flex flex-col items-center md:min-h-full">
        <div className="relative flex items-center justify-center">
          {/* Outer glow */}
          <span className="absolute h-9 w-9 rounded-full bg-[#B9E3DE]/40 blur-[2px]" />
          {/* Inner circle */}
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-[#B9E3DE]/80">
            <span className="text-[11px] font-semibold text-slate-800">
              {number}
            </span>
          </span>
        </div>
        {!isLast && (
          <div className="hidden md:block mt-2 h-full w-px bg-gradient-to-b from-[#B9E3DE]/70 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 rounded-2xl bg-white/85 border border-white/70 shadow-sm px-4 py-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B9E3DE]/15">
            <Icon className="h-3.5 w-3.5 text-slate-800" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}
