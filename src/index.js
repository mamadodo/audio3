import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { TrackProvider } from './providers/TrackProvider';

ReactDOM.render(
  <TrackProvider>
    <App />
  </TrackProvider>,
  document.getElementById('root')
);

