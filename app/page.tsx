"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import {
  RiStarFill,
  RiUserLine,
  RiCalendarLine,
  RiMessage2Line,
  RiCheckLine,
  RiPlayFill,
} from "@remixicon/react";
import "./globals.css";

const WaitlistLanding = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Airbnb
            <br />
            <span className="text-purple-300">Management is Here</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Airbnb hosts getting early access to the platform
            that will revolutionize your rental business
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm source="hero" variant="hero" showCount={true} />
            <p className="text-sm text-indigo-200 mt-3">
              No spam, launch updates only
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

      {/* Social Proof (Testimonials) */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Airbnb Hosts</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                &ldquo;Finally, a platform built by Airbnb hosts, for Airbnb
                hosts. Can&apos;t wait for the launch!&rdquo;
              </p>
              <p className="text-indigo-900 font-semibold">Sarah Chen</p>
              <p className="text-indigo-600 text-sm">
                12 Airbnb Listings • Beta Tester
              </p>
            </div>

            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                &ldquo;The automation features alone will save me 15+ hours
                every week. This is the future of Airbnb hosting.&rdquo;
              </p>
              <p className="text-indigo-900 font-semibold">Marcus Rodriguez</p>
              <p className="text-indigo-600 text-sm">
                25 Airbnb Listings • Beta Tester
              </p>
            </div>

            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={20} color="#f59e0b" />
                ))}
              </div>
              <p className="text-indigo-900 mb-4 italic">
                &ldquo;Property Pilot understands the challenges Airbnb hosts
                face. Every feature solves a real problem.&rdquo;
              </p>
              <p className="text-indigo-900 font-semibold">Jennifer Walsh</p>
              <p className="text-indigo-600 text-sm">
                8 Airbnb Listings • Beta Tester
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
              variant="hero"
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
                      <p className="text-sm text-indigo-600">Airbnb Hosts</p>
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
