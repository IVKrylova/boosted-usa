import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';
import List from '../UI/List';
import CatalogItem from '../CatalogItem/CatalogItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './Catalog.module.scss';

const Catalog: FC = () => {
  const { catalog, error, loading } = useTypeSelector(state => state.catalog);
  const { fetchCatalog } = useActions();

  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <main className={styles.catalog}>
      <Preloader
        isLoading={loading}
      />
      <List
        classList={styles.catalog__list}
        items={catalog}
        renderItem={item => <CatalogItem
          item={item}
          key={item.id}
        />}
      />
      <ErrorMessage
        text={error}
        isLoading={loading}
      />
    </main>
  );
}

export default Catalog;
