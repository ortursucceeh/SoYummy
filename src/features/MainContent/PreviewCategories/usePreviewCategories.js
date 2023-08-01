import { useQuery } from '@tanstack/react-query';
import { previewCategories } from '../../../services/apiRecipes';

export function usePreviewCategories() {
  // const queryClient = useQueryClient();

  // const { mutate: getCurrentUser, isLoading } = useMutation({
  //   mutationFn: getCurrentUserApi,
  //   onSuccess: user => {
  //     queryClient.setQueryData(['user'], user);
  //   },
  //   onError: err => {
  //     console.log(err.message);
  //   },
  // });

  const { isLoading, data: categories } = useQuery({
    queryKey: ['previewCategories'],
    queryFn: previewCategories,
  });

  return { categories, isLoading };
}
