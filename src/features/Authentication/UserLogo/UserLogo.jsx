import styles from './UserLogo.module.scss';
import avatar from './../../../assets/avatar.png';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { useState } from 'react';

function UserLogo() {
  const [isShowUserModal, setIsShowUserModal] = useState();

  return (
    <div className={styles.user}>
      <img src={avatar} alt="User avatar" onClick={() => setIsShowUserModal(!isShowUserModal)} />
      {isShowUserModal && <UserLogoModal />}
      <span>Olena</span>
    </div>
  );
}

export default UserLogo;
