import { useQueryClient, useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      toast.success('You are successfully logged in!');
      queryClient.setQueryData(['user'], data.user);
      console.log('data for storage', data);
      localStorage.setItem('soyummy-user', JSON.stringify(data));
      navigate('/home');
    },
    onError: err => {
      toast.error('Invalid credentials!');
      console.log(err.message);
    },
  });

  return { login, isLoading };
}
