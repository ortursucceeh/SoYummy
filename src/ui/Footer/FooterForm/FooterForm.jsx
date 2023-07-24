import Button from '../../Button/Button';
import styles from './FooterForm.module.scss';

function FooterForm() {
  return (
    <form className={styles.form}>
      <span>Subscribe to our Newsletter</span>
      <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <input placeholder="Enter your email address" type="text" />
      <Button type="rect" color="green">
        Subscribe
      </Button>
    </form>
  );
}

export default FooterForm;
