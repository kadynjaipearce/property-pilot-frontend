"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RiMailLine, RiUserAddLine, RiRocketLine } from "@remixicon/react";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--color-bg-accent)] overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-12 text-center"
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center flex-1 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-lavender)] flex items-center justify-center mb-4 shadow-[var(--color-shadow)] text-3xl font-bold text-[var(--color-text-main)]">
              1
            </div>
            <h3 className="text-lg font-semibold mb-1">
              Configure Email Integration
            </h3>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
              Set up email forwarding rules or configure your Airbnb contact
              email to use our dedicated Property Pilot address.
            </p>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center flex-1 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center mb-4 shadow-[var(--color-shadow)] text-3xl font-bold text-[var(--color-text-main)]">
              2
            </div>
            <h3 className="text-lg font-semibold mb-1">We Parse & Automate</h3>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
              We securely receive and parse your Airbnb emails, extracting
              booking and guest data to automate messaging, calendar updates,
              and more.
            </p>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center flex-1 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-peach)] flex items-center justify-center mb-4 shadow-[var(--color-shadow)] text-3xl font-bold text-[var(--color-text-main)]">
              3
            </div>
            <h3 className="text-lg font-semibold mb-1">Enjoy Automation</h3>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
              Sit back as Property Pilot handles guest messaging, reminders, and
              more—saving you hours every week and optimising your Airbnb
              operations across Australia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
