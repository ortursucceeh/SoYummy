import { createOwnRecipe as createOwnRecipeApi } from '../../services/apiRecipes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateOwnRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createOwnRecipe, isLoading } = useMutation({
    mutationFn: createOwnRecipeApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ownRecipes'] });
      toast.success('Recipe was successfully created!');
      navigate('/my');
    },
    onError: err => {
      toast.error("Couldn't create your recipe🍎");
      console.log(err.message);
    },
  });

  return { createOwnRecipe, isLoading };
}
