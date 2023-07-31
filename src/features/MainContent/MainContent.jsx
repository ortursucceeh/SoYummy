import styles from './MainContent.module.scss';
import leavesDecor1 from './../../assets/main-hero-decor-leaves.png';
import leavesDishDecor from './../../assets/123.png';
// import mainBg from './../../assets/main-hero-bg.svg';

import mainDish from './../../assets/main-hero-dish.png';
import Search from './Search/Search';
import ChooseBreakfast from './ChooseBreakfast/ChooseBreakfast';

function MainContent() {
  return (
    <div className={styles.container}>
      <img src={leavesDecor1} alt="leaves" className={styles.decor1} />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>So</span>Yummy
          </h1>
          <p className={styles.text}>
            "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add
            your own recipes to save them for the future.
          </p>
          <Search />
        </div>
        <div className={styles.bg}>
          <img src={leavesDishDecor} alt="leaves" className={styles.dishLeaves} />
          <img src={mainDish} alt="dish" className={styles.dish} />
          <ChooseBreakfast />
        </div>
      </main>
    </div>
  );
}

export default MainContent;
