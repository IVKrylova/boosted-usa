import { FC } from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.scss';

const Videos: FC = () => {
  return (
    <section className={styles.videos}>
      <ul className={styles.videosList}>
        <Video
          url='https://www.youtube.com/embed/JqyzwbpYYqc'
        />
        <Video
          url='https://www.youtube.com/embed/78bXV1ZqQWI'
        />
      </ul>
    </section>
  );
}

export default Videos;
