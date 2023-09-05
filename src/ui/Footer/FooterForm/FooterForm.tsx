import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlineMail } from 'react-icons/hi';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './FooterForm.module.scss';

const FooterForm = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubscribe = () => {
    if (inputValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      toast.success('You have been successfully subscribed to SoYummy news!');
      setInputValue('');
    } else {
      toast.error('Please enter a valid email address!');
    }
  };

  return (
    <form className={styles.form}>
      <span>Subscribe to our Newsletter</span>
      <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <Input
        leftIcon={<HiOutlineMail />}
        placeholder="Enter your email address"
        name="email"
        type="email"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button shape="rect" color="green" type="button" onClick={handleSubscribe}>
        Subscribe
      </Button>
    </form>
  );
};

export default FooterForm;
