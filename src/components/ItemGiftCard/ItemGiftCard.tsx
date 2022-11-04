import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import UnitOfGood from '../UnitOfGood/UnitOfGood';

const ItemGiftCard: FC = () => {
  const { giftCard } = useTypeSelector(state => state.giftCard);
  const params = useParams();
  const id = params.id?.slice(1);
  const item = giftCard.find(el => el.id === id);

  return (
    <UnitOfGood item={item} />
  );
}
export default ItemGiftCard;
