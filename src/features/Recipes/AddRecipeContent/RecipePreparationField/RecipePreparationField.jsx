import React from 'react';
import styles from './RecipePreparationField.module.scss';

function RecipePreparationField({ preparation, setPreparation }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subheader}>Recipe Preparation</h3>
      <textarea
        className={styles.preparation}
        id="preparation"
        name="preparation"
        placeholder="Enter recipe"
        value={preparation}
        onChange={e => setPreparation(e.target.value)}
      />
    </div>
  );
}

export default React.memo(RecipePreparationField);
