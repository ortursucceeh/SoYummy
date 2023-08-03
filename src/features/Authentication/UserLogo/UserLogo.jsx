import Image from '../../../ui/Image/Image';
import styles from './UserLogo.module.scss';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { useState } from 'react';
import React from 'react';
import defaultImage from './../../../assets/recipePreviewNotFound.png';

function UserLogo({ user: { name, avatarURL } }) {
  const [isShowUserModal, setIsShowUserModal] = useState();

  return (
    <div className={styles.user}>
      <Image
        imageUrl={avatarURL}
        defaultImage={defaultImage}
        alt="User avatar"
        onClick={() => setIsShowUserModal(!isShowUserModal)}
      />
      {isShowUserModal && <UserLogoModal onClose={() => setIsShowUserModal(false)} />}
      <span>{name}</span>
    </div>
  );
}

export default React.memo(UserLogo);
