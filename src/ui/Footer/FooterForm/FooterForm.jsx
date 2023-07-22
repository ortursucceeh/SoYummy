import styles from './FooterForm.module.scss';

function FooterForm() {
  return (
    <form className={styles.form}>
      <span>Subscribe to our Newsletter</span>
      <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <input placeholder="Enter your email address" type="text" />
      <button>Subscribe</button>
    </form>
  );
}

export default FooterForm;
