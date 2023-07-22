import styles from './Footer.module.scss';
import Container from '../Container/Container';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import FooterContent from './FooterContent/FooterContent';
import footerDecor from './../../assets/footer-decoration.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <main className={styles.main}>
        <Container>
          <FooterContent />
        </Container>
      </main>
      <img className={styles.decor} src={footerDecor} alt="decor" />
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
