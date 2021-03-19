import * as React from 'react';
import 'styles/error.scss';
import { MiscHeader } from './MiscHeader';

interface ErrorProps {
  retry: VoidFunction;
}

export const Error = ({ retry }: ErrorProps): JSX.Element => (
  <section className='error'>
    <MiscHeader>Oops!</MiscHeader>
    <h4>Something went wrong...</h4>
    <button onClick={retry}>Retry</button>
  </section>
);
