"use client";

import {
  WashingMachine,
  Shirt,
  Sofa,
  Briefcase,
  ArrowRightCircle,
} from "lucide-react";
import { pricingItems } from "@/lib/pricing";
import { LaundryVisualPair } from "./laundry-visual-pair";

interface ServicesOverviewProps {
  detailed?: boolean;
}

const services = [
  {
    icon: WashingMachine,
    title: "Dry Cleaning & Steam Cleaning",
    text: "Suits, dresses, abayas and delicate fabrics treated with care.",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    text: "Everyday laundry washed, dried and neatly folded by kilogram.",
  },
  {
    icon: Shirt,
    title: "Ironing Only",
    text: "Crisp pressing for shirts, trousers, uniforms and more.",
  },
  {
    icon: Sofa,
    title: "Bedding & Home Textiles",
    text: "Bedsheets, duvets, blankets, curtains and soft furnishings.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Hotel",
    text: "Tailored packages for hotels, offices and staff housing.",
  },
];

export function ServicesOverview({ detailed }: ServicesOverviewProps) {
  return (
    <section className="py-12 md:py-16 space-y-10">
      {/* top two-column layout */}
      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] items-center">
        {/* LEFT: LaundryVisualPair */}
        <div className="flex items-center justify-center">
          <LaundryVisualPair />
        </div>

        {/* RIGHT: title + vertical step list */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Services
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Everything your laundry day needs — in one place.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl">
              From daily wash &amp; fold to delicate dry cleaning and hotel
              contracts, Queens Press Laundry covers every part of your garment
              care routine.
            </p>
          </div>

          <div className="space-y-3">
            {services.map((item, index) => (
              <ServiceRow
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* pricing table below */}
      {detailed && (
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm border border-sky-100 rounded-xl overflow-hidden bg-white/80">
            <thead className="bg-sky-50 text-slate-700">
              <tr>
                <th className="px-4 py-2 text-left">Item</th>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py-2 text-right">Starting from (AED)</th>
              </tr>
            </thead>
            <tbody>
              {pricingItems.map((item) => (
                <tr key={item.id} className="border-t border-sky-100">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2 text-right">
                    {item.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

interface RowProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  index: number;
}

function ServiceRow({ icon: Icon, title, text, index }: RowProps) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 hover:border-brand-light hover:shadow-sm transition">
      {/* left badge + vertical connector */}
      <div className="flex flex-col items-center pt-1">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-[11px] font-semibold text-brand-dark">
          {index + 1}
        </span>
        {index < services.length - 1 && (
          <span className="mt-1 h-8 w-px bg-slate-200" />
        )}
      </div>

      {/* text side */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-brand-dark">
            <Icon className="h-4 w-4" />
          </div>

          {/* CLICKABLE ARROW -> /services */}
          <a href="/services">
            <ArrowRightCircle className="h-4 w-4 text-slate-300 group-hover:text-brand-dark transition cursor-pointer" />
          </a>
        </div>

        <h3 className="text-sm md:text-base font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}
