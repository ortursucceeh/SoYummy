import styles from './Container.module.scss';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode | ReactNode[];
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
