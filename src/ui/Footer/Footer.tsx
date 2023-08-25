import styles from './Footer.module.scss';
import Container from '../Container/Container';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import FooterContent from './FooterContent/FooterContent';
import { memo } from 'react';

const Footer: React.FC = () => {
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
};

export default memo(Footer);
