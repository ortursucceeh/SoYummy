import styles from './HeaderMenu.module.scss';
import { LuSearch } from 'react-icons/lu';

function HeaderMenu() {
  return (
    <ul className={styles.nav}>
      <li>Categories</li>
      <li>Add recipes</li>
      <li>My recipes</li>
      <li>Favorites</li>
      <li>Shopping list</li>
      <LuSearch />
    </ul>
  );
}

export default HeaderMenu;
