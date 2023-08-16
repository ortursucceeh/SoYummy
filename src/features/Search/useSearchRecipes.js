import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../services/apiRecipes';
import { useSearchParams } from 'react-router-dom';

export function useSearchRecipes() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryType = searchParams.get('queryType') ?? 'title';

  const { isLoading, data } = useQuery({
    queryKey: ['searchedRecipes', query, queryType],
    queryFn: () => searchRecipes({ query, queryType }),
    enabled: !!query.length,
  });

  return { data, isLoading };
}
