import UserLogo from 'src/features/Authentication/UserLogo/UserLogo';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNav />
      <BurgerMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />

      <div className={styles.items}>
        <UserLogo />
        <span className={styles.burger}>
          <HiOutlineMenuAlt2 onClick={() => setMenuIsOpen(!menuIsOpen)} />
        </span>
      </div>
    </header>
  );
};

export default memo(Header);
