import { jwtDecode } from 'jwt-decode';


const TOKEN_KEY = 'jwt_token';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Decode JWT and return payload
export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    return {
      username: decoded.sub || decoded.username,
      roles: decoded.roles ? decoded.roles.split(',') : [], // 👈 decode 'roles'
      exp: decoded.exp,
    };
  } catch (error) {
    console.error('Invalid JWT token:', error);
    return null;
  }
};
