import Image from 'src/ui/Image/Image';
import { formatInstructions } from 'src/utils/recipes';
import styles from './RecipePreparation.module.scss';
import RecipeNotFound from 'src/assets/NotFound/recipePreviewNotFound.png';

interface RecipePreparationProps {
  preparation: string;
  preview: string;
}
const RecipePreparation: React.FC<RecipePreparationProps> = ({ preparation, preview }) => {
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
};

export default RecipePreparation;
