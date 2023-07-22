import { PiForkKnifeBold } from 'react-icons/pi';
import styles from './FooterContent.module.scss';
import FooterForm from '../FooterForm/FooterForm';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
function FooterContent() {
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <PiForkKnifeBold />
          </div>
          <span>So Yummy</span>
        </div>

        <ul className={styles.infoList}>
          <li>Database of recipes that can be replenished</li>
          <li>Flexible search for desired and unwanted ingredients</li>
          <li>Ability to add your own recipes with photos</li>
          <li>Convenient and easy to use</li>
        </ul>
      </div>

      <div className={styles.links}>
        <ul className={styles.pages}>
          <li>Ingredients</li>
          <li>Add recipes</li>
          <li>My recipes</li>
          <li>Favorite</li>
          <li>Shopping list</li>
        </ul>

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

      <FooterForm />
    </div>
  );
}

export default FooterContent;
