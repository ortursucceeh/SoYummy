import Image from '../../../ui/Image/Image';
import { formatInstructions } from '../../../utils/recipes';
import styles from './RecipePreparation.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';

function RecipePreparation({ preparation, preview }) {
  const instructions = formatInstructions(preparation);
  return (
    <div className={styles.wrapper}>
      <div className={styles.preparation}>
        <h4 className={styles.header}>Recipe Preparation</h4>
        <ol className={styles.instructions}>
          {instructions.map((instruction, indx) => (
            <li key={indx} className={styles.step}>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
      <Image
        src={preview}
        alt="recipePreview"
        defaultImage={RecipeNotFound}
        className={styles.preview}
      />
    </div>
  );
}

export default RecipePreparation;
