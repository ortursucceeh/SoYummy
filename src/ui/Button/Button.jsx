import styles from './Button.module.scss';

function Button({ type, color, children, onClick, className, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${styles[color]} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
}
export default Button;
