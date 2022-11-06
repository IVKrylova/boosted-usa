import { FC, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import { SoloItemType } from '../../types/types';
import axios from 'axios';
import styles from './SoloItem.module.scss';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';

interface SoloItemProps {
  type: string;
}

const SoloItem: FC<SoloItemProps> = ({ type }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [item, setItem] = useState<SoloItemType>({id: 0, price: 0, name: '', img: ''});
  const { cart } = useTypeSelector(state => state.cart);
  const params = useParams();
  const id: number = Number(params.id?.slice(1));

  useEffect(() => {
    axios.get(`http://localhost:3001/${type}/${id}`)
      .then(item => {
        setItem(item.data);
        setLoading(false);
      })
      .catch(err => {
        setMessage(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (cart.some(el => el.id === item.id)) setIsButtonDisabled(true);
  }, [item]);

  return (
    <main className={styles.item}>
      {loading ?
        <Preloader
          isLoading={loading}
        />
        : <>
          <img src={item.img} alt={item.name} className={styles.item__img} />
          <h1 className={styles.item__name}>{item.name}</h1>
          <p className={styles.item__price}>{`${item.price} $`}</p>
          <button
            type='button'
            className={`${styles.item__button} ${isButtonDisabled ? styles.item__button_disabled : ''}`}
          >
            {isButtonDisabled ? 'In Cart' : 'To Cart'}
          </button>
        </>
      }
      {message &&
        <Message
          text={message}
        />
      }
    </main>
  );
}
export default SoloItem;
