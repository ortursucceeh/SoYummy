import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userLocalStorageKey } from 'src/utils/auth';
import { login as loginApi } from '../../../services/apiAuth';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      toast.success('You are successfully logged in!');
      queryClient.setQueryData(['user'], data.user);
      localStorage.setItem(userLocalStorageKey, JSON.stringify(data));
      navigate('/main');
    },
    onError: (err: Error) => {
      toast.error('Invalid credentials!');
      console.log(err.message);
    },
  });

  return { login, isLoading };
};
