import { FiTrash2 } from 'react-icons/fi';
import Image from '../../../ui/Image/Image';
import styles from './RecipeGalleryItem.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../ui/Button/Button';
import { useDeleteOwnRecipe } from '../useDeleteOwnRecipe';
import LoaderMini from '../../../ui/Loaders/LoaderMini';
import { useToggleFavoriteRecipe } from '../useToggleFavoriteRecipe';

function RecipeGalleryItem({ recipe, type }) {
  const { deleteOwnRecipeById, isLoading: isLoadingDeleting } = useDeleteOwnRecipe();
  const { toggleFavoriteRecipe, isLoading: isLoadingToggle } = useToggleFavoriteRecipe();

  function handleDelete() {
    console.log(`delete ${recipe._id}`);
    type === 'own' ? deleteOwnRecipeById(recipe._id) : toggleFavoriteRecipe(recipe._id);
  }

  return (
    <div className={styles.recipe} key={recipe._id}>
      <Image src={recipe.preview} alt={`${recipe.title} img`} className={styles.preview} />
      <div className={styles.recipeInfo}>
        <span className={`${styles.deleteRecipe} ${styles[type]}`} onClick={handleDelete}>
          {isLoadingDeleting || isLoadingToggle ? <LoaderMini /> : <FiTrash2 />}
        </span>
        <h4 className={styles.recipeTitle}>{recipe.title}</h4>
        <p className={styles.recipeDescr}>{recipe.description}</p>
        <span className={styles.cookingTime}>{recipe.time} min</span>
        <Button shape="curv" color={`${type === 'own' ? 'green' : 'dark'}`} className={styles.btn}>
          <Link to={`/recipes/${recipe._id}${type === 'own' ? '?type=own' : ''}`}>See recipe</Link>
        </Button>
      </div>
    </div>
  );
}

export default RecipeGalleryItem;
