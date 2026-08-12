"use client";

import { profileData } from "@/data/profile";
import { BentoCard } from "./BentoGrid";

export default function BentoAboutCard() {
  return (
    <BentoCard
      id="about"
      span="col-span-1 md:col-span-2 lg:col-span-4"
      gradient="from-aurora-blue/20 to-aurora-cyan/20"
      className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <div className="space-y-4 sm:space-y-6 md:space-y-8 h-full flex flex-col justify-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-aurora-blue group-hover:via-aurora-purple group-hover:to-aurora-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            About
          </h2>
          <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan rounded-full group-hover:w-12 sm:group-hover:w-20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-aurora-cyan/50" />
        </div>

        <div className="space-y-3 sm:space-y-5 text-neutral-300 text-xs sm:text-base lg:text-lg leading-relaxed">
          {profileData.about.map((paragraph, index) => (
            <p
              key={index}
              className="opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:text-neutral-200"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
