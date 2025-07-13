"use client";

import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export default function NavbarComponent() {
  const navigationLinks = [
    { name: "Home", href: "#hero" },
    { name: "Demo", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#waitlist-benefits" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <span className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Property Pilot Logo"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold text-secondary tracking-tight">
                  Property Pilot
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[var(--color-text-muted)] hover:text-secondary font-medium transition-colors px-2 py-1 rounded-full cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop & Mobile */}
          <div>
            <Link href="#demo" onClick={(e) => handleClick(e, "#demo")}>
              <Button className="button px-6 py-2 text-base font-semibold shadow-none cursor-pointer">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
