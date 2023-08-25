import leavesDecor1 from 'src/assets/Main/main-hero-decor-leaves.png';
import leavesDishDecor from 'src/assets/Decor/leavesDishesDecor.png';
import mainDish from 'src/assets/Main/main-hero-dish.png';
import ChooseBreakfast from 'src/features/Recipes/ChooseBreakfast/ChooseBreakfast';
import PreviewCategories from 'src/features/Categories/PreviewCategories/PreviewCategories';

import styles from './MainPage.module.scss';
import SearchBar from 'src/features/Search/SearchBar/SearchBar';

const MainPage: React.FC = () => {
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
};

export default MainPage;
