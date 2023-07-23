import styles from './HeaderNav.module.scss';
import { LuSearch } from 'react-icons/lu';

function HeaderNav() {
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

export default HeaderNav;
