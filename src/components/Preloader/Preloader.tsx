import { FC } from 'react';
import styles from './Preloader.module.scss';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`${styles.preloader} ${isLoading ? styles.preloader_visible : ''}`}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round}></span>
      </div>
    </div>
  );
}

export default Preloader;
