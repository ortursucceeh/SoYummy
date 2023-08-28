import { CategoriesType } from './Category';
import { IngredientAddType, IngredientFullType } from './Ingredient';

export type RecipeType = {
  _id: string;
  title: string;
  category: CategoriesType;
  description: string;
  preview: string;
  time: string;
  popularity: number;
  like: boolean;
  favorite: boolean;
};

export type RecipeFullType = {
  _id: string;
  title: string;
  category: CategoriesType;
  description: string;
  instructions: string;
  ingredients: IngredientFullType[];
  time: string;
  favorites: number[];
  area: string;
  tags: string[];
  preview: string;
};

export type AddRecipeType = {
  title: string;
  category: string;
  description: string;
  instructions: string;
  ingredients: IngredientAddType[];
  time: string;
  fullImage: File | null;
};

export type MyRecipeFullType = {
  _id: string;
  title: string;
  category: CategoriesType;
  description: string;
  instructions: string;
  ingredients: IngredientFullType[];
  preview: string;
  time: string;
};

export type MyRecipeFromListType = Omit<MyRecipeFullType, 'instructions' | 'ingredients'>;

export type SearchType = 'ingredient' | 'title';
