import UserAvatar from './UserAvatar/UserAvatar';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState();

  return (
    <header>
      <Container>
        <div className={styles.header}>
          <Logo type="header" />
          <HeaderNav />
          <BurgerMenu isopen={menuIsOpen} closeMenu={() => setMenuIsOpen(false)} />

          <span className={styles.items}>
            <UserAvatar />
            <span className={styles.burger}>
              <HiOutlineMenuAlt2 onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </span>
          </span>
        </div>
      </Container>
    </header>
  );
}

export default Header;
