import styles from './Input.module.scss';

function Input({ placeholder = '', leftIcon = '', rightIcon = '' }) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.leftIcon}>{leftIcon}</div>
      <input placeholder={placeholder} type="text" className={styles.input} />
      <div className={styles.rightIcon}>{rightIcon}</div>
    </div>
  );
}

export default Input;
