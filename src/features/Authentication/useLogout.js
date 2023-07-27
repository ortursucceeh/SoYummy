import { useQueryClient, useMutation } from '@tanstack/react-query';
import { getCurrentUser as logoutApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('soyummy-user'))?.accessToken;
  console.log('token', token);

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutApi({ token }),
    onSuccess: () => {
      toast.success('You are successfully logged out!');
      queryClient.removeQueries();
      console.log('logout from uselogout');
      localStorage.removeItem('soyummy-user');
      navigate('/', { replace: true });
    },
    onError: err => {
      // toast.error('Invalid credentials!');
      console.log(err.message);
    },
  });

  return { logout, isLoading };
}
