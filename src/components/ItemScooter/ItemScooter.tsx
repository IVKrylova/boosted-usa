import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import UnitOfGood from '../UnitOfGood/UnitOfGood';

const ItemScooter: FC = () => {
  const { catalog } = useTypeSelector(state => state.catalog);
  const params = useParams();
  const id = params.id?.slice(1);
  const item = catalog.find(el => el.id === id);

  return (
    <UnitOfGood item={item} />
  );
}

export default ItemScooter;
