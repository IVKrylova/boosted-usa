import { FC } from 'react';
import Preloader from '../Preloader/Preloader';
import List from '../UI/List';
import CatalogItem from '../CatalogItem/CatalogItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './Catalog.module.scss';

interface CatalogProps {
  loading: boolean;
  catalog: any[];
  error: string | null;
}

const Catalog: FC<CatalogProps> = ({ loading, catalog, error }) => {
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
