"use client";

import { Button } from "./button";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

export default function NavbarComponent() {
  const navigationLinks = [
    { name: "Home", href: "#hero" },
    { name: "Demo", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#waitlist-benefits" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-slate-900">
              Property Pilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? (
              <RiCloseLine size={20} />
            ) : (
              <RiMenuLine size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
