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
        <button className={styles.logoutBtn}>Log out</button>
        <button className={styles.closeBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default LogoutModal;
