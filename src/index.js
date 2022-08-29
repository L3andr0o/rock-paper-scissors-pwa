import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PickProvider from './context/pickContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PickProvider>
      <App />
    </PickProvider> 
  </React.StrictMode>
);

