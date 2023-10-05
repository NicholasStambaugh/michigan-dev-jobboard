import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RoutesConfig from './routes/routes.tsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
