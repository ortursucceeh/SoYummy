import styles from './CategoriesMenu.module.scss';
import { CATEGORIES_LIST } from '../../../utils/categories';
// import Scrollable from './Scrollable';
import { useState } from 'react';
import { useScroll } from './useScroll';
import { useNavigate } from 'react-router-dom';

function CategoriesMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, scrollListeners] = useScroll();
  const navigate = useNavigate();

  function handleChangeCategory(e) {
    navigate(`/categories/${e.target.innerText}`);
  }

  return (
    <div className={styles.menu}>
      <div ref={ref} {...scrollListeners} className={styles.categoriesList}>
        {CATEGORIES_LIST.map((category, indx) => (
          <span
            className={`${styles.categoryName} ${activeTab === indx ? styles.active : ''}`}
            key={category}
            onClick={e => {
              handleChangeCategory(e);
              setActiveTab(indx);
            }}
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
