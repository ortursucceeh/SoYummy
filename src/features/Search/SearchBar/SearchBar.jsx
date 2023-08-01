import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../ui/Button/Button';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

// function SearchBar({ btnColor, searchValue = null, setSearchValue = null, handleSubmit }) {
//   const [inputValue, setInputValue] = useState();

//   return (
//     <div className={styles.searchWrapper}>
//       {searchValue ? (
//         <input
//           type="text"
//           className={styles.input}
//           value={searchValue}
//           onChange={e => setSearchValue(e.target.value)}
//         />
//       ) : (
//         <input
//           type="text"
//           className={styles.input}
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//         />
//       )}

//       <Link to="/search">
//         <Button shape="curv" color={btnColor} type="submit" onClick={handleSubmit}>
//           Search
//         </Button>
//       </Link>
//     </div>
//   );
// }

function SearchBar({ btnColor, handleSubmit, searchText = null, setSearchText = null }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('searchText') ?? '');

  function handleSearch(e) {
    e.preventDefault();
    console.log('inputValue :>> ', inputValue);
    console.log('searchText :>> ', searchText);
    handleSubmit(e);
    // console.log(searchParams);
    // setSearchParams({ searchType: searchParams.get('searchType'), searchText: inputValue });
    // console.log('handleSearch');
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

      <Link to="/search">
        <Button shape="curv" color={btnColor} type="submit" onClick={handleSearch}>
          Search
        </Button>
      </Link>
    </div>
  );
}

export default SearchBar;
