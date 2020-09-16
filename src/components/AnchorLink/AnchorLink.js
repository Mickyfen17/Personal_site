import React from 'react';
import 'styles/anchorLink';

const AnchorLink = ({ children, href, type = '' }) => (
  <a
    className={`anchor ${type}`}
    href={href}
    title={type}
    target={type === 'email' ? '' : '_blank'}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default AnchorLink;
