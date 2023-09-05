import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { CATEGORIES_ENUM, CategoriesType } from 'src/types/Category';
import { getRecipesByCategory } from '../../../services/apiRecipes';
import { capitalizeWord } from '../../../utils/functions';

export function useCategoryRecipes() {
  let { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';

  if (!categoryName) categoryName = CATEGORIES_ENUM.Beef;

  categoryName = capitalizeWord(categoryName);

  const { isLoading, data, isPreviousData, isFetching } = useQuery({
    queryKey: ['recipeByCategory', categoryName, page],
    queryFn: () => getRecipesByCategory(categoryName as CategoriesType, page),
    keepPreviousData: true,
  });

  return { data, isLoading, isPreviousData, isFetching };
}
