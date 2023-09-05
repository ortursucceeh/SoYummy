import { createPortal } from 'react-dom';
import { VscClose } from 'react-icons/vsc';
import BurgerDecor from 'src/assets/Decor/burger-decoration.png';
import Logo from '../../Logo/Logo';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

  return createPortal(
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.icons}>
        <Logo />
        <VscClose onClick={onClose} />
      </div>
      <div className={styles.pages}>
        <HeaderNav />
      </div>
      <img src={BurgerDecor} alt="leaves" />
    </div>,
    document.body
  );
};

export default BurgerMenu;
