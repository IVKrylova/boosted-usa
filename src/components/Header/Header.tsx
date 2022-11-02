import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import user from '../../images/icon-user.svg';
import cart from '../../images/icon-cart.svg';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__message}>
        Financing option available at checkout.
      </p>
      <Link to='/' className={styles.header__logo}>
        <img src={logo} alt='logotype' />
      </Link>
      <nav className={styles.navMenu}>
        <ul className={styles.navMenu__list}>
          <li className={styles.navMenu__item}>
            <Link to='/catalog' className={styles.navMenu__link}>
              Electric Skateboards
            </Link>
          </li>
          <li className={styles.navMenu__item}>
            <Link to='/catalog' className={styles.navMenu__link}>
              Electric Scooters
            </Link>
          </li>
          <li className={styles.navMenu__item}>
            <Link to='/accessories' className={styles.navMenu__link}>
              Accessories
            </Link>
          </li>
          <li className={styles.navMenu__item}>
            <Link to='/gift-card' className={styles.navMenu__link}>
              Gift Card
            </Link>
          </li>
          <li className={styles.navMenu__item}>
            <Link to='/more-info' className={styles.navMenu__link}>
              More Info
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={styles.account}>
        <li>
          <Link to='/profile' className={styles.account__link}>
            <img className={styles.account__icon} src={user} alt='icon user' />
          </Link>
        </li>
        <li>
          <Link to='/cart' className={styles.account__link}>
            <img className={styles.account__icon} src={cart} alt='icon cart' />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
