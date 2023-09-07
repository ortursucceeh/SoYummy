import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';

type InputProps1 = ComponentPropsWithoutRef<'input'> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  name: string;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  validationSchema?: RegisterOptions;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps1> = ({
  leftIcon,
  rightIcon,
  register,
  name,
  errors,
  validationSchema,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {register ? (
        <input
          id={name}
          className={styles.input}
          {...rest}
          {...register(name, validationSchema)}
          name={name}
        />
      ) : (
        <input name={name} id={name} className={styles.input} {...rest} />
      )}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}

      {errors && errors[name]?.type === 'required' && (
        <span className={styles.error}>{errors[name]?.message as ReactNode}</span>
      )}
      {errors && errors[name]?.type === 'minLength' && (
        <span className={styles.error}>{errors[name]?.message as ReactNode}</span>
      )}
      {errors && errors[name]?.type === 'pattern' && (
        <span className={styles.error}>{errors[name]?.message as ReactNode}</span>
      )}
    </div>
  );
};

export default Input;
