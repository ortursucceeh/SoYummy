import styles from './Button.module.scss';

function Button({ shape, color, children, onClick, className, type, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${styles.btn} ${styles[shape]} ${styles[color]} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
}
export default Button;
