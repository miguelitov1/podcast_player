import React from 'react';
import ReactDOM from 'react-dom/client';
import { PodcastPlayerApp } from './PodcastPlayerApp';
import  './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PodcastPlayerApp />
  </React.StrictMode>
);

