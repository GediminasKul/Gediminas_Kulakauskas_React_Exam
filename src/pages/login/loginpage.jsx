import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/loginform/loginform';
import css from './loginpage.module.css';

function Login() {
  const history = useHistory();
  function handleSuccessLogin() {
    history.replace('/home');
  }
  return (
    <div className={css.containerLogin}>
      <LoginForm onSuccessLogin={handleSuccessLogin} />
    </div>
  );
}

export default Login;
