import { memo, useCallback } from 'react';
import styles from './RecipePreparationField.module.scss';

function RecipePreparationField({ recipe, setRecipe }) {
  const changeInstructions = useCallback(
    newInstructions => setRecipe({ ...recipe, instructions: newInstructions }),
    [setRecipe, recipe]
  );

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

export default memo(RecipePreparationField);
