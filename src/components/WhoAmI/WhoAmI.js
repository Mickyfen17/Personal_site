import React from 'react';
import AnchorLink from '../AnchorLink';

const WhoAmI = () => (
  <article className="who-am-i-section">
    <p>
      Software Developments Engineer currently working at GoDaddy. Read more about me via my
      <AnchorLink href="https://www.linkedin.com/in/michael-j-fenwick/">
        &nbsp;LinkedIn&nbsp;
      </AnchorLink>
      or contact me directly
      <AnchorLink href="mailto:mikefen14@gmail.com" type="email">
        &nbsp;by email
      </AnchorLink>
      .
    </p>
  </article>
);

export default WhoAmI;
