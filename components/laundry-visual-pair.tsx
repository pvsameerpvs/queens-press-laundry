"use client";

import Image from "next/image";
import ironingMan from "@/public/service.jpg";
import foldedJeans from "@/public/3.png";

export function LaundryVisualPair() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
        {/* LEFT SHAPE */}
        <div
          className="
            relative
            w-40 h-56             /* ⭐ mobile */
            sm:w-44 sm:h-60       /* ⭐ small screens */
            md:w-52 md:h-72       /* ⭐ tablet: smaller */
            lg:w-64 lg:h-80       /* ⭐ desktop: big */
            rounded-[40px] md:rounded-[45px]
            overflow-hidden shadow-lg bg-slate-100
            md:-translate-y-14 lg:-translate-y-20
          "
        >
          <Image
            src={ironingMan}
            alt="Person ironing clothes"
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* MOBILE straight line */}
        <svg className="block md:hidden w-4 h-20 my-4" viewBox="0 0 10 100">
          <line
            x1="5"
            y1="0"
            x2="5"
            y2="100"
            stroke="#5ea9a1"
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
        </svg>

        {/* DESKTOP curved arrow */}
        <svg
          className="
    hidden md:block
    absolute
    left-[60%]
    -translate-x-1/2
    top-1
    -translate-y-1/2
    w-46 h-28
    lg:w-44 lg:h-28
    rotate-[30deg]   /* ⭐ more right rotation */
  "
          viewBox="0 0 200 100"
        >
          <path
            d="M10 80 C 60 0, 140 0, 190 80"
            fill="none"
            stroke="#5ea9a1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* RIGHT SHAPE */}
        <div
          className="
            relative
            w-40 h-56
            sm:w-44 sm:h-60
            md:w-52 md:h-72
            lg:w-64 lg:h-80
            rounded-[40px] md:rounded-[45px]
            bg-[#B9E3DE]
            shadow-lg
            flex items-center justify-center
            overflow-hidden
            md:translate-y-14 lg:translate-y-20
          "
        >
          <Image
            src={foldedJeans}
            alt="Stack of folded clothes"
            className="
              object-contain
              h-auto
              w-44 md:w-56 lg:w-72   /* ⭐ responsive image sizes */
              translate-x-3 md:translate-x-5 lg:translate-x-7
            "
          />
        </div>
      </div>
    </div>
  );
}
