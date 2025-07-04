"use client";

import { Button } from "./button";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

export default function NavbarComponent() {
  const navigationLinks = [
    { name: "Home", href: "#hero" },
    { name: "Demo", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#waitlist-benefits" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-indigo-900">
              Property Pilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-indigo-600 hover:text-purple-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop & Mobile */}
          <div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg text-sm px-4 py-2">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
