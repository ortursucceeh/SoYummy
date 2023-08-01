import Search from '../Search';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import styles from './SearchForm.module.scss';

function SearchForm() {
  return (
    <div className={styles.wrapper}>
      <Search btnColor="green" />
      <SearchTypeSelector />
    </div>
  );
}

export default SearchForm;
