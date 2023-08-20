import styles from './PageTitle.module.scss';
import { memo } from 'react';

function PageTitle({ children }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

export default memo(PageTitle);
