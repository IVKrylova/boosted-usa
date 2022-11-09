import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { accessoriesList } from '../../utils/data/accessories';
import 'react-multi-carousel/lib/styles.css';
import styles from './Accessories.module.scss';

const Accessories: FC = () => {
  // настройка слайдера
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2999, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 591 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 590, min: 0 },
      items: 1,
    }
  };

  return (
    <section className={styles.accessories}>
      <h2 className={styles.title}>
        Looking for Accessories?
      </h2>
      <Carousel
        responsive={responsive}
        className={styles.accessories__list}
        swipeable={false}
        draggable={false}
        showDots={false}
      >
        {accessoriesList.map(item => {
          return (
            <div key={item.id} className={styles.accessory}>
              <img alt={item.name} src={item.img} className={styles.accessory__img} />
              <h3 className={styles.accessory__name}>
                <Link className={styles.accessory__link} to='/accessories'>
                  {item.name}
                </Link>
              </h3>
              <p className={`${styles.accessory__price} ${item.availability ? '' : styles.accessory__price_hidden}`}>
                {`$${item.price}`} <span className={`${styles.accessory__otherPrice} ${item.otherPrice ? styles.accessory__otherPrice_visible : ''}`}>{`$${item.otherPrice}`}</span>
              </p>
              <p className={`${styles.accessory__availability} ${item.availability ? '' : styles.accessory__availability_visible}`}>
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
