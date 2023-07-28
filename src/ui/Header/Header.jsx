import UserLogo from '../../features/Authentication/UserLogo/UserLogo';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import { useUser } from '../../features/Authentication/useUser';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const { user } = useUser();

  return (
    <header>
      <Container>
        <div className={styles.header}>
          <Logo type="header" />
          <HeaderNav />
          <BurgerMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />

          <span className={styles.items}>
            <UserLogo user={user} />
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
