import React from 'react';

const AnchorLink = ({ type, href, children }) => (
  <a
    className={`footer-icon ${type}`}
    href={href}
    title={type}
    target={type === 'email' ? '' : '_blank'}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default AnchorLink;
