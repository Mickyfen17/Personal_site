import React from 'react';
import Typist from 'react-typist';

const MainTitle = () => {
  return (
    <div id="main-title">
      <Typist avgTypingDelay={150} startDelay={1000} cursor={{ show: false }}>
        <h1>I'm Mike</h1>
        <h2>Software Developer</h2>
      </Typist>
    </div>
  );
};

export default MainTitle;
