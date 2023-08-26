import Image from 'src/ui/Image/Image';
import styles from './UserLogo.module.scss';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { memo, useState } from 'react';
import React from 'react';
import defaultImage from 'src/assets/NotFound/recipePreviewNotFound.png';
import { useUser } from '../useUser';
import { UserType } from 'src/types/User';

function UserLogo() {
  const { user } = useUser();
  const { name, avatarURL } = user as UserType;
  const [isShowUserModal, setIsShowUserModal] = useState<boolean>(false);

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
