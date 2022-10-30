import { FC } from 'react';
import styles from './Videos.module.scss';

const Videos: FC = () => {
  return (
    <section className={styles.videos}>
      <ul className={styles.videosList}>
        <li className={styles.videosList__item}>
          <iframe
            className={styles.videosList__video}
            width='560'
            height='315'
            src='https://www.youtube.com/embed/JqyzwbpYYqc'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </li>
        <li className={styles.videosList__item}>
          <iframe
            className={styles.videosList__video}
            width='560'
            height='315'
            src='https://www.youtube.com/embed/78bXV1ZqQWI'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </section>
  );
}

export default Videos;
