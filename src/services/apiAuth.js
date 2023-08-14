import { getAccessToken, getRefreshToken, updateTokens } from '../utils/auth';
import { API_URL } from '../utils/constants';

export async function signup({ name, email, password }) {
  const res = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to signup🔥');

  return res.json();
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to login🔥');

  return res.json();
}

export async function logout({ token }) {
  const res = await fetch(`${API_URL}/users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) throw new Error('Failed to logout🔥');

  return res.json();
}

export async function refreshTokens() {
  const refreshToken = getRefreshToken();
  let isRefreshed;
  if (refreshToken) {
    isRefreshed = await fetch(`${API_URL}/users/refresh`, {
      method: 'POST',
      body: JSON.stringify({ refreshToken: refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(({ refreshToken, accessToken }) => {
        updateTokens(accessToken, refreshToken);
        return true;
      })
      .catch(() => false);
  }

  return isRefreshed;
}

export async function getCurrentUser() {
  const isRefreshed = await refreshTokens();
  console.log('isRefreshed :>> ', isRefreshed);

  if (isRefreshed) {
    const res = await fetch(`${API_URL}/users/current`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (!res.ok) throw new Error('Failed to get current user🔥');

    return res
      .json()
      .then(data => data)
      .catch(() => null);
  }
  return null;
}

export async function updateUser(formData) {
  const res = await fetch(`${API_URL}/users/update`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error('Failed to update user😐');

  return res.json();
}
