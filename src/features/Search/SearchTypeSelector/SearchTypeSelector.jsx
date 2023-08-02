import { useState } from 'react';
import styles from './SearchTypeSelector.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

function SearchTypeSelector({ searchType, setSearchType }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

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
              onClick={e => setSearchType(e.target.dataset.value)}
            >
              Title
            </span>
            <span
              value="ingredients"
              className={styles.option}
              data-value="ingredients"
              onClick={e => setSearchType(e.target.dataset.value)}
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
