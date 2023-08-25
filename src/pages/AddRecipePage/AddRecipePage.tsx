import AddRecipeForm from 'src/features/Recipes/AddRecipeContent/AddRecipeForm/AddRecipeForm';
import PopularRecipes from 'src/features/Recipes/PopularRecipes/PopularRecipes';
import PageTitle from 'src/ui/PageTitle/PageTitle';
import Socials from 'src/ui/Socials/Socials';
import styles from './AddRecipePage.module.scss';

const AddRecipePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageTitle>Add recipe</PageTitle>
      <div className={styles.pageWrapper}>
        <AddRecipeForm />
        <aside className={styles.aside}>
          <div className={styles.socials}>
            <h2 className={styles.subheader}>Follow us</h2>
            <Socials />
          </div>

          <div className={styles.popular}>
            <h2 className={styles.subheader}>Popular recipes</h2>
            <PopularRecipes />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AddRecipePage;
