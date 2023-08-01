import { useState } from 'react';
import styles from './SearchTypeSelector.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';

function SearchTypeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('title');

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
        <span className={styles.value}>{value.slice(0, 1).toUpperCase() + value.slice(1)}</span>
        <RiArrowDownSLine />
        {isOpen && (
          <div className={styles.optionList}>
            <span
              value="title"
              className={styles.option}
              onClick={e => setValue(e.target.innerText)}
            >
              Title
            </span>
            <span
              value="ingredients"
              className={styles.option}
              onClick={e => setValue(e.target.innerText)}
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
