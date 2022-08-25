import React from 'react';
import styles from './Brands.module.scss';
import electrec from '../../images/electrec.svg';
import techcruch from '../../images/techcruch.svg';
import popularMechanics from '../../images/popular-mechanics.svg';
import wired from '../../images/wired.svg';

const Brands: React.FC = () => {
  return (
    <section className={styles.brands}>
      <ul className={styles.brandsList}>
        <li className={styles.brandsList__item}>
          <img className={styles.brandsList__brand} src={electrec} alt='electrec' />
        </li>
        <li className={styles.brandsList__item}>
          <img className={styles.brandsList__brand} src={techcruch} alt='TechCruch' />
        </li>
        <li className={styles.brandsList__item}>
          <img className={styles.brandsList__brand} src={popularMechanics} alt='Popular Mechanics' />
        </li>
        <li className={styles.brandsList__item}>
          <img className={styles.brandsList__brand} src={wired} alt='wired' />
        </li>
      </ul>
    </section>
  );
}

export default Brands;
