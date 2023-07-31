import Button from '../../../ui/Button/Button';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.searchWrapper}>
      <input type="text" className={styles.input} />
      <Button type="curv" color="dark">
        Search
      </Button>
    </div>
  );
}

export default Search;
