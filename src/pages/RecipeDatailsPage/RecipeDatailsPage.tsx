import RecipeDatailsContent from 'src/features/Recipes/RecipeDatailsContent/RecipeDatailsContent';
import styles from './RecipeDatailsPage.module.scss';

const RecipeDatailsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <RecipeDatailsContent />
    </div>
  );
};

export default RecipeDatailsPage;
