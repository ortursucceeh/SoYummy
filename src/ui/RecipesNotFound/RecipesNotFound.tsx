import searchNotFound from 'src/assets/NotFound/searchNotFound.png';
import styles from './RecipesNotFound.module.scss';

interface RecipesNotFoundProps {
  text: string;
}

const RecipesNotFound: React.FC<RecipesNotFoundProps> = ({ text }) => {
  return (
    <div className={styles.notFoundWrapper}>
      <img src={searchNotFound} alt="notFoundImage" className={styles.img} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default RecipesNotFound;
