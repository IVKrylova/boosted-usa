import { FC, useState } from 'react';
import styles from './Video.module.scss';

interface VideoProps {
  videoId: string;
  name: string;
}

const Video: FC<VideoProps> = ({ videoId, name }) => {
  const [isClickedThumbnail, setIsClickedThumbnail] = useState<boolean>(false);

  const handleClickThumbnail = (evt: React.MouseEvent<HTMLLIElement>) => {
    setIsClickedThumbnail(true);
  }

  return (
    <li className={styles.videoItem} onClick={handleClickThumbnail}>
      {isClickedThumbnail
        ? <iframe
          className={styles.videoItem__video}
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        : <>
          <picture>
            <source
              srcSet={`https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`}
              type='image/webp'
            />
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={name}
              className={styles.videoItem__thumbnail}
            />
          </picture>
          <button type='button' aria-label='play video' className={styles.videoItem__button}>
            <svg width='68' height='48' viewBox='0 0 68 48'>
              <path
                className={styles.videoItem__buttonShape}
                d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,48.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
              ></path>
              <path
                className={styles.videoItem__buttonIcon}
                d='M 45,24 27,14 27,34'
              ></path>
            </svg>
          </button>
        </>
      }
    </li>
  );
}

export default Video;
