import React from 'react';
import logo from '../../images/header-logo.svg';
import user from '../../images/icon-user.svg';
import cart from '../../images/icon-cart.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__message}>
        Financing option available at checkout.
      </p>
      <img className={styles.header__logo} src={logo} alt='logotype' />
      <nav className={styles.navMenu}>
        <ul className={styles.navMenu__list}>
          <li className={styles.navMenu__item}>
            <a className={styles.navMenu__link}>
              Electric Skateboards
            </a>
          </li>
          <li className={styles.navMenu__item}>
            <a className={styles.navMenu__link}>
              Electric Scooters
            </a>
          </li>
          <li className={styles.navMenu__item}>
            <a className={styles.navMenu__link}>
              Accessories
            </a>
          </li>
          <li className={styles.navMenu__item}>
            <a className={styles.navMenu__link}>
              Gift Card
            </a>
          </li>
          <li className={styles.navMenu__item}>
            <a className={styles.navMenu__link}>
              More Info
            </a>
          </li>
        </ul>
      </nav>
      <ul className={styles.account}>
        <li>
          <a className={styles.account__link}>
            <img className={styles.account__icon} src={user} alt='icon user' />
          </a>
        </li>
        <li>
          <a className={styles.account__link}>
            <img className={styles.account__icon} src={cart} alt='icon cart' />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
