import React from 'react';
import FooterLinks from './FooterLinks';
import Button from '../Button';

const links = [
  { type: 'github', href: 'https://github.com/Mickyfen17' },
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/in/michael-j-fenwick/',
  },
  { type: 'twitter', href: 'https://twitter.com/mickyjfen' },
  { type: 'email', href: 'mailto:mikefen14@gmail.com' },
];

const Footer = ({ scrollToTop }) => (
  <footer id="footer">
    <FooterLinks links={links} />
    <Button id="scroll-top-btn" onClick={scrollToTop} />
    <h4 className="footer-tag">{'\u00A9'} Mike Fenwick | 2017 </h4>
  </footer>
);

export default Footer;
