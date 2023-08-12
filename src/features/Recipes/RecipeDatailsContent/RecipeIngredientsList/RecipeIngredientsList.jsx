import Image from '../../../../ui/Image/Image';
import styles from './RecipeIngredientsList.module.scss';
import ingredientNotFound from './../../../../assets/ingredientNotFound.png';

function RecipeIngredientsList({ ingredients }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listHeader}>
        <span>Ingredients</span>
        <span>Number</span>
      </div>

      <div className={styles.ingredientList}>
        {ingredients.map(ingredient => (
          <div className={styles.ingredient} key={ingredient._id}>
            <div className={styles.ingDetail}>
              <Image
                src={ingredient.thumb}
                alt={`${ingredient.title} img`}
                defaultImage={ingredientNotFound}
                className={styles.ingImg}
              />
              <span className={styles.ingTitle}>{ingredient.title}</span>
            </div>
            <span className={styles.ingMeasure}>{ingredient.measure}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIngredientsList;
