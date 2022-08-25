import React from 'react';
import Banner from '../Banner/Banner';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Banner />
    </main>
  );
}

export default Main;
