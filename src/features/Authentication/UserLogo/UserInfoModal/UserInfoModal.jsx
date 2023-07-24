import Input from '../../../../ui/Input/Input';
import styles from './UserInfoModal.module.scss';
import { VscClose } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { RxPencil1 } from 'react-icons/rx';
import Button from '../../../../ui/Button/Button';
import { AiFillPlusCircle } from 'react-icons/ai';

function UserInfoModal({ onClose }) {
  return (
    <form className={styles.infoModal}>
      <span className={styles.closeBtn} onClick={onClose}>
        <VscClose />
      </span>
      <label htmlFor="uploadBtn" className={styles.fileInput}>
        <FiUser />
        <input type="file" id="uploadBtn" />
        <AiFillPlusCircle id="plus" />
      </label>
      <Input leftIcon={<FiUser />} rightIcon={<RxPencil1 />} type="text" />
      <Button type="rect" color="green">
        Save changes
      </Button>
    </form>
  );
}

export default UserInfoModal;
