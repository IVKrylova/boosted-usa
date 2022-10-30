import { FC } from 'react';
import ItemShop from '../ItemShop/ItemShop';
import styles from './Shop.module.scss';

const Shop: FC = () => {
  return (
    <section className={styles.shop}>
      <ul className={styles.linksList}>
        <ItemShop
          title='Shop Boosted Stealth'
          modifier={styles.linksList__item_place_stealth}
        />
        <ItemShop
          title='Shop Boosted Plus'
          modifier={styles.linksList__item_place_plus}
        />
        <ItemShop
          title='Shop Boosted Mini'
          modifier={styles.linksList__item_place_mini}
        />
      </ul>
    </section>
  );
}

export default Shop;
