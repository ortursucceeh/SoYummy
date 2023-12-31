import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateUser as updateUserApi } from '../../../services/apiAuth';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: data => {
      toast.success('Profile was successfully updated!');
      queryClient.setQueryData(['user'], data);
    },
    onError: (err: Error) => {
      toast.error('Update user server error');
      console.log(err.message);
    },
  });

  return { updateUser, isLoading };
};
