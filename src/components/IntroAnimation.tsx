import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isComplete, setIsComplete] = useState(false);
  
  // Refs for the animation elements
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure all refs are available
    if (!topHalfRef.current || !bottomHalfRef.current) {
      return;
    }

    // Set initial states using GSAP for better performance
    gsap.set([topHalfRef.current, bottomHalfRef.current], { 
      x: 0,
      y: 0,
      willChange: 'transform'
    });

    // Create the main timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Clean up after animation
        setIsComplete(true);
        onComplete?.();
      }
    });

    // Animation sequence - top slides left, bottom slides right
    tl.delay(1.0) // Initial delay
    .to(topHalfRef.current, {
      x: '-100%',
      duration: 1.2,
      ease: "power3.inOut"
    })
    .to(bottomHalfRef.current, {
      x: '100%',
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=1.2"); // Start at the same time as top half

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  // Don't render anything after animation completes
  if (isComplete) return null;

  return (
    <>
      {/* Top half - slides left */}
      <div 
        ref={topHalfRef}
        className="fixed top-0 left-0 w-full bg-black pointer-events-none"
        style={{ 
          zIndex: 9999,
          height: '50vh'
        }}
      />
      
      {/* Bottom half - slides right */}
      <div 
        ref={bottomHalfRef}
        className="fixed bottom-0 left-0 w-full bg-black pointer-events-none"
        style={{ 
          zIndex: 9999,
          height: '50vh'
        }}
      />
    </>
  );
};

export default IntroAnimation;
