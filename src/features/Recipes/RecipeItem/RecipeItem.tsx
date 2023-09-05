import { useNavigate } from 'react-router-dom';
import RecipeNotFound from 'src/assets/NotFound/recipePreviewNotFound.png';
import { RecipeType } from 'src/types/Recipe';
import Image from 'src/ui/Image/Image';
import { formatWord } from 'src/utils/functions';
import styles from './RecipeItem.module.scss';

interface RecipeItemProps {
  recipe: RecipeType;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe: { title, _id, preview } }) => {
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
};

export default RecipeItem;
