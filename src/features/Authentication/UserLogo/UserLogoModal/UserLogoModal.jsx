import styles from './UserLogoModal.module.scss';
import { RxPencil1 } from 'react-icons/rx';
import { LuArrowRight } from 'react-icons/lu';
import { useState } from 'react';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';
import Button from '../../../../ui/Button/Button';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

function UserLogoModal({ onClose }) {
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);

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
}

export default UserLogoModal;
