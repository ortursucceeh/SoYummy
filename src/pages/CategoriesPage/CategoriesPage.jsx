import CategoriesMenu from 'src/features/Categories/CategoriesMenu/CategoriesMenu';
import CategoriesRecipesList from 'src/features/Categories/CategoriesRecipesList/CategoriesRecipesList';
import PageTitle from 'src/ui/PageTitle/PageTitle';
import styles from './CategoriesPage.module.scss';

function CategoriesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Categories</PageTitle>
      <CategoriesMenus />
      <CategoriesRecipesList />
    </div>
  );
}

export default CategoriesPage;
