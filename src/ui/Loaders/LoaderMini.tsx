import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';

interface LoaderMiniProps {
  color: string;
}

const LoaderMini: React.FC<LoaderMiniProps> = ({ color = 'white' }) => {
  return (
    <div className={styles.loader}>
      <ColorRing
        visible={true}
        height="45px"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={Array(6).fill(color)}
      />
    </div>
  );
};

export default LoaderMini;
