import { CategoriesType } from './Category';
import { IngredientAddType, IngredientFullType } from './Ingredient';

export type RecipeType = {
  _id: string;
  title: string;
  category: CategoriesType;
  description: string;
  // instructions: string[];
  // ingridients: string[];
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
  ingridients: IngredientFullType[];
  time: string;
  popularity: number;
  favorite: boolean;
  like: boolean;
  previewImg: string;
  fullImage: string;
  area: string;
  tags: string[];
};

export type AddRecipeType = {
  title: string;
  category: string;
  description: string;
  instructions: string;
  ingredients: IngredientAddType[];
  time: string;
  fullImage: string;
};

export type MyRecipeType = {
  _id: string;
  title: string;
  category: CategoriesType;
  description: string;
  preview: string;
  time: string;
};

export type SearchType = 'ingredient' | 'title';
