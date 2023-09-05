import { LuSearch } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

const HeaderNav: React.FC = () => {
  function isActive(navData: { isActive: boolean }) {
    return navData.isActive ? styles.active : '';
  }

  return (
    <ul className={styles.nav}>
      <NavLink className={isActive} to="/categories">
        Categories
      </NavLink>
      <NavLink className={isActive} to="/add">
        Add recipes
      </NavLink>
      <NavLink className={isActive} to="/my">
        My recipes
      </NavLink>
      <NavLink className={isActive} to="/favorite">
        Favorites
      </NavLink>
      <NavLink className={isActive} to="/search">
        <LuSearch />
      </NavLink>
    </ul>
  );
};

export default HeaderNav;
