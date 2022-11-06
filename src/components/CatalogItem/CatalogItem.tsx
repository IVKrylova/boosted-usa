import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Item } from '../../types/types';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  item: Item;
  url: string;
  onClickButton: (item: Item) => void;
}

const CatalogItem: FC<CatalogItemProps> = ({ url, item: { name, img, price, id, count = 1, initPrice = price, type =url }, onClickButton }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { cart } = useTypeSelector(state => state.cart);

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickButton({ name, img, price, id, count, initPrice, type });
    setIsButtonDisabled(true);
  }

  useEffect(() => {
    if (cart.some(el => el.id === id)) setIsButtonDisabled(true);
  }, []);

  return (
    <li className={styles.catalogItem}>
      <img src={img} alt={name} className={styles.catalogItem__img} />
      <h2 className={styles.catalogItem__name}>
        <Link to={`${url}/:${id}`} className={styles.catalogItem__link}>{name}</Link>
      </h2>
      <p className={styles.catalogItem__price}>{`${price} $`}</p>
      <button
        onClick={handleClickButton}
        type='button'
        className={`${styles.catalogItem__button} ${isButtonDisabled ? styles.catalogItem__button_disabled : ''}`}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? 'In Cart' : 'To Cart'}
      </button>
    </li>
  );
}

export default CatalogItem;
