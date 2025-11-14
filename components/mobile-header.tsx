"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { PhoneCall } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Prices" },
  { href: "/branches", label: "Branches" },
  { href: "/pickup-delivery", label: "Pickup & Delivery" },
  { href: "/about", label: "About Us" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export function MobileHeader({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="pt-12 space-y-6">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-slate-800 text-base font-medium"
              onClick={() => onClose(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          asChild
          className="w-full rounded-full bg-brand-dark hover:bg-brand text-white flex items-center justify-center gap-2"
        >
          <a href="tel:+97143522933">
            <PhoneCall className="h-5 w-5" />
            Call Bur Dubai
          </a>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
