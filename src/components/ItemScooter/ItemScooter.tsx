import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemScooter: FC = () => {
  const { catalog } = useTypeSelector(state => state.catalog);
  const params = useParams();
  const id = params.id?.slice(1);
  const item = catalog.find(el => el.id === id);

  return (
    <Item item={item} />
  );
}

export default ItemScooter;
