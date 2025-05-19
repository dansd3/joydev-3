import './styles/index.scss';
import './assets/fonts/fonts.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/joydev-2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
