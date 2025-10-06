"use client"
import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex h-[10vh] w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-emerald-900 to-black">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="text-green-400 transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}

