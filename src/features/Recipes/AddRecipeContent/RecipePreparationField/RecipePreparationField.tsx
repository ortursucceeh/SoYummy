import styles from './RecipePreparationField.module.scss';
import { AddRecipeType } from 'src/types/Recipe';

interface RecipePreparationFieldProps {
  recipe: AddRecipeType;
  setRecipe: (recipe: AddRecipeType) => void;
}

const RecipePreparationField: React.FC<RecipePreparationFieldProps> = ({ recipe, setRecipe }) => {
  const changeInstructions = (newInstructions: string) =>
    setRecipe({ ...recipe, instructions: newInstructions });

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subheader}>Recipe Preparation</h3>
      <textarea
        className={styles.preparation}
        placeholder="Enter recipe"
        required
        value={recipe.instructions}
        onChange={e => changeInstructions(e.target.value)}
      />
    </div>
  );
};

export default RecipePreparationField;
