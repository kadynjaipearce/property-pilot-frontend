"use client";

import { WaitlistForm } from "@/components/ui/waitlist-form";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-[var(--color-border)] text-[var(--color-text-muted)] pt-8 pb-4 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6 mb-6 mt-4">
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
              <Image
                src="/favblue.png"
                alt="Property Pilot Logo"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
              <span className="text-lg font-bold text-secondary">
                Property Pilot
              </span>
            </div>
            <div className="text-sm text-[var(--color-text-muted)] text-center md:text-left max-w-xs">
              The future of Airbnb management is here. Join other Airbnb hosts
              revolutionising their rental business.
            </div>
          </div>
          <div className="w-full md:w-auto max-w-full flex justify-center md:justify-end">
            <WaitlistForm
              source="footer"
              variant="footer"
              placeholder="Enter your email"
              buttonText="Join the Waitlist"
              showCount={false}
              className="w-full max-w-md hidden md:block"
            />
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] pt-6 text-center">
          <p className="text-sm">© 2025 Property Pilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
