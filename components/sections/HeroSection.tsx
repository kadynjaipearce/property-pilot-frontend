"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[80vh] text-center relative bg-[var(--color-bg-alt)]"
    >
      <BackgroundBeams className="absolute inset-0 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto px-4 py-24 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Affordable Airbnb
          <br />
          <span className="block text-[var(--color-accent-lavender)]">
            Management Made Simple
          </span>
        </h1>
        <p className="text-xl md:text-xl mb-8 text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
          Get the core features you need to manage your Airbnb properties
          without the premium price tag. Join hosts saving money while
          streamlining their operations.
        </p>
        <div className="max-w-md mx-auto w-full">
          <WaitlistForm source="hero" variant="hero" showCount={true} />
        </div>
      </motion.div>
    </section>
  );
}
