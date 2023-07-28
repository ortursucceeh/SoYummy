import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: data => {
      toast.success('Your account profile was successfully updated!');
      queryClient.setQueryData(['user'], data);
      // localStorage.setItem('soyummy-user', JSON.stringify(data));
    },
    onError: err => {
      toast.error('Invalid profile update!');
      console.log(err.message);
    },
  });

  return { updateUser, isLoading };
}
