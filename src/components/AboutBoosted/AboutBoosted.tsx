import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutBoosted.module.scss';
import logoBoosted from '../../images/logo-boosted-description.svg';

const AboutBoosted: FC = () => {
  return (
    <section className={styles.aboutBoosted}>
      <img src={logoBoosted} alt='logo Boosted USA' className={styles.aboutBoosted__logo} />
      <h3 className={`${styles.aboutBoosted__title} ${styles.aboutBoosted__title_place_links}`}>
        Explore
      </h3>
      <ul className={styles.aboutBoosted__links}>
        <li>
          <Link to='/catalog' className={styles.aboutBoosted__link}>
            Electric Skateboards
          </Link>
        </li>
        <li>
          <Link to='/catalog' className={styles.aboutBoosted__link}>
            Electric Scooters
          </Link>
        </li>
        <li>
          <Link to='/catalog' className={styles.aboutBoosted__link}>
            Accessories
          </Link>
        </li>
        <li>
          <Link to='/faq' className={styles.aboutBoosted__link}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to='/more-info' className={styles.aboutBoosted__link}>
            Warranty
          </Link>
        </li>
        <li>
          <Link to='/more-info' className={styles.aboutBoosted__link}>
            Quick Start Guide
          </Link>
        </li>
        <li>
          <Link to='/more-info' className={styles.aboutBoosted__link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/catalog' className={styles.aboutBoosted__link}>
            Gift Card
          </Link>
        </li>
        <li>
          <Link to='/more-info' className={styles.aboutBoosted__link}>
            Accessibility Statement
          </Link>
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
