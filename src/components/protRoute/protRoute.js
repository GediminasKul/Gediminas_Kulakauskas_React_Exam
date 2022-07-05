import { useContext } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useContext(AuthContext);
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <div className="container">
          <h2>Please login</h2>
          <div className="alert alert-danger">
            In order to see the content, please log-in first.
          </div>
          <Link to={'/login'}>Click here to login.</Link>
        </div>
      )}
    </Route>
  );
}

export default ProtectedRoute;
