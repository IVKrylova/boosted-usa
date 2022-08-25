import React from 'react';
import logo from '../../images/boosted-shop-logo.svg';
import styles from './ItemBoostedShop.module.scss';

interface Props {
  title: string;
  modifier: string;
}

const ItemBoostedShop: React.FC<Props> = ({ title, modifier }) => {
  return (
    <li className={`${styles.linksList__item} ${modifier}`}>
      <img className={styles.linksList__logo} src={logo} alt='logotype' />
      <h3 className={styles.linksList__title}>{title}</h3>
      <a className={styles.linksList__link}>In Stock</a>
    </li>
  );
}

export default ItemBoostedShop;
