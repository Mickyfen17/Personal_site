import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './App';
import '../styles/main.scss';

const container = document.getElementById('application');

if (container == null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(container);
root.render(<App />);
