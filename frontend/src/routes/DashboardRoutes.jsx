import { Routes, Route, Navigate } from 'react-router-dom';
import { getUserFromToken } from '../utils/JWT';
import ProtectedRoute from '../utils/ProtectedRoute';
import SuperAdminDashboard from '../pages/main/SuperAdminDashboard';

function DashboardRoutes() {
  return (
    <Routes>
      {/* Role-specific Dashboard Routes */}
      <Route element={<ProtectedRoute allowedRoles={['super_admin']} />}>
        <Route path="/super-admin/*" element={<SuperAdminDashboard />} />
      </Route>

      {/* Default Route - Redirects to role-specific dashboard */}
      <Route path="/" element={<RoleBasedRedirect />} />
    </Routes>
  );
}

// RoleBasedRedirect unchanged
function RoleBasedRedirect() {
  const user = getUserFromToken();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.roles.includes('SUPER_ADMIN')) {
    return <Navigate to="/super-admin" replace />;
  }

  if (user.roles.includes('admin')) {
    return <Navigate to="/admin" replace />;
  }

  if (user.roles.includes('doctor')) {
    return <Navigate to="/doctor" replace />;
  }

  if (user.roles.includes('staff')) {
    return <Navigate to="/staff" replace />;
  }

  if (user.roles.includes('patient')) {
    return <Navigate to="/patient" replace />;
  }

  return <Navigate to="/unauthorized" replace />;
}

export default DashboardRoutes;
