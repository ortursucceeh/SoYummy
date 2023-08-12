import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';
import styles from './WelcomePage.module.scss';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

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
        <Button shape="curv" color="green" id="register" onClick={() => navigate('register')}>
          Registration
        </Button>

        <Button shape="curv" color="trans" id="signin" onClick={() => navigate('signin')}>
          Sign in
        </Button>
      </div>
    </section>
  );
}

export default WelcomePage;
