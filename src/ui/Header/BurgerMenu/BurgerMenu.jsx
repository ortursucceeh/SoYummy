import Logo from '../../Logo/Logo';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './BurgerMenu.module.scss';
import { VscClose } from 'react-icons/vsc';
import BurgerDecor from './../../../assets/burger-decoration.png';

function BurgerMenu({ isopen, closeMenu }) {
  return (
    <div className={`${styles.menu} ${isopen ? styles.open : ''}`}>
      <div className={styles.icons}>
        <Logo type="header" />
        <VscClose onClick={closeMenu} />
      </div>
      <div className={styles.pages}>
        <HeaderNav />
      </div>
      <img src={BurgerDecor} alt="flowers" />
    </div>
  );
}

export default BurgerMenu;
