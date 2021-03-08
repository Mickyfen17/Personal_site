import React from 'react';
import 'styles/miscHeader.scss';

const MiscHeader = ({ children, classNames }) => {
  return (
    <h1 id='misc-header' className={classNames}>
      {children}
    </h1>
  );
};

export default MiscHeader;
