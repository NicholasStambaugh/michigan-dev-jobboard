// src/routes/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AboutUs from '../pages/about/about';
import Login from '../pages/login/login';
import Devs from '../pages/developers/devs';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/developers" element={<Devs />} />
    </Routes>
  );
};

export default RoutesConfig;
