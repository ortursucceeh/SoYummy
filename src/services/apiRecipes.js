import { API_URL } from '../utils/constants';
import { getAccessToken, getRefreshToken, updateTokens } from '../utils/auth';

export async function previewCategories() {
  const accessToken = getAccessToken();

  const res = await fetch(`${API_URL}/recipes/main-page`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get preview categories🎇');

  return res.json();
}

export async function searchRecipes({ query, queryType }) {
  const accessToken = getAccessToken();

  const res = await fetch(
    `${API_URL}/recipes/${queryType === 'title' ? 'title' : 'ingredient'}/${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) throw new Error('Failed to search recipes🎇');

  return res.json();
}
