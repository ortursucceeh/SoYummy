const API_URL = 'https://so-yumi.p.goit.global/api';

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

export async function getCurrentUser({ token }) {
  const res = await fetch(`${API_URL}/users/current`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get current user🔥');

  return res.json();
}

export async function logout({ token }) {
  console.log('token  from apiauth:>> ', token);
  console.log(`Bearer ${token}`);
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
