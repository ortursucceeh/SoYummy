import styles from './Footer.module.scss';
import Container from '../Container/Container';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import FooterContent from './FooterContent/FooterContent';

function Footer() {
  return (
    <footer className={styles.footer}>
      <main className={styles.main}>
        <Container>
          <FooterContent />
        </Container>
      </main>
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
