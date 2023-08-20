import styles from './ProtectedRoute.module.scss';
import { useUser } from 'src/features/Authentication/useUser';
import Loader from '../Loaders/Loader';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ type, children }) {
  // 1.Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  const location = useLocation();

  if (type === 'private' && !isAuthenticated && !isLoading)
    return <Navigate to="/" state={location} />;
  if (type === 'public' && isAuthenticated && !isLoading)
    return <Navigate to="/main" state={location} />;

  // 3. show spinner
  if (isLoading)
    return (
      <div className={styles.fullpage}>
        <Loader />
      </div>
    );

  // 4. if there is a user, render the app
  return children;
}

export default ProtectedRoute;
