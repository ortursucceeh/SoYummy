import styles from './MainContent.module.scss';
import leavesDecor1 from './../../assets/main-hero-decor-leaves.png';
import leavesDishDecor from './../../assets/123.png';
// import mainBg from './../../assets/main-hero-bg.svg';

import mainDish from './../../assets/main-hero-dish.png';
import Search from './Search/Search';
import ChooseBreakfast from './ChooseBreakfast/ChooseBreakfast';
import PreviewCategories from './PreviewCategories/PreviewCategories';
import RecipeItem from '../Recipies/RecipeItem/RecipeItem';

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
        <div>
          <img src={leavesDishDecor} alt="leaves" className={styles.dishLeaves} />
          <img src={mainDish} alt="dish" className={styles.dish} />
          <ChooseBreakfast />
        </div>
      </main>

      <PreviewCategories />
      {/* <RecipeItem
        recipe={{
          _id: '640cd5ac2d9fecf12e8898a8',
          title: 'Smoked Haddock Kedgeree',
          category: 'Breakfast',
          description:
            "A traditional Anglo-Indian dish with smoked haddock, rice, hard-boiled eggs, and fragrant spices. A flavorful and satisfying meal that's easy to make.",
          preview:
            'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561362/zajgrwsrjx6jsdq5gnkz.jpg',
          time: '25',
          popularity: 6,
          like: false,
          favorite: false,
        }}
      /> */}
    </div>
  );
}

export default MainContent;
