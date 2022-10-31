import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  item: {
    name: string,
    img: string,
    price: number,
    id: number,
  };
  url: string;
}

const CatalogItem: FC<CatalogItemProps> = ({ item, url }) => {
  return (
    <li className={styles.catalogItem}>
      <img src={item.img} alt={item.name} className={styles.catalogItem__img} />
      <h2 className={styles.catalogItem__name}>
        <Link to={`${url}:/${item.id}`} className={styles.catalogItem__link}>{item.name}</Link>
      </h2>
      <p className={styles.catalogItem__price}>{`${item.price} $`}</p>
      <button type='button' className={styles.catalogItem__button}>To Cart</button>
    </li>
  );
}

export default CatalogItem;
