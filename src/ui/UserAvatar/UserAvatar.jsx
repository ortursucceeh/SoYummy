import styles from './UserAvatar.module.css';
import avatar from './avatar.png';
function UserAvatar() {
  return (
    <div className={styles.user}>
      <img src={avatar} alt="User avatar" />
      <span>Olena</span>
    </div>
  );
}

export default UserAvatar;
