import './styles/index.scss';
import './assets/fonts/fonts.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/joydev-3">
      <PostsProvider>
        <App />
      </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
