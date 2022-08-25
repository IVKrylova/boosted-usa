import React from 'react';
import styles from './ItemShop.module.scss';

interface Props {
  title: string;
  modifier: string;
}

const ItemShop: React.FC<Props> = ({ title, modifier }) => {
  return (
    <li className={`${styles.linksList__item} ${modifier}`}>
      <h3 className={styles.linksList__title}>{title}</h3>
      <a className={styles.linksList__link}>In Stock</a>
    </li>
  );
}

export default ItemShop;
