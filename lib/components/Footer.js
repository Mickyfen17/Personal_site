import React from 'react';

const Footer = ({ scrollToTop }) => {
  return (
    <footer id="footer">
      <a
        className="footer-icon github"
        href="https://github.com/Mickyfen17"
        target="_blank"
        title="Github"
      />
      <a
        className="footer-icon linkedin"
        href="https://www.linkedin.com/in/michael-j-fenwick/"
        target="_blank"
        title="Linkedin"
      />
      <a
        className="footer-icon twitter"
        href="https://twitter.com/mickyjfen"
        target="_blank"
        title="Twitter"
      />
      <a
        className="footer-icon email"
        href="mailto:mickyfen17@aol.com"
        title="Email"
      />
      <button id="scroll-top-btn" type="button" onClick={() => scrollToTop()} />
      <h4 className="footer-tag">{'\u00A9'} Mike Fenwick | 2017 </h4>
    </footer>
  );
};

export default Footer;
