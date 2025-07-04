"use client";

import { Button } from "./button";
import { Input } from "./input";
import { useWaitlist } from "@/hooks/use-waitlist";
import { RiArrowRightLine } from "@remixicon/react";

interface WaitlistFormProps {
  source?: string;
  className?: string;
  showCount?: boolean;
  variant?: "hero" | "footer" | "demo";
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
    switch (variant) {
      case "hero":
        return {
          form: "flex gap-3",
          input:
            "flex-1 h-14 text-lg bg-white/10 border border-white/20 text-white placeholder:text-indigo-100 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all px-4",
          button:
            "h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all",
          count: "text-sm text-indigo-200 mt-3",
        };
      case "footer":
        return {
          form: "flex gap-3 max-w-md",
          input:
            "flex-1 bg-white border-purple-200 text-indigo-900 placeholder:text-indigo-400 h-11 shadow-sm rounded-lg",
          button:
            "h-11 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg",
          count: "text-xs text-indigo-500",
        };
      case "demo":
        return {
          form: "flex gap-3 max-w-md mx-auto",
          input: "flex-1",
          button:
            "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
          count: "text-sm text-indigo-600 mb-4",
        };
      default:
        return {
          form: "flex gap-3",
          input: "flex-1",
          button:
            "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
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
        <Button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? (
            <span
              className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              aria-label="Loading"
            />
          ) : (
            <>
              {buttonText}
              {variant === "hero" && (
                <RiArrowRightLine size={16} className="ml-2" />
              )}
            </>
          )}
        </Button>
      </form>

      {showCount && !isLoading && (
        <p className={styles.count}>
          {signupCount > 0
            ? `${signupCount}+ Airbnb hosts ahead of you`
            : "Be the first to join the waitlist!"}
        </p>
      )}
    </div>
  );
}
