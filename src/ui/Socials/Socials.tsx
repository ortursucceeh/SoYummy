import styles from './Socials.module.scss';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Socials: React.FC = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
