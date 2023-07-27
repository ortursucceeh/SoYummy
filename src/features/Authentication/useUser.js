import { useQueryClient, useMutation } from '@tanstack/react-query';
import { getCurrentUser as getCurrentUserApi } from '../../services/apiAuth';

export function useUser() {
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem('soyummy-user'))?.accessToken;

  const { mutate: getCurrentUser, isLoading } = useMutation({
    mutationFn: () => getCurrentUserApi({ token }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user);
      localStorage.setItem('soyummy-user', JSON.stringify(user));
      console.log(user);
    },
    onError: err => {
      console.log(err.message);
    },
  });

  return { getCurrentUser, isLoading, isAuthenticated: token };
}
