import React from 'react';
import AnchorLink from '../AnchorLink';

const FooterLinks = ({ links }) => (
  <React.Fragment>
    {links.map(link => (
      <AnchorLink key={link.type} type={link.type} href={link.href} />
    ))}
  </React.Fragment>
);

export default FooterLinks;
