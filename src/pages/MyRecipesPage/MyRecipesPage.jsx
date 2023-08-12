import OwnRecipes from '../../features/Recipes/OwnRecipes/OwnRecipes';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './MyRecipesPage.module.scss';

function MyRecipesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>My recipes</PageTitle>
      <OwnRecipes />
    </div>
  );
}

export default MyRecipesPage;
