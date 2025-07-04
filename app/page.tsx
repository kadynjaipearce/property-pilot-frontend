"use client";

import React from "react";
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
    "50% off first year (Early Bird Special)",
    "Exclusive beta access before public launch",
    "Free onboarding and setup",
    "Direct input on final features",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Add smooth scroll behavior */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] w-full">
          <div className="max-w-2xl mx-auto p-4 w-full z-10 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-purple-200 via-pink-200 to-indigo-400 text-center"
            >
              The Future of Airbnb
              <br />
              <span className="block text-purple-100">Management is Here</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-6 text-indigo-100 max-w-3xl mx-auto leading-relaxed text-center"
            >
              Join thousands of Airbnb hosts getting early access to the
              platform that will revolutionise your rental business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="max-w-md mx-auto w-full"
            >
              <WaitlistForm source="hero" variant="hero" showCount={true} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
              className="text-sm text-indigo-200 mt-4 text-center"
            >
              No spam, launch updates only
            </motion.p>
          </div>
          <BackgroundBeams />
        </div>
      </section>

      {/* Demo Video Section */}
      <section
        id="demo"
        className="py-20 bg-gradient-to-br from-white to-indigo-50"
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 border border-purple-200">
            Exclusive Preview
          </Badge>

          <h2 className="text-4xl font-bold mb-6 text-indigo-900">
            Sneak Peek: Airbnb Management Made Simple
          </h2>

          <p className="text-xl text-indigo-600 mb-12 max-w-2xl mx-auto">
            Watch how Property Pilot transforms Airbnb hosting with intelligent
            automation and revenue optimization
          </p>

          {/* Video Player Mockup */}
          <div className="max-w-4xl mx-auto relative">
            <div className="aspect-video bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <Button className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/20 h-20 w-20 rounded-full">
                <RiPlayFill size={32} className="ml-1" />
              </Button>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-80">
                  Exclusive preview for waitlist members
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-indigo-600 mb-4">
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
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">
              Coming Soon: Game-Changing Features
            </h2>
            <p className="text-xl text-indigo-600 max-w-2xl mx-auto">
              Built specifically for serious Airbnb hosts who demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={32} color="#7c3aed" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-900">
                    {feature.title}
                  </h3>
                  <p className="text-indigo-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-purple-700 font-semibold">
                    {feature.benefit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Benefits */}
      <section
        id="waitlist-benefits"
        className="py-20 bg-gradient-to-br from-white to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">
              Why Join the Waitlist?
            </h2>
            <p className="text-xl text-indigo-600 mb-12">
              Early members get exclusive benefits and shape the future of
              Property Pilot
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {waitlistBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                >
                  <RiCheckLine
                    size={24}
                    color="#7c3aed"
                    className="mr-4 flex-shrink-0"
                  />
                  <span className="text-indigo-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Pricing Section (modern redesign) */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-900"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 mb-16">
            {/* How It Works Stepper */}
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-8 text-indigo-900 text-center md:text-left">
                How It Works
              </h2>
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8 gap-8 md:gap-0">
                {/* Step 1 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    Forward Airbnb Emails
                  </h3>
                  <p className="text-indigo-700 text-sm">
                    Set up Airbnb to auto-forward booking, inquiry, and guest
                    emails to your unique Property Pilot address.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    We Parse & Automate
                  </h3>
                  <p className="text-indigo-700 text-sm">
                    We securely receive and parse your Airbnb emails, extracting
                    booking and guest data to automate messaging, calendar
                    updates, and more.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    Enjoy Automation
                  </h3>
                  <p className="text-indigo-700 text-sm">
                    Sit back as Property Pilot handles guest messaging,
                    reminders, and more—saving you hours every week and
                    optimising your Airbnb operations.
                  </p>
                </div>
              </div>
            </div>
            {/* Pricing Card */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className="bg-white/90 rounded-3xl shadow-2xl border-4 border-transparent bg-clip-padding p-10 max-w-sm w-full relative flex flex-col items-center"
                style={{
                  borderImage:
                    "linear-gradient(135deg, #a21caf, #db2777, #7c3aed, #f472b6) 1",
                }}
              >
                <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold tracking-wide uppercase shadow">
                  Waitlist Special
                </span>
                <span className="text-5xl font-extrabold text-purple-700 mb-2">
                  $12.99
                </span>
                <span className="text-indigo-700 text-base mb-4">
                  per property per month
                </span>
                <p className="text-indigo-500 text-sm text-center mb-2">
                  Lock in this exclusive rate by joining the waitlist. Pricing
                  will increase after launch.
                </p>
                <p className="text-indigo-400 text-xs text-center">
                  Final pricing may depend on features and volume. Early
                  adopters get the best rates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don&apos;t Miss the Launch
          </h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-2xl mx-auto">
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
            <div className="flex items-center justify-center mt-6 text-sm text-purple-200">
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
        className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-indigo-900 pt-20 pb-12 border-t border-purple-200"
      >
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Brand & Newsletter */}
            <div className="space-y-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="text-2xl font-bold text-indigo-900">
                    Property Pilot
                  </span>
                </div>
                <p className="text-lg text-indigo-700 max-w-md leading-relaxed">
                  The future of Airbnb management is here. Join thousands of
                  Airbnb hosts revolutionizing their rental business.
                </p>
              </div>

              {/* Newsletter Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-indigo-600 text-sm">
                    Get early access and exclusive updates about Property Pilot
                  </p>
                </div>
                <WaitlistForm
                  source="footer"
                  variant="footer"
                  placeholder="Enter your email"
                  buttonText="Subscribe"
                  showCount={false}
                />
                <p className="text-xs text-indigo-500">
                  Join thousands of Airbnb hosts already on the waitlist
                </p>
              </div>
            </div>

            {/* Right Column - Links & Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-indigo-900">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link
                    href="#features"
                    className="block text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    Features
                  </Link>
                  <Link
                    href="#demo"
                    className="block text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    Demo
                  </Link>
                  <Link
                    href="#waitlist-benefits"
                    className="block text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    Benefits
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="block text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    How It Works
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-indigo-900">
                  Community
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <RiUserLine size={20} color="#7c3aed" />
                    </div>
                    <p className="text-2xl font-bold text-indigo-900 text-center">
                      {isLoading ? "..." : `${signupCount}+`}
                    </p>
                    <p className="text-sm text-indigo-600 text-center">
                      Airbnb Hosts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-200 pt-8">
            <div className="text-center">
              <p className="text-sm text-indigo-600">
                © 2025 Property Pilot. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistLanding;
