import { BranchDetails } from "@/components/branch-selector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches & Locations | Queens Press Laundry",
};

export default function BranchesPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Branches &amp; Locations
        </h1>
        <p className="text-slate-600">
          Visit any of our three convenient locations across Dubai or book a
          pickup and we&apos;ll come to you.
        </p>
      </div>
      <BranchDetails />
    </div>
  );
}
