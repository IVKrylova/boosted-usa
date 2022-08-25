import React from 'react';
import ItemBoostedShop from '../ItemBoostedShop/ItemBoostedShop';
import styles from './BoostedShop.module.scss';

const BoostedShop: React.FC = () => {
  return (
    <section className={styles.boostedShop}>
      <h2 className={styles.title}>
        Looking for Boosted Boards, or Boosted Revs?
      </h2>
      <p className={styles.text}>
        Boosted USA acquired all of the remaining inventory directly
        from Boosted.  This means we have the electric skateboards and
        scooter you all love and have been looking for.  Get your hands
        on these highly sought after products while supplies last.
      </p>
      <ul className={styles.linksList}>
        <ItemBoostedShop
          title='Shop Boosted Boards'
          modifier={styles.linksList__item_boards}
        />
        <ItemBoostedShop
          title='Shop Boosted Revs'
          modifier={styles.linksList__item_revs}
        />
      </ul>
    </section>
  );
}

export default BoostedShop;
