import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../../services/apiRecipes';
import { useSearchParams } from 'react-router-dom';
import { SearchType } from 'src/types/Recipe';

export const useSearchRecipes = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryType = (searchParams.get('queryType') as SearchType) ?? 'title';
  const page = searchParams.get('page') ?? '1';

  const { isLoading, data, isFetching, isPreviousData } = useQuery({
    queryKey: ['searchedRecipes', query, queryType, page],
    queryFn: () => searchRecipes({ query, queryType }, page),
    enabled: !!query.length,
    keepPreviousData: true,
  });

  return { data, isLoading, isFetching, isPreviousData };
};
