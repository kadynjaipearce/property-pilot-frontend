import { useState, useEffect } from "react";

interface VideoConfig {
  youtube_video_id?: string;
}

export function useConfig() {
  const [config, setConfig] = useState<VideoConfig>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/config");
      const data = await response.json();

      if (response.ok) {
        setConfig(data);
      } else {
        setError(data.error || "Failed to fetch video config");
      }
    } catch (err) {
      setError("Failed to fetch video config");
      console.error("Video config fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    config,
    isLoading,
    error,
    refetch: fetchConfig,
  };
}
