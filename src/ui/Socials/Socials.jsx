import styles from './Socials.module.scss';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

function Socials() {
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
}

export default Socials;
