import styles from './PageTitle.module.scss';
import { memo } from 'react';

interface PageTitleProps {
  children: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default memo(PageTitle);
