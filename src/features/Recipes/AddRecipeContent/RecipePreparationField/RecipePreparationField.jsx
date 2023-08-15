import React from 'react';
import styles from './RecipePreparationField.module.scss';

function RecipePreparationField({ recipe, setRecipe }) {
  function changeInstructions(newInstructions) {
    setRecipe({ ...recipe, instructions: newInstructions });
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subheader}>Recipe Preparation</h3>
      <textarea
        className={styles.preparation}
        id="preparation"
        name="preparation"
        placeholder="Enter recipe (steps should be separated by dot)"
        value={recipe.instructions}
        onChange={e => changeInstructions(e.target.value)}
      />
    </div>
  );
}

export default React.memo(RecipePreparationField);
