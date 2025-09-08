import { useCallback, useEffect, useState } from 'react';
import customTwMerge from '../utils/twMerge';
interface TimeDisplayProps {
  timeZone: string;
  location: string;
  updateInterval?: number;
  className?: string;
  timeClassName?: string;
  locationClassName?: string;
}

const TimeDisplay = ({
  timeZone = 'America/Los_Angeles',
  location = 'LOS ANGELES, CA, USA',
  updateInterval = 60000,
  className,
  timeClassName,
  locationClassName,
}: TimeDisplayProps) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  const updateTime = useCallback(() => {
    try {
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());

      setCurrentTime(timeString);
    } catch (error) {
      console.error('Error formatting time:', error);
      setCurrentTime('');
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

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [updateTime, updateInterval]);

  return (
    <time
      className={customTwMerge('flex flex-col gap-y-2', className)}
      dateTime={new Date().toISOString()}
      role='timer'
      aria-live='polite'
      aria-label={`Current time in ${location}`}
    >
      <span
        className={customTwMerge(
          'text-olive-700 text-fluid-2xl font-general leading-none font-normal',
          timeClassName
        )}
        aria-label='Current time'
      >
        {currentTime}
      </span>

      <span
        className={customTwMerge(
          'text-fluid-xl font-sans leading-none font-normal text-gray-700',
          locationClassName
        )}
        aria-label='Location'
      >
        {location}
      </span>
    </time>
  );
};

export default TimeDisplay;
