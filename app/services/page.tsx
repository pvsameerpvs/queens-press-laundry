import { Metadata } from "next";
import { ServicesOverview } from "@/components/services-overview";
import { CostCalculator } from "@/components/cost-calculator";

export const metadata: Metadata = {
  title: "Services & Prices | Queens Press Laundry"
};

export default function ServicesPage() {
  return (
    <div className="container py-12 space-y-10">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Services &amp; Prices
        </h1>
        <p className="text-slate-600">
          We provide professional dry cleaning and laundry services for everyday
          clothes, business wear and delicate fabrics. Prices below are
          starting from and may change based on fabric and stain condition.
        </p>
      </div>
      <ServicesOverview detailed />
      <CostCalculator />
    </div>
  );
}
