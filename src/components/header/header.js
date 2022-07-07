import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';
import css from './header.module.css';

function Header() {
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className={css.main}>
      <div className={css.header}>
        <div>
          <img
            src="https://toppng.com/uploads/preview/instagram-logo-11545512111t0928udues.png"
            alt="logo"
            className={css.logo}
          />
        </div>
        <Link className={css.navLink} to="/"></Link>
        <nav>
          {isUserLoggedIn ? (
            <>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
              <NavLink className={css.navLink} to="/add">
                Add
              </NavLink>
              <NavLink className={css.navLink} to="/login" onClick={logout}>
                Logout
              </NavLink>
            </>
          ) : (
            ''
          )}
          {!isUserLoggedIn ? (
            <>
              <NavLink className={css.navLink} to="/register">
                Register
              </NavLink>
              <NavLink className={css.navLink} to="/login">
                Login
              </NavLink>
            </>
          ) : (
            ''
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
