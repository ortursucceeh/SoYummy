import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

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
