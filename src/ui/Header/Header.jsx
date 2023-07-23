import UserAvatar from './UserAvatar/UserAvatar';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';

function Header() {
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <Logo type="header" />
          <HeaderNav />
          <UserAvatar />
        </div>
      </Container>
    </header>
  );
}

export default Header;
