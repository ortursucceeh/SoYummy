import Input from '../../../../ui/Input/Input';
import styles from './UserInfoModal.module.scss';
import { VscClose } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { RxPencil1 } from 'react-icons/rx';
import Button from '../../../../ui/Button/Button';
import { AiFillPlusCircle } from 'react-icons/ai';
import Modal from '../../../../ui/Modal/Modal';
import { useUpdateUser } from '../../useUpdateUser';
import { useState } from 'react';
import { useUser } from '../../useUser';
import Image from '../../../../ui/Image/Image';
import defaultImage from './../../../../assets/recipePreviewNotFound.png';

function UserInfoModal({ isOpen, onClose }) {
  const {
    user: { name, avatarURL },
  } = useUser();
  const { updateUser, isLoading } = useUpdateUser();
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputName, setInputName] = useState(name);

  function handleSaveChanges(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', inputName);
    formData.append('avatar', selectedFile);
    updateUser(formData);
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.infoModal}>
        <span className={styles.closeBtn} onClick={onClose}>
          <VscClose />
        </span>
        <label htmlFor="uploadBtn" className={styles.fileInput}>
          {avatarURL ? (
            <Image imageUrl={avatarURL} defaultImage={defaultImage} alt="User avatar" />
          ) : (
            <FiUser />
          )}
          <AiFillPlusCircle id="plus" />
          <input
            type="file"
            id="uploadBtn"
            onChange={handleFileChange}
            disabled={isLoading}
            accept="images/*,.png,.jpg,.jpeg"
          />
        </label>
        {selectedFile && (
          <span className={styles.fileName}>
            New:{' '}
            {selectedFile.name.length >= 30
              ? selectedFile.name.slice(0, 30) + '...'
              : selectedFile.name}
          </span>
        )}
        <Input
          leftIcon={<FiUser />}
          rightIcon={<RxPencil1 />}
          type="text"
          disabled={isLoading}
          value={inputName}
          onChange={e => setInputName(e.target.value)}
        />
        <Button shape="rect" color="green" disabled={isLoading} onClick={handleSaveChanges}>
          {isLoading ? 'Updating...' : 'Save changes'}
        </Button>
      </form>
    </Modal>
  );
}

export default UserInfoModal;
