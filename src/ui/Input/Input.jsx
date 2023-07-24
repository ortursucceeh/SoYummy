import styles from './Input.module.scss';

function Input({ leftIcon, rightIcon, ...props }) {
  return (
    <div className={styles.container}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <input {...props} className={styles.input} />
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </div>
  );
}

export default Input;
