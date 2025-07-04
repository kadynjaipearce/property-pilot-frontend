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
      "rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-lavender)] cursor-pointer disabled:cursor-not-allowed flex items-center justify-center";
    switch (variant) {
      case "hero":
      case "final":
        return {
          form: "flex gap-3",
          input:
            "flex-1 h-12 text-base bg-white border border-[var(--color-border)] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] rounded-full focus:ring-2 focus:ring-[var(--color-accent-lavender)] focus:border-[var(--color-accent-lavender)] transition-all px-5",
          button: `${baseButton} w-48 h-12 button-accent`,
          count: "text-sm text-[var(--color-text-muted)] mt-3",
        };
      case "footer":
        return {
          form: "flex gap-3 max-w-md",
          input:
            "flex-1 min-w-[220px] bg-white border-[var(--color-border)] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] h-12 shadow-sm rounded-full",
          button: `${baseButton} h-12 px-6 button-accent`,
          count: "text-xs text-[var(--color-text-muted)]",
        };
      case "demo":
        return {
          form: "flex gap-3 max-w-md mx-auto",
          input:
            "flex-1 h-12 text-base rounded-full border border-[var(--color-border)] px-5",
          button: `${baseButton} h-12 px-5 button-accent`,
          count: "text-sm text-[var(--color-text-muted)] mb-4",
        };
      default:
        return {
          form: "flex gap-3",
          input: "flex-1 rounded-full border border-[var(--color-border)] px-5",
          button: `${baseButton} button-accent`,
          count: "text-sm text-[var(--color-text-muted)]",
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
