import React from 'react';
import 'styles/toggle';

const Toggle = ({ lightsOn, toggleLights }) => (
  <input
    className='toggle'
    type='checkbox'
    checked={lightsOn}
    onChange={() => toggleLights(!lightsOn)}
  />
);

export default Toggle;
