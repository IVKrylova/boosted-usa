import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';
import List from '../UI/List';
import CatalogItem from '../CatalogItem/CatalogItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './CatalogAccessories.module.scss';

const CatalogAccessories: FC = () => {
  const { accessories, error, loading } = useTypeSelector(state => state.accessories);
  const { fetchAccessories } = useActions();

  useEffect(() => {
    fetchAccessories();
  }, []);

  return (
    <main className={styles.catalogAccessories}>
      <Preloader
        isLoading={loading}
      />
      <List
        classList={styles.catalogAccessories__list}
        items={accessories}
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

export default CatalogAccessories;
