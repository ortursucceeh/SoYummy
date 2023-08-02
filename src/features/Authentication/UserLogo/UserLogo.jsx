import styles from './UserLogo.module.scss';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { useState } from 'react';
import React from 'react';

function UserLogo({ user: { name, avatarURL } }) {
  const [isShowUserModal, setIsShowUserModal] = useState();

  return (
    <div className={styles.user}>
      <img src={avatarURL} alt="User avatar" onClick={() => setIsShowUserModal(!isShowUserModal)} />
      {isShowUserModal && <UserLogoModal onClose={() => setIsShowUserModal(false)} />}
      <span>{name}</span>
    </div>
  );
}

export default React.memo(UserLogo);
