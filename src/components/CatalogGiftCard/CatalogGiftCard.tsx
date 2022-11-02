import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';

interface CatalogGiftCardProps {
  onClickButton: (item: { name: string, img: string, price: number, id: number, count: number }) => void;
}

const CatalogGiftCard: FC<CatalogGiftCardProps> = ({ onClickButton }) => {
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
      onClickButton={onClickButton}
    />
  );
}

export default CatalogGiftCard;
