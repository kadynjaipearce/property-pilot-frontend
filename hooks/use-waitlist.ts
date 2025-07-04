import { useState, useEffect } from "react";
import { toast } from "sonner";

interface WaitlistResponse {
  success?: boolean;
  error?: string;
  duplicate?: boolean;
  count?: number;
}

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupCount, setSignupCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial count
  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const response = await fetch("/api/waitlist/count");
      const data = await response.json();

      if (response.ok) {
        setSignupCount(data.count || 0);
      }
    } catch (error) {
      console.error("Failed to fetch count:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitEmail = async (source: string = "website") => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const data: WaitlistResponse = await response.json();

      if (response.ok && data.success) {
        // Optimistic update
        setSignupCount((prev) => prev + 1);
        setEmail("");
        toast.success(
          "🎉 You're on the waitlist! We'll notify you when we launch."
        );
      } else if (response.status === 409 && data.duplicate) {
        toast.error("📧 You're already on our waitlist!");
      } else {
        toast.error("😕 Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast.error("😕 Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    isSubmitting,
    signupCount,
    isLoading,
    submitEmail,
    validateEmail,
  };
}
