import Logo from '../../ui/Logo/Logo';
import styles from './StartPage.module.scss';

function StartPage() {
  return (
    <div className={styles.layout}>
      <Logo type="header" />
      <h2>Welcome to the app!</h2>
      <p>
        This app offers more than just a collection of recipes - it is designed to be your very own
        digital cookbook. You can easily save and retrieve your own recipes at any time.
      </p>
    </div>
  );
}

export default StartPage;
