import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge<'fluid-typography'>({
  extend: {
    classGroups: {
      'font-size': [
        'text-fluid-xs',
        'text-fluid-sm',
        'text-fluid-base',
        'text-fluid-lg',
        'text-fluid-xl',
        'text-fluid-2xl',
        'text-fluid-3xl',
        'text-fluid-4xl',
        'text-fluid-5xl',
        'text-fluid-6xl',
      ],
    },
  },
});

export default customTwMerge;

//@SEE: Tailwind 4 doesn't auto-generate these utilities. I need to define them to get the fluid typography to work for some reason..?
