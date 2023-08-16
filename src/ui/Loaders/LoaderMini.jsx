import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';

function LoaderMini({ color = 'white' }) {
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
}

export default LoaderMini;
