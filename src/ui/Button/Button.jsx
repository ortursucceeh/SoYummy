import styles from './Button.module.scss';

function Button({ type, color, children, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${styles[color]}`}
    >
      {children}
    </button>
  );
}
export default Button;
