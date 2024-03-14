import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/variables.css';
import './theme/typography.css';
import './theme/index.css';
import './theme/forms.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);

