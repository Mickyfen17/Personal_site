import React from 'react';
import AnchorLink from '../AnchorLink';
import NeonContentWrapper from '../NeonContentWrapper';

const WhoAmI = () => (
  <NeonContentWrapper>
    <strong>Software Developments Engineer</strong> currently working at <strong>GoDaddy</strong>.
    Read more about me via my
    <AnchorLink href="https://www.linkedin.com/in/michael-j-fenwick/">
      &nbsp;LinkedIn&nbsp;
    </AnchorLink>
    or contact me directly by
    <AnchorLink href="mailto:mikefen14@gmail.com" type="email">
      &nbsp;email
    </AnchorLink>
  </NeonContentWrapper>
);

export default WhoAmI;
