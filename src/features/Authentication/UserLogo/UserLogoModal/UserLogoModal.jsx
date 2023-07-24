import styles from './UserLogoModal.module.scss';
import { RxPencil1 } from 'react-icons/rx';
import { LuArrowRight } from 'react-icons/lu';
import { useState } from 'react';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';
import Button from '../../../../ui/Button/Button';

function UserLogoModal() {
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);

  if (isShowInfoModal) return <UserInfoModal onClose={() => setIsShowInfoModal(false)} />;
  if (isShowLogoutModal) return <LogoutModal onClose={() => setIsShowLogoutModal(false)} />;

  return (
    <div className={styles.userModal}>
      <div>
        <span>Edit profile</span>
        <RxPencil1 onClick={() => setIsShowInfoModal(!isShowInfoModal)} />
      </div>
      <Button type="curv" color="green" onClick={() => setIsShowLogoutModal(!isShowLogoutModal)}>
        Log out <LuArrowRight />
      </Button>
    </div>
  );
}

export default UserLogoModal;