import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';
import style from './header.module.css';

function Header() {
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className={style.main}>
      <div className={style.header}>
        <div>
          <img
            src="https://toppng.com/uploads/preview/instagram-logo-11545512111t0928udues.png"
            alt="logo"
            className={style.logo}
          />
        </div>
        <Link className={style.navLink} to="/"></Link>
        <nav>
          {isUserLoggedIn ? (
            <>
              <NavLink className={style.navLink} to="/">
                Home
              </NavLink>
              <NavLink className={style.navLink} to="/add">
                Add
              </NavLink>
              <NavLink className={style.navLink} to="/login" onClick={logout}>
                Logout
              </NavLink>
            </>
          ) : (
            ''
          )}
          {!isUserLoggedIn ? (
            <>
              <NavLink className={style.navLink} to="/register">
                Register
              </NavLink>
              <NavLink className={style.navLink} to="/login">
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
