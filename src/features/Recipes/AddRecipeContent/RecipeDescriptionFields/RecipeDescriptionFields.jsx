import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './RecipeDescriptionFields.module.scss';
import React, { useState } from 'react';
import { CATEGORIES_LIST } from '../../../../utils/categories';
import { COOKING_TIMES } from '../../../../utils/recipes';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { TbCameraUp } from 'react-icons/tb';

function RecipeDescriptionFields({
  title,
  setTitle,
  description,
  setDescription,
  selectedFile,
  setSelectedFile,
  categoryValue,
  setCategory,
  cookingTime,
  setCookingTime,
}) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCooking, setIsOpenCooking] = useState(false);

  const refCategory = useOutsideClick(() => setIsOpenCategory(false));
  const refCooking = useOutsideClick(() => setIsOpenCooking(false));

  function handleFileChange(e) {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="uploadBtn" className={styles.fileInput}>
        <TbCameraUp />
        <input
          type="file"
          id="uploadBtn"
          accept="images/*,.png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <span className={styles.fileName}>
            New:{' '}
            {selectedFile.name.length >= 30
              ? selectedFile.name.slice(0, 30) + '...'
              : selectedFile.name}
          </span>
        )}
      </label>

      <div className={styles.fields}>
        <div className={styles.inputWrapper}>
          <input
            id="title"
            type="text"
            className={styles.input}
            placeholder="Recipe title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            id="about"
            type="text"
            className={styles.input}
            placeholder="About recipe"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
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
                    onClick={e => setCategory(e.target.dataset.value)}
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
                    onClick={e => setCookingTime(e.target.dataset.value)}
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
