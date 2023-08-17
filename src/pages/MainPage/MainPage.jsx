import leavesDecor1 from './../../assets/main-hero-decor-leaves.png';
import leavesDishDecor from './../../assets/123.png';
import mainDish from './../../assets/main-hero-dish.png';
import ChooseBreakfast from '../../features/Recipes/ChooseBreakfast/ChooseBreakfast';
import PreviewCategories from '../../features/Categories/PreviewCategories/PreviewCategories';

import styles from './MainPage.module.scss';
import SearchBar from '../../features/Search/SearchBar/SearchBar';

function MainPage() {
  return (
    <section className={styles.container}>
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
          <SearchBar btnColor="dark" />
        </div>
        <div>
          <img src={leavesDishDecor} alt="leaves" className={styles.dishLeaves} />
          <img src={mainDish} alt="dish" className={styles.dish} />
          <ChooseBreakfast />
        </div>
      </main>

      <PreviewCategories />
    </section>
  );
}

export default MainPage;
