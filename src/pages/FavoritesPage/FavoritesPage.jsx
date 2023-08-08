import RecipeGallery from '../../features/Recipes/RecipeGallery/RecipeGallery';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './FavoritesPage.module.scss';

function FavoritesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Favorite recipes</PageTitle>
      <RecipeGallery />
    </div>
  );
}

export default FavoritesPage;
