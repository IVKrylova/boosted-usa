import React from 'react';
import Button from '../Button/Button';
import styles from './ElectricSkateboards.module.scss';

const ElectricSkateboards: React.FC = () => {
  return (
    <section className={styles.electricSkateboards}>
      <p className={`${styles.text} ${styles.text_place_top}`}>High-performance</p>
      <h2 className={styles.title}>Electric Skateboards</h2>
      <p className={`${styles.text} ${styles.text_place_bottom}`}>
        Cruising campus, going to work or getting through that
        long list of errands has never been easier or more fun.
      </p>
      <Button
        text='Shop Now'
      />
    </section>
  );
}

export default ElectricSkateboards;
