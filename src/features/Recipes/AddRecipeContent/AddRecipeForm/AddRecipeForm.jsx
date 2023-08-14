import RecipeDescriptionFields from '../RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
import RecipeIngredientsFields from '../RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationField from '../RecipePreparationField/RecipePreparationField';
import Button from '../../../../ui/Button/Button';
import { createContext, useState } from 'react';
import { initialOwnRecipe } from '../../../../utils/recipes';
import { useCreateOwnRecipe } from '../../useCreateOwnRecipe';
import LoaderMini from '../../../../ui/Loaders/LoaderMini';

export const RecipeContext = createContext();

function AddRecipeForm() {
  const [recipe, setRecipe] = useState(initialOwnRecipe);
  const { isLoading, createOwnRecipe } = useCreateOwnRecipe();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    for (const key of Object.keys(recipe)) {
      formData.append(key, recipe[key]);
    }
    formData.set(
      'ingredients',
      JSON.stringify(recipe.ingredients.map(ing => ({ id: ing.id, measure: ing.measure })))
    );

    createOwnRecipe(formData);
  }

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <RecipeDescriptionFields />
        <RecipeIngredientsFields />
        <RecipePreparationField />
        <Button shape="curv" color="dark" className={styles.addBtn} disabled={isLoading}>
          {isLoading ? <LoaderMini /> : 'Add'}
        </Button>
      </form>
    </RecipeContext.Provider>
  );
}

export default AddRecipeForm;
