import { useQuery } from '@tanstack/react-query';
import { previewCategories } from '../../services/apiRecipes';

export const usePreviewCategories = () => {
  const { isLoading, data: categories } = useQuery({
    queryKey: ['previewCategories'],
    queryFn: previewCategories,
  });

  return { categories, isLoading };
};
