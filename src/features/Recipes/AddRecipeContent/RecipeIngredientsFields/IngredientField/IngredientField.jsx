import { useState } from 'react';
import styles from './IngredientField.module.scss';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine } from 'react-icons/ri';
import { CATEGORIES_LIST } from '../../../../../utils/categories';

function IngredientField({ onDelete }) {
  const [value, setValue] = useState('');
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <div className={styles.ingredientField}>
      <div className={styles.inputWrapper} onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <div name="ingredientName" className={styles.select}>
          <span className={styles.value}>{value.length ? value : 'Choose an ingredient'}</span>
          <RiArrowDownSLine />
          {isOptionsOpen && (
            <ul className={styles.optionList}>
              {CATEGORIES_LIST.map(category => (
                <li
                  className={styles.option}
                  data-value={category}
                  onClick={e => setValue(e.target.dataset.value)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <input name="measure" type="text" placeholder="Measure" className={styles.measure} />
      <span onClick={onDelete} className={styles.close}>
        <GrClose />
      </span>
    </div>
  );
}

export default IngredientField;
