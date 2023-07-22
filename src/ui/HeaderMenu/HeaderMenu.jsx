import styles from './HeaderMenu.module.css';
import SearchIcon from './SearchIcon';

function HeaderMenu() {
  return (
    <ul className={styles.nav}>
      <li>Categories</li>
      <li>Add recipes</li>
      <li>My recipes</li>
      <li>Favorites</li>
      <li>Shopping list</li>
      <SearchIcon />
    </ul>
  );
}

export default HeaderMenu;
