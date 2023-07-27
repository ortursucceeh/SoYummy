import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import styles from './RegisterForm.module.scss';
import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function RegisterForm() {
  const {
    register,
    formState: { errors },
    // getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    console.log('submit');
    reset();
  }

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
        />
      </div>
      <Button type="rect" color="green">
        Sign up
      </Button>
    </form>
  );
}

export default RegisterForm;
