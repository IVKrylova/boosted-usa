import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/boosted-shop-logo.svg';
import styles from './ItemBoostedShop.module.scss';

interface ItemBoostedShopProps {
  title: string;
  modifier: string;
}

const ItemBoostedShop: FC<ItemBoostedShopProps> = ({ title, modifier }) => {
  return (
    <li className={`${styles.linksList__item} ${modifier}`}>
      <img className={styles.linksList__logo} src={logo} alt='logotype' />
      <h3 className={styles.linksList__title}>{title}</h3>
      <Link to='/catalog' className={styles.linksList__link}>In Stock</Link>
    </li>
  );
}

export default ItemBoostedShop;
