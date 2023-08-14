import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationField from './RecipePreparationField/RecipePreparationField';
import Button from '../../../ui/Button/Button';
import { createContext, useState } from 'react';
import { initialOwnRecipe } from '../../../utils/recipes';
import { useCreateOwnRecipe } from '../useCreateOwnRecipe';

export const RecipeContext = createContext();

function AddRecipeForm() {
  const [recipe, setRecipe] = useState(initialOwnRecipe);
  const { isLoading, createOwnRecipe } = useCreateOwnRecipe();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    const data = {
      ...recipe,
      ingredients: recipe.ingredients.map(ing => ({ id: ing.id, measure: ing.measure })),
    };

    // for (const key of Object.keys(data)) {
    //   formData.append(key, JSON.stringify(data[key]));
    // }
    console.log('data :>> ', data);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('instructions', data.instructions);
    formData.append('time', data.time);
    formData.append('ingredients', JSON.stringify(data.ingredients));
    formData.append('fullImage', data.fullImage);
    console.log('formData :>> ', formData);

    createOwnRecipe(formData);
  }

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <RecipeDescriptionFields />
        <RecipeIngredientsFields />
        <RecipePreparationField />
        <Button shape="curv" color="dark" className={styles.addBtn} disabled={isLoading}>
          Add
        </Button>
      </form>
    </RecipeContext.Provider>
  );
}

export default AddRecipeForm;
