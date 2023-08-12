import { toggleFavoriteRecipe as toggleFavoriteRecipeApi } from '../../services/apiRecipes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useToggleFavoriteRecipe() {
  const queryClient = useQueryClient();

  const { mutate: toggleFavoriteRecipe, isLoading } = useMutation({
    mutationFn: toggleFavoriteRecipeApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favoritesRecipes'] });
      queryClient.invalidateQueries({ queryKey: ['recipeById'] });
      toast.success("Recipe's favorite status was changed!");
    },
    onError: err => {
      console.log(err.message);
    },
  });

  return { toggleFavoriteRecipe, isLoading };
}
