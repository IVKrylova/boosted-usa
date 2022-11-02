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
  onClickButton: (item: { name: string, img: string, price: number, id: number }) => void;
}

const CatalogItem: FC<CatalogItemProps> = ({ item: { name, img, price, id }, url, onClickButton }) => {
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickButton({ name, img, price, id })
  }

  return (
    <li className={styles.catalogItem}>
      <img src={img} alt={name} className={styles.catalogItem__img} />
      <h2 className={styles.catalogItem__name}>
        <Link to={`${url}/:${id}`} className={styles.catalogItem__link}>{name}</Link>
      </h2>
      <p className={styles.catalogItem__price}>{`${price} $`}</p>
      <button onClick={handleClickButton} type='button' className={styles.catalogItem__button}>To Cart</button>
    </li>
  );
}

export default CatalogItem;
