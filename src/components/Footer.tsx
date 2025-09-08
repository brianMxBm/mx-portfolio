import Marquee from 'react-fast-marquee';
import { LinkItem } from './primitive/LinkItem';
import { ArrowUpRight } from 'lucide-react';
import TimeDisplay from './TimeDisplay';

const navigationLinks = [
  { href: '/overview', label: 'Overview' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/brian-melgar-a10b3120a/',
    label: 'LinkedIn',
    ariaLabel: "Visit Brian's LinkedIn",
  },
  {
    href: 'https://www.instagram.com/officialmxp/',
    label: 'Instagram',
    ariaLabel: "Visit Brian's Instagram",
  },
  {
    href: 'https://github.com/brianMxBm',
    label: 'Github',
    ariaLabel: "Visit Brian's GitHub",
  },
  {
    href: 'https://x.com/officialmxp',
    label: 'Twitter',
    ariaLabel: "Visit Brian's Twitter",
  },
  {
    href: 'https://op.gg/lol/summoners/na/OfficialMx-NA1',
    label: 'League',
    ariaLabel: "Visit Brian's OPGG",
  },
];

const resourceLinks = [
  { label: 'Resume', ariaLabel: "Download Brian Melgar's Resume" },
  { label: 'Blog', ariaLabel: "Visit Brian's Blog" },
  { label: 'Tools', ariaLabel: "Visit Brian's Favorite Tools" },
  { label: 'Reads', ariaLabel: "Visit Brian's GoodReads" },
];

export default function Footer() {
  return (
    <footer>
      <Marquee speed={15} autoFill>
        <div className='bg-dark-900 py-1.5'>
          <p className='font-general text-beige-400 text-xl font-thin'>
            &lt;h1&gt; Brian Melgar | Developer Writer Teacher &lt;/h1&gt;
            &lt;h2&gt; Contact Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt; &lt;h1&gt; Brian A Melgar &lt;/h1&gt; &lt;h2&gt; Contact
            Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt; &lt;h1&gt; Brian A Melgar &lt;/h1&gt; &lt;h2&gt; Contact
            Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt;
          </p>
        </div>
      </Marquee>

      <div className='section-padding relative flex flex-col items-center justify-center'>
        <div className='grid w-full grid-cols-2 gap-x-10 text-base md:grid-cols-12'>
          {/* Navigation */}
          <div className='col-span-1 md:col-span-4'>
            <h3 className='text-olive-800 border-b-olive-400 pointer-events-none border-b-[1px] pb-2 font-sans text-xl font-normal'>
              Menu
            </h3>
            <ul className='flex flex-col items-start space-y-0 gap-y-1 leading-tight md:gap-y-0'>
              {navigationLinks.map(link => (
                <LinkItem
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  ariaLabel={`Go to ${link.label} page`}
                  target='_self'
                />
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div className='col-span-1 md:col-span-4'>
            <h3
              aria-label='Connect with Brian Melgar'
              className='text-olive-800 border-b-olive-400 pointer-events-none border-b-[1px] pb-2 font-sans text-xl font-normal'
            >
              Connect
            </h3>
            <ul className='flex flex-col space-y-0 gap-y-1 leading-tight md:gap-y-0'>
              {socialLinks.map(link => (
                <LinkItem
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  ariaLabel={link.ariaLabel}
                  icon={<ArrowUpRight size={15} className='text-olive-600' />}
                />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className='col-span-full pt-4 md:col-span-4 md:pt-0'>
            <h3 className='text-olive-800 border-b-olive-400 pointer-events-none border-b-[1px] pb-2 font-sans text-xl font-normal'>
              Resources
            </h3>
            <ul className='flex flex-col space-y-0 gap-y-1 leading-tight md:gap-y-0'>
              {resourceLinks.map(link => (
                <LinkItem
                  key={link.label}
                  href='#' // Add actual hrefs when ready
                  label={link.label}
                  ariaLabel={link.ariaLabel}
                  icon={<ArrowUpRight size={15} className='text-olive-600' />}
                />
              ))}
            </ul>
          </div>

          {/* Time Display*/}
          <div className='col-span-full pt-4 md:col-span-4 md:col-start-1'>
            <TimeDisplay
              locationClassName='text-olive-600 uppercase'
              timeZone={'America/Los_Angeles'}
              location={'Los Angeles, CA'}
            />
          </div>

          {/* Quote*/}
          <div className='col-span-full hidden pt-4 md:col-span-4 md:col-start-9 md:block'>
            <p className='text-olive-600 font-general text-fluid-xl font-thin uppercase'>
              */ embrace the banal /*
              <br />
              */ craft it into art /*
              <br />
            </p>
          </div>
        </div>

        <div className='flex w-full justify-between pt-2'>
          <span
            aria-label={`Copyright ${new Date().getFullYear()} Brian A Melgar`}
            className='text-fluid-md text-olive-800 font-general font-thin'
          >
            &copy; {new Date().getFullYear()} brian melgar / mx
          </span>
        </div>
      </div>
    </footer>
  );
}
