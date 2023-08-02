import { useState } from 'react';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import styles from './SearchForm.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState(searchParams.get('query') ?? '');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: searchText, queryType: searchType });
  }

  return (
    <form className={styles.wrapper}>
      <SearchBar
        btnColor="green"
        searchText={searchText}
        setSearchText={setSearchText}
        handleSubmit={handleSubmit}
      />
      <SearchTypeSelector searchType={searchType} setSearchType={setSearchType} />
    </form>
  );
}

export default SearchForm;
