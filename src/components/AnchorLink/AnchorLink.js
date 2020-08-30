import React from 'react';
import 'styles/anchorLink';

const AnchorLink = ({ type, href, children }) => (
  <a
    className={`anchor footer-icon ${type}`}
    href={href}
    title={type}
    target={type === 'email' ? '' : '_blank'}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default AnchorLink;
