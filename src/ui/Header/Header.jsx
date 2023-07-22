import HeaderMenu from '../HeaderMenu/HeaderMenu';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './Header.module.css';
import LogoIcon from './LogoIcon';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <HeaderMenu />
      <UserAvatar />
    </div>
  );
}

export default Header;
