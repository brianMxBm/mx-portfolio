import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
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
  console.log(timeClassName);
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
      className={twMerge('flex flex-col', className)}
      dateTime={new Date().toISOString()}
      role='timer'
      aria-live='polite'
      aria-label={`Current time in ${location}`}
    >
      <span
        className={twMerge(
          'font-sans text-3xl font-normal text-gray-600 lg:text-5xl',
          timeClassName
        )}
        aria-label='Current time'
      >
        {currentTime}
      </span>
      <span
        className={twMerge(
          'font-sans text-2xl font-normal text-gray-600 lg:text-4xl',
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
