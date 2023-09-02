import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from 'src/ui/Button/Button';
import Input from 'src/ui/Input/Input';
import styles from './SigninForm.module.scss';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { useLogin } from './useLogin';
import LoaderMini from 'src/ui/Loaders/LoaderMini';

const SigninForm = () => {
  const { login, isLoading } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    login({ email, password }, { onSettled: () => reset() });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
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
          disabled={isLoading}
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
          disabled={isLoading}
        />
      </div>
      <Button shape="rect" color="green" disabled={isLoading}>
        {isLoading ? <LoaderMini /> : 'Sign in'}
      </Button>
    </form>
  );
};

export default SigninForm;
