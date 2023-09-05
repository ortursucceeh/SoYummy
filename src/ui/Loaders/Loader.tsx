import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.scss';

interface LoaderProps {
  type?: 'suspense';
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
  const classes = `${styles.loader} ${type === 'suspense' ? styles.suspense : ''} `;

  return (
    <div className={classes}>
      <ClipLoader size={70} aria-label="Loading" color={'#8baa36'} speedMultiplier={0.5} />
    </div>
  );
};

export default Loader;
