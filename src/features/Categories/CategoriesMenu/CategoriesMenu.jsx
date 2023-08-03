import styles from './CategoriesMenu.module.scss';
import { CATEGORIES_LIST } from '../../../utils/categories';
// import Scrollable from './Scrollable';
import { useState } from 'react';
import { useScroll } from './useScroll';

function CategoriesMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, scrollListeners] = useScroll();

  return (
    <div className={styles.menu}>
      <div ref={ref} {...scrollListeners} className={styles.categoriesList}>
        {CATEGORIES_LIST.map((category, indx) => (
          <span
            className={`${styles.categoryName} ${activeTab === indx ? styles.active : ''}`}
            key={category}
            onClick={() => setActiveTab(indx)}
          >
            {category}
          </span>
        ))}
      </div>
      <span className={styles.underline}></span>
    </div>
  );
}

export default CategoriesMenu;

// <Scrollable className={styles.categoriesList}></Scrollable>
