import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RxPencil1 } from 'react-icons/rx';
import { VscClose } from 'react-icons/vsc';
import defaultImage from 'src/assets/NotFound/recipePreviewNotFound.png';
import { UserType } from 'src/types/User';
import Button from 'src/ui/Button/Button';
import Image from 'src/ui/Image/Image';
import Input from 'src/ui/Input/Input';
import LoaderMini from 'src/ui/Loaders/LoaderMini';
import Modal from 'src/ui/Modal/Modal';
import { formatWord } from 'src/utils/functions';
import { useUser } from '../useUser';
import styles from './UserInfoModal.module.scss';
import { useUpdateUser } from './useUpdateUser';

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const { name, avatarURL } = user as UserType;
  const { updateUser, isLoading } = useUpdateUser();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputName, setInputName] = useState<string>(name);

  const handleSaveChanges = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    inputName && formData.append('name', inputName);
    selectedFile && formData.append('avatar', selectedFile, selectedFile.name);
    updateUser(formData);
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFile(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.infoModal}>
        <span className={styles.closeBtn} onClick={onClose}>
          <VscClose />
        </span>
        <label htmlFor="avatarUpload" className={styles.fileInput}>
          {avatarURL ? (
            <Image src={avatarURL} defaultImage={defaultImage} alt="User avatar" />
          ) : (
            <FiUser />
          )}
          <AiFillPlusCircle id="plus" />
          <input
            type="file"
            id="avatarUpload"
            onChange={handleFileChange}
            disabled={isLoading}
            accept="images/*,.png,.jpg,.jpeg"
          />
        </label>
        {selectedFile && (
          <span className={styles.fileName}>New: {formatWord(35, selectedFile.name)}</span>
        )}
        <Input
          name="user"
          leftIcon={<FiUser />}
          rightIcon={<RxPencil1 />}
          type="text"
          value={inputName}
          disabled={isLoading}
          onChange={e => setInputName(e.target.value)}
        />
        <Button shape="rect" color="green" disabled={isLoading} onClick={handleSaveChanges}>
          {isLoading ? <LoaderMini /> : 'Save changes'}
        </Button>
      </form>
    </Modal>
  );
};

export default UserInfoModal;
