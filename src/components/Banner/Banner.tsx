import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Banner.module.scss';

const Banner: FC = () => {
  return (
    <section className={styles.banner}>
      <h1 className={styles.banner__title}>
        Welcome to Boosted USA
      </h1>
      <p className={styles.banner__subtitle}>
        The Holy Grail of Electric Skateboards and One REVolutionary Scooter
      </p>
      <ul className={styles.banner__buttonsList}>
        <li className={styles.banner__button}>
          <Link to='/catalog'>
            <Button
              text='BOOSTED REVS'
            />
          </Link>
        </li>
        <li className={styles.banner__button}>
        <Link to='/catalog'>
          <Button
            text='BOOSTED BOARDS'
          />
        </Link>
        </li>
      </ul>
    </section>
  );
}

export default Banner;
