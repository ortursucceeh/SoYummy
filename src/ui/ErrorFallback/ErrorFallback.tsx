import Button from '../Button/Button';
import styles from './ErrorFallback.module.scss';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: (...args: any[]) => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className={styles.error}>
      <p>Something went wrong...🥴</p>
      <p>{error.message}</p>
      <Button shape="rect" color="green" onClick={resetErrorBoundary} className={styles.btn}>
        Back
      </Button>
    </div>
  );
};

export default ErrorFallback;
