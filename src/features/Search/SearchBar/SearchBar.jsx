import { useNavigate } from 'react-router-dom';
import Button from 'src/ui/Button/Button';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

function SearchBar({ btnColor, handleSubmit = null, searchText = null, setSearchText = null }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleRedirect(e) {
    e.preventDefault();
    if (inputValue) navigate(`/search?query=${inputValue}&queryType=title`);
  }

  function handleSearch(e) {
    e.preventDefault();
    handleSubmit?.(e);
  }

  return (
    <div className={styles.searchWrapper}>
      {searchText !== null ? (
        <input
          type="text"
          className={styles.input}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      ) : (
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      )}

      <Button
        shape="curv"
        color={btnColor}
        type="submit"
        onClick={handleSubmit ? handleSearch : handleRedirect}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
