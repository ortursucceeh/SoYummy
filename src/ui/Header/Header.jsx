import UserLogo from '../../features/Authentication/UserLogo/UserLogo';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import { useUser } from '../../features/Authentication/useUser';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <Logo type="header" />
      <HeaderNav />
      <BurgerMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />

      <div className={styles.items}>
        <UserLogo user={user} />
        <span className={styles.burger}>
          <HiOutlineMenuAlt2 onClick={() => setMenuIsOpen(!menuIsOpen)} />
        </span>
      </div>
    </header>
  );
}

export default Header;
