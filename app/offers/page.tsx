import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers & Packages | Queens Press Laundry"
};

export default function OffersPage() {
  return (
    <div className="container py-12 space-y-10">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Offers &amp; Packages
        </h1>
        <p className="text-slate-600">
          Save more with our family, corporate and seasonal packages. Offers may
          vary by branch; please confirm prices with our team when booking.
        </p>
      </div>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card-glass p-6 space-y-3">
          <h2 className="font-semibold text-lg">Family Monthly Package</h2>
          <p className="text-sm text-slate-600">
            Ideal for busy households. Bundle your regular laundry and dry
            cleaning and save up to <strong>20%</strong> every month.
          </p>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Flexible mix of laundry &amp; dry cleaning</li>
            <li>Priority pickup &amp; delivery slots</li>
            <li>Special pricing for uniforms &amp; school wear</li>
          </ul>
        </div>
        <div className="card-glass p-6 space-y-3">
          <h2 className="font-semibold text-lg">Corporate &amp; Hotel</h2>
          <p className="text-sm text-slate-600">
            Custom packages for hotels, offices, restaurants and staff housing.
          </p>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Staff uniform cleaning</li>
            <li>Restaurant linen &amp; tablecloths</li>
            <li>Monthly billing &amp; reporting</li>
          </ul>
        </div>
        <div className="card-glass p-6 space-y-3">
          <h2 className="font-semibold text-lg">Seasonal Offers</h2>
          <p className="text-sm text-slate-600">
            Look out for special promotions during Eid, Ramadan and back to
            school periods.
          </p>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Discounts on abayas &amp; kanduras</li>
            <li>Carpet &amp; curtain cleaning bundles</li>
            <li>Student offers in Bur Dubai area</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
