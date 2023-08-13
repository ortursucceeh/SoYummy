import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
function AddRecipeForm() {
  return (
    <div className={styles.wrapper}>
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
    </div>
  );
}

export default AddRecipeForm;
