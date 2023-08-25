import styles from './Socials.module.scss';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Socials: React.FC = () => {
  return (
    <ul className={styles.social}>
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaYoutube />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaInstagram />
      </li>
    </ul>
  );
};

export default Socials;
