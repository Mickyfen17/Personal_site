import * as React from 'react';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import 'styles/neonHeader';

interface NeonHeaderProps {
  children: string;
}

export const NeonHeader = ({ children: textString }: NeonHeaderProps) => {
  const [firstName, lastName] = textString.split(' ');
  const idx = Math.floor(Math.random() * lastName.length);
  const letterToFlicker = lastName[idx];
  const lightsOn = useNeonLightsContext();

  const flickeringLastName = (
    <>
      {lastName.slice(0, idx)}
      <span className='flicker'>{letterToFlicker}</span>
      {lastName.slice(idx + 1)}
    </>
  );

  return (
    <header id='neon-title' className={`${lightsOn ? 'lights-on' : ''}`}>
      <h1>
        {firstName} {flickeringLastName}
      </h1>
    </header>
  );
};
