import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';
import { Item } from '../../types/types';

interface CatalogAccessoriesProps {
  onClickButton: (item: Item) => void;
}

const CatalogAccessories: FC<CatalogAccessoriesProps> = ({ onClickButton }) => {
  const { accessories, error, loading } = useTypeSelector(state => state.accessories);
  const { fetchAccessories } = useActions();

  useEffect(() => {
    fetchAccessories();
  }, []);

  return (
    <Catalog
      loading={loading}
      catalog={accessories}
      error={error}
      title='Accessories'
      onClickButton={onClickButton}
    />
  );
}

export default CatalogAccessories;
