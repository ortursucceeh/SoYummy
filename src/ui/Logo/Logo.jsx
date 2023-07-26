import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

function Logo({ type }) {
  return (
    <Link to="home">
      <i className={`${styles.logo} ${styles[type]}`}>
        <PiForkKnifeBold />
      </i>
    </Link>
  );
}

export default Logo;
