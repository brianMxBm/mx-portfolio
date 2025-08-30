import { useCallback, useEffect, useState } from "react";

interface TimeDisplayProps {
  timeZone: string;
  location: string;
  updateInterval?: number;
  className?: string;
}

const TimeDisplay = ({
  timeZone = "America/Los_Angeles",
  location = "LOS ANGELES, CA, USA",
  updateInterval = 60000,
  className,
}: TimeDisplayProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const updateTime = useCallback(() => {
    try {
      const timeString = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setCurrentTime(timeString);
    } catch (error) {
      console.error("Error formatting time:", error);
      setCurrentTime("");
    }
  }, [timeZone]);

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(updateTime, updateInterval);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateTime();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateTime, updateInterval]);

  return (
    <time
      className={`flex flex-col ${className}`}
      dateTime={new Date().toISOString()}
      role="timer"
      aria-live="polite"
      aria-label={`Current time in ${location}`}
    >
      <span
        className="lg:text-5xl text-3xl font-sans font-normal text-gray-800"
        aria-label="Current time"
      >
        {currentTime}
      </span>
      <span
        className="lg:text-4xl text-2xl font-sans font-normal text-gray-600"
        aria-label="Location"
      >
        {location}
      </span>
    </time>
  );
};

export default TimeDisplay;
