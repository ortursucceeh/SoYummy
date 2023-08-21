import Image from 'src/ui/Image/Image';
import styles from './UserLogo.module.scss';
import UserLogoModal from './../UserLogoModal/UserLogoModal';
import { memo, useState } from 'react';
import React from 'react';
import defaultImage from 'src/assets/recipePreviewNotFound.png';
import { useUser } from '../useUser';

function UserLogo() {
  const {
    user: { name, avatarURL },
  } = useUser();
  const [isShowUserModal, setIsShowUserModal] = useState();

  return (
    <div className={styles.user}>
      <Image
        src={avatarURL}
        defaultImage={defaultImage}
        alt="User avatar"
        onClick={() => setIsShowUserModal(!isShowUserModal)}
      />
      {isShowUserModal && <UserLogoModal onClose={() => setIsShowUserModal(false)} />}
      <span>{name}</span>
    </div>
  );
}

export default memo(UserLogo);
