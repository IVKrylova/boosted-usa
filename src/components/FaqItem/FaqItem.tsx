import React from 'react';
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import styles from './FaqItem.module.scss';

interface Props {
  plusVisible: boolean,
  minusVisible: boolean,
  answerVisible: boolean,
  changeStateByClickPlus: () => void,
  changeStateByClickMinus: () => void,
  item: {
    question: string;
    answer: string;
    id: number;
  },
}

const FaqItem: React.FC<Props> = ({
  plusVisible,
  minusVisible,
  answerVisible,
  changeStateByClickPlus,
  changeStateByClickMinus,
  item,
}) => {

  // обработчик клика на плюс
  const handleClickPlus = () => {
    changeStateByClickPlus();
  }

  // обработчик клика на минус
  const handleClickMinus = () => {
    changeStateByClickMinus();
  }

  // классы элементов
  const classIconPlus = `${styles.faq__icon} ${plusVisible ? styles.faq__icon_visible : styles.faq__icon_hidden}`;
  const classIconMinus = `${styles.faq__icon} ${minusVisible ? styles.faq__icon_visible : styles.faq__icon_hidden}`;
  const classAnswer = `${styles.faq__answer} ${answerVisible ? styles.faq__answer_visible : ''}`;

  return (
    <li className={styles.faq__item}>
      <img
        src={plus}
        alt="icon plus"
        className={classIconPlus}
        onClick={handleClickPlus}
      />
      <img
        src={minus}
        alt="icon minus"
        className={classIconMinus}
        onClick={handleClickMinus}
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
