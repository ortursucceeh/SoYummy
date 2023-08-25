import styles from './ProtectedRoute.module.scss';
import { useUser } from 'src/features/Authentication/useUser';
import Loader from '../Loaders/Loader';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  type: 'private' | 'public';
  children: ReactNode | ReactNode[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ type, children }) => {
  const { isLoading, isAuthenticated } = useUser();

  const location = useLocation();

  if (type === 'private' && !isAuthenticated && !isLoading)
    return <Navigate to="/" state={location} />;
  if (type === 'public' && isAuthenticated && !isLoading)
    return <Navigate to="/main" state={location} />;

  if (isLoading)
    return (
      <div className={styles.fullpage}>
        <Loader />
      </div>
    );

  return children;
};

export default ProtectedRoute;
