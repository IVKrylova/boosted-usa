import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Catalog from '../Catalog/Catalog';

const CatalogScooters: FC = () => {
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
    />
  );
}

export default CatalogScooters;
