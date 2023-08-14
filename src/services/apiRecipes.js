import { API_URL } from '../utils/constants';
import { getAccessToken } from '../utils/auth';

export async function previewCategories() {
  const res = await fetch(`${API_URL}/recipes/main-page`, {
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
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get recipes by category🎇');

  return res.json();
}

export async function getRecipeById(recipeId) {
  const res = await fetch(`${API_URL}/recipes/id/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get recipe🎇');

  return res.json();
}

export async function getFavoritesRecipes() {
  const res = await fetch(`${API_URL}/recipes/favorite`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get favorites recipes🍕');

  return res.json();
}

export async function getOwnRecipes() {
  const res = await fetch(`${API_URL}/own-recipes`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get own recipes🍕');

  return res.json();
}

export async function getOwnRecipeById(recipeId) {
  const res = await fetch(`${API_URL}/own-recipes/id/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get own recipe🍕');

  return res.json();
}

export async function deleteOwnRecipeById(recipeId) {
  const res = await fetch(`${API_URL}/own-recipes/id/${recipeId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to delete own recipe🍕');

  return res.json();
}

export async function toggleFavoriteRecipe(recipeId) {
  const res = await fetch(`${API_URL}/recipes/favorite/${recipeId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error("Failed to change recipe's favorite status🍕");

  return res.json();
}

export async function createOwnRecipe(formData) {
  const res = await fetch(`${API_URL}/own-recipes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error('Failed to create your recipe🍕');

  return res.json();
}
