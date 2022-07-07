import React from 'react';
import css from './registerpage.module.css';
import RegisterForm from '../../components/registerform/registerform';

function RegisterPage() {
  return (
    <div>
      <div className={css.containerRegister}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
