import { memo, useCallback, useMemo, useState } from 'react';
import styles from './IngredientField.module.scss';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ingredientsList } from '../../../../../utils/ingredients';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

function IngredientField({ ingId, onDelete, changeIngredient, changeIngredientMeasure }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const refIngredient = useOutsideClick(() => setIsOptionsOpen(false));

  const ingredients = useMemo(
    () => ingredientsList.filter(ing => ing.ttl.toLowerCase().includes(inputValue.toLowerCase())),
    [inputValue]
  );

  const handleChangeName = useCallback(
    ({ target }) => {
      setInputValue(target.innerText);
      changeIngredient(ingId, target.dataset.value, target.innerText);
    },
    [changeIngredient, ingId]
  );

  const handleChangeMeasure = useCallback(
    ({ target }) => changeIngredientMeasure(ingId, target.value),
    [changeIngredientMeasure, ingId]
  );

  return (
    <div className={styles.ingredientField}>
      <div className={styles.inputWrapper} onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <input
          type="text"
          className={styles.input}
          placeholder="Choose an ingredient"
          required
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <RiArrowDownSLine />
        {isOptionsOpen && (
          <ul className={styles.optionList} ref={refIngredient}>
            {ingredients.length ? (
              ingredients.map(ing => (
                <li
                  className={styles.option}
                  key={ing._id}
                  data-value={ing._id}
                  onClick={handleChangeName}
                >
                  {ing.ttl}
                </li>
              ))
            ) : (
              <li className={styles.option}>No ingredients found</li>
            )}
          </ul>
        )}
      </div>
      <input placeholder="Measure" className={styles.measure} onChange={handleChangeMeasure} />
      <span onClick={onDelete} className={styles.close}>
        <GrClose />
      </span>
    </div>
  );
}

export default memo(IngredientField);
