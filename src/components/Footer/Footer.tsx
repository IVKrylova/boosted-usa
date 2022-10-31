import { FC } from 'react';
import { Link } from 'react-router-dom';
import List from '../UI/List';
import { paymentSystems } from '../../utils/data/paymentSystem';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        <span className={styles.footer__copyright}>&copy;{new Date().getFullYear()} </span>
        <Link to='/' className={styles.footer__link}>Boosted USA</Link>
        . All Rights Reserved.
        <Link to='/more-info' className={styles.footer__link}>Terms of Service</Link>
        . Built by
        <Link to='/' className={styles.footer__link}>BH</Link>
      </p>
      <List
        classList={styles.footer__paymentSystems}
        items={paymentSystems}
        renderItem={system =>
          <li key={system.id}>
            <img src={system.img} alt={system.name} className={styles.footer__paymentSystem} />
          </li>
        }
      />
    </footer>
  );
}

export default Footer;
