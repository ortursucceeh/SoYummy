import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PreviewNotFound from 'src/assets/NotFound/recipePreviewNotFound.png';
import { MyRecipeFromListType, MyRecipeFullType, RecipeType } from 'src/types/Recipe';
import Button from 'src/ui/Button/Button';
import Image from 'src/ui/Image/Image';
import LoaderMini from 'src/ui/Loaders/LoaderMini';
import { formatWord } from 'src/utils/functions';
import styles from './RecipeGalleryItem.module.scss';
import { useDeleteRecipe } from './useDeleteRecipe';
import { useToggleFavoriteRecipe } from './useToggleFavoriteRecipe';

interface RecipeGalleryItemProps {
  recipe: RecipeType | MyRecipeFullType | MyRecipeFromListType;
  type: 'own' | 'favorite';
}
const RecipeGalleryItem: React.FC<RecipeGalleryItemProps> = ({ recipe, type }) => {
  const { deleteRecipe, isLoading: isLoadingDeleting } = useDeleteRecipe();
  const { toggleFavoriteRecipe, isLoading: isLoadingToggle } = useToggleFavoriteRecipe();

  function handleDelete() {
    type === 'own' ? deleteRecipe(recipe._id) : toggleFavoriteRecipe(recipe._id);
  }

  return (
    <div className={styles.recipe} key={recipe._id}>
      <Image
        src={recipe.preview}
        defaultImage={PreviewNotFound}
        alt={`${recipe.title} img`}
        className={styles.preview}
      />
      <div className={styles.recipeInfo}>
        <span className={`${styles.deleteRecipe} ${styles[type]}`} onClick={handleDelete}>
          {isLoadingDeleting || isLoadingToggle ? <LoaderMini /> : <FiTrash2 />}
        </span>
        <h4 className={styles.recipeTitle}>{formatWord(25, recipe.title)}</h4>
        <p className={styles.recipeDescr}>{formatWord(120, recipe.description)}</p>
        <span className={styles.cookingTime}>{recipe.time} min</span>
        <Link to={`/recipes/${recipe._id}${type === 'own' ? '?type=own' : ''}`}>
          <Button
            shape="curv"
            color={`${type === 'own' ? 'green' : 'dark'}`}
            className={styles.btn}
          >
            See recipe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeGalleryItem;
