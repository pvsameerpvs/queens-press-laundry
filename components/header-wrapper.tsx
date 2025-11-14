"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { MobileHeader } from "@/components/mobile-header";

export function HeaderWrapper() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current) return;
      const h = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--app-header-height",
        `${h}px`
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
      >
        <SiteHeader openMobile={() => setOpen(true)} />
      </div>

      <MobileHeader isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
