import React from 'react';
import styles from './Description.module.scss';
import logoGoFast from '../../images/adv-go-fast.svg';
import logoGoFar from '../../images/adv-go-far.svg';
import logoGoSafe from '../../images/adv-go-safe.svg';
import logoBuiltToLast from '../../images/adv-built-to-last.svg';

const Description: React.FC = () => {
  return (
    <section className={styles.advantages}>
      <ul className={styles.advantages__list}>
        <li className={styles.advantage}>
          <img className={styles.advantage__logo} src={logoGoFast} alt="logo Go Fast" />
          <h3 className={styles.advantage__title}>Go Fast</h3>
          <p className={styles.advantage__text}>
            Boosted is known for its premium performance boards offering
            a next-level experience.
          </p>
        </li>
        <li className={styles.advantage}>
          <img className={styles.advantage__logo} src={logoGoFar} alt="logo Go Far" />
          <h3 className={styles.advantage__title}>Go Far</h3>
          <p className={styles.advantage__text}>
            With optional extended battery life, you can get wherever you need to
            go reliably.
          </p>
        </li>
        <li className={styles.advantage}>
          <img className={styles.advantage__logo} src={logoGoSafe} alt="logo Go Safe" />
          <h3 className={styles.advantage__title}>Go Safe</h3>
          <p className={styles.advantage__text}>
            Safety is a #1 priority for Boosted, always wear a helmet when riding.
          </p>
        </li>
        <li className={styles.advantage}>
          <img className={styles.advantage__logo} src={logoBuiltToLast} alt="logo Built To Last" />
          <h3 className={styles.advantage__title}>Built To Last</h3>
          <p className={styles.advantage__text}>
            Boosted products are engineered to last for years and are extremely reliable.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Description;
