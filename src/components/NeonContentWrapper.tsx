import * as React from 'react';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import { NeonSubHeader } from './NeonSubHeader';
import 'styles/neonContentWrapper';
import { NeonColors } from '../sharedTypes';

interface NeonContentWrapperProps {
  children: React.ReactNode;
  color: NeonColors;
  title?: string;
}

export const NeonContentWrapper = ({ children, color, title }: NeonContentWrapperProps) => {
  const lightsOn = useNeonLightsContext();

  return (
    <article className={`neon-content-wrapper ${lightsOn ? 'lights-on' : ''} ${color}`}>
      {title && <NeonSubHeader color={color}>{title}</NeonSubHeader>}
      {children}
    </article>
  );
};
