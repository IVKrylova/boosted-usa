import { FC } from 'react';
import styles from './Video.module.scss';

interface VideoProps {
  url: string;
}

const Video: FC<VideoProps> = ({ url }) => {
  return (
    <li className={styles.videoItem}>
      <iframe
        className={styles.videoItem__video}
        width='560'
        height='315'
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </li>
  );
}

export default Video;
