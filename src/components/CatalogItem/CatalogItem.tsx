import { FC } from 'react';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  item: {
    name: string,
    img: string,
    price: number,
    id: number,
  };
}

const CatalogItem: FC<CatalogItemProps> = ({ item }) => {
  return (
    <li className={styles.catalogItem}>
      <img src={item.img} alt={item.name} />
    </li>
  );
}

export default CatalogItem;
