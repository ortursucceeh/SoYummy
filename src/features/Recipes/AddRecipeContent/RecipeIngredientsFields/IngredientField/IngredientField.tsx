import { memo, useMemo, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine } from 'react-icons/ri';
import useDebounce from 'src/hooks/useDebounce';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { ingredientsList } from 'src/utils/ingredients';
import styles from './IngredientField.module.scss';

interface IngredientFieldProps {
  ingId: string;
  onDelete: (e: React.MouseEvent<HTMLSpanElement>) => void;
  changeIngredient: (id: string, ingId: string, title: string) => void;
  changeIngredientMeasure: (id: string, measure: string) => void;
}

const IngredientField: React.FC<IngredientFieldProps> = ({
  ingId,
  onDelete,
  changeIngredient,
  changeIngredientMeasure,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const refIngredient = useOutsideClick(() => setIsOptionsOpen(false));

  const debouncedInputValue = useDebounce(inputValue, 150);

  const ingredients = useMemo(
    () =>
      ingredientsList.filter(ing =>
        ing.ttl.toLowerCase().includes(debouncedInputValue.toLowerCase())
      ),
    [debouncedInputValue]
  );

  const handlePickName = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement & { dataset: { value: string } };
    setInputValue(target.innerText);
    changeIngredient(ingId, target.dataset.value, target.innerText);
  };

  const handleChangeMeasure = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeIngredientMeasure(ingId, e.target.value);

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
                  onClick={handlePickName}
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
};

export default memo(IngredientField);
