import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-sky-100"
      style={{ backgroundColor: "#D7F3F3" }}
    >
      <div className="container py-10 space-y-10 text-sm mt-12">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* ABOUT */}
          <div className="space-y-3">
            <h2 className="font-semibold text-base">Queens Press Laundry</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Professional dry cleaning & laundry service in Dubai, offering
              reliable cleaning, careful fabric handling and fast delivery.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://www.instagram.com/queens.laundry_/"
                target="_blank"
                className="text-slate-600 hover:text-brand-dark transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61583607283437"
                target="_blank"
                className="text-slate-600 hover:text-brand-dark transition"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* BRANCHES */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Our Branches</h3>
            <ul className="space-y-3 text-slate-600 leading-relaxed">
              <li>
                <strong className="text-slate-800">Bur Dubai</strong>
                <br />
                Al Rais Shopping Center, Shop 10
                <br />
                Landline: 04 352 2933
              </li>

              <li>
                <strong className="text-slate-800">Jumeirah 1</strong>
                <br />
                The Court – Residence Building, Shop 1
                <br />
                Landline: 04 349 7342
              </li>

              <li>
                <strong className="text-slate-800">
                  Port Rashid / Mina Street
                </strong>
                <br />7 Pearl Apartment Complex, Shop 40
                <br />
                Landline: 04 266 9317
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Services</h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>Dry Cleaning</li>
              <li>Steam Pressing</li>
              <li>Wash &amp; Fold</li>
              <li>Curtains &amp; Bedding</li>
              <li>Abayas, Suits & Dresses</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Quick Links</h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <Link href="/pickup-delivery">Pickup & Delivery</Link>
              </li>
              <li>
                <Link href="/branches">Branch Locations</Link>
              </li>
              <li>
                <Link href="/services">Services & Prices</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
      </div>
    </footer>
  );
}
