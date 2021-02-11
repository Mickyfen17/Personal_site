import React from 'react';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import NeonSubHeader from '../NeonSubHeader';
import 'styles/neonContentWrapper';

const NeonContentWrapper = ({ children, color, title }) => {
  const lightsOn = useNeonLightsContext();

  return (
    <article className={`neon-content-wrapper ${lightsOn ? 'lights-on' : ''} ${color}`}>
      {title && <NeonSubHeader color={color}>{title}</NeonSubHeader>}
      {children}
    </article>
  );
};

export default NeonContentWrapper;
