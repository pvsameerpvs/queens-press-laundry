"use client";

import { useMemo } from "react";
import type React from "react";
import { WashingMachine, Shirt, Sofa, Briefcase, Box } from "lucide-react";
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
    icon: Box,
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
  const groupedMenu = useMemo(() => {
    return pricingItems.reduce<Record<string, typeof pricingItems>>(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      },
      {}
    );
  }, []);

  return (
    <section className="py-12 md:py-16 space-y-10 ">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] items-center">
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

      {/* Aesthetic Laundry Menu */}
      {detailed && (
        <div className="mt-4 rounded-3xl border border-sky-100 bg-white/80 p-4 md:p-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] items-start">
            {/* LEFT: scrollable menu list */}
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 [-webkit-overflow-scrolling:touch]">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Service Menu
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    Popular laundry & dry cleaning items
                  </h3>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 border border-sky-100">
                  Prices are “starting from”
                </span>
              </div>

              <div className="space-y-5">
                {Object.entries(groupedMenu).map(([category, items]) => (
                  <div
                    key={category}
                    className="pt-3 border-t border-sky-100/70 first:pt-0 first:border-t-0"
                  >
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">
                      {category}
                    </h4>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-baseline justify-between gap-3 rounded-xl px-2 py-1.5 hover:bg-sky-50/70 transition"
                        >
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {item.name}
                            </p>
                            <p className="text-[11px] text-slate-400">From</p>
                          </div>
                          <p className="text-sm font-semibold text-sky-900 tabular-nums">
                            AED {item.price.toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: centre/side image showcase */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden border border-slate-200 bg-[#ccebe7]">
                {/* Soft gradient overlay keeps aesthetic, but on your color */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.35)_0,transparent_45%),radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.3)_0,transparent_40%)]" />

                <div className="relative h-full flex flex-col items-center justify-between p-6">
                  <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                      Queens Press Laundry
                    </p>
                    <p className="text-base font-semibold text-slate-800">
                      Same–day & next–day service available
                    </p>
                    <p className="text-xs text-slate-600">
                      Add your items from this menu and our team will confirm
                      the final quote after inspection.
                    </p>
                  </div>

                  <div className="w-full rounded-2xl bg-white/80 border border-slate-200 p-3 text-xs text-slate-600 space-y-1 shadow-sm">
                    <p className="font-semibold text-slate-800">
                      Pro tip for guests
                    </p>
                    <p>
                      Separate delicate pieces like silk, abayas and suits in a
                      different bag and mention it to our rider for extra care.
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-600 text-center">
                    *Stain treatment, express service and special fabrics may
                    have additional charges.
                  </div>
                </div>
              </div>
            </div>

            {/* On mobile, we can show a compact info block instead of big image */}
            <div className="lg:hidden text-[11px] text-slate-500 border-t border-sky-100 pt-3 mt-2">
              *Stain treatment, express service and special fabrics may have
              additional charges. Final prices are confirmed after inspection.
            </div>
          </div>
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
        </div>

        <h3 className="text-sm md:text-base font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}
