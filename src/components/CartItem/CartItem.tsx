import React, { FC, useState } from 'react';
import { Item } from '../../types/types';
import styles from './CartItem.module.scss';

interface CartItemProps {
  item: Item;
  onClickDeleteFromCart: (id: number) => void;
  onClickPlus: (id: number, count: number) => void;
  onClickMinus: (id: number, count: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onClickDeleteFromCart, onClickPlus, onClickMinus }) => {
  const [countItem, setCountItem] = useState<number>(1);

  const handleClickPlus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = countItem + 1;

    setCountItem(newCount);
    onClickPlus(item.id, newCount);
  }

  const handleClickMinus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    countItem === 1 ? setCountItem(1) : setCountItem(countItem - 1);
    onClickMinus(item.id, countItem);
  }

  const handleClickButtonDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onClickDeleteFromCart(item.id);
  }

  return (
    <li className={styles.cartItem}>
      <img className={styles.cartItem__img} alt={item.name} src={item.img} />
      <h3 className={styles.cartItem__name}>
        {item.name}
      </h3>
      <p className={styles.cartItem__price}>
        {`$${item.initPrice}`}
      </p>
      <div className={styles.cartItem__count}>
        <button
          className={styles.cartItem__buttonPlus}
          type='button'
          aria-label='add item'
          onClick={handleClickPlus}
        ></button>
        <p className={styles.cartItem__countValue}>
          {item.count}
        </p>
        <button
          className={styles.cartItem__buttonMinus}
          type='button'
          aria-label='delete item'
          onClick={handleClickMinus}
        ></button>
      </div>
      <p className={styles.cartItem__totalPrice}>
        {`Total price $${item.price}`}
      </p>
      <button
        className={styles.cartItem__buttonDelete}
        aria-label='delete from the cart'
        type='button'
        onClick={handleClickButtonDelete}
      ></button>
    </li>
  );
}

export default CartItem;
