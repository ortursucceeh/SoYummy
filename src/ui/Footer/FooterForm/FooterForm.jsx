import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './FooterForm.module.scss';
import { HiOutlineMail } from 'react-icons/hi';

function FooterForm() {
  return (
    <form className={styles.form}>
      <span>Subscribe to our Newsletter</span>
      <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <Input leftIcon={<HiOutlineMail />} placeholder="Enter your email address" type="text" />
      <Button type="rect" color="green">
        Subscribe
      </Button>
    </form>
  );
}

export default FooterForm;
