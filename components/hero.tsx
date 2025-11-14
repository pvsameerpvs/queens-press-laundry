"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "@/public/hero.png";

export function Hero() {
  return (
    <section
      className="bg-[#D7F3F3] border-b border-sky-100 flex items-center"
      style={{
        minHeight: "calc(100vh - var(--app-header-height, 0px))",
      }}
    >
      <div className="container py-14 md:py-20 grid md:grid-cols-[1fr,1fr] gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Dubai’s Trusted Dry Cleaning &{" "}
            <span className="text-brand-dark block">Laundry Service</span>
          </h1>

          <p className="text-slate-700 text-base md:text-lg max-w-lg">
            Fast, reliable and professional garment care with free pickup &
            delivery in selected areas across the city.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-dark hover:bg-brand shadow-soft"
            >
              <a href="tel:+97143522933">Call Now</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-white/80 backdrop-blur hover:bg-white"
            >
              <a href="/pickup-delivery">Book Pickup</a>
            </Button>
          </div>

          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-dark pt-4">
            Bur Dubai • Jumeirah 1 • Port Rashid
          </p>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full flex justify-center overflow-hidden"
        >
          <div
            className="
    w-[75%] md:w-[60%]
    absolute bottom-0
    bg-[#7DB7A5]
    shadow-lg
    z-0
  "
            style={{
              height: "90%", // overall height (left full)
              clipPath: "polygon(0% 0%, 100% 45%, 100% 100%, 0% 100%)",
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
            }}
          ></div>

          <Image
            src={hero}
            alt="Laundry Hero Image"
            priority
            className="
              relative z-10
              object-contain
              h-[260px] w-auto
              sm:h-[320px]
              md:h-auto md:w-[120%]
              max-w-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
