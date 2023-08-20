import { Link } from 'react-router-dom';
import styles from './SigninPage.module.scss';
import girl from '/src/assets/shopping-girl.svg';
import SigninForm from 'src/features/Authentication/SigninForm/SigninForm';

function SigninPage() {
  return (
    <div className={styles.layout}>
      <img src={girl} alt="shopping-girl" className={styles.img} />
      <div className={styles.form}>
        <h2>Sign in</h2>
        <SigninForm />
        <Link to="/register">Registration</Link>
      </div>
      <img src="/src/assets/curved-rectangle-decor.svg" alt="dark-bg" className={styles.bgImg} />
    </div>
  );
}

export default SigninPage;
