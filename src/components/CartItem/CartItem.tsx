import { FC } from 'react';
import styles from './CartItem.module.scss';

interface CartItemProps {
  item: {
    name: string,
    img: string,
    price: number,
    id: number,
  };
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  return (
    <li className={styles.cartItem}>
      <img className={styles.cartItem__img} alt={item.name} src={item.img} />
      <h3 className={styles.cartItem__name}>{item.name}</h3>
      <p className={styles.cartItem__price}>{`$${item.price}`}</p>
      <div className={styles.cartItem__count}>
        <button className={styles.cartItem__buttonPlus} type='button' aria-label='add item'></button>
        <p className={styles.cartItem__countValue}>1</p>
        <button className={styles.cartItem__buttonMinus} type='button' aria-label='delete item'></button>
      </div>
      <p className={styles.cartItem__totalPrice}>{`Total price $${item.price}`}</p>
      <button className={styles.cartItem__buttonDelete} aria-label='delete from the cart' type='button'></button>
    </li>
  );
}

export default CartItem;
