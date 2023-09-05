import { useState } from 'react';
import { AddRecipeType } from 'src/types/Recipe';
import Button from 'src/ui/Button/Button';
import LoaderMini from 'src/ui/Loaders/LoaderMini';
import { initialOwnRecipe } from 'src/utils/recipes';
import RecipeDescriptionFields from '../RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from '../RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationField from '../RecipePreparationField/RecipePreparationField';
import { useAddRecipe } from '../useAddRecipe';
import styles from './AddRecipeForm.module.scss';

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
