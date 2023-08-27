import { addRecipe as addRecipeApi } from '../../../services/apiRecipes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useAddRecipe = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addRecipe, isLoading } = useMutation({
    mutationFn: addRecipeApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ownRecipes'] });
      toast.success('Recipe was successfully created!');
      navigate('/my');
    },
    onError: (err: Error) => {
      toast.error("Couldn't create your recipe🍎 Please fill all the required fields");
      console.log(err.message);
    },
  });

  return { addRecipe, isLoading };
};
