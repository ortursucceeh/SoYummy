import AddRecipeForm from '../../features/Recipes/AddRecipeContent/AddRecipeForm';
import PageTitle from '../../ui/PageTitle/PageTitle';
import styles from './AddRecipePage.module.scss';

function AddRecipePage() {
  return (
    <div className={styles.container}>
      <PageTitle>Add recipe</PageTitle>
      <AddRecipeForm />
    </div>
  );
}

export default AddRecipePage;
