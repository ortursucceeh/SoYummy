import { useState } from 'react';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import styles from './SearchForm.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchType, setSearchType] = useState('Title');
  const [searchText, setSearchText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ searchText: searchText, searchType: searchType });
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
