import Image from 'src/ui/Image/Image';
import { usePopularRecipes } from './usePopularRecipes';
import styles from './PopularRecipes.module.scss';
import RecipeNotFound from 'src/assets/NotFound/recipePreviewNotFound.png';
import { useNavigate } from 'react-router-dom';
import { formatWord } from 'src/utils/functions';
import Loader from 'src/ui/Loaders/Loader';

function PopularRecipes() {
  const { data, isLoading } = usePopularRecipes();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  return (
    <ul className={styles.recipes}>
      {data.recipes?.map(recipe => (
        <li className={styles.recipe} key={recipe._id}>
          <Image
            alt={`${recipe.title} img`}
            className={styles.recipeImg}
            src={recipe.preview}
            defaultImage={RecipeNotFound}
            onClick={() => navigate(`/recipes/${recipe._id}`)}
          />
          <div>
            <h3 className={styles.recipeTitle}>{formatWord(25, recipe.title)}</h3>
            <p className={styles.recipeDescr}>{formatWord(50, recipe.description)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PopularRecipes;
