import { useState } from 'react';
import styles from './RecipeIngredientsFields.module.scss';
import { toast } from 'react-hot-toast';
import IngredientField from './IngredientField/IngredientField';

function RecipeIngredientsFields() {
  const [ingredients, setIngredients] = useState([
    { _id: Date.now(), id: null, measure: null },
    { _id: Date.now(), id: null, measure: null },
    { _id: Date.now(), id: null, measure: null },
  ]);

  function checkIngredientsLength() {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return false;
    }
    return true;
  }

  function handleDelete(id) {
    console.log(id);
    if (!checkIngredientsLength()) return;
    setIngredients(ingredients.filter(ing => ing._id !== id));
  }

  function handlePlus() {
    setIngredients([...ingredients, { _id: Date.now(), id: null, measure: null }]);
  }

  function handleMinus() {
    if (!checkIngredientsLength()) return;
    setIngredients([...ingredients.slice(0, -1)]);
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subheader}>Ingredients</h3>
      <div className={styles.counter}>
        <span className={styles.minus} onClick={handleMinus} />
        <span className={styles.count}>{ingredients.length}</span>
        <span className={styles.plus} onClick={handlePlus} />
      </div>

      <div className={styles.ingredients}>
        {ingredients.map((ing, indx) => (
          <IngredientField key={indx} onDelete={() => handleDelete(ing._id)} />
        ))}
      </div>
    </div>
  );
}

export default RecipeIngredientsFields;
