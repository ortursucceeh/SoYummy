import { useQuery } from '@tanstack/react-query';
import { getPopularRecipes } from 'src/services/apiRecipes';

export const usePopularRecipes = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['popularRecipes'],
    queryFn: getPopularRecipes,
  });

  return { data, isLoading };
};
