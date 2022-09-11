import React from 'react';
import Carousel from 'react-multi-carousel';
import { accessoriesList } from '../../utils/data/accessories';
import 'react-multi-carousel/lib/styles.css';
import styles from './Accessories.module.scss';

const Accessories: React.FC = () => {
  // настройка слайдера
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={styles.accessories}>
      <h2 className={styles.title}>
        Looking for Accessories?
      </h2>
      <Carousel responsive={responsive} className={styles.accessories__list}>
        {accessoriesList.map(item => {
          return (
            <div key={item.id} className={styles.accessory}>
              <img alt={item.name} src={item.img} className={styles.accessory__img} />
              <h3 className={styles.accessory__name}>{item.name}</h3>
              <p className={styles.accessory__price}>
                {`$${item.price}`} <span>{`$${item.otherPrice}`}</span>
              </p>
              <p className={`${styles.accessory__availability} ${item.availability ? '' : styles.accessory__availability_hidden}`}>
                Sold out
              </p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Accessories;
