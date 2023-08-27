export type IngredientAddType = {
  _id: string;
  id: string | null;
  measure: string | null;
};

export type IngredientFullType = {
  title: string;
  desc: string;
  type: string;
  thumb: string;
  measure: string;
};
