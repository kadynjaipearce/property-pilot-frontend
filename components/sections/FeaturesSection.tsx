"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RiMessage2Line, RiCalendarLine, RiStarFill } from "@remixicon/react";

const features = [
  {
    icon: RiMessage2Line,
    title: "Smart Email Automation",
    description:
      "Automatically send check-in instructions, house rules, and checkout reminders",
    benefit: "Never miss a guest touchpoint again",
  },
  {
    icon: RiCalendarLine,
    title: "Revenue-Optimized Calendar",
    description:
      "See all bookings, track profits, and get AI-powered pricing suggestions for holidays and peak seasons",
    benefit: "Maximize revenue with data-driven insights",
  },
  {
    icon: RiStarFill,
    title: "Review Collection & Management",
    description:
      "Automatically collect and manage guest reviews across all platforms",
    benefit: "Turn every stay into a 5-star review",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[var(--color-bg-accent)] overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Essential Features for Airbnb Hosts
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Built specifically for serious Airbnb hosts who demand excellence
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <Card className="flex flex-col h-full min-h-[420px]">
                <div className="flex flex-col flex-1 items-center text-center justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-lavender)] flex items-center justify-center mb-6 mx-auto">
                      <feature.icon size={32} color="var(--color-text-main)" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <p className="text-[var(--color-accent-lavender)] font-semibold mt-auto">
                    {feature.benefit}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
