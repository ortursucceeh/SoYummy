import { Link } from 'react-router-dom';
import Button from '../../../ui/Button/Button';
import styles from './RecipeGallery.module.scss';
import { FiTrash2 } from 'react-icons/fi';
import Image from '../../../ui/Image/Image';

function RecipeGallery({ recipes, type }) {
  return (
    <div className={styles.wrapper}>
      {recipes.map(recipe => (
        <div className={styles.recipe} key={recipe._id}>
          <Image src={recipe.preview} alt={`${recipe.title} img`} className={styles.preview} />
          <div className={styles.recipeInfo}>
            <span className={`${styles.deleteRecipe} ${styles[type]}`}>
              <FiTrash2 />
            </span>
            <h4 className={styles.recipeTitle}>{recipe.title}</h4>
            <p className={styles.recipeDescr}>{recipe.description}</p>
            <span className={styles.cookingTime}>{recipe.time} min</span>
            <Button
              shape="curv"
              color={`${type === 'own' ? 'green' : 'dark'}`}
              className={styles.btn}
            >
              <Link to={`/recipes/${recipe._id}${type === 'own' ? '?type=own' : ''}`}>
                See recipe
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
