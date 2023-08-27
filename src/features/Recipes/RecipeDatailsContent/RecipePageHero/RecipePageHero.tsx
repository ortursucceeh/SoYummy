import Button from 'src/ui/Button/Button';
import { LuClock4 } from 'react-icons/lu';
import styles from './RecipePageHero.module.scss';
import RecipeBgNotFound from 'src/assets/NotFound/recipeBgNotFound.png';
import Image from 'src/ui/Image/Image';
import { useToggleFavoriteRecipe } from 'src/features/Recipes/RecipeGalleryItem/useToggleFavoriteRecipe';
import LoaderMini from 'src/ui/Loaders/LoaderMini';

interface RecipePageHeroProps {
  _id: string;
  title: string;
  description: string;
  favorites: number[];
  time: string;
  fullImage: string;
}
const RecipePageHero: React.FC<RecipePageHeroProps> = ({
  _id,
  title,
  description,
  favorites,
  time,
  fullImage,
}) => {
  const { toggleFavoriteRecipe, isLoading } = useToggleFavoriteRecipe();

  const handleToggleFavorite = () => {
    toggleFavoriteRecipe(_id);
  };

  return (
    <div className={styles.wrapper}>
      <Image
        src={fullImage}
        alt="recipeImage"
        defaultImage={RecipeBgNotFound}
        className={styles.img}
      />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.descr}>{description}</p>

      {favorites && (
        <Button
          shape="curv"
          color="trans"
          type="button"
          className={styles.btn}
          onClick={handleToggleFavorite}
        >
          {isLoading ? (
            <LoaderMini color="white" />
          ) : favorites.length ? (
            'Remove from favorites'
          ) : (
            'Add to favorite recipes'
          )}
        </Button>
      )}

      <span className={styles.time}>
        <LuClock4 />
        {time} min
      </span>
    </div>
  );
};

export default RecipePageHero;
