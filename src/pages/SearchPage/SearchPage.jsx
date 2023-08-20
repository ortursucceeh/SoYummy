import SearchForm from 'src/features/Search/SearchForm/SearchForm';
import SearchedRecipeList from 'src/features/Search/SearchedRecipeList/SearchedRecipeList';
import PageTitle from 'src/ui/PageTitle/PageTitle';
import styles from './SearchPage.module.scss';

function SearchPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Search</PageTitle>
      <div className={styles.search}>
        <SearchForm />
      </div>

      <SearchedRecipeList />
    </div>
  );
}

export default SearchPage;
