import React from 'react';

import Offer from '../components/Offer';

import MainImg from '../images/MainImg.png';

import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.HomePagewrapper}>
      <div className={css.offerContainer}>
        <Offer />
        <img src={MainImg} alt="friends" />
      </div>
    </div>
  );
}

export default HomePage;
