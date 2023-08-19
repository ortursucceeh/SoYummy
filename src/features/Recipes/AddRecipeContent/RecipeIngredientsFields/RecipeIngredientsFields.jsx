import styles from './RecipeIngredientsFields.module.scss';
import { toast } from 'react-hot-toast';
import IngredientField from './IngredientField/IngredientField';
import { randomId } from '../../../../utils/recipes';
import React, { useCallback } from 'react';

function RecipeIngredientsFields({ recipe, setRecipe }) {
  const { ingredients } = recipe;

  const changeIngredients = useCallback(
    newIngredients => {
      setRecipe({ ...recipe, ingredients: newIngredients });
    },
    [recipe, setRecipe]
  );

  const handleDeleteIngredient = useCallback(
    id => {
      if (ingredients.length <= 3) {
        toast('At least 3 ingredients', {
          icon: '🍀',
        });
        return;
      }
      changeIngredients(ingredients.filter(ing => ing._id !== id));
    },
    [changeIngredients, ingredients]
  );

  const handlePlus = useCallback(() => {
    if (ingredients.length >= 25) {
      toast('Maximum 25 ingredients', {
        icon: '🍅',
      });
      return;
    }
    changeIngredients([...ingredients, { _id: randomId(), id: null, measure: null }]);
  }, [ingredients, changeIngredients]);

  const handleMinus = useCallback(() => {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return;
    }
    changeIngredients([...ingredients.slice(0, -1)]);
  }, [changeIngredients, ingredients]);

  const changeIngredient = useCallback(
    (id, ingId, title) => {
      changeIngredients(
        ingredients.map(ing => (ing._id === id ? { ...ing, id: ingId, title: title } : ing))
      );
    },
    [changeIngredients, ingredients]
  );

  const changeIngredientMeasure = useCallback(
    (id, measure) => {
      changeIngredients(
        ingredients.map(ing => (ing._id === id ? { ...ing, measure: measure } : ing))
      );
    },
    [changeIngredients, ingredients]
  );

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
