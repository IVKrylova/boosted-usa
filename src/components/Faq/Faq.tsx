import React from 'react';
import { faqList } from '../../utils/data/faq';
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import styles from './Faq.module.scss';

const Faq: React.FC = () => {
  return (
    <main className={styles.faq}>
      <ul className={styles.faq__list}>
        {faqList.map(item => {
          return (
            <li className={styles.faq__item} key={item.id}>
              <img src={plus} alt="icon plus" className={`${styles.faq__icon} ${styles.faq__icon_visible}`} />
              <img src={minus} alt="icon minus" className={`${styles.faq__icon} ${styles.faq__icon_hidden}`} />
              <h2 className={styles.faq__question}>{item.question}</h2>
              <p className={`${styles.faq__answer} ${styles.faq__answer_visible}`}>{item.answer}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Faq;
