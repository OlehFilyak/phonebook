import React from 'react';
import logo from '../../images/Logo.png';

import css from './Header.module.css';

function Header() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <a href="/" className={`${css.logo} link`}>
            <img src={logo} alt="logo" width="100" />
            <span className={css.phone}>Phone</span>
            <span className={css.book}>boоk</span>
          </a>

          <div className={css.registration}>
            <a href="/" className="link">
              Log in
            </a>
            <a href="/" className="link">
              Sign up
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
