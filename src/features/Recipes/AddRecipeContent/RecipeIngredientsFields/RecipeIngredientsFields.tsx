import { toast } from 'react-hot-toast';
import { IngredientAddType } from 'src/types/Ingredient';
import { AddRecipeType } from 'src/types/Recipe';
import { randomId } from 'src/utils/functions';
import IngredientField from './IngredientField/IngredientField';
import styles from './RecipeIngredientsFields.module.scss';

interface RecipeIngredientsFieldsProps {
  recipe: AddRecipeType;
  setRecipe: (recipe: AddRecipeType) => void;
}

const RecipeIngredientsFields: React.FC<RecipeIngredientsFieldsProps> = ({ recipe, setRecipe }) => {
  const { ingredients } = recipe;

  const changeIngredients = (newIngredients: IngredientAddType[]) => {
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleDeleteIngredient = (id: string) => {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return;
    }
    changeIngredients(ingredients.filter(ing => ing._id !== id));
  };

  const handlePlus = () => {
    if (ingredients.length >= 25) {
      toast('Maximum 25 ingredients', {
        icon: '🍅',
      });
      return;
    }
    changeIngredients([...ingredients, { _id: randomId(), id: null, measure: null }]);
  };

  const handleMinus = () => {
    if (ingredients.length <= 3) {
      toast('At least 3 ingredients', {
        icon: '🍀',
      });
      return;
    }
    changeIngredients([...ingredients.slice(0, -1)]);
  };

  const changeIngredient = (id: string, ingId: string, title: string) => {
    changeIngredients(
      ingredients.map(ing => (ing._id === id ? { ...ing, id: ingId, title: title } : ing))
    );
  };

  const changeIngredientMeasure = (id: string, measure: string) => {
    changeIngredients(
      ingredients.map(ing => (ing._id === id ? { ...ing, measure: measure } : ing))
    );
  };

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
            onDelete={() => handleDeleteIngredient(ing._id)}
            changeIngredient={changeIngredient}
            changeIngredientMeasure={changeIngredientMeasure}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredientsFields;
