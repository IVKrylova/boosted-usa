import { FC, useState } from 'react';
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import styles from './FaqItem.module.scss';

interface FaqItemProps {
  item: {
    question: string;
    answer: string;
    id: number;
  },
}

const FaqItem: FC<FaqItemProps> = ({ item }) => {
  const [isPlusVisible, setIsPlusVisible] = useState<boolean>(true);
  const [isMinusVisible, setIsMinusVisible] = useState<boolean>(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  const classIconPlus = `${styles.faq__icon} ${isPlusVisible ? styles.faq__icon_visible : styles.faq__icon_hidden}`;
  const classIconMinus = `${styles.faq__icon} ${isMinusVisible ? styles.faq__icon_visible : styles.faq__icon_hidden}`;
  const classAnswer = `${styles.faq__answer} ${isAnswerVisible ? styles.faq__answer_visible : ''}`;

  const handleClickPlus = () => {
    setIsPlusVisible(false);
    setIsMinusVisible(true);
    setIsAnswerVisible(true);
  }

  const handleClickMinus = () => {
    setIsPlusVisible(true);
    setIsMinusVisible(false);
    setIsAnswerVisible(false);
  }

  return (
    <li className={styles.faq__item}>
      <img
        src={plus}
        alt='icon plus'
        className={classIconPlus}
        onClick={handleClickPlus}
        id={item.id.toString()}
      />
      <img
        src={minus}
        alt='icon minus'
        className={classIconMinus}
        onClick={handleClickMinus}
        id={item.id.toString()}
      />
      <h2 className={styles.faq__question}>
        {item.question}
      </h2>
      <p className={classAnswer}>
        {item.answer}
      </p>
    </li>
  );
}

export default FaqItem;
