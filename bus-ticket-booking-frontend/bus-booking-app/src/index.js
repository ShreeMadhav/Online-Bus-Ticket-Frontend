// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import any global styles

// Create a root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
