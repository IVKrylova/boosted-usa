import React from 'react';
import FaqItem from '../FaqItem/FaqItem';
import { faqList } from '../../utils/data/faq';
import styles from './Faq.module.scss';


interface Props {
  plusVisible: boolean,
  minusVisible: boolean,
  answerVisible: boolean,
  changeStateByClickPlus: () => void,
  changeStateByClickMinus: () => void,
}

const Faq: React.FC<Props> = ({
  plusVisible,
  minusVisible,
  answerVisible,
  changeStateByClickPlus,
  changeStateByClickMinus,
}) => {

  return (
    <main className={styles.faq}>
      <ul className={styles.faq__list}>
        {faqList.map(item => {
          return (
            <FaqItem
              plusVisible={plusVisible}
              minusVisible={minusVisible}
              answerVisible={answerVisible}
              changeStateByClickPlus={changeStateByClickPlus}
              changeStateByClickMinus={changeStateByClickMinus}
              item={item}
              key={item.id}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Faq;
