import { FC } from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import BoostedShop from '../BoostedShop/BoostedShop';
import ElectricSkateboards from '../ElectricSkateboards/ElectricSkateboards';
import BoostedRev from '../BoostedRev/BoostedRev';
import Shop from '../Shop/Shop';
import Videos from '../Videos/Videos';
import Accessories from '../Accessories/Accessories';
import Advantages from '../Advantages/Advantages';
import AboutBoosted from '../AboutBoosted/AboutBoosted';
import styles from './Main.module.scss';

const Main: FC = () => {
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
      <Advantages />
      <AboutBoosted />
    </main>
  );
}

export default Main;
