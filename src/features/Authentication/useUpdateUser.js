import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: data => {
      toast.success('Profile was successfully updated!');
      queryClient.setQueryData(['user'], data);
    },
    onError: err => {
      toast.error('Update user server error');
      console.log(err.message);
    },
  });

  return { updateUser, isLoading };
}
