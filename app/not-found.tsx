"use client";
import Link from "next/link";
import { RiHome6Line, RiArrowRightLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Error Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <RiHome6Line size={24} className="text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back to your dashboard.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/dashboard"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <RiArrowRightLine size={16} />
              </Link>

              <Link
                href="/"
                className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors inline-block"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
