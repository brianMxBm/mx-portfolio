type LinkItemProps = {
  href: string;
  label: string;
  ariaLabel: string;
  target?: string;
  icon?: React.ReactNode;
};

export const LinkItem = ({
  href,
  label,
  ariaLabel,
  target = '_blank',
  icon,
}: LinkItemProps) => (
  <li className='hover-text relative overflow-hidden'>
    <a
      href={href}
      className='link1 text-olive-700 text-fluid-xl font-sans font-thin'
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      aria-label={ariaLabel}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {label}
      {icon}
    </a>

    <a
      href={href}
      className='link2 text-olive-600 text-fluid-xl absolute top-0 left-0 font-sans font-normal'
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      aria-label={ariaLabel}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {label}
      {icon}
    </a>
  </li>
);
