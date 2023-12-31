import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FiLock, FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Button from 'src/ui/Button/Button';
import Input from 'src/ui/Input/Input';
import LoaderMini from 'src/ui/Loaders/LoaderMini';
import { useLogin } from '../SigninForm/useLogin';
import styles from './RegisterForm.module.scss';
import { useSignup } from './useSignup';

function RegisterForm() {
  const { signup, isLoading: isLoadingSignup } = useSignup();
  const { login, isLoading: isLoadingLogin } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = ({ name, email, password }) => {
    signup(
      { name, email, password },
      {
        onSettled: () => {
          login({ email, password }, { onSettled: () => reset() });
        },
      }
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <Input
          leftIcon={<FiUser />}
          placeholder="Name"
          register={register}
          name={'name'}
          validationSchema={{
            required: 'Field is required',
            minLength: {
              value: 3,
              message: 'Name should have at least 3 characters',
            },
          }}
          errors={errors}
          aria-invalid={errors.name ? 'true' : 'false'}
          disabled={isLoadingSignup || isLoadingLogin}
        />
        <Input
          leftIcon={<HiOutlineMail />}
          placeholder="Email"
          type="email"
          autoComplete="on"
          register={register}
          name={'email'}
          validationSchema={{
            required: 'Field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          errors={errors}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isLoadingSignup || isLoadingLogin}
        />
        <Input
          leftIcon={<FiLock />}
          placeholder="Password"
          type="password"
          autoComplete="on"
          register={register}
          name={'password'}
          validationSchema={{
            required: 'Field is required',
            minLength: {
              value: 8,
              message: 'Password should have at least 8 characters',
            },
          }}
          errors={errors}
          aria-invalid={errors.password ? 'true' : 'false'}
          disabled={isLoadingSignup || isLoadingLogin}
        />
      </div>
      <Button shape="rect" color="green" disabled={isLoadingSignup || isLoadingLogin}>
        {isLoadingSignup || isLoadingLogin ? <LoaderMini /> : 'Sign up'}
      </Button>
    </form>
  );
}

export default RegisterForm;
