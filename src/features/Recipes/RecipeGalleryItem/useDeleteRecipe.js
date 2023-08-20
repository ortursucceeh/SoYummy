import { deleteRecipe as deleteRecipeApi } from '../../../services/apiRecipes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useDeleteRecipe() {
  const queryClient = useQueryClient();

  const { mutate: deleteRecipe, isLoading } = useMutation({
    mutationFn: deleteRecipeApi,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['ownRecipes'] });
      toast.success(data.message);
    },
    onError: err => {
      console.log(err.message);
    },
  });

  return { deleteRecipe, isLoading };
}
