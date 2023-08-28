export type IngredientAddType = {
  _id: string;
  id: string | null;
  measure: string | null;
};

export type IngredientFullType = {
  _id: string;
  title: string;
  desc: string;
  thumb: string;
  measure: string;
};
