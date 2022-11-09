import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import user from '../../images/icon-user.svg';
import cart from '../../images/icon-cart.svg';
import menuIcon from '../../images/menu-icon.png';
import styles from './Header.module.scss';

interface HeaderProps {
  amountCart: number;
  onClickIconMenu: (evt: React.MouseEvent<HTMLImageElement>) => void;
  isMobileMenuVisible: boolean;
}

const Header: FC<HeaderProps> = ({ amountCart, onClickIconMenu, isMobileMenuVisible }) => {
  return (
    <header className={styles.header}>
      <p className={styles.header__message}>
        Financing option available at checkout.
      </p>
      <Link to='/' className={styles.header__logo}>
        <img src={logo} alt='logotype' />
      </Link>
      <nav className={styles.navMenu}>
        <ul className={`${styles.navMenu__list} ${isMobileMenuVisible ? styles.navMenu__list_visible : ''}`}>
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
      <img src={menuIcon} alt='icon menu' className={styles.menuIcon} onClick={onClickIconMenu} />
      <ul className={styles.account}>
        <li>
          <Link to='/profile' className={styles.account__link}>
            <img className={styles.account__icon} src={user} alt='icon user' />
          </Link>
        </li>
        <li>
          <Link to='/cart' className={styles.account__link}>
            <img className={styles.account__icon} src={cart} alt='icon cart' />
            <p className={styles.account__cartCount}>{amountCart}</p>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
