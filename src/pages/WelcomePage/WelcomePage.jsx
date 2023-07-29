import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';
import styles from './WelcomePage.module.scss';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <section className={styles.layout}>
      <Logo type="header" />
      <h2>Welcome to the app!</h2>
      <p>
        This app offers more than just a collection of recipes - it is <br /> designed to be your
        very own digital cookbook. You can easily <br />
        save and retrieve your own recipes at any time.
      </p>
      <div className={styles.buttons}>
        <Link to="register">
          <Button type="curv" color="green" id="register">
            Registration
          </Button>
        </Link>
        <Link to="signin">
          <Button type="curv" color="trans" id="signin">
            Sign in
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default WelcomePage;
