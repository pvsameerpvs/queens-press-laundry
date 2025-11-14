// src/components/branch-map-modal.tsx
"use client";

import { MapPin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Branch } from "@/lib/branches";

interface BranchMapModalProps {
  branch: Branch | null;
  onClose: () => void;
}

export function BranchMapModal({ branch, onClose }: BranchMapModalProps) {
  if (!branch) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
    >
      {/* Prevent closing when clicking inside card */}
      <div
        className="
          w-full max-w-3xl max-h-[90vh]
          rounded-3xl bg-white shadow-2xl
          overflow-hidden flex flex-col
          border border-slate-100
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative top strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-4 py-3 md:px-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Branch Location
              </p>
            </div>
            <h3 className="text-base md:text-lg font-semibold">
              {branch.fullTitle ?? branch.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              {branch.address}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 transition"
            aria-label="Close map"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body (scrollable content) */}
        <div className="flex-1 overflow-auto px-4 pb-4 md:px-6 md:pb-6 space-y-4">
          {/* Map container */}
          <div className="w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
            <iframe
              title={branch.fullTitle ?? branch.title}
              src={branch.mapUrl}
              className="w-full h-[260px] md:h-[340px] lg:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info & actions */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-slate-700">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${branch.phone}`}
                  className="font-medium underline-offset-2 hover:underline"
                >
                  {branch.phoneDisplay}
                </a>
              </div>
              <p className="text-slate-600">
                Opening hours:{" "}
                <strong className="font-semibold">9:00 AM – 11:00 PM</strong>
              </p>
              {branch.note && (
                <p className="text-xs md:text-sm text-slate-500">
                  {branch.note}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <Button
                asChild
                size="sm"
                className="rounded-full"
                variant="outline"
              >
                <a href={branch.mapUrl} target="_blank" rel="noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>

              <Button
                size="sm"
                className="rounded-full bg-sky-600 bg-brand-dark hover:bg-brand text-white"
                onClick={() => {
                  window.location.href = `tel:${branch.phone}`;
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Branch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
