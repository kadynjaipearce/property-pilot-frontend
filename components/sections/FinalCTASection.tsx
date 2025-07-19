"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { RiUserLine } from "@remixicon/react";
import { useWaitlist } from "@/hooks/use-waitlist";

export default function FinalCTASection() {
  const { signupCount, isLoading } = useWaitlist();

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
          {/* Custom count display */}
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <RiUserLine size={18} className="text-primary" />
              <p className="text-sm text-primary font-medium">
                {!isLoading && signupCount >= 10 ? (
                  <>
                    <span className="font-bold">
                      {signupCount.toLocaleString()}
                    </span>{" "}
                    Australian Airbnb hosts already on the waitlist
                  </>
                ) : (
                  "Be the first to join the waitlist!"
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
