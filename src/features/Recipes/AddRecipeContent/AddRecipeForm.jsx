import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
function AddRecipeForm() {
  return (
    <div className={styles.wrapper}>
      <RecipeDescriptionFields />
    </div>
  );
}

export default AddRecipeForm;
