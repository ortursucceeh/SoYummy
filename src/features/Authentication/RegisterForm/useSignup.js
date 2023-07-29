import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('Account successfully created!');
    },
    onError: err => {
      toast.error('Password or email are incorrect!');
      console.log(err.message);
    },
  });

  return { signup, isLoading };
}
