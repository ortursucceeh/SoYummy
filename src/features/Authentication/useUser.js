// import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';
// import { getAccessToken } from '../../utils/auth';

export function useUser() {
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

  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user };
}
