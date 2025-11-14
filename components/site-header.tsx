"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
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
        {/* Top row: logo + actions */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-xl font-bold shadow-soft">
              QP
            </div>
            <div className="flex flex-col leading-tight overflow-hidden">
              <span className="font-semibold text-base sm:text-lg truncate">
                Queens Press Laundry
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 truncate">
                Dubai Dry Cleaning
              </span>
            </div>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop call button */}
            <Button
              asChild
              size="sm"
              className="hidden lg:inline-flex rounded-full bg-brand-dark hover:bg-brand"
            >
              <a href="tel:+97143522933" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Call Bur Dubai</span>
              </a>
            </Button>

            {/* Mobile icon-only call */}
            <Button
              asChild
              size="icon"
              className="inline-flex lg:hidden rounded-full bg-brand-dark hover:bg-brand"
            >
              <a href="tel:+97143522933">
                <PhoneCall className="h-4 w-4" />
              </a>
            </Button>

            {/* <ThemeToggle /> */}

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden rounded-full"
              onClick={openMobile}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Bottom row: desktop nav */}
        <div className="mt-3 hidden xl:block">
          <nav className="flex items-center justify-center gap-2 rounded-full bg-white/80 border border-sky-100 px-2 py-1 overflow-x-auto">
            {navItems.map((item) => {
              const active = pathname === item.href;
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
