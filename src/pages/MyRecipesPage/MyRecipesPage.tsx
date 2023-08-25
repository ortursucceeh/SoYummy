import MyRecipes from 'src/features/Recipes/MyRecipes/MyRecipes';
import PageTitle from 'src/ui/PageTitle/PageTitle';
import styles from './MyRecipesPage.module.scss';

const MyRecipesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageTitle>My recipes</PageTitle>
      <MyRecipes />
    </div>
  );
};

export default MyRecipesPage;
