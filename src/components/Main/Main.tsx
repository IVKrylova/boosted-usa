import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import BoostedShop from '../BoostedShop/BoostedShop';
import ElectricSkateboards from '../ElectricSkateboards/ElectricSkateboards';
import BoostedRev from '../BoostedRev/BoostedRev';
import Shop from '../Shop/Shop';
import Videos from '../Videos/Videos';
import styles from './Main.module.scss';
import Accessories from '../Accessories/Accessories';
import Description from '../Description/Description';
import AboutBoosted from '../AboutBoosted/AboutBoosted';

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
      <Accessories />
      <Description />
      <AboutBoosted />
    </main>
  );
}

export default Main;
