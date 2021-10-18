import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/App/App';
import { AppContainer } from './components/AppContainer/AppContainer';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer App={<App />} />
  </React.StrictMode>,
  document.getElementById('root'),
);
