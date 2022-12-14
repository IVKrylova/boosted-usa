import { FC, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import List from '../UI/List';
import CartItem from '../CartItem/CartItem';
import Message from '../Message/Message';
import styles from './Cart.module.scss';

interface CartProps {
  onClickDeleteFromCart: (id: number) => void;
  onClickPlus: (id: number, count: number) => void;
  onClickMinus: (id: number, count: number) => void;
}

const Cart: FC<CartProps> = ({ onClickDeleteFromCart, onClickPlus, onClickMinus }) => {
  const [sum, setSum] = useState<number>(0);
  const { cart } = useTypeSelector(state => state.cart);

  useEffect(() => {
    const totalSum = cart.reduce((sum, el) => sum + Number(el.price), 0);
    setSum(totalSum);
  }, [cart]);

  return (
    <main className={styles.cart}>
      <h1 className={styles.cart__title}>Cart</h1>
      {cart.length === 0 ?
        <Message
          text='Your cart is empty'
        /> :
        <>
          <section className={styles.cart__content}>
            <List
              classList={styles.cart__list}
              items={cart}
              renderItem={item =>
                <CartItem
                  item={item}
                  key={item.id}
                  onClickDeleteFromCart={onClickDeleteFromCart}
                  onClickPlus={onClickPlus}
                  onClickMinus={onClickMinus}
                />
              }
            />
          </section>
          <section className={styles.cart__result}>
            <h2 className={styles.cart__subtitle}>Total</h2>
            <p className={styles.cart__sum}>{`$${sum}`}</p>
            <button type='button' className={styles.cart__button}>Make an order</button>
          </section>
        </>
      }
    </main>
  );
}

export default Cart;
