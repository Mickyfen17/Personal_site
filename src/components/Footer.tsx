import * as React from 'react';
import { LinkTypes } from '../sharedTypes';
import { AnchorLink } from './AnchorLink';
import 'styles/footer.scss';

interface Link {
  href: string;
  type: LinkTypes;
}

const links: Link[] = [
  { type: 'github', href: 'https://github.com/Mickyfen17' },
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/in/michael-j-fenwick/'
  },
  { type: 'email', href: 'mailto:mikefen14@gmail.com' }
];

export const Footer = () => (
  <footer id='footer'>
    <>
      {links.map((link) => (
        <AnchorLink key={link.type} type={link.type} href={link.href} />
      ))}
    </>
    <h4 className='footer-tag'>
      {'\u00A9'}
      Mike Fenwick | 2024
    </h4>
  </footer>
);
