import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offers & Packages | Queens Press Laundry",
};

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* HERO LIKE THE SAMPLE IMAGE */}
        <section
          className="relative rounded-[32px] overflow-hidden shadow-xl flex flex-col md:flex-row items-center gap-10 md:gap-14 px-6 md:px-12 py-10 md:py-14"
          style={{ backgroundColor: "#B9E3DE" }}
        >
          {/* LEFT SIDE TEXT */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
              Queens Press Laundry · Special Deals
            </span>

            <div className="leading-none space-y-2">
              <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-tight">
                <span className="block text-purple-700">Get</span>
                <span className="block text-teal-600">Offer</span>
              </h1>
            </div>

            <p className="text-slate-700 max-w-md">
              Save more with our family, corporate and seasonal laundry
              packages. Book online and enjoy door-to-door pickup &amp;
              delivery.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/services">
                <button className="px-5 py-2.5 rounded-full bg-purple-700 text-white text-sm font-semibold shadow-md hover:bg-purple-800 transition">
                  View Price List
                </button>
              </Link>

              <Link href="/pickup-delivery">
                <button className="px-5 py-2.5 rounded-full border border-slate-700/30 text-sm font-semibold text-slate-800 bg-white/70 backdrop-blur hover:bg-white transition">
                  Book Pickup
                </button>
              </Link>
            </div>

            {/* Small profile area (like in the design bottom-left) */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-purple-700 shadow">
                {/* Replace this src with your own avatar image */}
                <Image
                  src="/hero2.png"
                  alt="Laundry expert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-sm text-purple-800">
                  Queens Press Team
                </div>
                <div className="text-xs text-slate-700">
                  Laundry Care Specialists
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ILLUSTRATION */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative overflow-visible flex justify-center">
              {/* CIRCLE BACKGROUND */}
              <div
                className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        w-[200px] h-[200px] md:w-[260px] md:h-[260px]
        bg-[#7DB7A5]
        rounded-full
        shadow-lg
        z-0
      "
              ></div>

              {/* IMAGE */}
              <Image
                src="/hero2.png"
                alt="Hero Image"
                width={900}
                height={900}
                className="
        relative z-10
        object-contain
        h-[280px] sm:h-[340px] md:h-[420px]
        w-auto
        max-w-none
      "
              />
            </div>
          </div>

          {/* DISCOUNT BUBBLES */}
          <div className="hidden md:block absolute -left-6 bottom-10">
            <div className="h-20 w-20 rounded-full border-2 border-teal-600 bg-white/80 flex items-center justify-center rotate-[-18deg]">
              <span className="text-xs font-semibold text-teal-700 text-center leading-tight">
                5%
                <br />
                off
              </span>
            </div>
          </div>

          <div className="hidden md:block absolute right-10 -top-4">
            <div className="h-20 w-20 rounded-full border-2 border-purple-700 bg-white/80 flex items-center justify-center rotate-[18deg]">
              <span className="text-xs font-semibold text-purple-700 text-center leading-tight">
                10%
                <br />
                off
              </span>
            </div>
          </div>

          {/* Small arrow bubble near card */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-10 -translate-y-2">
            <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-xl text-teal-600">|</span>
            </div>
          </div>
        </section>

        {/* PACKAGES SECTION BELOW HERO */}
        <section className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Offers &amp; Packages
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl">
                Choose the package that fits your lifestyle. Prices may vary by
                branch; please confirm details with our team when booking.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-200 space-y-3">
              <h3 className="font-semibold text-lg text-slate-900">
                Family Monthly Package
              </h3>
              <p className="text-sm text-slate-700">
                Perfect for busy households. Bundle regular laundry and dry
                cleaning and save up to <strong>20%</strong> every month.
              </p>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Flexible mix of laundry &amp; dry cleaning</li>
                <li>Priority pickup &amp; delivery slots</li>
                <li>Special pricing for uniforms &amp; school wear</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-200 space-y-3">
              <h3 className="font-semibold text-lg text-slate-900">
                Corporate &amp; Hotel
              </h3>
              <p className="text-sm text-slate-700">
                Big offers available for hotels, offices, restaurants, and staff
                housing including Emirates staff.
              </p>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Staff uniform cleaning</li>
                <li>Restaurant linen &amp; tablecloths</li>
                <li>Monthly billing &amp; reporting</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-200 space-y-3">
              <h3 className="font-semibold text-lg text-slate-900">
                Seasonal Offers
              </h3>
              <p className="text-sm text-slate-700">
                Special promos during Eid, Ramadan and back-to-school periods.
              </p>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Discounts on abayas &amp; kanduras</li>
                <li>Carpet &amp; curtain cleaning bundles</li>
                <li>Student offers in Bur Dubai area</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
