// src/routes/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AboutUs from '../pages/about/about';
import Login from '../pages/login/login';
import Devs from '../pages/developers/devs';
import Signup from '../pages/signup/signup';
import Pricing from '../pages/pricing';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/developers" element={<Devs />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default RoutesConfig;
