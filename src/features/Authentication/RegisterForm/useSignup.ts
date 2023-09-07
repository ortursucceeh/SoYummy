import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signup as signupApi } from '../../../services/apiAuth';

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('Account successfully created!');
    },
    onError: (err: Error) => {
      toast.error('Invalid credentials!');
      console.log(err.message);
    },
  });

  return { signup, isLoading };
};
