import { MyRecipeType, RecipeType } from 'src/types/Recipe';
import RecipeGalleryItem from '../RecipeGalleryItem/RecipeGalleryItem';
import styles from './RecipeGallery.module.scss';

interface RecipeGalleryProps {
  recipes: RecipeType[] | MyRecipeType[];
  type: 'own' | 'favorite';
}

const RecipeGallery: React.FC<RecipeGalleryProps> = ({ recipes, type }) => {
  return (
    <div className={styles.wrapper}>
      {recipes.map(recipe => (
        <RecipeGalleryItem recipe={recipe} type={type} key={recipe._id} />
      ))}
    </div>
  );
};

export default RecipeGallery;
