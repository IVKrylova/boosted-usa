import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';

const CatalogGiftCard: FC = () => {
  const { giftCard, error, loading } = useTypeSelector(state => state.giftCard);
  const { fetchGiftCard } = useActions();

  useEffect(() => {
    fetchGiftCard();
  }, []);

  return (
    <Catalog
      loading={loading}
      catalog={giftCard}
      error={error}
      title='Gift Card'
    />
  );
}

export default CatalogGiftCard;
