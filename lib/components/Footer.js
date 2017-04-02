import React, { Component } from 'react';

const Footer = () => {

  return (
    <footer id='footer'>
      <a className='footer-icon github' href='https://github.com/Mickyfen17' target='_blank'></a>
      <a className='footer-icon linkedin' href='https://www.linkedin.com/in/michael-j-fenwick/' target='_blank'></a>
      <a className='footer-icon twitter' href='https://twitter.com/mickyjfen' target='_blank'></a>
      <a className='footer-icon email' href='mailto:mickyfen17@aol.com'></a>
      <h4 className='footer-tag'>{'\u00A9'} Mike Fenwick | 2017 </h4>
    </footer>
  );
};

export default Footer;