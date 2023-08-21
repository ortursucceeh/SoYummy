import { Link } from 'react-router-dom';
import styles from './SigninPage.module.scss';
import girl from '/src/assets/svg/shopping-girl.svg';
import SigninForm from 'src/features/Authentication/SigninForm/SigninForm';
import decor from 'src/assets/Decor/curved-rectangle-decor.svg';

function SigninPage() {
  return (
    <div className={styles.layout}>
      <img src={girl} alt="shopping-girl" className={styles.img} />
      <div className={styles.form}>
        <h2>Sign in</h2>
        <SigninForm />
        <Link to="/register">Registration</Link>
      </div>
      <img src={decor} alt="dark-bg" className={styles.bgImg} />
    </div>
  );
}

export default SigninPage;
