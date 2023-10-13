import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RoutesConfig from './routes/routes.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </React.StrictMode>
);
