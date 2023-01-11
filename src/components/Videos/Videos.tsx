import { FC } from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.scss';

const Videos: FC = () => {
  return (
    <section className={styles.videos}>
      <ul className={styles.videosList}>
        <Video
          videoId='JqyzwbpYYqc'
          name='Boosted Rev: The Tesla of Electric Scooters!'
        />
        <Video
          videoId='78bXV1ZqQWI'
          name='Introducing Boosted Rev'
        />
      </ul>
    </section>
  );
}

export default Videos;
