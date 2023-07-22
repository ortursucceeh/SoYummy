import styles from './UserAvatar.module.scss';
import avatar from './../../assets/avatar.png';
function UserAvatar() {
  return (
    <div className={styles.user}>
      <img src={avatar} alt="User avatar" />
      <span>Olena</span>
    </div>
  );
}

export default UserAvatar;
