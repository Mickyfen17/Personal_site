import * as React from 'react';
import 'styles/anchorLink';
import { LinkTypes } from '../sharedTypes';

interface AnchorLinkProps {
  children?: React.ReactNode;
  href: string;
  type?: LinkTypes;
}

export const AnchorLink = ({ children, href, type }: AnchorLinkProps) => (
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
