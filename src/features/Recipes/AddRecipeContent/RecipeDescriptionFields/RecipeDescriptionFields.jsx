import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './RecipeDescriptionFields.module.scss';
import { useState } from 'react';
import { CATEGORIES_LIST } from '../../../../utils/categories';
import { COOKING_TIMES } from '../../../../utils/recipes';
function RecipeDescriptionFields() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCooking, setIsOpenCooking] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [cookingTime, setCookingTimeValue] = useState(0);

  return (
    <div className={styles.wrapper}>
      <input type="file" className={styles.fileInput} />

      <div className={styles.fields}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title" className={styles.label}>
            Recipe title
          </label>
          <input id="title" type="text" className={styles.input} />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="about" className={styles.label}>
            About recipe
          </label>
          <input id="about" type="text" className={styles.input} />
        </div>

        <div className={styles.inputWrapper}>
          <span className={styles.label}>Category</span>
          <div
            name="categoryName"
            className={styles.select}
            onClick={() => setIsOpenCategory(!isOpenCategory)}
          >
            <span className={styles.value}>{categoryValue}</span>
            <RiArrowDownSLine />
            {isOpenCategory && (
              <ul className={styles.optionList}>
                {CATEGORIES_LIST.map(category => (
                  <li
                    className={styles.option}
                    data-value={category}
                    onClick={e => setCategoryValue(e.target.dataset.value)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <span className={styles.label}>Cooking time</span>
          <div
            name="cookingTime"
            className={styles.select}
            onClick={() => setIsOpenCooking(!isOpenCooking)}
          >
            <span className={styles.value}>{cookingTime} min</span>
            <RiArrowDownSLine />
            {isOpenCooking && (
              <ul className={styles.optionList}>
                {COOKING_TIMES.map(time => (
                  <li
                    className={styles.option}
                    data-value={time}
                    onClick={e => setCookingTimeValue(e.target.dataset.value)}
                  >
                    {time} min
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDescriptionFields;
