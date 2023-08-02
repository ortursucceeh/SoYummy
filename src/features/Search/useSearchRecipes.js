import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../services/apiRecipes';
import { useSearchParams } from 'react-router-dom';

export function useSearchRecipes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryType = searchParams.get('queryType') ?? 'title';
  console.log('query :>> ', query);
  console.log('queryType :>> ', queryType);

  const { isLoading, data } = useQuery({
    queryKey: ['searchedRecipes', query, queryType],
    queryFn: () => searchRecipes({ query, queryType }),
  });

  return { data, isLoading };
}
