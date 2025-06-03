import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import AuthRoutes from './routes/AuthRoutes';
import DashboardRoutes from './routes/DashboardRoutes';

function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />   {/* Basic Pages */}
        <AuthRoutes />  {/* Authentication Routes */}
        <DashboardRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;
