import React from 'react';
import logo from '../../images/boosted-shop-logo.svg';
import styles from './BoostedShop.module.scss';

const BoostedShop: React.FC = () => {
  return (
    <section className={styles.boostedShop}>
      <h2 className={styles.title}>
        Looking for Boosted Boards, or Boosted Revs?
      </h2>
      <p className={styles.text}>
        Boosted USA acquired all of the remaining inventory directly
        from Boosted.  This means we have the electric skateboards and
        scooter you all love and have been looking for.  Get your hands
        on these highly sought after products while supplies last.
      </p>
      <ul className={styles.linksList}>
        <li className={`${styles.linksList__item} ${styles.linksList__item_boards}`}>
          <img className={styles.linksList__logo} src={logo} alt='logotype' />
          <h3 className={styles.linksList__title}>Shop Boosted Boards</h3>
          <a className={styles.linksList__link}>In Stock</a>
        </li>
        <li className={`${styles.linksList__item} ${styles.linksList__item_revs}`}>
          <img className={styles.linksList__logo} src={logo} alt='logotype' />
          <h3 className={styles.linksList__title}>Shop Boosted Revs</h3>
          <a className={styles.linksList__link}>In Stock</a>
        </li>
      </ul>
    </section>
  );
}

export default BoostedShop;
