import styles from './Input.module.scss';

function Input({ leftIcon, rightIcon, name, register, errors, validationSchema, ...props }) {
  return (
    <div className={styles.container}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {register ? (
        <input
          name={name}
          id={name}
          className={styles.input}
          {...register(name, validationSchema)}
          {...props}
        />
      ) : (
        <input name={name} id={name} className={styles.input} {...props} />
      )}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      {errors && errors[name]?.type === 'required' && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'minLength' && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default Input;
