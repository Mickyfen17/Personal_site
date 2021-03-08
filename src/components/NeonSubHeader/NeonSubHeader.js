import React from 'react';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import 'styles/neonSubHeader';

const NeonSubHeader = ({ children, color }) => {
  const lightsOn = useNeonLightsContext();

  return <h2 className={`sub-header ${lightsOn ? 'lights-on' : ''} ${color}`}>{children}</h2>;
};

export default NeonSubHeader;
