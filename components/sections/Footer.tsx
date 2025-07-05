"use client";

import { WaitlistForm } from "@/components/ui/waitlist-form";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-[var(--color-border)] text-[var(--color-text-muted)] pt-12 pb-8 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8 mt-8">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent-lavender)] flex items-center justify-center">
              <span className="text-[var(--color-text-main)] font-bold text-lg">
                PP
              </span>
            </div>
            <span className="text-2xl font-bold text-[var(--color-text-main)]">
              Property Pilot
            </span>
          </div>
          <div className="text-base text-[var(--color-text-muted)]">
            The future of Airbnb management is here. Join other Airbnb hosts
            revolutionising their rental business.
          </div>
          <div className="w-full md:w-auto max-w-full">
            <WaitlistForm
              source="footer"
              variant="footer"
              placeholder="Enter your email"
              buttonText="Subscribe"
              showCount={false}
              className="w-full max-w-full"
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
