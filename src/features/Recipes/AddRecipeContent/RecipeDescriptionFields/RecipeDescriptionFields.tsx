import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './RecipeDescriptionFields.module.scss';
import { useState } from 'react';
import { CATEGORIES_LIST } from 'src/utils/constants';
import { COOKING_TIMES } from 'src/utils/constants';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { TbCameraUp } from 'react-icons/tb';
import { formatWord } from 'src/utils/functions';
import { CategoriesType } from 'src/types/Category';

const RecipeDescriptionFields = ({ recipe, setRecipe }) => {
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [isOpenCooking, setIsOpenCooking] = useState<boolean>(false);

  const refCategory = useOutsideClick(() => setIsOpenCategory(false));
  const refCooking = useOutsideClick(() => setIsOpenCooking(false));

  const { title, description, category, time, fullImage } = recipe;

  const changeTitle = (newTitle: string) => {
    setRecipe({ ...recipe, title: newTitle });
  };

  const changeDescription = (newDescr: string) => {
    setRecipe({ ...recipe, description: newDescr });
  };

  const changeCategory = (newCategory: string) => {
    setRecipe({ ...recipe, category: newCategory });
  };

  const changeFullImage = (newFile: File) => {
    setRecipe({ ...recipe, fullImage: newFile });
  };

  const changeCookingTime = (newTime: string) => {
    setRecipe({ ...recipe, time: newTime });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) changeFullImage(e.target.files[0]);
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
                    onClick={e => changeCategory((e.target as HTMLElement).dataset.value)}
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
};

export default RecipeDescriptionFields;
