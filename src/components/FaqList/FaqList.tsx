import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import FaqItem from '../FaqItem/FaqItem';
import List from '../UI/List';
import { IFaq } from '../../types/types';
import styles from './FaqList.module.scss';

const FaqList: FC = () => {
  const [faqList, setFaqList] = useState<IFaq[]>([]);

  const getFaqList = async () => {
    try {
      const faqs = await axios.get<IFaq[]>('http://localhost:3001/faq');

      setFaqList(faqs.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFaqList();
  }, []);

  return (
    <main className={styles.faq}>
      <List
        classList={styles.faq__list}
        items={faqList}
        renderItem={faq =>
          <FaqItem
            item={faq}
            key={faq.id}
          />
        }
      />


    </main>
  );
}

export default FaqList;
