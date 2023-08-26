import { useState } from 'react';
import styles from './SearchTypeSelector.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { useSearchParams } from 'react-router-dom';
import { SearchType } from 'src/types/Recipe';

interface SearchTypeSelectorProps {
  searchType: SearchType;
  setSearchType: (str: SearchType) => void;
}

const SearchTypeSelector: React.FC<SearchTypeSelectorProps> = ({ searchType, setSearchType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [_, setSearchParams] = useSearchParams();

  const ref = useOutsideClick(() => setIsOpen(false));

  const handleChangeType = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.target instanceof HTMLLIElement) {
      const searhType = e.target.dataset.value as SearchType;
      setSearchType(searhType);
      setSearchParams(prev => {
        prev.set('queryType', searhType);
        return prev;
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Search by:</span>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.value}>
          {searchType.slice(0, 1).toUpperCase() + searchType.slice(1)}
        </span>
        <RiArrowDownSLine />
        {isOpen && (
          <ul className={styles.optionList} ref={ref}>
            <li className={styles.option} data-value="title" onClick={handleChangeType}>
              Title
            </li>
            <li className={styles.option} data-value="ingredient" onClick={handleChangeType}>
              Ingredients
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchTypeSelector;
