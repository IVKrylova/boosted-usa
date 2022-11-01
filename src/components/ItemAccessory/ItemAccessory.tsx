import { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemAccessory: FC = () => {
  const { accessories } = useTypeSelector(state => state.accessories);
  const params = useParams();
  const id = params.id?.slice(1);
  const item = accessories.find(el => el.id === id);

  return (
    <Item item={item} />
  );
}
export default ItemAccessory;
