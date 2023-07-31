import { Link } from 'react-router-dom';
import styles from './PreviewCategories.module.scss';
import Button from '../../../ui/Button/Button';
import RecipeList from '../../Recipies/RecipeList/RecipeList';
import { useRecipesCountFromScreenSize } from '../../../hooks/useRecipesCountFromScreenSize';

const categories = {
  breakfast: [
    {
      _id: '640cd5ac2d9fecf12e8898df',
      title: 'Fruit and Cream Cheese Breakfast Pastries',
      category: 'Breakfast',
      description:
        'A delicious breakfast treat, Fruit and Cream Cheese Breakfast Pastries are flaky, buttery pastries filled with a sweet cream cheese and fruit filling, and then baked until golden brown.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561436/lj4kfx1zh4l8vejsgdle.jpg',
      time: '20',
      popularity: 9,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e889863',
      title: 'English Breakfast',
      category: 'Breakfast',
      description:
        'A hearty breakfast meal consisting of eggs, bacon, sausage, baked beans, grilled tomato, and toast. It is a popular breakfast in the United Kingdom.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560624/cnkpymzd18llmlc9pedc.jpg',
      time: '51',
      popularity: 6,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8898a6',
      title: 'Salmon Eggs Eggs Benedict',
      category: 'Breakfast',
      description:
        "A twist on the classic Eggs Benedict, featuring smoked salmon, poached eggs, and a rich hollandaise sauce. A decadent brunch option that's sure to impress.",
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561360/lwe35gxaenukrd0yp0bs.jpg',
      time: '20',
      popularity: 6,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8898a9',
      title: 'Breakfast Potatoes',
      category: 'Breakfast',
      description:
        'Crispy and golden brown potatoes that are seasoned with garlic, paprika, and herbs. A great side dish for any breakfast or brunch.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561362/y4tsueffxblvgpezzcnh.jpg',
      time: '35',
      popularity: 4,
      like: false,
      favorite: false,
    },
  ],
  vegan: [
    {
      _id: '640cd5ac2d9fecf12e88981e',
      title: 'Vegan Chocolate Cake',
      category: 'Vegan',
      description: 'Chocolate cake made without animal products',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560538/jvytvsjow58exbdfcsvt.jpg',
      time: '45',
      popularity: 3,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8897f3',
      title: 'Vegan Lasagna',
      category: 'Vegan',
      description:
        'A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/vnwp682msfb6blsmqqav.jpg',
      time: '50',
      popularity: 2,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e889893',
      title: 'Roast fennel and aubergine paella',
      category: 'Vegan',
      description:
        'A vegetarian version of the classic Spanish dish, paella, made with roasted fennel, eggplant, and saffron rice. Served with a side salad.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561360/qurmbrualwnbuiawu2nm.jpg',
      time: '56',
      popularity: 5,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e88981a',
      title: 'Laksa King Prawn Noodles',
      category: 'Vegan',
      description: 'Spicy noodle soup with king prawns',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560538/xxvda9m7ewq3bua1izf2.jpg',
      time: '20',
      popularity: 4,
      like: false,
      favorite: false,
    },
  ],
  miscellaneous: [
    {
      _id: '640cd5ac2d9fecf12e889814',
      title: 'French Lentils With Garlic and Thyme',
      category: 'Miscellaneous',
      description:
        'A simple yet flavorful French dish of lentils cooked with garlic, thyme, and other aromatics.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560536/ukkbq6t4w0tenbnypu3g.jpg',
      time: '40',
      popularity: 2,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e889890',
      title: 'Callaloo Jamaican Style',
      category: 'Miscellaneous',
      description:
        'A traditional Jamaican dish made with callaloo leaves and a variety of spices. Served with rice and peas.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561360/civuzjfrfqj4ysotmgy7.jpg',
      time: '30',
      popularity: 3,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e889877',
      title: 'French Omelette',
      category: 'Miscellaneous',
      description:
        'A classic French dish made with fluffy eggs, filled with cheese, herbs, and other savory ingredients.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561361/nh73tfpd21jmasjj1sie.jpg',
      time: '15',
      popularity: 0,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8898ce',
      title: 'Pizza Express Margherita',
      category: 'Miscellaneous',
      description:
        'A classic Italian pizza topped with tangy tomato sauce, fresh mozzarella cheese, and fragrant basil, baked to crispy perfection in a wood-fired oven.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561438/ewbnuxsxim3hoekpnznx.jpg',
      time: '27',
      popularity: 3,
      like: false,
      favorite: false,
    },
  ],
  dessert: [
    {
      _id: '640cd5ac2d9fecf12e8898d5',
      title: 'Honey Yogurt Cheesecake',
      category: 'Dessert',
      description:
        'A delicious dessert made with a creamy blend of honey, yogurt, and cheesecake filling, baked to perfection and topped with fresh fruit and nuts.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561437/ewr91ftcqmi9hqnk5jzf.jpg',
      time: '85',
      popularity: 0,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e889886',
      title: 'Pouding chomeur',
      category: 'Dessert',
      description:
        'A French-Canadian dessert consisting of a cake-like batter that is baked in a pool of maple syrup, resulting in a rich, moist cake with a sweet syrupy sauce.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561360/z65cjqprs5ii0emgj4zy.jpg',
      time: '35',
      popularity: 0,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8898ca',
      title: 'Strawberry Rhubarb Pie',
      category: 'Dessert',
      description:
        'This sweet and tangy pie is made with a filling of fresh strawberries and rhubarb, baked inside a flaky pastry crust.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561435/js2eiriviliz7f54pdwh.jpg',
      time: '170',
      popularity: 0,
      like: false,
      favorite: false,
    },
    {
      _id: '640cd5ac2d9fecf12e8898f5',
      title: 'Apam balik',
      category: 'Dessert',
      description:
        'A popular Malaysian dessert made with a crispy and fluffy pancake-like batter, filled with sweet roasted peanuts, sugar, and creamed corn. Served hot, folded in half and drizzled with sweet syrup or condensed milk.',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561435/hzprrtagxfjzzxmitb96.jpg',
      time: '10',
      popularity: 6,
      like: false,
      favorite: false,
    },
  ],
};

function PreviewCategories() {
  const recipesCount = useRecipesCountFromScreenSize();
  console.log('rerender');
  return (
    <div className={styles.categoriesWrapper}>
      {Object.entries(categories).map(([categoryName, recipes]) => {
        return (
          <div className={styles.category} key={categoryName}>
            <h3 className={styles.categoryName}>
              {categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1)}
            </h3>
            <RecipeList recipes={recipes.slice(0, recipesCount)} />
            <button className={styles.categoryButton}>
              <Link to={`/categories/${categoryName}`}>See all</Link>
            </button>
          </div>
        );
      })}

      <Button type="curv" color="trans" className={styles.otherBtn}>
        <Link to="/categories">Other categories</Link>
      </Button>
    </div>
  );
}

export default PreviewCategories;
