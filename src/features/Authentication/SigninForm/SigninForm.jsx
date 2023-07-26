import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import styles from './SigninForm.module.scss';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function SigninForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input leftIcon={<HiOutlineMail />} placeholder="Email" type="email" />
        <Input leftIcon={<FiLock />} placeholder="Password" type="password" />
      </div>
      <Button type="rect" color="green">
        Sign in
      </Button>
    </form>
  );
}

export default SigninForm;
