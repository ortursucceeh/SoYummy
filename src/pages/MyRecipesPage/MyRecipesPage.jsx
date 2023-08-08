import RecipeGallery from '../../features/Recipes/RecipeGallery/RecipeGallery';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './MyRecipesPage.module.scss';

function MyRecipesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>My recipes</PageTitle>
      <RecipeGallery />
    </div>
  );
}

export default MyRecipesPage;
