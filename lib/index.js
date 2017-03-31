import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reset from '../css/reset';
import styles from '../css/styles';

import { BrowserRouter as Router, Route } from 'react-router-dom';


const router = (
  <Router>
    <Route path='/' component={ App } />
  </Router>
);

ReactDOM.render(router, document.getElementById('application'));
