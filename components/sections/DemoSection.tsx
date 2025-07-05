"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { RiPlayFill, RiCloseLine, RiArrowRightLine } from "@remixicon/react";

export default function DemoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="demo"
      className="bg-[var(--color-bg)]"
      aria-labelledby="demo-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 py-20 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-[var(--color-accent-peach)] text-[var(--color-text-main)] font-semibold text-sm"
        >
          Exclusive Preview
        </motion.span>
        <motion.h2
          id="demo-heading"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-6"
        >
          Sneak Peek: Airbnb Management Made Simple
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto"
        >
          Watch how Property Pilot transforms Airbnb hosting with intelligent
          automation and revenue optimisation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="aspect-video bg-[var(--color-bg-peach)] rounded-2xl shadow-[var(--color-shadow)] flex items-center justify-center relative overflow-hidden">
            <Button
              className="button-accent relative z-10 h-16 w-36 rounded-xl flex items-center justify-center text-xl px-0 cursor-pointer"
              onClick={() => setVideoOpen(true)}
              aria-label="Play demo video"
            >
              <RiPlayFill size={32} />
            </Button>
            <div className="absolute bottom-6 left-6 text-[var(--color-text-main)] opacity-70 text-sm">
              Exclusive preview for waitlist members
            </div>
          </div>
          {/* Video Modal */}
          {videoOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              style={{ animation: "fadeIn 0.2s" }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setVideoOpen(false);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setVideoOpen(false);
                }
              }}
              tabIndex={-1}
            >
              <div
                className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto p-0 overflow-hidden flex flex-col video-modal-mobile"
                style={{
                  maxHeight: "90vh",
                  width: "90vw",
                }}
              >
                {/* Close Button (always visible, square) */}
                <Button
                  className="absolute top-4 right-4 rounded-none flex items-center justify-center cursor-pointer z-10 button-accent"
                  onClick={() => setVideoOpen(false)}
                  aria-label="Close video"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setVideoOpen(false);
                    }
                  }}
                >
                  <RiCloseLine size={24} />
                </Button>
                {/* 16:9 Aspect Ratio Wrapper */}
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    src="/demo.mp4"
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-2xl bg-black"
                    style={{ background: "#000" }}
                  />
                </div>
              </div>
              <style>{`
                @media (max-width: 768px) {
                  .video-modal-mobile {
                    width: 100vw !important;
                    height: 100vh !important;
                    max-width: 100vw !important;
                    max-height: 100vh !important;
                    border-radius: 0 !important;
                  }
                }
              `}</style>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="text-[var(--color-text-muted)] mb-4">
            Enter email to watch full demo
          </p>
          <WaitlistForm
            source="demo"
            variant="demo"
            placeholder="Your email address"
            buttonText="Watch Demo"
            showCount={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
