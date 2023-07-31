import Logo from '../../Logo/Logo';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './BurgerMenu.module.scss';
import { VscClose } from 'react-icons/vsc';
import BurgerDecor from './../../../assets/burger-decoration.png';
import { createPortal } from 'react-dom';

function BurgerMenu({ isOpen, onClose }) {
  document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

  return createPortal(
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.icons}>
        <Logo type="header" />
        <VscClose onClick={onClose} />
      </div>
      <div className={styles.pages}>
        <HeaderNav />
      </div>
      <img src={BurgerDecor} alt="leaves" />
    </div>,
    document.body
  );
}

export default BurgerMenu;
