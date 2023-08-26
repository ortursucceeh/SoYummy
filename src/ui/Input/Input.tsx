import { FieldValues, UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
import styles from './Input.module.scss';
import { ReactNode, ComponentProps } from 'react';

interface InputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
  type?: string;
  name: string;
  disabled?: boolean;
  autoComplete?: 'on' | 'off';
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  validationSchema?: RegisterOptions;
  props?: Omit<ComponentProps<'input'>, 'name'> & { name: string };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  register,
  name,
  errors,
  validationSchema,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {register ? (
        <input
          id={name}
          className={styles.input}
          {...props}
          {...register(name, validationSchema)}
          name={name}
        />
      ) : (
        <input name={name} id={name} className={styles.input} {...props} />
      )}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      {/* {errors.length &&
        errors.map(error => (
          <span className={styles.error}>{errors[name]?.message as ReactNode}</span>
        ))} */}
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
