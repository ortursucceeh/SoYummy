import Button from '../../../../ui/Button/Button';
import styles from './LogoutModal.module.scss';
import { VscClose } from 'react-icons/vsc';

function LogoutModal({ onClose }) {
  return (
    <form className={styles.logoutModal}>
      <span className={styles.close} onClick={onClose}>
        <VscClose />
      </span>
      <span>Are you sure you want to log out?</span>
      <div className={styles.buttons}>
        <Button type="rect" color="green">
          Log out
        </Button>
        <Button type="rect" color="grey" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default LogoutModal;
