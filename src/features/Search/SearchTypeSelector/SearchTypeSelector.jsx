import { useState } from 'react';
import styles from './SearchTypeSelector.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSearchParams } from 'react-router-dom';

function SearchTypeSelector({ searchType, setSearchType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useOutsideClick(() => setIsOpen(false));

  function handleChangeType(e) {
    setSearchType(e.target.dataset.value);
    setSearchParams({ query: searchParams.get('query'), queryType: e.target.dataset.value });
  }
  return (
    <div className={styles.wrapper}>
      <label htmlFor="searchType" className={styles.label}>
        Search by:
      </label>

      <div
        name="searchType"
        id="searchType"
        className={styles.select}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.value}>
          {searchType.slice(0, 1).toUpperCase() + searchType.slice(1)}
        </span>
        <RiArrowDownSLine />
        {isOpen && (
          <div className={styles.optionList} ref={ref}>
            <span
              value="title"
              className={styles.option}
              data-value="title"
              onClick={handleChangeType}
            >
              Title
            </span>
            <span
              value="ingredients"
              className={styles.option}
              data-value="ingredients"
              onClick={handleChangeType}
            >
              Ingredients
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchTypeSelector;
