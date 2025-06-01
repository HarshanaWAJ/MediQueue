import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
     <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
