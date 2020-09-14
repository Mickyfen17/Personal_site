import React from 'react';
import 'styles/neonHeader';

const NeonHeader = ({ children: textString }) => {
  const [firstName, lastName] = textString.split(' ');
  const idx = Math.floor(Math.random() * lastName.length);
  const letterToFlicker = lastName[idx];

  const flickeringLastName = (
    <React.Fragment>
      {lastName.slice(0, idx)}
      <span className="flicker">{letterToFlicker}</span>
      {lastName.slice(idx + 1)}
    </React.Fragment>
  );

  return (
    <header id="neon-title">
      <h1>
        {firstName} <br /> {flickeringLastName}
      </h1>
    </header>
  );
};

export default NeonHeader;
