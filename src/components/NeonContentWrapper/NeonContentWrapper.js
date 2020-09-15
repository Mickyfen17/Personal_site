import React from 'react';
import NeonSubHeader from '../NeonSubHeader';
import 'styles/neonContentWrapper';

const NeonContentWrapper = ({ children, title }) => (
  <article className="neon-content-wrapper">
    {title && <NeonSubHeader>{title}</NeonSubHeader>}
    {children}
  </article>
);

export default NeonContentWrapper;
