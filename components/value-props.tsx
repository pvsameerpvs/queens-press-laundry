"use client";

import { ShieldCheck, Truck, Shirt, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Licensed & Experienced",
    text: "Serving Dubai with professional dry cleaning services since 1991.",
    image: "/service1.jpg",
  },
  {
    icon: Shirt,
    title: "Premium Cleaning",
    text: "Gentle on fabrics, tough on stains with modern machines and solvents.",
    image: "/service21.jpg.jpg",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    text: "Free pickup & delivery in selected areas with flexible time slots.",
    image: "/service22.jpg.jpg",
  },
  {
    icon: Sparkles,
    title: "Same-Day Available",
    text: "Express options for urgent items like suits, uniforms and abayas.",
    image: "/service23.jpg.jpg",
  },
];

export function ValuePropsSection() {
  return (
    <section className="max-w-6xl mx-auto space-y-10 py-10 ">
      {/* HEADER AREA */}
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-dark">
          Why Queens Press Laundry
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Everything you expect from a trusted Dubai laundry service.
        </h2>
        <p className="text-sm md:text-base text-slate-600">
          From delicate garments to daily wear, we handle your clothes with
          professional care, reliable turnaround times and friendly service from
          our Bur Dubai team.
        </p>
      </div>

      {/* GRID OF VALUE CARDS */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Optional background image */}
            {item.image && (
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="relative p-5 md:p-6 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light/90 text-brand-dark">
                  <item.icon className="h-5 w-5" />
                </div>
                {/* <span className="text-[11px] font-semibold text-slate-400">
                  STEP {index + 1} OF {items.length}
                </span> */}
              </div>

              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
