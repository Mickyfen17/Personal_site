import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import '../styles/main.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('application')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
