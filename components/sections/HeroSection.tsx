"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import DashboardPreview from "@/components/ui/dashboard-preview";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-bg-alt)] flex items-center justify-center min-h-[80vh] py-12"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundBeams className="w-full h-full" />
      </div>
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between justify-center gap-12 md:gap-12">
        {/* Left: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-secondary">
            Affordable Airbnb
            <br />
            <span className="block text-primary">Management Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-[var(--color-text-muted)] max-w-xl">
            Get the essential features you need to manage your Airbnb. Simple,
            user-friendly, and affordable for hosts everywhere.
          </p>
          <div className="w-full max-w-md">
            {/* Email input and CTA */}
            <WaitlistForm
              source="hero"
              variant="hero"
              placeholder="Your email address"
              buttonText="Join Waitlist"
              showCount={false}
            />
            <div className="mt-2 text-xs text-primary text-center md:text-left">
              Early users get beta access + launch pricing
            </div>
            <div className="mt-6 text-sm text-[var(--color-text-muted)] text-center md:text-left">
              Expected pricing:{" "}
              <span className="font-semibold text-secondary">
                $9–$19/month per property
              </span>
              . No contracts. Cancel anytime.
            </div>
          </div>
        </motion.div>
        {/* Right: Larger Image, No Border */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 relative">
          {/* Gradient blur underlay (hide on mobile) */}
          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-20 md:h-32 bg-gradient-to-r from-[#249ffb]/40 via-[#0e6ae0]/30 to-[#249ffb]/40 blur-2xl z-0" />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl flex items-center justify-center relative z-10"
          >
            <div className="relative w-full">
              <DashboardPreview />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
