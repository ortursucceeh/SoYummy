import { useQueryClient, useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../../services/apiAuth';
import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

export function useSignup() {
  // const queryClient = useQueryClient();

  // const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('Account successfully created!');
      // queryClient.setQueryData(['user'], user);
      // localStorage.setItem('soyummy-user', JSON.stringify(user));
      // navigate('/home');
      // console.log(user);
    },
    onError: err => {
      toast.error('Password or email are incorrect!');
      console.log(err.message);
    },
  });

  return { signup, isLoading };
}
