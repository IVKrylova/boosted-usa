import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { Item } from '../../types/types';
import Catalog from '../Catalog/Catalog';

interface CatalogScootersProps {
  onClickButton: (item: Item) => void;
}

const CatalogScooters: FC<CatalogScootersProps> = ({ onClickButton }) => {
  const { catalog, error, loading } = useTypeSelector(state => state.catalog);
  const { fetchCatalog } = useActions();

  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <Catalog
      loading={loading}
      catalog={catalog}
      error={error}
      title='Scooters and Skateboards'
      onClickButton={onClickButton}
    />
  );
}

export default CatalogScooters;
