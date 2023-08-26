import { useNavigate } from 'react-router-dom';
import Button from 'src/ui/Button/Button';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

interface SearchBarProps {
  btnColor: 'green' | 'dark' | 'trans';
  handleSubmit?: (e: React.MouseEvent<HTMLElement>) => void;
  searchText?: string;
  setSearchText?: (str: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  btnColor,
  handleSubmit = null,
  searchText = null,
  setSearchText = null,
}) => {
  const [inputValue, setInputValue] = useState<string | null>(searchText);
  const navigate = useNavigate();

  const handleRedirect = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputValue) navigate(`/search?query=${inputValue}&queryType=title`);
  };

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleSubmit?.(e);
  };

  return (
    <div className={styles.searchWrapper}>
      {searchText !== null ? (
        <input
          type="text"
          className={styles.input}
          value={searchText}
          onChange={e => setSearchText?.(e.target.value)}
        />
      ) : (
        <input
          type="text"
          className={styles.input}
          value={inputValue ? inputValue : ''}
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
};

export default SearchBar;
