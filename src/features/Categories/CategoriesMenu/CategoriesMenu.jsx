import styles from './CategoriesMenu.module.scss';
import { CATEGORIES_LIST } from 'src/utils/constants';
import { useState } from 'react';
import { useScrollable } from './useScrollable';
import { useNavigate, useParams } from 'react-router-dom';

function CategoriesMenu() {
  const { categoryName } = useParams();
  const activeTabIndex = categoryName
    ? CATEGORIES_LIST.findIndex(el => el.toLowerCase() === categoryName.toLowerCase())
    : null;
  const [activeTab, setActiveTab] = useState(activeTabIndex ?? 0);
  const [ref, scrollListeners] = useScrollable();
  const navigate = useNavigate();

  function handleChangeCategory(e) {
    navigate(`/categories/${e.target.innerText.toLowerCase()}`);
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
