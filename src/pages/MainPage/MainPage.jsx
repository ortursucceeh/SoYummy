import leavesDecor1 from './../../assets/main-hero-decor-leaves.png';
import leavesDishDecor from './../../assets/123.png';
import mainDish from './../../assets/main-hero-dish.png';
import Search from '../../features/MainContent/Search/Search';
import ChooseBreakfast from '../../features/MainContent/ChooseBreakfast/ChooseBreakfast';
import PreviewCategories from '../../features/MainContent/PreviewCategories/PreviewCategories';

import styles from './MainPage.module.scss';

function MainPage() {
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
        <div>
          <img src={leavesDishDecor} alt="leaves" className={styles.dishLeaves} />
          <img src={mainDish} alt="dish" className={styles.dish} />
          <ChooseBreakfast />
        </div>
      </main>

      <PreviewCategories />
    </div>
  );
}

export default MainPage;
