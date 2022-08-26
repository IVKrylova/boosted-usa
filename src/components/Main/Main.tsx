import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import BoostedShop from '../BoostedShop/BoostedShop';
import ElectricSkateboards from '../ElectricSkateboards/ElectricSkateboards';
import BoostedRev from '../BoostedRev/BoostedRev';
import Shop from '../Shop/Shop';
import Videos from '../Videos/Videos';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Banner />
      <Brands />
      <BoostedShop />
      <ElectricSkateboards />
      <BoostedRev />
      <Shop />
      <Videos />
    </main>
  );
}

export default Main;
