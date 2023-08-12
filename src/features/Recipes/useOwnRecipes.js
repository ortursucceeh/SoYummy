import { useQuery } from '@tanstack/react-query';
import { getOwnRecipes } from '../../services/apiRecipes';

export function useOwnRecipes() {
  const { isLoading, data } = useQuery({
    queryKey: ['ownRecipes'],
    queryFn: getOwnRecipes,
  });
  return { data, isLoading };
}
