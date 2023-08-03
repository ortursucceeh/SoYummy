import { useQuery } from '@tanstack/react-query';
import { getRecipesByCategory } from '../../../services/apiRecipes';
import { useParams } from 'react-router-dom';

export function useCategoryRecipes() {
  let { categoryName } = useParams();

  if (!categoryName) categoryName = 'Beef';

  categoryName = categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1);

  const { isLoading, data } = useQuery({
    queryKey: ['recipeByCategory', categoryName],
    queryFn: () => getRecipesByCategory(categoryName),
  });

  return { data, isLoading };
}
