import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getRecipesById } from '../../services/apiRecipes';

export function useRecipe() {
  const { recipeId } = useParams();
  console.log(recipeId);

  const { isLoading, data: recipe } = useQuery({
    queryKey: ['recipeById', recipeId],
    queryFn: () => getRecipesById(recipeId),
  });

  // console.log(recipe);

  return { recipe, isLoading };
}
