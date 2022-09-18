import React from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Faq from '../components/Faq/Faq';
import { useActions } from '../hooks/useActions';

const FaqContainer: React.FC = () => {
    // получаем доступ к состоянию
    const { plusVisible, minusVisible, answerVisible } = useTypeSelector(state => state.faq);
    // получаем доступ к функциям-обработчикам actions
    const { changeStateByClickPlus, changeStateByClickMinus} = useActions();

    return (
      <Faq
        plusVisible={plusVisible}
        minusVisible={minusVisible}
        answerVisible={answerVisible}
        changeStateByClickPlus={changeStateByClickPlus}
        changeStateByClickMinus={changeStateByClickMinus}
      />
    );
}

export default FaqContainer;
