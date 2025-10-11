import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const brianRef = useRef(null);
  const alexanderRef = useRef(null);
  const melgarRef = useRef(null);

  useEffect(() => {
    // Get all character groups
    const brianChars = brianRef.current.querySelectorAll('.char');
    const alexChars = alexanderRef.current.querySelectorAll('.char');
    const melgarChars = melgarRef.current.querySelectorAll('.char');

    // Alexander breakdown
    const xChar = alexChars[3]; // "X"
    const aleChars = Array.from(alexChars).slice(0, 3); // A, L, E
    const anderChars = Array.from(alexChars).slice(4); // A, N, D, E, R

    // Build timeline
    const tl = gsap.timeline();

    // 1. Animate "Brian"
    tl.fromTo(
      brianChars,
      { y: '115%' },
      { y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 }
    )

      // 2. Animate "X" (in Alexander)
      .fromTo(
        xChar,
        { y: '115%' },
        { y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3' // slight overlap for rhythm
      )

      // 3. Animate "Melgar"
      .fromTo(
        melgarChars,
        { y: '115%' },
        { y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 }
      )

      .fromTo(
        aleChars,
        { y: '115%' },
        { y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.05 }
      )
      .fromTo(
        anderChars,
        { y: '115%' },
        { y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.05 },
        '<' // ⬅️ Start at same time as Ale animation
      );
  }, []);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center justify-center'
    >
      <div className='relative'>
        {/* BRIAN */}
        <h1
          ref={brianRef}
          className='font-rethink text-fluid-8xl flex w-fit items-center overflow-hidden leading-none font-medium text-black'
        >
          {['B', 'R', 'I', 'A', 'N'].map((char, i) => (
            <span
              key={i}
              className='char'
              style={{ display: 'inline-block', transform: 'translateY(115%)' }}
            >
              {char}
            </span>
          ))}
        </h1>

        <h1
          ref={alexanderRef}
          className='font-rethink text-fluid-8xl flex w-fit items-center overflow-hidden leading-none font-medium whitespace-nowrap text-black sm:ml-[10%]'
        >
          {['A', 'L', 'E', 'X', 'A', 'N', 'D', 'E', 'R'].map((char, i) => (
            <span
              key={i}
              className='char'
              style={{ display: 'inline-block', transform: 'translateY(115%)' }}
            >
              {char}
            </span>
          ))}
        </h1>

        <h1
          ref={melgarRef}
          className='font-rethink text-fluid-8xl relative flex w-fit flex-row items-center overflow-hidden leading-none font-medium text-black'
        >
          {['M', 'E', 'L', 'G', 'A', 'R'].map((char, i) => (
            <span
              key={i}
              className='char'
              style={{ display: 'inline-block', transform: 'translateY(115%)' }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Side Nav (unchanged) */}
      <div className='absolute top-0 left-8 grid h-full grid-rows-2 py-8'>
        <div className='flex flex-col items-center gap-5 uppercase'>
          <div className='font-general rotate-180 text-xs font-light tracking-widest [writing-mode:vertical-lr]'>
            teacher
          </div>
          <div className='h-px w-2 bg-black'></div>
          <div className='font-general rotate-180 text-xs font-normal tracking-widest [writing-mode:vertical-lr]'>
            dev
          </div>
          <div className='h-px w-2 bg-black'></div>
          <div className='font-general rotate-180 text-xs font-light tracking-widest [writing-mode:vertical-lr]'>
            writer
          </div>
        </div>

        <div className='flex flex-col items-center gap-5 uppercase'>
          <div className='text-l font-general rotate-180 font-light tracking-widest [writing-mode:vertical-lr]'>
            absurd
          </div>
          <div className='text-l font-general rotate-180 font-light tracking-widest [writing-mode:vertical-lr]'>
            the
          </div>
          <div className='text-l font-general rotate-180 font-light tracking-widest [writing-mode:vertical-lr]'>
            code
          </div>
        </div>
      </div>
    </section>
  );
}
