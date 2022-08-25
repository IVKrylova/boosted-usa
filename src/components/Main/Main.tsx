import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Banner />
      <Brands />
    </main>
  );
}

export default Main;
