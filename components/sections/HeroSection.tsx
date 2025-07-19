"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useWaitlist } from "@/hooks/use-waitlist";
import { RiRidingLine, RiStarLine } from "@remixicon/react";
import DemoPreview from "../ui/demo-preview";

export default function HeroSection() {
  const { signupCount, isLoading } = useWaitlist();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 grid lg:grid-cols-2 gap-40 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg">
            <RiRidingLine className="w-4 h-4" />
            <span>Australia's Most Affordable Airbnb Management</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Manage Your
              <span className="text-primary"> Airbnb</span>
              <br />
              Properties
              <span className="text-secondary"> Affordably</span>
            </h1>

            <p className="text-md text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Essential Airbnb management tools starting at just $15/month. No
              contracts, no hidden fees. Everything you need to maximize revenue
              and streamline operations.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="flex items-center gap-6 p-4 bg-white rounded-sm shadow-lg border border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <RiStarLine className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-black">From $15/month</span>
            </div>
            <div className="h-6 w-px bg-[var(--color-border)]"></div>
            <span className="text-[var(--color-text-muted)]">Per property</span>
            <div className="h-6 w-px bg-[var(--color-border)]"></div>
            <span className="text-green-600 font-medium">No contracts</span>
          </div>

          {/* Waitlist Form */}
          <div className="w-full max-w-md">
            <WaitlistForm
              source="hero"
              variant="hero"
              placeholder="Your email address"
              buttonText="Join Waitlist"
              showCount={false}
            />
            <div className="mt-2 text-xs text-primary">
              Early users get beta access + launch pricing
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Setup in minutes</span>
            </div>
          </div>

          {/* Custom count display */}
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-sm">
            <p className="text-sm text-primary font-medium text-center">
              {!isLoading && signupCount >= 10 ? (
                <>
                  <span className="font-bold">
                    {signupCount.toLocaleString()}
                  </span>{" "}
                  Australian Airbnb hosts ahead of you
                </>
              ) : (
                "Be the first to join the waitlist!"
              )}
            </p>
          </div>
        </motion.div>

        {/* Right Column - Stats/Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Dashboard Preview Background */}
          <div className="absolute inset-0 z-0 opacity-40 -top-40">
            <DemoPreview />
          </div>

          {/* Floating Cards */}
          <div className="relative z-10">
            {/* Main Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[var(--color-border)]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary">
                    Property Performance
                  </h3>
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    +23% Revenue
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--color-bg-alt)] rounded-sm">
                    <div className="text-2xl font-bold text-green-600">
                      $2,847
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      This Month
                    </div>
                  </div>
                  <div className="p-4 bg-[var(--color-bg-alt)] rounded-sm">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      Occupancy
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">
                      Automated Messages
                    </span>
                    <span className="text-green-600 font-medium">156 sent</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">
                      Price Optimizations
                    </span>
                    <span className="text-green-600 font-medium">
                      23 this week
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">
                      Tasks Completed
                    </span>
                    <span className="text-green-600 font-medium">12/12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cost Comparison */}
            <div className="absolute -top-6 -right-6 bg-primary text-white px-4 py-3 rounded-[4px] shadow-lg transform rotate-3">
              <div className="text-center">
                <div className="text-sm font-medium">Save up to</div>
                <div className="text-2xl font-bold">62%</div>
                <div className="text-xs">vs Hostaway & Guestly</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
