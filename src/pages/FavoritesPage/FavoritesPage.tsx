import FavoriteRecipes from 'src/features/Recipes/FavoriteRecipes/FavoriteRecipes';
import PageTitle from 'src/ui/PageTitle/PageTitle';
import styles from './FavoritesPage.module.scss';

const FavoritesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageTitle>Favorite recipes</PageTitle>
      <FavoriteRecipes />
    </div>
  );
};

export default FavoritesPage;
