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

export async function searchRecipes({ query, queryType }, page) {
  if (!query || !queryType) return [];

  const res = await fetch(
    `${API_URL}/recipes/${queryType === 'title' ? 'title' : 'ingredient'}/${query}?page=${page}`,
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

export async function getRecipesByCategory(categoryName, page) {
  const res = await fetch(`${API_URL}/recipes/category/${categoryName}?page=${page}&limit=8`, {
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

export async function getFavoritesRecipes(page) {
  const res = await fetch(`${API_URL}/recipes/favorite?page=${page}&limit=4`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get favorites recipes🍕');

  return res.json();
}

export async function getMyRecipes(page) {
  const res = await fetch(`${API_URL}/own-recipes?page=${page}&limit=4`, {
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

export async function deleteRecipe(recipeId) {
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

export async function addRecipe(formData) {
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

export async function getPopularRecipes() {
  const res = await fetch(`${API_URL}/recipes?limit=4&sort=popular`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to create your recipe🍕');

  return res.json();
}
