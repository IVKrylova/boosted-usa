import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import BoostedShop from '../BoostedShop/BoostedShop';
import ElectricSkateboards from '../ElectricSkateboards/ElectricSkateboards';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Banner />
      <Brands />
      <BoostedShop />
      <ElectricSkateboards />
    </main>
  );
}

export default Main;
