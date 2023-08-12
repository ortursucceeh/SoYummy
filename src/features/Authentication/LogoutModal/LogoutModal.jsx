import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import { useLogout } from './useLogout';
import styles from './LogoutModal.module.scss';
import { VscClose } from 'react-icons/vsc';

function LogoutModal({ isOpen, onClose }) {
  const { logout, isLoading } = useLogout();

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.logoutModal}>
        <span className={styles.close} onClick={onClose}>
          <VscClose />
        </span>
        <span className={styles.title}>Are you sure you want to log out?</span>
        <div className={styles.buttons}>
          <Button shape="rect" color="green" disabled={isLoading} onClick={handleLogout}>
            Log out
          </Button>
          <Button shape="rect" color="grey" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default LogoutModal;
