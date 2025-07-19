"use client";

import { motion } from "framer-motion";
import { RiCheckLine } from "@remixicon/react";

const waitlistBenefits = [
  "Reduced monthly price",
  "Exclusive beta access before public launch",
  "Direct input on final features",
];

export default function WaitlistBenefitsSection() {
  return (
    <section
      id="waitlist-benefits"
      className="bg-[var(--color-bg)] overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold mb-6"
        >
          Why Join the Waitlist?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-xl text-[var(--color-text-muted)] mb-12"
        >
          Early members get exclusive benefits and shape the future of Property
          Pilot
        </motion.p>
        {/* First and third benefits - side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)] text-left"
          >
            <RiCheckLine
              size={24}
              color="var(--primary)"
              className="mr-4 flex-shrink-0"
            />
            <span className="text-secondary font-medium">
              {waitlistBenefits[0]}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)] text-left"
          >
            <RiCheckLine
              size={24}
              color="var(--primary)"
              className="mr-4 flex-shrink-0"
            />
            <span className="text-secondary font-medium">
              {waitlistBenefits[2]}
            </span>
          </motion.div>
        </div>
        {/* Second benefit - full width (longest text) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)] text-left"
        >
          <RiCheckLine
            size={24}
            color="var(--primary)"
            className="mr-4 flex-shrink-0"
          />
          <span className="text-secondary font-medium">
            {waitlistBenefits[1]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
