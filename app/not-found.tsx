"use client";
import Link from "next/link";
import { RiErrorWarningLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary via-[#b8c0ff]/30 to-white px-2 overflow-hidden">
      <div
        className="relative flex flex-col items-center gap-8 p-6 sm:p-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-[var(--color-border)] max-w-lg w-full"
        style={{ maxHeight: "90vh" }}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg">
          <RiErrorWarningLine size={40} className="text-secondary" />
        </div>
        <div className="pt-8 w-full flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-primary drop-shadow-lg mb-2">
            404
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-secondary mb-2">
            Page Not Found
          </p>
          <p className="text-base text-[var(--color-text-muted)] mb-6 text-center max-w-xs">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            moved. Let&apos;s get you back on track.
          </p>
          <Link href="/" className="btn">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
