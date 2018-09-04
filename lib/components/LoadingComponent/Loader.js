import React from 'react';

const Loader = ({ error, pastDelay }) => {
  if (pastDelay) {
    return <div id="loading">Loading...</div>;
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
