import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.scss';

const LoaderMini: React.FC = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={40} aria-label="Loading" color={'white'} speedMultiplier={0.5} />
    </div>
  );
};

export default LoaderMini;
