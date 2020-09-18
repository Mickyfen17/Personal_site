import React from 'react';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import 'styles/neonSubHeader';

const NeonSubHeader = ({ children }) => {
  const lightsOn = useNeonLightsContext();

  return <h2 className={`sub-header ${lightsOn ? 'lights-on' : ''}`}>{children}</h2>;
};

export default NeonSubHeader;
