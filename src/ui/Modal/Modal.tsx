import { createPortal } from 'react-dom';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from './Modal.module.scss';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
