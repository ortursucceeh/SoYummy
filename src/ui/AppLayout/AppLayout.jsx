import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from '../Header/Header';

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default AppLayout;
