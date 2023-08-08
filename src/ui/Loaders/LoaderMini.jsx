import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';

function LoaderMini() {
  return (
    <div className={styles.loader}>
      <ColorRing
        visible={true}
        height="30%"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['white', 'white', 'white', 'white', 'white', 'white']}
      />
    </div>
  );
}

export default LoaderMini;
