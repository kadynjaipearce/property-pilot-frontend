"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { RiPlayFill, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import { useWaitlist } from "@/hooks/use-waitlist";
import DemoPreview from "@/components/ui/demo-preview";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
const CUSTOM_THUMBNAIL = "/demo-thumbnail.jpg";

export default function DemoSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { email, validateEmail } = useWaitlist();

  return (
    <section
      id="demo"
      className="bg-[var(--color-bg)] overflow-x-hidden"
      aria-labelledby="demo-heading"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 py-20 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-[var(--primary)] text-white font-semibold text-sm shadow-md"
        >
          Exclusive Preview
        </motion.span>
        <motion.h2
          id="demo-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-6"
        >
          Sneak Peek: Airbnb Management Made Simple
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto"
        >
          Watch how Property Pilot transforms Airbnb hosting with intelligent
          automation and revenue optimisation
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Only show the thumbnail and play button if email has been submitted */}
          {emailSubmitted ? (
            <div
              className="aspect-video bg-[var(--color-bg-peach)] rounded-2xl shadow-[var(--color-shadow)] flex items-center justify-center relative overflow-hidden group cursor-pointer"
              onClick={() => setVideoOpen(true)}
            >
              {/* Blurred DemoPreview as background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <div className="w-full h-full scale-105 blur-[3px]">
                  <DemoPreview />
                </div>
              </div>
              {/* Overlay content */}
              <Button
                className="button-accent relative z-10 h-16 w-36 rounded-xl flex items-center justify-center text-xl px-0 cursor-pointer group-hover:scale-105 transition-transform"
                aria-label="Play demo video"
              >
                <RiPlayFill size={32} />
              </Button>
              <div className="absolute bottom-6 left-6 text-secondary opacity-70 text-sm z-10">
                Exclusive preview for waitlist members
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-[var(--color-bg-peach)] rounded-2xl shadow-[var(--color-shadow)] flex items-center justify-center relative overflow-hidden group">
              {/* Blurred DemoPreview as background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <div className="w-full h-full scale-105 blur-[2px]">
                  <DemoPreview />
                </div>
              </div>
              <div className="z-10">
                <p className="text-lg font-semibold text-secondary mb-4">
                  Enter your email to watch the demo
                </p>
                <WaitlistForm
                  source="demo"
                  variant="demo"
                  placeholder="Your email address"
                  buttonText="Watch Demo"
                  showCount={false}
                  className="max-w-md mx-auto"
                  onSuccess={() => setEmailSubmitted(true)}
                />
              </div>
            </div>
          )}
          {/* Video Modal */}
          {videoOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
              style={{ animation: "fadeIn 0.2s" }}
            >
              {/* Responsive modal: fullscreen black on md and below, centered and max-w-3xl on larger screens */}
              <div
                className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto p-0 overflow-hidden flex flex-col aspect-video
                  md:bg-black md:rounded-none md:w-screen md:h-screen md:max-w-none md:max-h-none md:p-0 md:items-center md:justify-center md:aspect-auto
                  max-h-[90vh] w-[90vw]"
              >
                {/* Close Button (always visible, square) */}
                <Button
                  className="absolute top-4 right-4 button-accent rounded-lg flex items-center justify-center text-2xl text-secondary shadow hover:bg-[var(--color-bg-peach)] transition cursor-pointer border border-[var(--color-border)] z-10"
                  onClick={() => setVideoOpen(false)}
                  aria-label="Close video"
                >
                  <RiCloseLine size={24} />
                </Button>
                {/* Responsive iframe wrapper */}
                <div className="w-full h-full flex items-center justify-center">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                    title="Demo Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full bg-black border-0"
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
                    background: #000 !important;
                    position: fixed !important;
                    inset: 0 !important;
                  }
                }
              `}</style>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
