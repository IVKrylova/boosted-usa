import { FC } from 'react';
import Preloader from '../Preloader/Preloader';
import List from '../UI/List';
import CatalogItem from '../CatalogItem/CatalogItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './Catalog.module.scss';
import { useLocation } from 'react-router-dom';

interface CatalogProps {
  loading: boolean;
  catalog: any[];
  error: string | null;
  title: string;
  onClickButton: (item: { name: string, img: string, price: number, id: number }) => void;
}

const Catalog: FC<CatalogProps> = ({ loading, catalog, error, title, onClickButton }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <main className={styles.catalog}>
      <h1 className={styles.catalog__title}>{title}</h1>
      <Preloader
        isLoading={loading}
      />
      <List
        classList={styles.catalog__list}
        items={catalog}
        renderItem={item => <CatalogItem
          item={item}
          key={item.id}
          url={currentUrl}
          onClickButton={onClickButton}
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
