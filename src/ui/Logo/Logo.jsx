import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

function Logo({ type }) {
  return (
    <Link to="main">
      <i className={`${styles.logo} ${styles[type]}`}>
        <PiForkKnifeBold />
      </i>
    </Link>
  );
}

export default memo(Logo);
