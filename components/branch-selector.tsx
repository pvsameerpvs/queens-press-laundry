// src/components/branch-selector.tsx
"use client";

import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { branches, type Branch } from "@/lib/branches";
import { Button } from "@/components/ui/button";
import { BranchMapModal } from "./branch-map-modal";

interface BranchSelectorProps {
  compact?: boolean;
}

export function BranchSelector({ compact }: BranchSelectorProps) {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Quick Branch Selector
          </h2>
          {!compact && (
            <p className="text-sm text-slate-600 max-w-md">
              Choose the branch closest to you or call any branch to arrange
              pickup and delivery.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {branches.map((b) => (
            <div key={b.id} className="card-glass p-5 space-y-3">
              <div className="space-y-1">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {b.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600">{b.address}</p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="inline-flex items-center gap-2 text-slate-700">
                  <Phone className="h-4 w-4" />
                  <a
                    href={`tel:${b.phone}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {b.phoneDisplay}
                  </a>
                </div>

                <div className="inline-flex items-center gap-2 text-slate-700">
                  <MapPin className="h-4 w-4" />
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    type="button"
                    onClick={() => setActiveBranch(b)}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BranchMapModal
        branch={activeBranch}
        onClose={() => setActiveBranch(null)}
      />
    </>
  );
}

export function BranchDetails() {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  return (
    <>
      <div className="space-y-8">
        {branches.map((b) => (
          <section key={b.id} className="card-glass p-6 space-y-3">
            <h2 className="text-xl font-semibold">{b.fullTitle}</h2>
            <p className="text-sm text-slate-600">{b.address}</p>
            <p className="text-sm text-slate-600">
              Phone:{" "}
              <a
                href={`tel:${b.phone}`}
                className="underline-offset-2 hover:underline"
              >
                {b.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-slate-600">
              Opening hours: <strong>9:00 AM – 11:00 PM</strong>
            </p>
            <p className="text-sm text-slate-600">{b.note}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => setActiveBranch(b)}
              >
                <MapPin className="h-4 w-4 mr-2" />
                View on Map
              </Button>

              <Button
                asChild
                variant="ghost"
                size="sm"
                className="rounded-full text-slate-600"
              >
                <a href={b.mapUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </section>
        ))}
      </div>

      <BranchMapModal
        branch={activeBranch}
        onClose={() => setActiveBranch(null)}
      />
    </>
  );
}
