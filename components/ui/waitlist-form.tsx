"use client";

import { Button } from "./button";
import { Input } from "./input";
import { useWaitlist } from "@/hooks/use-waitlist";
import { RiArrowRightLine } from "@remixicon/react";

interface WaitlistFormProps {
  source?: string;
  className?: string;
  showCount?: boolean;
  variant?: "hero" | "footer" | "demo" | "final";
  placeholder?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

export function WaitlistForm({
  source = "website",
  className = "",
  showCount = true,
  variant = "hero",
  placeholder = "Enter your email address",
  buttonText = "Join Waitlist",
  onSuccess,
}: WaitlistFormProps) {
  const {
    email,
    setEmail,
    isSubmitting,
    signupCount,
    isLoading,
    submitEmail,
    validateEmail,
  } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(source);
    if (onSuccess && validateEmail(email)) {
      onSuccess();
    }
  };

  const getVariantStyles = () => {
    const baseButton =
      "font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-lavender)] cursor-pointer disabled:cursor-not-allowed flex items-center justify-center text-white leading-tight py-0.5";
    switch (variant) {
      case "hero":
      case "final":
        return {
          form: "flex flex-col sm:flex-row gap-3 w-full",
          input:
            "flex-1 w-full sm:w-auto h-12 text-base bg-white border border-[var(--color-border)] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent-lavender)] focus:border-[var(--color-accent-lavender)] transition-all px-5",
          button: `${baseButton} w-full sm:w-48 h-12 mt-2 sm:mt-0`,
          count: "text-sm text-[var(--color-text-muted)] mt-3",
        };
      case "footer":
        return {
          form: "flex flex-col sm:flex-row gap-3 w-full max-w-md",
          input:
            "flex-1 w-full sm:w-auto min-w-0 bg-white border-[var(--color-border)] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] h-12 shadow-sm",
          button: `${baseButton} w-full sm:w-auto h-12 px-6 mt-2 sm:mt-0`,
          count: "text-xs text-[var(--color-text-muted)]",
        };
      case "demo":
        return {
          form: "flex gap-3 max-w-md mx-auto",
          input:
            "flex-1 h-12 text-base border border-[var(--color-border)] px-5",
          button: `${baseButton} h-12 px-5`,
          count: "text-sm text-[var(--color-text-muted)] mb-4",
        };
      default:
        return {
          form: "flex gap-3",
          input: "flex-1 border border-[var(--color-border)] px-5",
          button: `${baseButton}`,
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
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
            aria-label={buttonText}
          >
            <span className="flex items-center justify-center w-full whitespace-nowrap">
              <span>{buttonText}</span>
            </span>
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {buttonText}
            {variant === "demo" && (
              <RiArrowRightLine size={16} className="ml-2" />
            )}
          </Button>
        )}
      </form>

      {variant === "hero" && showCount && !isLoading && (
        <p className="text-xs text-gray-800 mt-6 text-center w-full">
          {signupCount > 0
            ? `${signupCount} Australian Airbnb hosts ahead of you • No spam, launch updates only`
            : "Be the first to join the waitlist!"}
        </p>
      )}
      {variant !== "hero" && showCount && !isLoading && (
        <p className={styles.count + " text-center w-full"}>
          {signupCount > 0
            ? `${signupCount} Australian Airbnb hosts ahead of you`
            : "Be the first to join the waitlist!"}
        </p>
      )}
    </div>
  );
}
