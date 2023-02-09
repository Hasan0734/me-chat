import React from 'react';
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NotMatch from './pages/NotMatch';
import Register from './pages/Register';


function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
