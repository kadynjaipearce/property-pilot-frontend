"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  RiMailLine,
  RiStarFill,
  RiTimeLine,
  RiUserLine,
  RiCalendarLine,
  RiMessage2Line,
  RiRidingLine,
  RiShieldCheckLine,
  RiCheckLine,
  RiArrowRightLine,
  RiPlayFill,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";
import "./globals.css";

const WaitlistLanding = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent, source: string) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Welcome to the waitlist! 🎉");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

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

  const navigationLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Add smooth scroll behavior */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Property
            <br />
            <span className="text-purple-300">Management is Coming</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Join 2,847+ property managers getting early access to the platform
            that will revolutionize your Airbnb empire
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 text-lg bg-white/10 border border-white/20 text-white placeholder:text-indigo-100 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all px-4"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span
                    className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    aria-label="Loading"
                  />
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
            <p className="text-sm text-indigo-200 mt-3">
              No spam, launch updates only • 2,847 managers ahead of you
            </p>
          </div>
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
            Sneak Peek: Property Pilot in Action
          </h2>

          <p className="text-xl text-indigo-600 mb-12 max-w-2xl mx-auto">
            Watch how Property Pilot transforms property management with
            intelligent automation and data-driven insights
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
            <form
              onSubmit={(e) => handleEmailSubmit(e, "demo")}
              className="flex gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Watch Demo
              </Button>
            </form>
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
              Built specifically for serious property managers who demand
              excellence
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

      {/* Social Proof (Testimonials) */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Trusted by Property Professionals
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                "Finally, a platform built by property managers, for property
                managers. Can't wait for the launch!"
              </p>
              <p className="text-indigo-900 font-semibold">Sarah Chen</p>
              <p className="text-indigo-600 text-sm">
                12 Properties • Beta Tester
              </p>
            </div>

            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                "The automation features alone will save me 15+ hours every
                week. This is the future."
              </p>
              <p className="text-indigo-900 font-semibold">Marcus Rodriguez</p>
              <p className="text-indigo-600 text-sm">
                25 Properties • Beta Tester
              </p>
            </div>

            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                "Property Pilot understands the challenges we face. Every
                feature solves a real problem."
              </p>
              <p className="text-indigo-900 font-semibold">Jennifer Walsh</p>
              <p className="text-indigo-600 text-sm">
                8 Properties • Beta Tester
              </p>
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
          <h2 className="text-4xl font-bold mb-6">Don't Miss the Launch</h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-2xl mx-auto">
            Be among the first to transform your property business with Property
            Pilot
          </p>

          <div className="max-w-md mx-auto">
            <form
              onSubmit={(e) => handleEmailSubmit(e, "final")}
              className="flex gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-indigo-200 rounded-lg"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg"
              >
                Reserve Spot
                <RiArrowRightLine size={16} className="ml-2" />
              </Button>
            </form>
            <div className="flex items-center justify-center mt-6 text-sm text-purple-200">
              <RiUserLine size={16} className="mr-2" />
              <span>2,847 property managers already joined</span>
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
                  The future of property management is coming. Join thousands of
                  property managers revolutionizing their rental business.
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
                <form
                  onSubmit={(e) => handleEmailSubmit(e, "footer")}
                  className="flex gap-3 max-w-md"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border-purple-200 text-indigo-900 placeholder:text-indigo-400 h-11 shadow-sm rounded-lg"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-indigo-500">
                  Join 2,847+ property managers already on the waitlist
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
                    href="#testimonials"
                    className="block text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    Testimonials
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-indigo-900">
                  Community
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <RiUserLine size={16} color="#7c3aed" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-900">
                        2,847+
                      </p>
                      <p className="text-sm text-indigo-600">
                        Property Managers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <RiStarFill size={16} color="#ec4899" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-900">5.0</p>
                      <p className="text-sm text-indigo-600">Average Rating</p>
                    </div>
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
