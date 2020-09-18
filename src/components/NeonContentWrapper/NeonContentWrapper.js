import React from 'react';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import NeonSubHeader from '../NeonSubHeader';
import 'styles/neonContentWrapper';

const NeonContentWrapper = ({ children, title }) => {
  const lightsOn = useNeonLightsContext();

  return (
    <article className={`neon-content-wrapper ${lightsOn ? 'lights-on' : ''}`}>
      {title && <NeonSubHeader>{title}</NeonSubHeader>}
      {children}
    </article>
  );
};

export default NeonContentWrapper;
