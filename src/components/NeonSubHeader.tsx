import * as React from 'react';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import 'styles/neonSubHeader';
import { NeonColors } from '../sharedTypes';

interface NeonSubHeaderProps {
  children: string;
  color: NeonColors;
}

export const NeonSubHeader = ({ children, color }: NeonSubHeaderProps) => {
  const lightsOn = useNeonLightsContext();

  return <h2 className={`sub-header ${lightsOn ? 'lights-on' : ''} ${color}`}>{children}</h2>;
};
