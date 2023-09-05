import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getOwnRecipeById, getRecipeById } from '../../../services/apiRecipes';

export const useRecipe = () => {
  let { recipeId } = useParams<{ recipeId?: string }>();

  if (recipeId === undefined) {
    recipeId = 'NotFound';
  }

  const { search } = useLocation();

  const getRecipe = search ? getOwnRecipeById : getRecipeById;

  const { isLoading, data: recipe } = useQuery({
    // @ts-ignore
    queryKey: ['recipeById', recipeId],
    queryFn: () => getRecipe(recipeId as string),
  });

  return { recipe, isLoading };
};
