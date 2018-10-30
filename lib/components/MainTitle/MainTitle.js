import React from 'react';
import LoadingComponent from '../LoadingComponent';

const AsyncTypist = LoadingComponent(() =>
  import(/* webpackChunkName: "reactTypist" */ 'react-typist')
);

const MainTitle = () => (
  <section id="main-title">
    <AsyncTypist
      avgTypingDelay={150}
      startDelay={2000}
      cursor={{ show: false }}
    >
      <h1>I'm Mike</h1>
      <h2>Software Developer</h2>
    </AsyncTypist>
  </section>
);

export default MainTitle;
