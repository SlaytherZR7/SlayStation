// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DashboardBusqueda from './pages/DashboardBusqueda.jsx';
import DashboardClient from './pages/DashboardClient.jsx';
import DashboardRoot from './pages/DashboardRoot.jsx';
import Login from './pages/Login.jsx';
import ProductView from './pages/ProductView.jsx';
import Signup from './pages/Signup.jsx';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardRoot />} />
        <Route path="/busqueda" element={<DashboardBusqueda />} />
        <Route path="/client" element={<DashboardClient />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

