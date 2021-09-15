import React from 'react';
import { Link } from 'react-router-dom';
import css from './Login.module.css';

function Login() {
  return (
    <div className={css.pageWrapper}>
      <div className={css.LoginOfferContainer}>
        <h1 className={css.LoginMainHeader}>
          <span>Phone</span>book
        </h1>
        <h2 className={css.LoginOffer}>
          Phonebook helps you to have important people's contacts
          <br />
          always at your hand.
        </h2>
      </div>
      <div className={css.LoginFormContainer}>
        <form name="login_form" autoComplete="on" className={css.LoginForm}>
          <label>
            <input
              type="email"
              name="email"
              className={css.LoginEmail}
              placeholder="Enter your email"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              className={css.LoginPassword}
              placeholder="Password"
            />
          </label>
          <button type="submit" className={css.LoginBtnSubmit}>
            Log in
          </button>
        </form>

        <Link to="/signup" className={`${css.ForgotPassword} link`}>
          Forgot password?
        </Link>
        <div className={css.hr}>
          <button type="button" className={css.LoginBtnSignUp}>
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
