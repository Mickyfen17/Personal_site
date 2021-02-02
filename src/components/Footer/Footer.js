import React from 'react';
import AnchorLink from '../AnchorLink';
import 'styles/footer.scss';

const links = [
  { type: 'github', href: 'https://github.com/Mickyfen17' },
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/in/michael-j-fenwick/'
  },
  { type: 'twitter', href: 'https://twitter.com/mickyjfen' },
  { type: 'email', href: 'mailto:mikefen14@gmail.com' }
];

const Footer = () => (
  <footer id='footer'>
    <React.Fragment>
      {links.map((link) => (
        <AnchorLink key={link.type} type={link.type} href={link.href} />
      ))}
    </React.Fragment>
    <h4 className='footer-tag'>
      {'\u00A9'}
      Mike Fenwick | 2020
    </h4>
  </footer>
);

export default Footer;
