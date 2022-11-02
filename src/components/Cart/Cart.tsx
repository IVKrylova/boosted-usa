import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import List from '../UI/List';
import CartItem from '../CartItem/CartItem';
import Message from '../Message/Message';
import styles from './Cart.module.scss';

const Cart: FC = () => {
  const { cart } = useTypeSelector(state => state.cart);

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
                />
              }
            />
          </section>
          <section className={styles.cart__result}>
            <h2 className={styles.cart__subtitle}>Total</h2>
            <p className={styles.cart__sum}>{`$1000`}</p>
            <button type="button" className={styles.cart__button}>Make an order</button>
          </section>
        </>
      }
    </main>
  );
}

export default Cart;
