import React from 'react';
import 'styles/error.scss';
import MiscHeader from '../MiscHeader';

const Error = ({ retry }) => (
  <section className='error'>
    <MiscHeader>Oops!</MiscHeader>
    <h4>Something went wrong...</h4>
    <button onClick={retry}>Retry</button>
  </section>
);

export default Error;