import * as React from 'react';
import 'styles/miscHeader.scss';

interface MiscHeaderProps {
  children: string;
  classNames?: string;
}

export const MiscHeader = ({ children, classNames }: MiscHeaderProps): JSX.Element => {
  return (
    <h1 id='misc-header' className={classNames}>
      {children}
    </h1>
  );
};
