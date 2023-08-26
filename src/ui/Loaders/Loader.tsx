import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.scss';

interface LoaderProps {
  type?: 'suspense';
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
  const classes = `${styles.loader} ${type === 'suspense' ? styles.suspense : ''} `;

  return (
    <div className={classes}>
      <ColorRing
        visible={true}
        height="200px"
        width="200px"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={Array(6).fill('#8baa36')}
      />
    </div>
  );
};

export default Loader;
