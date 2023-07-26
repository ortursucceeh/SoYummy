import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './Logo.module.scss';

function Logo({ type }) {
  return (
    <i className={`${styles.logo} ${styles[type]}`}>
      <PiForkKnifeBold />
    </i>
  );
}

export default Logo;
