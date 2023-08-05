import Button from '../../../ui/Button/Button';
import { LuClock4 } from 'react-icons/lu';
import styles from './RecipePageHero.module.scss';
import RecipeBgNotFound from './../../../assets/recipeBgNotFound.png';
import Image from '../../../ui/Image/Image';

function RecipePageHero({ title, description, favorite, time, fullImage }) {
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

      <Button shape="curv" color="trans" type="button" className={styles.btn}>
        {favorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'}
      </Button>

      <span className={styles.time}>
        <LuClock4 />
        {time} min
      </span>
    </div>
  );
}

export default RecipePageHero;
