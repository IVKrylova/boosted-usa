import { FC } from 'react';
import FaqItem from '../FaqItem/FaqItem';
import List from '../UI/List';
import { faqList } from '../../utils/data/faq';
import styles from './FaqList.module.scss';

const FaqList: FC = () => {
  return (
    <main className={styles.faq}>
      <List
        classList={styles.faq__list}
        items={faqList}
        renderItem={faq => <FaqItem
          item={faq}
          key={faq.id}
        />}
      />
    </main>
  );
}

export default FaqList;
