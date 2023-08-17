import MyRecipes from '../../features/Recipes/MyRecipes/MyRecipes';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './MyRecipesPage.module.scss';

function MyRecipesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>My recipes</PageTitle>
      <MyRecipes />
    </div>
  );
}

export default MyRecipesPage;
