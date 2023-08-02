import styles from './RecipeItem.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';
import { Link } from 'react-router-dom';
import Image from '../../../ui/Image/Image';

function RecipeItem({ recipe: { title, _id, preview } }) {
  return (
    <div className={styles.recipeItem}>
      <Link to={`/recipes/${_id}`}>
        <Image
          alt={`${title} img`}
          className={styles.recipeImg}
          imageUrl={preview}
          defaultImage={RecipeNotFound}
        />
      </Link>
      <span className={styles.recipeName}>
        {title?.length >= 50 ? title.slice(0, 50) + '...' : title}
      </span>
    </div>
  );
}

export default RecipeItem;
