export enum CATEGORIES_ENUM {
  'Beef' = 'Beef',
  'Chicken' = 'Chicken',
  'Dessert' = 'Dessert',
  'Lamb' = 'Lamb',
  'Miscellaneous' = 'Miscellaneous',
  'Pasta' = 'Pasta',
  'Pork' = 'Pork',
  'Seafood' = 'Seafood',
  'Side' = 'Side',
  'Starter' = 'Starter',
  'Vegan' = 'Vegan',
  'Vegetarian' = 'Vegetarian',
  'Breakfast' = 'Breakfast',
  'Goat' = 'Goat',
  'Another' = 'Another',
}

export type CategoriesType = keyof typeof CATEGORIES_ENUM;
