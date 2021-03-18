import * as React from 'react';
import 'styles/anchorLink';

interface AnchorLinkProps {
  children?: React.ReactNode;
  href: string;
  type?: string;
}

export const AnchorLink = ({ children, href, type = '' }: AnchorLinkProps): JSX.Element => (
  <a
    className={`anchor ${type}`}
    href={href}
    title={type}
    target={type === 'email' ? '' : '_blank'}
    rel='noopener noreferrer'
  >
    {children}
  </a>
);
