import { memo } from 'react';
import Container from '../Container/Container';
import styles from './Footer.module.scss';
import FooterContent from './FooterContent/FooterContent';
import FooterCopyright from './FooterCopyright/FooterCopyright';

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
