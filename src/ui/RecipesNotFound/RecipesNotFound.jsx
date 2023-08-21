import styles from './RecipesNotFound.module.scss';
import searchNotFound from 'src/assets/NotFound/searchNotFound.png';

function RecipesNotFound({ text }) {
  return (
    <div className={styles.notFoundWrapper}>
      <img src={searchNotFound} alt="notFoundImage" className={styles.img} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default RecipesNotFound;
