import RecipeDescriptionFields from '../RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
import RecipeIngredientsFields from '../RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationField from '../RecipePreparationField/RecipePreparationField';
import Button from 'src/ui/Button/Button';
import { useState } from 'react';
import { initialOwnRecipe } from 'src/utils/recipes';
import LoaderMini from 'src/ui/Loaders/LoaderMini';
import { useAddRecipe } from '../useAddRecipe';
import { AddRecipeType } from 'src/types/Recipe';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState<AddRecipeType>(initialOwnRecipe);
  const { isLoading, addRecipe } = useAddRecipe();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key of Object.keys(recipe)) {
      // @ts-ignore
      formData.append(key, recipe[key]);
    }

    formData.set(
      'ingredients',
      JSON.stringify(recipe.ingredients.map(ing => ({ id: ing.id, measure: ing.measure })))
    );

    addRecipe(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <RecipeDescriptionFields recipe={recipe} setRecipe={setRecipe} />
      <RecipeIngredientsFields recipe={recipe} setRecipe={setRecipe} />
      <RecipePreparationField recipe={recipe} setRecipe={setRecipe} />
      <Button shape="curv" color="dark" className={styles.addBtn} disabled={isLoading}>
        {isLoading ? <LoaderMini /> : 'Add'}
      </Button>
    </form>
  );
};

export default AddRecipeForm;
