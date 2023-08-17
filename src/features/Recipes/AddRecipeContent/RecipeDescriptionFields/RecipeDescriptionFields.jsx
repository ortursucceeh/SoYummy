import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './RecipeDescriptionFields.module.scss';
import React, { useState } from 'react';
import { CATEGORIES_LIST } from '../../../../utils/categories';
import { COOKING_TIMES } from '../../../../utils/recipes';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { TbCameraUp } from 'react-icons/tb';
import { formatWord } from '../../../../utils/functions';

function RecipeDescriptionFields({ recipe, setRecipe }) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCooking, setIsOpenCooking] = useState(false);

  const refCategory = useOutsideClick(() => setIsOpenCategory(false));
  const refCooking = useOutsideClick(() => setIsOpenCooking(false));

  const { title, description, category, time, fullImage } = recipe;

  const changeTitle = newTitle => {
    setRecipe({ ...recipe, title: newTitle });
  };

  const changeDescription = newDescr => {
    setRecipe({ ...recipe, description: newDescr });
  };

  const changeCategory = newCategory => {
    setRecipe({ ...recipe, category: newCategory });
  };

  const changeFullImage = newFile => {
    setRecipe({ ...recipe, fullImage: newFile });
  };

  const changeCookingTime = newTime => {
    setRecipe({ ...recipe, time: newTime });
  };

  const handleFileChange = e => {
    changeFullImage(e.target.files[0]);
  };

  return (
    <div className={styles.recipeDescr}>
      <label htmlFor="uploadBtn" className={styles.fileInput}>
        <TbCameraUp />
        <input
          type="file"
          id="uploadBtn"
          accept="images/*,.png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
        {fullImage && <span className={styles.fileName}>{formatWord(30, fullImage.name)}</span>}
      </label>

      <div className={styles.fields}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            placeholder="Recipe title"
            value={title}
            required
            onChange={e => changeTitle(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            placeholder="About recipe"
            required
            value={description}
            onChange={e => changeDescription(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <span className={styles.label}>Category</span>
          <div className={styles.select} onClick={() => setIsOpenCategory(!isOpenCategory)}>
            <span className={styles.value}>{category}</span>
            <RiArrowDownSLine />
            {isOpenCategory && (
              <ul className={styles.optionList} ref={refCategory}>
                {CATEGORIES_LIST.map(category => (
                  <li
                    key={category}
                    className={styles.option}
                    data-value={category}
                    onClick={e => changeCategory(e.target.dataset.value)}
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
          <div className={styles.select} onClick={() => setIsOpenCooking(!isOpenCooking)}>
            <span className={styles.value}>{time} min</span>
            <RiArrowDownSLine />
            {isOpenCooking && (
              <ul className={styles.optionList} ref={refCooking}>
                {COOKING_TIMES.map(time => (
                  <li
                    key={time}
                    className={styles.option}
                    data-value={time}
                    onClick={e => changeCookingTime(e.target.dataset.value)}
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

export default React.memo(RecipeDescriptionFields);
