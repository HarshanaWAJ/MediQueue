import React, { useState } from 'react';
import useLoginForm from '../hooks/useLoginForm';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { loginUser } from '../API/auth/authAPI';
import { setToken, getUserFromToken } from '../utils/JWT';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

function Login() {
  const { username, setUsername, password, setPassword } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser({ username, password });

      if (data.token) {
        setToken(data.token);
        toast.success('Login successful!');

        const user = getUserFromToken(data.token);
        if (user?.roles?.includes('SUPER_ADMIN')) {
          setRedirectTo('/super-admin');
        } else if (user?.roles?.includes('admin')) {
          setRedirectTo('/admin');
        } else if (user?.roles?.includes('doctor')) {
          setRedirectTo('/doctor');
        } else if (user?.roles?.includes('staff')) {
          setRedirectTo('/staff');
        } else if (user?.roles?.includes('patient')) {
          setRedirectTo('/patient');
        } else {
          toast.error('Invalid user role.');
        }
      } else {
        throw new Error('Login failed: No token received');
      }
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <LockIcon style={{ fontSize: '4rem', color: '#17a2b8' }} />
          <h2 className="mt-2" style={{ color: '#17a2b8', fontWeight: 'bold' }}>Login</h2>
          <p className="text-muted small">Welcome to <strong>Medi Queue</strong></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="font-weight-bold">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  <PersonIcon style={{ color: '#17a2b8' }} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="font-weight-bold">Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  <LockIcon style={{ color: '#17a2b8' }} />
                </span>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text bg-white"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <VisibilityOff style={{ color: '#17a2b8' }} /> : <Visibility style={{ color: '#17a2b8' }} />}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-info btn-block w-100 mt-3 shadow-sm"
            disabled={loading}
          >
            <LockIcon className="me-2" /> {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default Login;
