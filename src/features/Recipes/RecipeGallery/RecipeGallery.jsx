import { Link } from 'react-router-dom';
import Button from '../../../ui/Button/Button';
import styles from './RecipeGallery.module.scss';
import { FiTrash2 } from 'react-icons/fi';
import Image from '../../../ui/Image/Image';

const recipes = [
  {
    _id: '640cd5ac2d9fecf12e88989d',
    title: 'Baked salmon with fennel & tomatoes',
    category: 'Seafood',
    description:
      'A healthy and delicious meal made with fresh salmon fillets, roasted fennel, and cherry tomatoes. Served with a side salad.',
    preview:
      'https://res.cloudinary.com/nafin13/image/upload/v1691332244/preview/Baked%20salmon%20with%20fennel%20_%20tomatoes.jpg',
    time: '25',
    favorite: false,
  },
  {
    _id: '640cd5ac2d9fecf12e88989d',
    title: 'Baked salmon with fennel & tomatoes',
    category: 'Seafood',
    description:
      'A healthy and delicious meal made with fresh salmon fillets, roasted fennel, and cherry tomatoes. Served with a side salad.',
    preview:
      'https://res.cloudinary.com/nafin13/image/upload/v1691332244/preview/Baked%20salmon%20with%20fennel%20_%20tomatoes.jpg',
    time: '25',
    favorite: false,
  },
  {
    _id: '640cd5ac2d9fecf12e88989d',
    title: 'Baked salmon with fennel & tomatoes',
    category: 'Seafood',
    description:
      'A healthy and delicious meal made with fresh salmon fillets, roasted fennel, and cherry tomatoes. Served with a side salad.',
    preview:
      'https://res.cloudinary.com/nafin13/image/upload/v1691332244/preview/Baked%20salmon%20with%20fennel%20_%20tomatoes.jpg',
    time: '25',
    favorite: false,
  },
  {
    _id: '640cd5ac2d9fecf12e88989d',
    title: 'Baked salmon with fennel & tomatoes',
    category: 'Seafood',
    description:
      'A healthy and delicious meal made with fresh salmon fillets, roasted fennel, and cherry tomatoes. Served with a side salad.',
    preview:
      'https://res.cloudinary.com/nafin13/image/upload/v1691332244/preview/Baked%20salmon%20with%20fennel%20_%20tomatoes.jpg',
    time: '25',
    favorite: false,
  },
];

function RecipeGallery() {
  return (
    <div className={styles.wrapper}>
      {recipes.map(recipe => (
        <div className={styles.recipe}>
          <Image src={recipe.preview} alt={`${recipe.title} img`} className={styles.preview} />
          <div className={styles.recipeInfo}>
            <span className={styles.deleteRecipe}>
              <FiTrash2 />
            </span>
            <h4 className={styles.recipeTitle}>{recipe.title}</h4>
            <p className={styles.recipeDescr}>{recipe.description}</p>
            <span className={styles.cookingTime}>{recipe.time} min</span>
            <Button shape="curv" color="dark" className={styles.btn}>
              <Link to={`/recipes/${recipe._id}`}>See recipe</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
