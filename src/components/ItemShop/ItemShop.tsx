import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemShop.module.scss';

interface Props {
  title: string;
  modifier: string;
}

const ItemShop: React.FC<Props> = ({ title, modifier }) => {
  return (
    <li className={`${styles.linksList__item} ${modifier}`}>
      <h3 className={styles.linksList__title}>{title}</h3>
      <Link to='/catalog' className={styles.linksList__link}>In Stock</Link>
    </li>
  );
}

export default ItemShop;
