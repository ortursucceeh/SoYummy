import { useState } from 'react';
import styles from './RecipeIngredientsFields.module.scss';

function RecipeIngredientsFields() {
  const [ingredientsCount, setIngredientsCount] = useState(2);

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.subheader}>Ingredients</h3>
        <div>
          <span>-</span>
          <span>{ingredientsCount}</span>
          <span>+</span>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default RecipeIngredientsFields;
