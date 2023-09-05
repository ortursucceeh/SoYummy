import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchType } from 'src/types/Recipe';
import SearchBar from '../SearchBar/SearchBar';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import styles from './SearchForm.module.scss';

const SearchForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchType, setSearchType] = useState<SearchType>('title');
  const [searchText, setSearchText] = useState(searchParams.get('query') ?? '');

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchParams({ query: searchText, queryType: searchType });
  };

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
};

export default SearchForm;
