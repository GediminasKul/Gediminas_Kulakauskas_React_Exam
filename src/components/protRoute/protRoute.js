import { Link, Route, Router } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './protRoute.module.css';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;
  return (
    <Router>
      <Route {...rest}>
        {isUserLoggedIn ? (
          children
        ) : (
          <div className={css['protected-container']}>
            <h2>Please login</h2>
            <Link to={'/login'}>Login here</Link>
          </div>
        )}
      </Route>
    </Router>
  );
}

export default ProtectedRoute;
