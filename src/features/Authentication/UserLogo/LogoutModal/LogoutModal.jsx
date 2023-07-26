import Button from '../../../../ui/Button/Button';
import Modal from '../../../../ui/Modal/Modal';
import styles from './LogoutModal.module.scss';
import { VscClose } from 'react-icons/vsc';

function LogoutModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.logoutModal}>
        <span className={styles.close} onClick={onClose}>
          <VscClose />
        </span>
        <span className={styles.title}>Are you sure you want to log out?</span>
        <div className={styles.buttons}>
          <Button type="rect" color="green">
            Log out
          </Button>
          <Button type="rect" color="grey" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default LogoutModal;
