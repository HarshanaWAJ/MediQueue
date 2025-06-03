// src/components/ProtectedRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { getUserFromToken } from '../utils/JWT';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = getUserFromToken();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;