import { useState } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { RxPencil1 } from 'react-icons/rx';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import Button from 'src/ui/Button/Button';
import LogoutModal from '../LogoutModal/LogoutModal';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import styles from './UserLogoModal.module.scss';

interface UserLogoModalProps {
  onClose: () => void;
}
const UserLogoModal: React.FC<UserLogoModalProps> = ({ onClose }) => {
  const [isShowInfoModal, setIsShowInfoModal] = useState<boolean>(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState<boolean>(false);

  document.body.style.overflowY = isShowInfoModal || isShowLogoutModal ? 'hidden' : 'auto';

  const ref = useOutsideClick(onClose);

  if (isShowInfoModal)
    return <UserInfoModal isOpen={isShowInfoModal} onClose={() => setIsShowInfoModal(false)} />;
  if (isShowLogoutModal)
    return <LogoutModal isOpen={isShowLogoutModal} onClose={() => setIsShowLogoutModal(false)} />;

  return (
    <div className={styles.userModal} ref={ref}>
      <div>
        <span onClick={() => setIsShowInfoModal(!isShowInfoModal)}>Edit profile</span>
        <RxPencil1 onClick={() => setIsShowInfoModal(!isShowInfoModal)} />
      </div>
      <Button shape="curv" color="green" onClick={() => setIsShowLogoutModal(!isShowLogoutModal)}>
        Log out <LuArrowRight />
      </Button>
    </div>
  );
};

export default UserLogoModal;
