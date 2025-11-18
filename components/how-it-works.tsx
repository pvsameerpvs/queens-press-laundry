"use client";
import { useState } from "react";
import { Phone, WashingMachine, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Schedule Pickup",
    text: "Call us, WhatsApp or book online with your preferred time slot.",
    image: "/shedule2.jpg",
  },
  {
    icon: WashingMachine,
    title: "We Clean with Care",
    text: "Items are tagged, cleaned and pressed according to fabric type.",
    image: "/shedule4.jpg",
  },
  {
    icon: Sparkles,
    title: "Quality Check",
    text: "Every piece is inspected and carefully packed for delivery.",
    image: "/shedule1.jpg",
  },
  {
    icon: Truck,
    title: "Delivery to Your Door",
    text: "We deliver your order back, ready to wear or neatly folded.",
    image: "/shedule3.JPG",
  },
];

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="space-y-6 ">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
        How It Works
      </h2>

      {/* MOBILE STEPPER (rounded pills, scrollable) */}
      <div className="w-full md:hidden">
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const Icon = step.icon;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap border transition-all ${
                  isActive
                    ? "bg-[#5ea9a1] text-white border-[#5ea9a1]"
                    : "bg-white text-[#4b7a74] border-[#c4e3df]"
                }`}
              >
                <span className="h-6 w-6 rounded-full bg-[#e5f4f2] flex items-center justify-center text-[11px] text-[#2f605b]">
                  {index + 1}
                </span>
                <Icon className="h-3.5 w-3.5 opacity-80" />
                <span className="truncate max-w-[120px]">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP STEPPER (your original UI, unchanged) */}
      <div className="w-full overflow-hidden hidden md:block">
        <div className="flex">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = index < activeIndex;
            const isActive = index === activeIndex;

            const base =
              "relative flex-1 flex items-center justify-center h-10 md:h-12 px-3 md:px-4 text-[11px] md:text-sm font-medium cursor-pointer transition-all duration-200";

            const stateClasses = isActive
              ? "bg-[#5ea9a1] text-white"
              : isCompleted
              ? "bg-[#3a7f77] text-white"
              : "bg-[#f3fbfa] text-[#7b9e99] hover:bg-[#e5f4f2]";

            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            const shape = isFirst
              ? "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)"
              : isLast
              ? "polygon(5% 0, 100% 0, 100% 100%, 5% 100%, 0 50%)"
              : "polygon(5% 0, 100% 0, 95% 50%, 100% 100%, 5% 100%, 0 50%)";

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${base} ${stateClasses}`}
                style={{ clipPath: shape }}
              >
                <span className="hidden md:inline mr-1.5 opacity-80">
                  Step {stepNumber}
                </span>
                <span className="truncate">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT + IMAGE FOR ACTIVE STEP */}
      <div className="card-glass p-5 md:p-6 flex flex-col md:flex-row gap-5 items-stretch">
        {/* Left: image */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-[#c4e3df] bg-[#f3fbfa] h-full">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: text/content */}
        <div className="md:w-1/2 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#e5f4f2] text-[#2f605b] flex items-center justify-center text-sm font-semibold">
              {activeIndex + 1}
            </div>
            <div className="flex items-center gap-2">
              <ActiveIcon className="h-5 w-5 text-[#5ea9a1]" />
              <h3 className="font-semibold text-base md:text-lg">
                {activeStep.title}
              </h3>
            </div>
          </div>
          <p className="text-sm md:text-base text-slate-600">
            {activeStep.text}
          </p>
        </div>
      </div>
    </section>
  );
}
