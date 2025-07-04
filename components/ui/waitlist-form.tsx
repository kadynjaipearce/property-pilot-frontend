"use client";

import { Button } from "./button";
import { Input } from "./input";
import { useWaitlist } from "@/hooks/use-waitlist";
import { RiArrowRightLine } from "@remixicon/react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  source?: string;
  className?: string;
  showCount?: boolean;
  variant?: "hero" | "footer" | "demo" | "final";
  placeholder?: string;
  buttonText?: string;
}

export function WaitlistForm({
  source = "website",
  className = "",
  showCount = true,
  variant = "hero",
  placeholder = "Enter your email address",
  buttonText = "Join Waitlist",
}: WaitlistFormProps) {
  const { email, setEmail, isSubmitting, signupCount, isLoading, submitEmail } =
    useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(source);
  };

  const getVariantStyles = () => {
    const baseButton =
      "rounded-lg font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center";
    switch (variant) {
      case "hero":
      case "final":
        return {
          form: "flex gap-3",
          input:
            "flex-1 h-11 text-base bg-white/10 border border-white/20 text-white placeholder:text-indigo-100 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all px-4",
          button: `${baseButton} w-48 h-11 bg-white text-purple-700 border border-purple-200 text-sm font-semibold tracking-wide px-6 py-2`,
          count: "text-sm text-indigo-200 mt-3",
        };
      case "footer":
        return {
          form: "flex gap-3 max-w-md",
          input:
            "flex-1 min-w-[220px] bg-white border-purple-200 text-indigo-900 placeholder:text-indigo-400 h-11 shadow-sm rounded-lg",
          button: `${baseButton} h-11 px-6 bg-purple-700 text-white text-base`,
          count: "text-xs text-indigo-500",
        };
      case "demo":
        return {
          form: "flex gap-3 max-w-md mx-auto",
          input: "flex-1 h-11 text-base",
          button: `${baseButton} h-11 px-5 bg-purple-700 text-white text-base`,
          count: "text-sm text-indigo-600 mb-4",
        };
      default:
        return {
          form: "flex gap-3",
          input: "flex-1",
          button: `${baseButton} bg-purple-700 text-white`,
          count: "text-sm text-indigo-600",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
          disabled={isSubmitting}
        />
        {variant === "hero" || variant === "final" ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
            aria-label={buttonText}
          >
            <span className="flex items-center justify-center w-full whitespace-nowrap">
              <span>{buttonText}</span>
              <span className="ml-2 flex items-center">
                {isSubmitting ? (
                  <span
                    className="inline-block w-5 h-5 border-2 border-purple-700 border-t-transparent rounded-full animate-spin align-middle"
                    aria-label="Loading"
                  />
                ) : (
                  <RiArrowRightLine size={22} />
                )}
              </span>
            </span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {isSubmitting ? (
              <span
                className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-label="Loading"
              />
            ) : (
              <>
                {buttonText}
                {variant === "demo" && (
                  <RiArrowRightLine size={16} className="ml-2" />
                )}
              </>
            )}
          </button>
        )}
      </form>

      {variant === "hero" && showCount && !isLoading && (
        <p className="text-xs text-indigo-200 mt-6 text-center w-full">
          {signupCount > 0
            ? `${signupCount}+ Airbnb hosts ahead of you • No spam, launch updates only`
            : "Be the first to join the waitlist!"}
        </p>
      )}
      {variant !== "hero" && showCount && !isLoading && (
        <p className={styles.count + " text-center w-full"}>
          {signupCount > 0
            ? `${signupCount}+ Airbnb hosts ahead of you`
            : "Be the first to join the waitlist!"}
        </p>
      )}
    </div>
  );
}
