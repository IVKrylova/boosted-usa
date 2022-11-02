import { FC, useEffect, useState } from 'react';
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
  const [countItem, setCountItem] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(item.price);

  const handleClickPlus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setCountItem(countItem + 1);
  }

  const handleClickMinus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    countItem === 1 ? setCountItem(1) : setCountItem(countItem - 1);
  }

  useEffect(() => {
    setTotalPrice(countItem * item.price);
  }, [countItem]);

  return (
    <li className={styles.cartItem}>
      <img className={styles.cartItem__img} alt={item.name} src={item.img} />
      <h3 className={styles.cartItem__name}>
        {item.name}
      </h3>
      <p className={styles.cartItem__price}>
        {`$${item.price}`}
      </p>
      <div className={styles.cartItem__count}>
        <button
          className={styles.cartItem__buttonPlus}
          type='button'
          aria-label='add item'
          onClick={handleClickPlus}
        ></button>
        <p className={styles.cartItem__countValue}>
          {countItem}
        </p>
        <button
          className={styles.cartItem__buttonMinus}
          type='button'
          aria-label='delete item'
          onClick={handleClickMinus}
        ></button>
      </div>
      <p className={styles.cartItem__totalPrice}>
        {`Total price $${totalPrice}`}
      </p>
      <button className={styles.cartItem__buttonDelete} aria-label='delete from the cart' type='button'></button>
    </li>
  );
}

export default CartItem;
