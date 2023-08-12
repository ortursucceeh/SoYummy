import { useQuery } from '@tanstack/react-query';
import { getFavoritesRecipes } from '../../services/apiRecipes';

export function useFavoritesRecipes() {
  const { isLoading, data } = useQuery({
    queryKey: ['favoritesRecipes'],
    queryFn: getFavoritesRecipes,
  });

  return { data, isLoading };
}
