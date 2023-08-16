import { useQuery } from '@tanstack/react-query';
import { getRecipesByCategory } from '../../../services/apiRecipes';
import { useParams, useSearchParams } from 'react-router-dom';

export function useCategoryRecipes() {
  let { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  if (!categoryName) categoryName = 'Beef';

  categoryName = categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1);

  const { isLoading, data, isPreviousData, isFetching } = useQuery({
    queryKey: ['recipeByCategory', categoryName, page],
    queryFn: () => getRecipesByCategory(categoryName, page),
    keepPreviousData: true,
  });

  return { data, isLoading, isPreviousData, isFetching };
}
