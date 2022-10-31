import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';
import List from '../UI/List';
import CatalogItem from '../CatalogItem/CatalogItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './CatalogGiftCard.module.scss';

const CatalogGiftCard: FC = () => {
  const { giftCard, error, loading } = useTypeSelector(state => state.giftCard);
  const { fetchGiftCard } = useActions();

  useEffect(() => {
    fetchGiftCard();
  }, []);

  return (
    <main className={styles.catalogGiftCard}>
      <Preloader
        isLoading={loading}
      />
      <List
        classList={styles.catalogGiftCard__list}
        items={giftCard}
        renderItem={item => <CatalogItem
          item={item}
          key={item.id}
        />}
      />
      <ErrorMessage
        text={error}
        isLoading={loading}
      />
    </main>
  );
}

export default CatalogGiftCard;
