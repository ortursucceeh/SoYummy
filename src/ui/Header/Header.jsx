import UserAvatar from './UserAvatar/UserAvatar';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <Logo type="header" />
      <HeaderNav />
      <UserAvatar />
    </div>
  );
}

export default Header;
