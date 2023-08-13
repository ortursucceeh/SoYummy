import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './RecipeDescriptionFields.module.scss';
import { useState } from 'react';
import { CATEGORIES_LIST } from '../../../../utils/categories';
import { COOKING_TIMES } from '../../../../utils/recipes';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { TbCameraUp } from 'react-icons/tb';

function RecipeDescriptionFields() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCooking, setIsOpenCooking] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [cookingTime, setCookingTimeValue] = useState(0);

  const refCategory = useOutsideClick(() => setIsOpenCategory(false));
  const refCooking = useOutsideClick(() => setIsOpenCooking(false));

  return (
    <div className={styles.wrapper}>
      <label htmlFor="uploadBtn" className={styles.fileInput}>
        <TbCameraUp />
        <input
          type="file"
          id="uploadBtn"
          // onChange={handleFileChange}
          // disabled={isLoading}
          accept="images/*,.png,.jpg,.jpeg"
        />
      </label>

      <div className={styles.fields}>
        <div className={styles.inputWrapper}>
          <input id="title" type="text" className={styles.input} placeholder="Recipe title" />
        </div>

        <div className={styles.inputWrapper}>
          <input id="about" type="text" className={styles.input} placeholder="About recipe" />
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
              <ul className={styles.optionList} ref={refCategory}>
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
              <ul className={styles.optionList} ref={refCooking}>
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
