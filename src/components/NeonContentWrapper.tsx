import * as React from 'react';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import { NeonSubHeader } from './NeonSubHeader';
import 'styles/neonContentWrapper';

interface NeonContentWrapperProps {
  children: React.ReactNode;
  color: 'cyan' | 'pink';
  title?: string;
}

export const NeonContentWrapper = ({
  children,
  color,
  title
}: NeonContentWrapperProps): JSX.Element => {
  const lightsOn = useNeonLightsContext();

  return (
    <article className={`neon-content-wrapper ${lightsOn ? 'lights-on' : ''} ${color}`}>
      {title && <NeonSubHeader color={color}>{title}</NeonSubHeader>}
      {children}
    </article>
  );
};
