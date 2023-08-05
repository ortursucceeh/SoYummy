import RecipeIngredientsList from '../../features/Recipes/RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from '../../features/Recipes/RecipePreparation/RecipePreparation';
import RecipePageHero from './../../features/Recipes/RecipePageHero/RecipePageHero';
import styles from './RecipeDatailsPage.module.scss';

const recipe = {
  _id: '640cd5ac2d9fecf12e889849',
  title: 'Beef Dumpling Stew',
  category: 'Beef',
  description:
    'A comforting stew made with beef, vegetables, and dumplings, perfect for a cold winter day.',
  instructions:
    'Preheat the oven to 180C/350F/Gas 4.\r\n\r\nFor the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.\r\n\r\nSprinkle over the flour and cook for a further 2-3 minutes.\r\n\r\nAdd the garlic and all the vegetables and fry for 1-2 minutes.\r\n\r\nStir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.\r\n\r\nCover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.\r\n\r\nFor the dumplings, sift the flour, baking powder and salt into a bowl.\r\nAdd the suet and enough water to form a thick dough.\r\n\r\nWith floured hands, roll spoonfuls of the dough into small balls.\r\n\r\nAfter two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)\r\n\r\nTo serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley.',
  ingredients: [
    {
      measure: '2 tbs',
      title: 'Olive Oil',
      desc: 'A type of oil made from pressing whole olives, commonly used in cooking and as a salad dressing.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/hzcfvlja7hmbp84z7f3q.png',
      _id: '640c2dd963a319ea671e372c',
    },
    {
      measure: '25g',
      title: 'Butter',
      desc: 'A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png',
      _id: '640c2dd963a319ea671e367e',
    },
    {
      measure: '750g',
      title: 'Beef',
      desc: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
      _id: '640c2dd963a319ea671e365d',
    },
    {
      measure: '2 tblsp ',
      title: 'Plain Flour',
      desc: 'A finely ground flour made from wheat that is often used as a basic ingredient in many recipes, including cakes, breads, and pastries.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564855/rgbrzmkgwzap28petbza.png',
      _id: '640c2dd963a319ea671e3743',
    },
    {
      measure: '2 cloves minced',
      title: 'Garlic',
      desc: 'A bulbous plant related to onions, chives, and shallots, known for its pungent flavor and aroma. It is used in many cuisines around the world and is a staple ingredient in Mediterranean and Asian cooking.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/q4gnbvysfhkjv5husoxx.png',
      _id: '640c2dd963a319ea671e36e3',
    },
    {
      measure: '175g',
      title: 'Onions',
      desc: 'A bulb vegetable with layers of flesh covered by a paper-like skin, used in cooking for its flavor and texture.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.png',
      _id: '640c2dd963a319ea671e372e',
    },
    {
      measure: '150g',
      title: 'Celery',
      desc: 'A long, crunchy stalk vegetable with a green color and a strong, distinct flavor, often used in soups, stews, salads, and as a snack with dips or spreads.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/hxotah2bhhhmxmj9znvu.png',
      _id: '640c2dd963a319ea671e368a',
    },
    {
      measure: '150g',
      title: 'Carrots',
      desc: 'A root vegetable that is commonly used in cooking and baking, with a sweet and earthy flavor, and high in vitamin A and other nutrients.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564673/aoyitr2lgxl65uxtt3dn.png',
      _id: '640c2dd963a319ea671e3684',
    },
    {
      measure: '2 chopped',
      title: 'Leek',
      desc: 'A type of allium vegetable that is related to onions and garlic. Leeks have a mild, sweet flavor and can be eaten raw or cooked in a variety of dishes.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564855/yremuumuwyvmelrjaban.png',
      _id: '640c2dd963a319ea671e3710',
    },
    {
      measure: '200g',
      title: 'Swede',
      desc: 'A root vegetable that is also known as rutabaga or yellow turnip, and is often used in stews and soups, as well as mashed as a side dish.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564979/wkxklgifzevtezecrfk5.png',
      _id: '640c2dd963a319ea671e37fc',
    },
    {
      measure: '150ml',
      title: 'Red Wine',
      desc: 'Alcoholic beverage made from fermented grapes or other fruits with a red color derived from the skins of dark-colored grapes.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564914/s45rfvnb0mldkys35piw.png',
      _id: '640c2dd963a319ea671e3751',
    },
    {
      measure: '500g',
      title: 'Beef Stock',
      desc: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/joertssoziny4fr0hx6f.png',
      _id: '640c2dd963a319ea671e366f',
    },
    {
      measure: '2',
      title: 'Bay Leaf',
      desc: 'The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564217/lspnygrkvnwbdjhfz0pl.png',
      _id: '640c2dd963a319ea671e366a',
    },
    {
      measure: '3 tbs',
      title: 'Thyme',
      desc: 'A fragrant herb with small, delicate leaves and a pungent flavor, commonly used in Mediterranean and French cuisines as a seasoning for meat, fish, and vegetables.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564911/fyavzbalgqahy8exwrjs.png',
      _id: '640c2dd963a319ea671e377c',
    },
    {
      measure: '3 tblsp chopped',
      title: 'Parsley',
      desc: 'A herb with a mild, slightly bitter flavor, commonly used in Mediterranean and Middle Eastern cooking as a garnish or seasoning.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564855/z91sebymmjai39blnnpq.png',
      _id: '640c2dd963a319ea671e3738',
    },
    {
      measure: '1 tsp ',
      title: 'Baking Powder',
      desc: 'Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods. It works by releasing carbon dioxide gas into a batter or dough through an acid-base reaction, causing bubbles in the wet mixture to expand and thus leavening the mixture. The first single-acting baking powder was developed by Birmingham based food manufacturer Alfred Bird in England in 1843. The first double-acting baking powder was developed by Eben Norton Horsford in America in the 1860s.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/c6pfcmnzzmra22yqgyjq.png',
      _id: '640c2dd963a319ea671e3665',
    },
    {
      measure: '60g',
      title: 'Suet',
      desc: 'A type of animal fat that is commonly used in British cuisine for making pastry and puddings, and is particularly associated with dishes like Christmas pudding and steak and kidney pie.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564978/clpeo5kgdl4sjsrk4vr2.png',
      _id: '640c2dd963a319ea671e37fb',
    },
    {
      measure: 'Splash',
      title: 'Water',
      desc: 'A transparent, odorless, tasteless liquid that is essential for most forms of life.',
      thumb:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564914/kqcs3gsoxmcu5sn26ief.png',
      _id: '640c2dd963a319ea671e378f',
    },
  ],
  time: '140',
  popularity: 5,
  favorite: false,
  like: false,
  previewrecipe:
    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560620/ktg9sptrbga8hd31n1yd.jpg',
  area: 'British',
  tags: ['Stew', 'Baking'],
  youtube: 'https://www.youtube.com/watch?v=6NgheY-r5t0',
};

function RecipeDatailsPage() {
  return (
    <div className={styles.container}>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        favorite={recipe.favorite}
        time={recipe.time}
        fullImage={recipe.fullImage}
      />
      <RecipeIngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation />
    </div>
  );
}

export default RecipeDatailsPage;
