import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './FooterForm.module.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

function FooterForm() {
  const [inputValue, setInputValue] = useState('');

  function handleSubscribe(e) {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputValue.match(emailPattern)) {
      toast.success('You have been successfully subscribed to SoYummy news!');
      setInputValue('');
    } else {
      toast.error('Please enter a valid email address!');
    }
  }

  return (
    <form className={styles.form}>
      <span>Subscribe to our Newsletter</span>
      <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <Input
        leftIcon={<HiOutlineMail />}
        placeholder="Enter your email address"
        type="email"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button type="rect" color="green" onClick={handleSubscribe}>
        Subscribe
      </Button>
    </form>
  );
}

export default FooterForm;
