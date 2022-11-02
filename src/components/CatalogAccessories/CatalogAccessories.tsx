import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';

interface CatalogAccessoriesProps {
  onClickButton: (item: { name: string, img: string, price: number, id: number }) => void;
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
