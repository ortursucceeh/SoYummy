import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import Socials from '../../Socials/Socials';
import FooterForm from '../FooterForm/FooterForm';
import styles from './FooterContent.module.scss';

const FooterContent: React.FC = () => {
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
          <Link to="favorite">Favorites</Link>
        </ul>

        <FooterForm />
      </div>

      <div className={styles.socials}>
        <Socials />
      </div>
    </div>
  );
};

export default FooterContent;
