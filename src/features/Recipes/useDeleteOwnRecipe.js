import { deleteOwnRecipeById as deleteOwnRecipeByIdApi } from '../../services/apiRecipes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useDeleteOwnRecipe() {
  const queryClient = useQueryClient();

  const { mutate: deleteOwnRecipeById, isLoading } = useMutation({
    mutationFn: deleteOwnRecipeByIdApi,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['ownRecipes'] });
      toast.success(data.message);
    },
    onError: err => {
      console.log(err.message);
    },
  });

  return { deleteOwnRecipeById, isLoading };
}
