import React from 'react';
import css from './Offer.module.css';

function Offer() {
  return (
    <div className={css.offerContainer}>
      <h1 className={css.offerHeader}>
        Important people should always be around.
        <span>Don't lose them.</span>
      </h1>
      <p className={css.offerParagraph}>
        Phonobook helps you to have important people's contacts always at your
        hand.
      </p>
      <button className={css.offerButton} type="button">
        Try Phonebook for free
      </button>
    </div>
  );
}

export default Offer;
