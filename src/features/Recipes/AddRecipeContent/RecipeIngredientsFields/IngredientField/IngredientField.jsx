import React, { useState } from 'react';
import styles from './IngredientField.module.scss';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ingredientsList } from '../../../../../utils/ingredients';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

function IngredientField({ ingId, ingTitle, onDelete, changeIngredient, changeIngredientMeasure }) {
  const [value, setValue] = useState(ingTitle);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const refIngredient = useOutsideClick(() => setIsOptionsOpen(false));

  function hangleChangeName({ target }) {
    setValue(target.innerText);
    changeIngredient(ingId, target.dataset.value, target.innerText);
  }

  function hangleChangeMeasure({ target }) {
    changeIngredientMeasure(ingId, target.value);
  }

  return (
    <div className={styles.ingredientField}>
      <div className={styles.inputWrapper} onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <div name="ingredientName" className={styles.select}>
          <span className={styles.value}>{value.length ? value : 'Choose an ingredient'}</span>
          <RiArrowDownSLine />
          {isOptionsOpen && (
            <ul className={styles.optionList} ref={refIngredient}>
              {ingredientsList.map(ing => (
                <li
                  className={styles.option}
                  key={ing._id}
                  data-value={ing._id}
                  onClick={hangleChangeName}
                >
                  {ing.ttl}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <input
        name="measure"
        type="text"
        placeholder="Measure"
        className={styles.measure}
        onChange={hangleChangeMeasure}
      />
      <span onClick={onDelete} className={styles.close}>
        <GrClose />
      </span>
    </div>
  );
}

export default React.memo(IngredientField);
