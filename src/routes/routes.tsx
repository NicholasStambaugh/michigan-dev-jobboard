// src/routes/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AboutUs from '../pages/about/about';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default RoutesConfig;
