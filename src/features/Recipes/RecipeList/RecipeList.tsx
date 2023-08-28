import { RecipeType } from 'src/types/Recipe';
import RecipeItem from '../RecipeItem/RecipeItem';
import styles from './RecipeList.module.scss';

interface RecipeListProps {
  recipes: RecipeType[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className={styles.recipesList}>
      {recipes.map(recipe => (
        <RecipeItem key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
