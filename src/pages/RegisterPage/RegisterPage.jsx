import { Link } from 'react-router-dom';
import RegisterForm from '../../features/Authentication/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.scss';
import girl from '/src/assets/shopping-girl.svg';

function RegisterPage() {
  return (
    <div className={styles.layout}>
      <img src={girl} alt="shopping-girl" className={styles.img} />
      <div className={styles.form}>
        <h2>Registration</h2>
        <RegisterForm />
        <Link to="/signin">Sign in</Link>
      </div>
      <img src="/src/assets/curved-rectangle-decor.svg" alt="dark-bg" className={styles.bgImg} />
    </div>
  );
}

export default RegisterPage;
