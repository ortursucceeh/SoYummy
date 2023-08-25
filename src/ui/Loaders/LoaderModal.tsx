import styles from './Loader.module.scss';
import LoaderMini from './LoaderMini';

const LoaderModal: React.FC = () => {
  return (
    <div className={styles.modalLoader}>
      <LoaderMini color="white" />
    </div>
  );
};

export default LoaderModal;
