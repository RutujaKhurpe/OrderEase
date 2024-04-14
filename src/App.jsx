import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from './components/Orders';

import Home from './components/Home';
import AdminLogin from './components/adminlogin';
import AdminPage from './Pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminPage" element={<AdminPage />} />

      </Routes>
    </Router>
  );
}

export default App;