import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useOutsideClick(onClose);

  return isOpen
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal} ref={modalRef}>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
