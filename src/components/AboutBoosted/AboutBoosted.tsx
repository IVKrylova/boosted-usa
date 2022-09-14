import React from 'react';
import styles from './AboutBoosted.module.scss';
import logoBoosted from '../../images/logo-boosted-description.svg';

const AboutBoosted: React.FC = () => {
  return (
    <section className={styles.aboutBoosted}>
      <img src={logoBoosted} alt="logo Boosted USA" className={styles.aboutBoosted__logo} />
      <h3 className={`${styles.aboutBoosted__title} ${styles.aboutBoosted__title_place_links}`}>
        Explore
      </h3>
      <ul className={styles.aboutBoosted__links}>
        <li>
          <a className={styles.aboutBoosted__link}>
            Electric Skateboards
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Electric Scooters
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Accessories
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            FAQs
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Warranty
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Quick Start Guide
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Contact
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Gift Card
          </a>
        </li>
        <li>
          <a className={styles.aboutBoosted__link}>
            Accessibility Statement
          </a>
        </li>
      </ul>
      <h3 className={`${styles.aboutBoosted__title} ${styles.aboutBoosted__title_place_text}`}>
        About Boosted USA
      </h3>
      <p className={styles.aboutBoosted__text}>
        Boosted empowers people everywhere to commute across their cities, campuses,
        and communities in ways that were never before possible. Boosted is solving
        one of the biggest problems people face each day: transportation.
      </p>
      <address className={styles.aboutBoosted__address}>
        <span className={`${styles.aboutBoosted__line} ${styles.aboutBoosted__line_newLine}`}>
          CaliRides LLC - DBA Boosted USA
        </span>
        <span className={`${styles.aboutBoosted__line} ${styles.aboutBoosted__line_newLine}`}>
          1281 Andersen Drive Ste. K
        </span>
        <span className={`${styles.aboutBoosted__line} ${styles.aboutBoosted__line_newLine}`}>
          San Rafael, CA 94901
        </span>
      </address>
  </section>
  );
}

export default AboutBoosted;
