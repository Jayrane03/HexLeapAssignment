import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Adjust the import path if necessary

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root); // Use createRoot instead of ReactDOM.render
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
