// src/routes/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AboutUs from '../pages/about/about';
import Login from '../pages/login/login';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesConfig;
