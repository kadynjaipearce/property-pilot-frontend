"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { RiUserLine } from "@remixicon/react";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="bg-[var(--color-bg)]"
      aria-labelledby="final-cta-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto px-4 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Don&apos;t Miss the Launch</h2>
        <p className="text-xl mb-12 text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Be among the first to transform your Airbnb business with Property
          Pilot
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm
            source="final"
            variant="final"
            placeholder="Enter your email address"
            buttonText="Reserve Spot"
            showCount={false}
          />
          <div className="flex items-center justify-center mt-6 text-sm text-[var(--color-accent-lavender)]">
            <RiUserLine size={16} className="mr-2" />
            <span>Join Australian Airbnb hosts already on the waitlist</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
