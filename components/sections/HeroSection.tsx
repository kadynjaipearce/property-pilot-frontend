"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-bg-alt)] flex items-center justify-center min-h-[80vh] py-12"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundBeams className="w-full h-full" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-12">
        {/* Left: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Affordable Airbnb
            <br />
            <span className="block text-[var(--color-accent-lavender)]">
              Management Made Simple
            </span>
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
            <div className="mt-2 text-xs text-[var(--color-accent-lavender)] text-center md:text-left">
              Early users get beta access + launch pricing
            </div>
            <div className="mt-6 text-sm text-[var(--color-text-muted)] text-center md:text-left">
              Expected pricing:{" "}
              <span className="font-semibold text-[var(--color-text-main)]">
                $9–$19/month per property
              </span>
              . No contracts. Cancel anytime.
            </div>
          </div>
        </motion.div>
        {/* Right: Placeholder Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 relative">
          {/* Gradient blur underlay (hide on mobile) */}
          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-16 md:h-24 bg-gradient-to-r from-[#ffd6a5]/60 via-[#b8c0ff]/40 to-[#ffd6a5]/60 blur-2xl rounded-full z-0" />
          <div className="w-full max-w-2xl flex items-center justify-center relative z-10">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/dashboard.png"
                alt="Dashboard showing Airbnb booking automation"
                width={760}
                height={380}
                className="object-cover rounded-2xl md:w-[760px] md:h-[380px] w-[120vw] h-[44vw] max-w-none mr-0 md:mr-0 -mr-12 md:ml-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
