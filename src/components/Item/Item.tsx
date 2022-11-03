import { FC, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import styles from './Item.module.scss';

interface ItemProps {
  item: {
    name: string,
    img: string,
    price: number,
    id: number,
  };
}

const Item: FC<ItemProps> = ({ item }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { cart } = useTypeSelector(state => state.cart);

  useEffect(() => {
    if (cart.some(el => el.id === item.id)) setIsButtonDisabled(true);
  }, []);

  return (
    <main className={styles.item}>
      <img src={item.img} alt={item.name} className={styles.item__img} />
      <h1 className={styles.item__name}>{item.name}</h1>
      <p className={styles.item__price}>{`${item.price} $`}</p>
      <button
        type='button'
        className={`${styles.item__button} ${isButtonDisabled ? styles.item__button_disabled : ''}`}
      >
        {isButtonDisabled ? 'In Cart' : 'To Cart'}
      </button>
    </main>
  );
}
export default Item;
