import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';

const CatalogAccessories: FC = () => {
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
    />
  );
}

export default CatalogAccessories;
