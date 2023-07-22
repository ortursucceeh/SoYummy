import styles from './FooterCopyright.module.scss';

function FooterCopyright() {
  return (
    <div className={styles.copyright}>
      <span>&copy; 2023 All Rights Reserved.</span>
      <span>Terms of Service</span>
    </div>
  );
}

export default FooterCopyright;
