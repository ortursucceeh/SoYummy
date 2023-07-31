import { useEffect, useState } from 'react';

const recipesFromScreenSize = {
  578: 1,
  768: 2,
  1200: 3,
};

function getRecipiesFromScreenSize() {
  const screenSize = +window.innerWidth;
  let recipesCount = 4;

  for (const [screenWidth, count] of Object.entries(recipesFromScreenSize)) {
    if (screenSize <= screenWidth) {
      // console.log(`${screenSize} <= ${screenWidth} it means ${count}`);
      recipesCount = count;
      break;
    }
  }
  return recipesCount;
}

export function useRecipesCountFromScreenSize() {
  const [recipesCount, setRecipesCount] = useState(4);

  useEffect(() => {
    function handleEvent() {
      setRecipesCount(getRecipiesFromScreenSize());
    }

    let timeoutId;

    const eventListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleEvent, 30);
    };

    window.addEventListener('resize', eventListener);
    return () => {
      window.removeEventListener('resize', eventListener);
      clearTimeout(timeoutId);
    };
  }, [recipesCount]);

  return recipesCount;
}
