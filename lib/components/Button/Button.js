import React, { memo } from 'react';

const Button = memo(({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
});

export default Button;
