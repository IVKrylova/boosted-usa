import React, { FC, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import styles from './CartItem.module.scss';

interface CartItemProps {
  item: {
    name: string,
    img: string,
    price: number,
    id: number,
    count: number,
    initPrice: number,
  };
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { cart } = useTypeSelector(state => state.cart);
  const { changeItem, deleteFromCart } = useActions();
  const [countItem, setCountItem] = useState<number>(1);

  const handleClickPlus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = countItem + 1;

    setCountItem(newCount);
    changeItem(item.id, newCount);
  }

  const handleClickMinus = (evt: React.MouseEvent<HTMLButtonElement>) => {
    countItem === 1 ? setCountItem(1) : setCountItem(countItem - 1);

    changeItem(item.id, countItem);
  }

  const handleClickButtonDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    deleteFromCart(item.id);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
