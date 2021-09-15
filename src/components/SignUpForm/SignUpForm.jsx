import React from 'react';
import css from './SignUpForm.module.css';
import SignUpSvg from '../../svg/SignUpSvg.svg';

function SignUpForm() {
  return (
    <div className={css.PageContainer}>
      <div className={css.FormContainer}>
        <h1 className={css.SignUpMainCaption}>
          <span>Phone</span>book
        </h1>
        <p className={css.SignUpCaptionParagraph}>Create an account</p>

        <form name="login_form" autoComplete="on" className={css.LoginForm}>
          <label>
            <input
              name="name"
              className={css.Name}
              placeholder="Enter your name"
            />
          </label>
          <label>
            <input
              name="surname"
              className={css.Surname}
              placeholder="Enter your surname"
            />
          </label>

          <p className={css.SubscriptionForm}>Enter your name and surname</p>

          <label>
            <input
              type="email"
              name="email"
              className={css.Email}
              placeholder="Enter your email"
            />
          </label>
          <p className={css.SubscriptionForm}>Enter your email address</p>
          <label>
            <input
              type="password"
              name="password"
              className={css.Password}
              placeholder="Password"
            />
          </label>
          <label>
            <input
              type="password"
              name="confirmPassword"
              className={css.ConfirmPassword}
              placeholder="Confirm password"
            />
          </label>
          <p className={css.SubscriptionForm}>
            Use a combination of 8 or more letters, numbers and symbols
          </p>

          <div className={css.PoliticsContainer}>
            <label>
              <input
                type="checkbox"
                name="confirmPolitic"
                className={css.confirmPolitic}
              />
            </label>

            <p className={css.infoAboutPolitic}>
              I am satisfied with the processing of personal data{' '}
            </p>
          </div>

          <div className={css.BtnsContainer}>
            <a href="/" className={`${css.LogIn} link`}>
              Get into the account
            </a>
            <button type="submit" className={css.RegistrationBtnSubmit}>
              Registration
            </button>
          </div>
        </form>
      </div>

      <div className={css.ImgContainer}>
        <img src={SignUpSvg} alt="signup" width="350" height="350"></img>
        <p>Your personal information remains private and protected</p>
      </div>
    </div>
  );
}

export default SignUpForm;
