import * as React from 'react';
import 'styles/toggle';

interface ToggleProps {
  lightsOn: boolean;
  toggleLights: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Toggle = ({ lightsOn, toggleLights }: ToggleProps) => (
  <input
    className='toggle'
    type='checkbox'
    checked={lightsOn}
    onChange={() => toggleLights(!lightsOn)}
  />
);
