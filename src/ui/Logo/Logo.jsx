import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './Logo.module.scss';

function Logo({ type }) {
  return (
    <div className={`${styles.logo} ${styles[type]}`}>
      <PiForkKnifeBold />
    </div>
  );
}

export default Logo;
