import styles from './Button.module.scss';

function Button({ type, color, children, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]} ${styles[color]}`}>
      {children}
    </button>
  );
}

export default Button;
