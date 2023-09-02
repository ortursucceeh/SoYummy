// import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';
import { ClipLoader } from 'react-spinners';

// interface LoaderMiniProps {
//   color: string;
// }

const LoaderMini: React.FC = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={40} aria-label="Loading" color={'white'} speedMultiplier={0.5} />
      {/* <ColorRing
        visible={true}
        height="45px"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={Array(6).fill(color)}
      /> */}
    </div>
  );
};

export default LoaderMini;
