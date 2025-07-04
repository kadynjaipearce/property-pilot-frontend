"use client";

import { Button } from "./button";

export default function NavbarComponent() {
  const navigationLinks = [
    { name: "Home", href: "#hero" },
    { name: "Demo", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#waitlist-benefits" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-accent-lavender)] flex items-center justify-center">
              <span className="text-[var(--color-text-main)] font-bold text-lg">
                PP
              </span>
            </div>
            <span className="text-xl font-bold text-[var(--color-text-main)] tracking-tight">
              Property Pilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] font-medium transition-colors px-2 py-1 rounded-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop & Mobile */}
          <div>
            <Button className="button px-6 py-2 text-base font-semibold shadow-none">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
