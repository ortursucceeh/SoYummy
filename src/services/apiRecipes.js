import { API_URL } from '../utils/constants';
import { getAccessToken } from '../utils/auth';

export async function previewCategories() {
  const res = await fetch(`${API_URL}/recipes/main-page`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get preview categories🎇');

  return res.json();
}

export async function searchRecipes({ query, queryType }) {
  if (!query || !queryType) return [];

  const res = await fetch(
    `${API_URL}/recipes/${queryType === 'title' ? 'title' : 'ingredient'}/${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );

  if (!res.ok) throw new Error('Failed to search recipes🎇');

  return res.json();
}

export async function getRecipesByCategory(categoryName) {
  const res = await fetch(`${API_URL}/recipes/category/${categoryName}`, {
    // method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get recipes by category🎇');

  return res.json();
}

export async function getRecipesById(recipeId) {
  const res = await fetch(`${API_URL}/recipes/id/${recipeId}`, {
    // method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  console.log(res);

  if (!res.ok) throw new Error('Failed to get recipe🎇');

  return res.json();
}
