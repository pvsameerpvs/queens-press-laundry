"use client";

import { useMemo, useState } from "react";
import { pricingItems } from "@/lib/pricing";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createWhatsappUrl } from "@/lib/whatsapp";
import { branches } from "@/lib/branches";
import { Send } from "lucide-react";

interface WhatsappOrderSectionProps {
  highlight?: boolean;
}

export function WhatsappOrderSection({ highlight }: WhatsappOrderSectionProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [area, setArea] = useState("");
  const [branchId, setBranchId] = useState<string>("bur-dubai");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const total = useMemo(
    () =>
      pricingItems.reduce((sum, item) => {
        const qty = quantities[item.id] ?? 0;
        return sum + qty * item.price;
      }, 0),
    [quantities]
  );

  const updateQuantity = (id: string, value: string) => {
    const qty = Number(value.replace(/\D/g, "")) || 0;
    setQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  const incrementQuantity = (id: string) => {
    setQuantities((prev) => {
      const current = prev[id] ?? 0;
      return { ...prev, [id]: current + 1 };
    });
  };

  const decrementQuantity = (id: string) => {
    setQuantities((prev) => {
      const current = prev[id] ?? 0;
      const next = Math.max(0, current - 1);
      return { ...prev, [id]: next };
    });
  };

  const handleSend = () => {
    const branch = branches.find((b) => b.id === branchId) ?? branches[0];
    const url = createWhatsappUrl({
      branch,
      name,
      mobile,
      area,
      address,
      notes,
      total,
      items: pricingItems.map((item) => ({
        item,
        quantity: quantities[item.id] ?? 0,
      })),
    });

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  // Main container styles
  const containerClass = highlight
    ? "bg-white rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-brand/25"
    : "bg-white rounded-2xl p-6 md:p-8 shadow-sm";

  return (
    <section className="space-y-5 md:space-y-6">
      {/* Heading + total */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Book Pickup on WhatsApp
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Fill in your details and a rough count of items. When you click
            &quot;Send on WhatsApp&quot;, we&apos;ll open a chat with all
            details pre-filled so you can confirm with our team.
          </p>
        </div>

        {/* 🔹 Sticky on mobile, normal on desktop */}
        <div
          className="
            card-glass px-5 py-3 flex items-center gap-3 justify-between md:justify-end min-w-[220px]
            sticky top-0 z-30 bg-white/95 backdrop-blur md:static md:bg-transparent
          "
        >
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wide text-slate-500">
              Estimated Total
            </span>
            <span className="text-xl md:text-2xl font-semibold text-brand-dark">
              AED {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left: customer details */}
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                Your Details
              </p>
              <p className="text-xs text-slate-500">
                We&apos;ll share these with our rider for smooth pickup.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  placeholder="05xxxxxxxx"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="area">Area / Community</Label>
                <Input
                  id="area"
                  placeholder="Bur Dubai, Karama, Jumeirah 1..."
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Preferred Branch</Label>
                <Select value={branchId} onValueChange={setBranchId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((b) => (
                      <SelectItem key={b.id} value={b.id}>
                        {b.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="address">Pickup Address</Label>
              <Textarea
                id="address"
                placeholder="Building name, flat number, landmark..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any stains, delicate fabrics or timing notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          {/* Right: items + CTA */}
          <div className="space-y-5">
            {/* Header with mobile total on the right */}
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Items for Estimate
                </p>
                <p className="text-[11px] text-slate-500">
                  Tap a card to add 1 item, or adjust using - / +.
                </p>
              </div>

              {/* MOBILE PRICE (right side) */}
              <div className="md:hidden text-right">
                <span className="block text-[10px] uppercase text-slate-500">
                  Total
                </span>
                <span className="text-lg font-semibold text-brand-dark leading-none">
                  AED {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Items list */}
            <div className="max-h-80 overflow-y-auto pr-1 py-4 px-1">
              <div className="grid grid-cols-1 gap-3">
                {pricingItems.map((item) => {
                  const qty = quantities[item.id] ?? 0;
                  const isActive = qty > 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() => incrementQuantity(item.id)}
                      className={`card-glass relative flex flex-col justify-between rounded-xl border px-3 py-2.5 text-xs cursor-pointer transition-all hover:shadow-md hover:-translate-y-[1px]
                        ${
                          isActive
                            ? "border-brand/70 ring-1 ring-brand/60 bg-white"
                            : "border-slate-200/70 bg-white/70"
                        }`}
                    >
                      <div className="space-y-1.5">
                        <div className="line-clamp-2 text-[13px] font-semibold text-slate-900">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {item.category}
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-medium text-brand-dark">
                          AED {item.price.toFixed(2)}
                        </span>

                        {/* - qty + controls */}
                        <div
                          className="flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            className="h-7 w-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-[12px]">
                            {qty}
                          </span>
                          <button
                            type="button"
                            className="h-7 w-7 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {isActive && (
                        <span className="pointer-events-none absolute -top-1.5 -right-1.5 rounded-full bg-brand text-[10px] font-semibold text-white px-2 py-0.5 shadow-sm">
                          x{qty}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <Button
                type="button"
                className="w-full rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center gap-2"
                size="lg"
                onClick={handleSend}
              >
                <Send className="h-4 w-4" />
                Send on WhatsApp
              </Button>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                By clicking send we&apos;ll open WhatsApp with your order
                details. You can review and edit everything before sending to
                our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
