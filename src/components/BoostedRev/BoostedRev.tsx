import { FC } from 'react';
import { Link } from 'react-router-dom';
import womanOnRev from '../../images/woman-on-rev.png';
import speedRev from '../../images/speed-rev.png';
import styles from './BoostedRev.module.scss';
import Button from '../Button/Button';

const BoostedRev: FC = () => {
  return (
    <section className={styles.boostedRev}>
      <ul className={styles.imagesList}>
        <li className={styles.imagesList__item}>
          <img className={styles.imagesList__image} src={womanOnRev} alt='woman on the rev' />
        </li>
        <li className={`${styles.imagesList__item} ${styles.imagesList__item_hidden}`}>
          <img className={styles.imagesList__image} src={speedRev} alt='the speed of the rev' />
        </li>
      </ul>
      <div className={styles.description}>
        <h2 className={styles.title}>Boosted Rev</h2>
        <p className={styles.text}>
          There's never been an electric scooter quite like this. Speed past traffic
          at 24 mph. Go up to 22 miles on a single charge. You'll get there in no
          time at all. Stop and go with the roll of your thumb. Its intuitive design
          means there’s almost no learning curve.
        </p>
        <Link to='/catalog'>
          <Button
            text='Shop Now'
            modifier={styles.button_plase_boostedRev}
          />
        </Link>
      </div>
    </section>
  );
}

export default BoostedRev;
