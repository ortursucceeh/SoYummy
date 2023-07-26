import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import styles from './RegisterForm.module.scss';
import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function RegisterForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input leftIcon={<FiUser />} placeholder="Name" />
        <Input leftIcon={<HiOutlineMail />} placeholder="Email" type="email" />
        <Input leftIcon={<FiLock />} placeholder="Password" type="password" />
      </div>
      <Button type="rect" color="green">
        Sign up
      </Button>
    </form>
  );
}

export default RegisterForm;
