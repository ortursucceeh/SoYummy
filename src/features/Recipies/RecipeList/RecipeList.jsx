import RecipeItem from '../RecipeItem/RecipeItem';
import styles from './RecipeList.module.scss';

function RecipeList({ recipes }) {
  return (
    <div className={styles.recipesList}>
      {recipes.map(recipe => (
        <RecipeItem key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
