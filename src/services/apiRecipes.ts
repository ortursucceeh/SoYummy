import { CategoriesType } from 'src/types/Category';
import { getAccessToken } from '../utils/auth';
import { API_URL } from '../utils/constants';
import {
  MyRecipeFromListType,
  MyRecipeFullType,
  RecipeFullType,
  RecipeType,
  SearchType,
} from './../types/Recipe';

type PreviewCategoriesResponse = Record<Lowercase<CategoriesType>, RecipeType[]>;

export async function previewCategories(): Promise<PreviewCategoriesResponse> {
  const res = await fetch(`${API_URL}/recipes/main-page`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get preview categories🎇');

  return res.json();
}

interface RecipesResponse {
  recipes: RecipeType[];
  total: number;
  page: number;
  limit: number;
  sort: 'title' | 'popular';
}

export async function searchRecipes(
  { query, queryType }: { query: string; queryType: SearchType },
  page: string
): Promise<RecipesResponse> {
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

export async function getRecipesByCategory(
  categoryName: CategoriesType,
  page: string
): Promise<RecipesResponse> {
  const res = await fetch(`${API_URL}/recipes/category/${categoryName}?page=${page}&limit=8`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get recipes by category🎇');

  return res.json();
}

export async function getRecipeById(recipeId: string): Promise<RecipeFullType> {
  const res = await fetch(`${API_URL}/recipes/id/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get recipe🎇');

  return res.json();
}

export async function getFavoritesRecipes(page: string): Promise<RecipesResponse> {
  const res = await fetch(`${API_URL}/recipes/favorite?page=${page}&limit=4`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get favorites recipes🍕');

  return res.json();
}

interface MyRecipesResponse {
  recipes: MyRecipeFromListType[];
  total: number;
  page: number;
  limit: number;
  sort: 'title' | 'popular';
}

export async function getMyRecipes(page: string): Promise<MyRecipesResponse> {
  const res = await fetch(`${API_URL}/own-recipes?page=${page}&limit=4`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get own recipes🍕');

  return res.json();
}

export async function getOwnRecipeById(recipeId: string): Promise<MyRecipeFullType> {
  const res = await fetch(`${API_URL}/own-recipes/id/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to get own recipe🍕');

  return res.json();
}

export async function deleteRecipe(recipeId: string): Promise<{ message: string }> {
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

interface ToggleFavoriteResponse {
  _id: string;
  favorite: boolean;
  popularity: number;
}

export async function toggleFavoriteRecipe(recipeId: string): Promise<ToggleFavoriteResponse> {
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

export async function addRecipe(formData: FormData) {
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

export async function getPopularRecipes(): Promise<RecipesResponse> {
  const res = await fetch(`${API_URL}/recipes?limit=4&sort=popular`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to create your recipe🍕');

  return res.json();
}
