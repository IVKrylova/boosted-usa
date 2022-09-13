import React from 'react';
import styles from './AboutBoosted.module.scss';
import logoBoosted from '../../images/logo-boosted-description.svg';

const AboutBoosted: React.FC = () => {
  return (
    <section className={styles.aboutBoosted}>
      <img src={logoBoosted} alt="logo Boosted USA" className={styles.aboutBoosted__logo} />
      <h3 className={`${styles.aboutBoosted__title} ${styles.aboutBoosted__title_place_links}`}>

      </h3>
      <ul className={styles.aboutBoosted__links}>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
        <li className={styles.aboutBoosted__link}></li>
      </ul>
      <h3 className={`${styles.aboutBoosted__title} ${styles.aboutBoosted__title_place_text}`}>

      </h3>
      <p className={styles.aboutBoosted__text}></p>
  </section>
  );
}

export default AboutBoosted;
