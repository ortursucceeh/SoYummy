import styles from './PageNotFound.module.scss';
import decor from 'src/assets/NotFound/404-decor.svg';

function PageNotFound() {
  return (
    <section className={styles.layout}>
      <img src={decor} alt="404img" className={styles.img} />
      <p className={styles.text}>
        <b>We are sorry,</b>
        <br />
        but the page you were looking for can’t be found..
      </p>
    </section>
  );
}

export default PageNotFound;
