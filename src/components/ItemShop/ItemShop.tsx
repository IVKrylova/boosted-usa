import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemShop.module.scss';

interface ItemShopProps {
  title: string;
  modifier: string;
}

const ItemShop: FC<ItemShopProps> = ({ title, modifier }) => {
  return (
    <li className={`${styles.linksList__item} ${modifier}`}>
      <h3 className={styles.linksList__title}>{title}</h3>
      <Link to='/catalog' className={styles.linksList__link}>In Stock</Link>
    </li>
  );
}

export default ItemShop;
