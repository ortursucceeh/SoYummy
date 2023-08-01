// import Search from '../../features/Search/Search';
import SearchForm from '../../features/Search/SearchForm/SearchForm';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './SearchPage.module.scss';

function SearchPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Search</PageTitle>
      <div className={styles.search}>
        <SearchForm />
      </div>
    </div>
  );
}

export default SearchPage;
