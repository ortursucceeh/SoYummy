import { memo } from 'react';
import { PiForkKnifeBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

interface LogoProps {
  type?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ type = 'header' }) => {
  return (
    <Link to="main">
      <i className={`${styles.logo} ${styles[type]}`}>
        <PiForkKnifeBold />
      </i>
    </Link>
  );
};

export default memo(Logo);

Logo.defaultProps = {
  type: 'header',
};
