import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../services/apiRecipes';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export function useSearchRecipes() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryType = searchParams.get('queryType') ?? 'title';

  // useEffect(() => {}, [query, queryType]);
  const { isLoading, data } = useQuery({
    queryKey: ['searchedRecipes', query, queryType],
    queryFn: () => searchRecipes({ query, queryType }),
  });

  return { data, isLoading };
}
