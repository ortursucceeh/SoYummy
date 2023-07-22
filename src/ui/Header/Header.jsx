import HeaderMenu from '../HeaderMenu/HeaderMenu';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './Header.module.scss';
import { PiForkKnifeBold } from 'react-icons/pi';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <PiForkKnifeBold />
      </div>
      <HeaderMenu />
      <UserAvatar />
    </div>
  );
}

export default Header;
