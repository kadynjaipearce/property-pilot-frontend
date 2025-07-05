"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { useWaitlist } from "@/hooks/use-waitlist";
import {
  RiStarFill,
  RiUserLine,
  RiCalendarLine,
  RiMessage2Line,
  RiCheckLine,
  RiPlayFill,
} from "@remixicon/react";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

const WaitlistLanding = () => {
  const { signupCount, isLoading } = useWaitlist();
  const [videoOpen, setVideoOpen] = useState(false);

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

  const waitlistBenefits = [
    "Reduced monthly price",
    "Exclusive beta access before public launch",
    "Direct input on final features",
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      {/* Add smooth scroll behavior */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-[80vh] text-center relative bg-[var(--color-bg-alt)]"
      >
        <div className="max-w-2xl mx-auto px-4 py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Airbnb
            <br />
            <span className="block text-[var(--color-accent-lavender)]">
              Management is Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            Join thousands of Airbnb hosts getting early access to the platform
            that will revolutionise your rental business
          </p>
          <div className="max-w-md mx-auto w-full">
            <WaitlistForm source="hero" variant="hero" showCount={true} />
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-[var(--color-accent-peach)] text-[var(--color-text-main)] font-semibold text-sm">
            Exclusive Preview
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Sneak Peek: Airbnb Management Made Simple
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto">
            Watch how Property Pilot transforms Airbnb hosting with intelligent
            automation and revenue optimization
          </p>
          <div className="max-w-3xl mx-auto relative">
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
              >
                <div
                  className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto p-0 overflow-hidden flex flex-col video-modal-mobile"
                  style={{
                    maxHeight: "90vh",
                    width: "90vw",
                  }}
                >
                  {/* Close Button (always visible, square) */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-[var(--color-bg-alt)] rounded-lg flex items-center justify-center text-2xl text-[var(--color-text-main)] shadow hover:bg-[var(--color-bg-peach)] transition cursor-pointer border border-[var(--color-border)]"
                    onClick={() => setVideoOpen(false)}
                    aria-label="Close video"
                  >
                    ×
                  </button>
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
          </div>
          <div className="mt-8">
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
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="bg-[var(--color-bg-accent)]">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Coming Soon: Game-Changing Features
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Built specifically for serious Airbnb hosts who demand excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-lavender)] flex items-center justify-center mb-6">
                  <feature.icon size={32} color="var(--color-text-main)" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-[var(--color-accent-lavender)] font-semibold">
                  {feature.benefit}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Benefits */}
      <section id="waitlist-benefits" className="bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Join the Waitlist?</h2>
          <p className="text-xl text-[var(--color-text-muted)] mb-12">
            Early members get exclusive benefits and shape the future of
            Property Pilot
          </p>
          <div className="space-y-6 mb-12">
            {/* First and third benefits - side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)]">
                <RiCheckLine
                  size={24}
                  color="var(--color-accent-lavender)"
                  className="mr-4 flex-shrink-0"
                />
                <span className="text-[var(--color-text-main)] font-medium">
                  {waitlistBenefits[0]}
                </span>
              </div>
              <div className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)]">
                <RiCheckLine
                  size={24}
                  color="var(--color-accent-lavender)"
                  className="mr-4 flex-shrink-0"
                />
                <span className="text-[var(--color-text-main)] font-medium">
                  {waitlistBenefits[2]}
                </span>
              </div>
            </div>

            {/* Second benefit - full width (longest text) */}
            <div className="flex items-center p-6 bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)]">
              <RiCheckLine
                size={24}
                color="var(--color-accent-lavender)"
                className="mr-4 flex-shrink-0"
              />
              <span className="text-[var(--color-text-main)] font-medium">
                {waitlistBenefits[1]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[var(--color-bg-accent)]">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            {/* Connecting line for stepper */}

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
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
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center mb-4 shadow-[var(--color-shadow)] text-3xl font-bold text-[var(--color-text-main)]">
                2
              </div>
              <h3 className="text-lg font-semibold mb-1">
                We Parse & Automate
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
                We securely receive and parse your Airbnb emails, extracting
                booking and guest data to automate messaging, calendar updates,
                and more.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1 z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent-peach)] flex items-center justify-center mb-4 shadow-[var(--color-shadow)] text-3xl font-bold text-[var(--color-text-main)]">
                3
              </div>
              <h3 className="text-lg font-semibold mb-1">Enjoy Automation</h3>
              <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
                Sit back as Property Pilot handles guest messaging, reminders,
                and more—saving you hours every week and optimising your Airbnb
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="bg-[var(--color-bg)]">
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don&apos;t Miss the Launch
          </h2>
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
              <span>
                Join thousands of Airbnb hosts already on the waitlist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-white border-t border-[var(--color-border)] text-[var(--color-text-muted)] pt-12 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8 mt-8">
            {/* Brand Section */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-lavender)] flex items-center justify-center">
                <span className="text-[var(--color-text-main)] font-bold text-lg">
                  PP
                </span>
              </div>
              <span className="text-2xl font-bold text-[var(--color-text-main)]">
                Property Pilot
              </span>
            </div>
            <div className="text-base text-[var(--color-text-muted)]">
              The future of Airbnb management is here. Join thousands of Airbnb
              hosts revolutionizing their rental business.
            </div>
            <div className="w-full md:w-auto">
              <WaitlistForm
                source="footer"
                variant="footer"
                placeholder="Enter your email"
                buttonText="Subscribe"
                showCount={false}
              />
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] pt-6 text-center">
            <p className="text-sm">
              © 2025 Property Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistLanding;
