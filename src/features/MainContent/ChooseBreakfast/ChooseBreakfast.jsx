import { Link } from 'react-router-dom';
import styles from './ChooseBreakfast.module.scss';
import { LuArrowRight } from 'react-icons/lu';
function ChooseBreakfast() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </p>
      <span className={styles.btn}>
        <Link to="/categories">
          <span>See recipes</span> <LuArrowRight />
        </Link>
      </span>
    </div>
  );
}

export default ChooseBreakfast;
