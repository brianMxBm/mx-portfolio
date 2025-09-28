import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


export const IntroAnimation = () => {
  const [isComplete, setIsComplete] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const verticalCutRef = useRef<HTMLDivElement>(null);
  const horizontalCutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (
      !overlayRef.current ||
      !verticalCutRef.current ||
      !horizontalCutRef.current
    )
      return;
    if (isComplete) return;

    const tl = gsap.timeline();

    timelineRef.current = tl;

    gsap.set([verticalCutRef.current, horizontalCutRef.current], {
      opacity: 0,
    });

    gsap.set(verticalCutRef.current, {
      width: 0,
      height: '100vh',
      left: '25%',
      top: 0,
      transformOrigin: 'left center',
    });

    gsap.set(horizontalCutRef.current, {
      width: '100vw',
      height: 0,
      left: 0,
      top: '75%',
      transformOrigin: 'center top',
    });

    tl.to(verticalCutRef.current, {
      opacity: 1,
      width: '12px',
      duration: 0.12,
      ease: 'power2.out',
    })
      .to(
        verticalCutRef.current,
        {
          width: '4px',
          duration: 0.15,
          ease: 'power2.inOut',
        },
        '-=0.05'
      )

      .to(
        horizontalCutRef.current,
        {
          opacity: 1,
          height: '12px',
          duration: 0.15,
          ease: 'power2.out',
        },
        '-=0.1'
      )

      .to(
        horizontalCutRef.current,
        {
          height: '4px',
          duration: 0.15,
          ease: 'power2.inOut',
        },
        '-=0.05'
      )

      .to({}, { duration: 0.3 })

      .to(verticalCutRef.current, {
        width: '180px',
        duration: 0.5,
        ease: 'power3.out',
      })
      .to(
        horizontalCutRef.current,
        {
          height: '100px',
          duration: 0.5,
          ease: 'power3.out',
        },
        '<'
      )

      .to(verticalCutRef.current, {
        width: '100vw',
        left: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(
        horizontalCutRef.current,
        {
          height: '100vh',
          top: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<'
      )

      .call(() => {
        gsap.set(overlayRef.current, { backgroundColor: '#ffffff' });
      })

      .to([verticalCutRef.current, horizontalCutRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })

      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setIsComplete(true);
        },
      });
  }, []);

  return (
    <div className='aria-hidden pointer-events-none fixed inset-0 z-50'>
      <div
        ref={overlayRef}
        className='absolute inset-0 bg-black'
        style={{ willChange: 'opacity, backgroundColor' }}
      />
      <div
        ref={verticalCutRef}
        className='absolute bg-white shadow-[0_0_25px_rgba(255,255,255,1)]'
        style={{ willChange: 'width, left, opacity' }}
      />
      <div
        ref={horizontalCutRef}
        className='absolute bg-white shadow-[0_0_25px_rgba(255,255,255,1)]'
        style={{ willChange: 'height, top, opacity' }}
      />
    </div>
  );
};
