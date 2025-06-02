// src/API/auth/authAPI.js

const BASE_URL = 'http://localhost:8088/medi-queue/auth'; // Base API

async function handleResponse(response) {
  const data = await response.json();
  if (!response.ok) {
    // Use data.error if available
    throw new Error(data.error || data.message || 'API Error');
  }
  return data;
}

export async function loginUser({ username, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return handleResponse(response);
}
