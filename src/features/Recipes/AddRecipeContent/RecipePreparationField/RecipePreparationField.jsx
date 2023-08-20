import { memo } from 'react';
import styles from './RecipePreparationField.module.scss';

function RecipePreparationField({ recipe, setRecipe }) {
  const changeInstructions = newInstructions =>
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
}

const isEqual = (prevProps, newProps) =>
  prevProps.recipe.instructions === newProps.recipe.instructions;

export default memo(RecipePreparationField, isEqual);
