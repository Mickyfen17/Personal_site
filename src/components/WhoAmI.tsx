import * as React from 'react';
import { AnchorLink } from './AnchorLink';
import { NeonContentWrapper } from './NeonContentWrapper';

export const WhoAmI = () => (
  <NeonContentWrapper color='cyan'>
    <strong>Software Development Engineer</strong> currently working at <strong>Brex</strong>. Read
    more about me via my
    <AnchorLink href='https://www.linkedin.com/in/michael-j-fenwick/'>
      &nbsp;LinkedIn&nbsp;
    </AnchorLink>
    or contact me directly by
    <AnchorLink href='mailto:mikefen14@gmail.com' type='email'>
      &nbsp;email
    </AnchorLink>
  </NeonContentWrapper>
);
