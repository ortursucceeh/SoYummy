import styles from './RecipeItem.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';
import { useNavigate } from 'react-router-dom';
import Image from '../../../ui/Image/Image';
import { formatWord } from '../../../utils/functions';

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
      <span className={styles.recipeName}>{formatWord(35, title)}</span>
    </div>
  );
}

export default RecipeItem;
