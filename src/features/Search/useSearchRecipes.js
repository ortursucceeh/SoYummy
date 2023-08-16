import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../services/apiRecipes';
import { useSearchParams } from 'react-router-dom';
import { getPages } from '../../utils/functions';

export function useSearchRecipes() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryType = searchParams.get('queryType') ?? 'title';
  const page = searchParams.get('page') ?? 1;

  const { isLoading, data, isFetching, isPreviousData } = useQuery({
    queryKey: ['searchedRecipes', query, queryType, page],
    queryFn: () => searchRecipes({ query, queryType }, page),
    enabled: !!query.length,
    keepPreviousData: true,
  });

  const pages = getPages(data?.total, data?.limit);

  return { data, isLoading, pages, isFetching, isPreviousData };
}
