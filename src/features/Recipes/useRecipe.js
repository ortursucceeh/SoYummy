import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getRecipeById, getOwnRecipeById } from '../../services/apiRecipes';

export function useRecipe() {
  const { recipeId } = useParams();
  const { search } = useLocation();

  const getRecipe = search ? getOwnRecipeById : getRecipeById;

  const { isLoading, data: recipe } = useQuery({
    queryKey: ['recipeById', recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  return { recipe, isLoading };
}
