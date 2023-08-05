import styles from './RecipeItem.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';
import { useNavigate } from 'react-router-dom';
import Image from '../../../ui/Image/Image';

function RecipeItem({ recipe: { title, _id, preview } }) {
  const navigate = useNavigate();

  return (
    <div className={styles.recipeItem}>
      <Image
        alt={`${title} img`}
        className={styles.recipeImg}
        src={preview}
        defaultImage={RecipeNotFound}
        onClick={() => navigate(`/recipes/${_id}`)}
      />
      <span className={styles.recipeName}>
        {title?.length >= 45 ? title.slice(0, 45) + '...' : title}
      </span>
    </div>
  );
}

export default RecipeItem;
