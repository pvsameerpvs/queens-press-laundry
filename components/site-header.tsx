"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Prices" },
  { href: "/branches", label: "Branches" },
  { href: "/pickup-delivery", label: "Pickup & Delivery" },
  { href: "/about", label: "About Us" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ openMobile }: { openMobile: () => void }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-sky-50/80 backdrop-blur border-b border-sky-100">
      <div className="container py-3">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-xl font-bold shadow-md">
              QP
            </div>
            <div className="leading-tight">
              <span className="font-semibold text-base sm:text-lg block">
                Queens Press Laundry
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500">
                Dubai Dry Cleaning
              </span>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop call button */}
            <Button
              asChild
              size="sm"
              className="hidden lg:inline-flex rounded-full bg-brand-dark hover:bg-brand shadow"
            >
              <a href="tel:+97143522933" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Call Bur Dubai
              </a>
            </Button>

            {/* Mobile call button */}
            <Button
              asChild
              size="icon"
              className="lg:hidden rounded-full bg-brand-dark hover:bg-brand shadow"
            >
              <a href="tel:+97143522933">
                <PhoneCall className="h-4 w-4" />
              </a>
            </Button>

            {/* Menu icon */}
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden rounded-full shadow-sm"
              onClick={openMobile}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="mt-3 hidden xl:flex justify-center">
          <nav className="flex items-center gap-2 px-3 py-1.5 ">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap transition ${
                    active
                      ? "bg-brand-dark text-white shadow"
                      : "text-slate-700 hover:bg-sky-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
