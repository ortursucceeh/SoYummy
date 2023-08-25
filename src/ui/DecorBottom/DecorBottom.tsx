import decorBottomLeaves from 'src/assets/Decor/decor-under.png';
import styles from './DecorBottom.module.scss';

const DecorBottom: React.FC = () => {
  return <img src={decorBottomLeaves} alt="leaves" className={styles.decor} />;
};

export default DecorBottom;
