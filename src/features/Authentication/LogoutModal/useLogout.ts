import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userLocalStorageKey } from 'src/utils/auth';
import { getCurrentUser as logoutApi } from '../../../services/apiAuth';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('You are successfully logged out!');
      queryClient.removeQueries();
      localStorage.removeItem(userLocalStorageKey);
      navigate('/', { replace: true });
    },
    onError: (err: Error) => {
      console.log(err.message);
    },
  });

  return { logout, isLoading };
};
