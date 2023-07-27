import { useQueryClient, useMutation } from '@tanstack/react-query';
import { getCurrentUser as getCurrentUserApi } from '../../services/apiAuth';
// import { toast } from 'react-hot-toast';

export function useUser() {
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem('soyummy-user'))?.accessToken;

  const { mutate: getCurrentUser, isLoading } = useMutation({
    mutationFn: () => getCurrentUserApi({ token }),
    onSuccess: user => {
      // toast.success('Account successfully created!');
      queryClient.setQueryData(['user'], user);
      localStorage.setItem('soyummy-user', JSON.stringify(user));
      console.log(user);
    },
    onError: err => {
      // toast.error('Password or email are incorrect!');
      console.log(err.message);
    },
  });

  return { getCurrentUser, isLoading, isAuthenticated: token };
}
