"use client";

import { useMemo, useState } from "react";
import { pricingItems, PricingItem } from "@/lib/pricing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export function CostCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const total = useMemo(
    () =>
      pricingItems.reduce((sum, item) => {
        const qty = quantities[item.id] ?? 0;
        return sum + qty * item.price;
      }, 0),
    [quantities]
  );

  const selectedItems = useMemo(
    () => pricingItems.filter((item) => (quantities[item.id] ?? 0) > 0),
    [quantities]
  );

  const updateQuantity = (item: PricingItem, qty: number) => {
    if (qty < 0) qty = 0;
    setQuantities((prev) => ({ ...prev, [item.id]: qty }));
  };

  const handleInput = (item: PricingItem, value: string) => {
    const qty = Number(value.replace(/\D/g, "")) || 0;
    updateQuantity(item, qty);
  };

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Quick Cost Calculator
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Add quantities for each item to estimate your bill. Final prices may
            change slightly after inspection.
          </p>
        </div>
        <div
          className="
            card-glass px-5 py-3 flex items-center gap-3
            sticky top-2 md:top-4 z-20
            bg-white/80 backdrop-blur
          "
        >
          <span className="text-sm text-slate-600">Estimated Total</span>
          <span className="text-2xl font-semibold text-brand-dark">
            AED {total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Selected items summary */}
      {selectedItems.length > 0 && (
        <div className="card-glass p-3 text-sm space-y-1">
          <div className="flex justify-between font-medium">
            <span>Your selection</span>
            <span className="text-slate-500">
              {selectedItems.length} item{selectedItems.length > 1 && "s"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedItems.map((item) => {
              const qty = quantities[item.id] ?? 0;
              return (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs bg-white/70"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-slate-500">× {qty}</span>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Items – scrollable area */}
      <div className="max-h-[420px] overflow-y-auto pr-1">
        <div className="grid md:grid-cols-2 gap-4">
          {pricingItems.map((item) => {
            const qty = quantities[item.id] ?? 0;

            return (
              <div
                key={item.id}
                className="card-glass p-4 flex items-center justify-between gap-4"
              >
                {/* Left: Item info */}
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.category}</div>
                  <div className="text-xs text-slate-600 mt-1">
                    From AED {item.price.toFixed(2)}
                  </div>
                </div>

                {/* Right: Qty input + buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={() => updateQuantity(item, qty - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <div className="w-16 text-center">
                    <Label htmlFor={item.id} className="sr-only">
                      Quantity
                    </Label>
                    <Input
                      id={item.id}
                      inputMode="numeric"
                      value={qty.toString()}
                      onChange={(e) => handleInput(item, e.target.value)}
                      className="h-9 text-center"
                      placeholder="0"
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={() => updateQuantity(item, qty + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
