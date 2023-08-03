import CategoriesMenu from '../../features/Categories/CategoriesMenu/CategoriesMenu';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './CategoriesPage.module.scss';

function CategoriesPage() {
  return (
    <div className={styles.container}>
      <PageTitle>Categories</PageTitle>
      <div className={styles.categoriesMenu}>
        <CategoriesMenu />
      </div>

      {/* <SearchedRecipeList /> */}
    </div>
  );
}

export default CategoriesPage;
