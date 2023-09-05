import footerDecor from 'src/assets/Decor/footer-decoration.png';
import styles from './FooterCopyright.module.scss';

const FooterCopyright: React.FC = () => {
  return (
    <div className={styles.copyright}>
      <span>&copy; 2023 All Rights Reserved.</span>
      <span>Terms of Service</span>
      <img className={styles.decor} src={footerDecor} alt="decor" />
    </div>
  );
};

export default FooterCopyright;
