import * as React from 'react';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import 'styles/neonSubHeader';

interface NeonSubHeaderProps {
  children: string;
  color: 'cyan' | 'pink';
}

export const NeonSubHeader = ({ children, color }: NeonSubHeaderProps): JSX.Element => {
  const lightsOn = useNeonLightsContext();

  return <h2 className={`sub-header ${lightsOn ? 'lights-on' : ''} ${color}`}>{children}</h2>;
};
