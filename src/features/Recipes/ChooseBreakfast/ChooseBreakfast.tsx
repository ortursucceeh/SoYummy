import { LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import mainArrow from 'src/assets/Main/main-hero-arrow.svg';
import styles from './ChooseBreakfast.module.scss';

const ChooseBreakfast = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </p>
      <span className={styles.btn}>
        <Link to="/categories">
          See recipes <LuArrowRight />
        </Link>
      </span>
      <img src={mainArrow} alt="arrow" className={styles.arrow} />
    </div>
  );
};

export default ChooseBreakfast;
