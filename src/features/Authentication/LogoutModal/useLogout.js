import { useQueryClient, useMutation } from '@tanstack/react-query';
import { getCurrentUser as logoutApi } from '../../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('You are successfully logged out!');
      queryClient.removeQueries();
      localStorage.removeItem('soyummy-user');
      navigate('/', { replace: true });
    },
    onError: err => {
      console.log(err.message);
    },
  });

  return { logout, isLoading };
}
