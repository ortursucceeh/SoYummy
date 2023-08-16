import styles from './Loader.module.scss';
import LoaderMini from './LoaderMini';

function LoaderModal() {
  return (
    <div className={styles.modalLoader}>
      <LoaderMini color="white" />
    </div>
  );
}

export default LoaderModal;
