import { IngredientAddType } from './Ingredient';

export type RecipeFullType = {
  _id: number;
  title: string;
  category: string;
  description: string;
  instructions: string[];
  ingridients: string[];
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
