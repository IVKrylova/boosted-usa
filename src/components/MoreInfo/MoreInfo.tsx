import { FC } from 'react';
import styles from './MoreInfo.module.scss';

const MoreInfo: FC = () => {
  return (
    <main className={styles.moreInfo}>
      <h1 className={styles.moreInfo__title}>About BOOSTED</h1>
      <section className={styles.about}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Totam tenetur eligendi eos animi commodi rerum, recusandae,
          praesentium libero optio dolor, veniam aut? Molestias error
          numquam nihil saepe placeat officia beatae. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Totam tenetur eligendi
          eos animi commodi rerum, recusandae, praesentium libero optio
          dolor, veniam aut? Molestias error numquam nihil saepe placeat
          officia beatae.
        </p>
      </section>
      <section className={styles.warranty}>
        <h2 className={styles.sectionTitle}>Warranty</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Totam tenetur eligendi eos animi commodi rerum, recusandae,
          praesentium libero optio dolor, veniam aut? Molestias error
          numquam nihil saepe placeat officia beatae. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Totam tenetur eligendi
          eos animi commodi rerum, recusandae, praesentium libero optio
          dolor, veniam aut? Molestias error numquam nihil saepe placeat
          officia beatae.
        </p>
      </section>
      <section className={styles.quickStart}>
        <h2 className={styles.sectionTitle}>Quick Start Guide</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Totam tenetur eligendi eos animi commodi rerum, recusandae,
          praesentium libero optio dolor, veniam aut? Molestias error
          numquam nihil saepe placeat officia beatae. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Totam tenetur eligendi
          eos animi commodi rerum, recusandae, praesentium libero optio
          dolor, veniam aut? Molestias error numquam nihil saepe placeat
          officia beatae.
        </p>
      </section>
      <section className={styles.accessibility}>
        <h2 className={styles.sectionTitle}>Accessibility Statement</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Totam tenetur eligendi eos animi commodi rerum, recusandae,
          praesentium libero optio dolor, veniam aut? Molestias error
          numquam nihil saepe placeat officia beatae. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Totam tenetur eligendi
          eos animi commodi rerum, recusandae, praesentium libero optio
          dolor, veniam aut? Molestias error numquam nihil saepe placeat
          officia beatae.
        </p>
      </section>
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <address className={styles.contact__address}>
          CaliRides LLC - DBA Boosted USA
          1281 Andersen Drive Ste. K
          San Rafael, CA 94901
        </address>
      </section>
    </main>
  );
}

export default MoreInfo;
