import styles from './RecipeIngredientsFields.module.scss';
import { toast } from 'react-hot-toast';
import IngredientField from './IngredientField/IngredientField';
import { randomId } from '../../../../utils/recipes';
import React from 'react';

function RecipeIngredientsFields({ ingredients, setIngredients }) {
  function handleDeleteIngredient(id) {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return;
    }
    setIngredients(ingredients.filter(ing => ing._id !== id));
  }

  function handlePlus() {
    if (ingredients.length >= 25) {
      toast('Maximum 25 ingredients', {
        icon: '🍅',
      });
      return;
    }
    setIngredients([...ingredients, { _id: randomId(), id: null, title: '', measure: null }]);
  }

  function handleMinus() {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return;
    }
    setIngredients([...ingredients.slice(0, -1)]);
  }

  function changeIngredient(id, ingId, title) {
    setIngredients(
      ingredients.map(ing => (ing._id === id ? { ...ing, id: ingId, title: title } : ing))
    );
  }

  function changeIngredientMeasure(id, measure) {
    setIngredients(ingredients.map(ing => (ing._id === id ? { ...ing, measure: measure } : ing)));
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
        {ingredients.map(ing => (
          <IngredientField
            key={ing._id}
            ingId={ing._id}
            ingTitle={ing.title}
            onDelete={() => handleDeleteIngredient(ing._id)}
            changeIngredient={changeIngredient}
            changeIngredientMeasure={changeIngredientMeasure}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(RecipeIngredientsFields);
