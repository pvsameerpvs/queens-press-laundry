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
            <div
              key={b.id}
              className="p-0 rounded-2xl border border-slate-200 bg-[#D7F3F3] shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              {/* LEFT SIDE — CONTENT */}
              <div className="flex-1 p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {b.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600">{b.address}</p>

                <div className="flex flex-col gap-2 text-sm">
                  {/* PHONE */}
                  <div className="inline-flex items-center gap-2 text-slate-700">
                    <Phone className="h-4 w-4" />
                    <a
                      href={`tel:${b.phone}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {b.phoneDisplay}
                    </a>
                  </div>

                  {/* MAP BUTTON */}
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

              {/* RIGHT SIDE — IMAGE (mobile: bottom, full width) */}
              <div className="w-full sm:w-32 h-32 sm:h-auto">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                    No Image
                  </div>
                )}
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

/* --------------------------------------
   BRANCH DETAILS (image RIGHT SIDE)
-------------------------------------- */

export function BranchDetails() {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  return (
    <>
      <div className="space-y-8">
        {branches.map((b) => (
          <section
            key={b.id}
            className="rounded-2xl border border-slate-200 bg-[#D7F3F3] shadow-sm overflow-hidden flex flex-col sm:flex-row"
          >
            {/* LEFT — TEXT */}
            <div className="flex-1 p-6 space-y-3">
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

              {b.note && <p className="text-sm text-slate-600">{b.note}</p>}

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
            </div>

            {/* RIGHT — IMAGE (mobile: bottom) */}
            <div className="w-full sm:w-40 h-40 sm:h-auto">
              {b.image ? (
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                  No Image
                </div>
              )}
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
