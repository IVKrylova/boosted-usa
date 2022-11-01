import { FC } from 'react';
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
  return (
    <main className={styles.item}>
      <img src={item.img} alt={item.name} className={styles.item__img} />
      <h1 className={styles.item__name}>{item.name}</h1>
      <p className={styles.item__price}>{`${item.price} $`}</p>
      <button type='button' className={styles.item__button}>To Cart</button>
    </main>
  );
}
export default Item;
