import styles from './FooterContent.module.scss';
import FooterForm from '../FooterForm/FooterForm';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../../Logo/Logo';
import { Link } from 'react-router-dom';

function FooterContent() {
  return (
    <div>
      <div className={styles.content}>
        <div>
          <div className={styles.header}>
            <Logo type="footer" />
            <span>So Yummy</span>
          </div>

          <ul className={styles.infoList}>
            <li>Database of recipes that can be replenished</li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ul>
        </div>

        <ul className={styles.pages}>
          <Link to="search">Ingredients</Link>
          <Link to="add">Add recipes</Link>
          <Link to="my">My recipes</Link>
          <Link to="favorite">Favorite</Link>
        </ul>

        <FooterForm />
      </div>

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
    </div>
  );
}

export default FooterContent;
