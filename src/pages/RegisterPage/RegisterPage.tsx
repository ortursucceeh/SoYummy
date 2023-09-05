import { Link } from 'react-router-dom';
import decor from 'src/assets/Decor/curved-rectangle-decor.svg';
import RegisterForm from 'src/features/Authentication/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.scss';
import girl from '/src/assets/svg/shopping-girl.svg';

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.layout}>
      <img src={girl} alt="shopping-girl" className={styles.img} />
      <div className={styles.form}>
        <h2>Registration</h2>
        <RegisterForm />
        <Link to="/signin">Sign in</Link>
      </div>
      <img src={decor} alt="dark-bg" className={styles.bgImg} />
    </div>
  );
};

export default RegisterPage;
