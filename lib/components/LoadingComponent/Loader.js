import React from 'react';
import Spinner from './Spinner';

const Loader = ({ error, pastDelay }) => {
  if (pastDelay) {
    return <Spinner fillColor="#000" />;
  } else if (error) {
    return (
      <div id="loading-error">
        <p className="loading-error-text">
          Sorry, there was a problem loading the page. Please refresh your
          browser
        </p>
      </div>
    );
  }
  return null;
};

export default Loader;
