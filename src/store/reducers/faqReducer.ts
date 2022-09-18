import { FaqState, FaqActions, FaqActionTypes } from '../actionTypes/faq';

// начальное состояние
const initialState: FaqState = {
  plusVisible: true,
  minusVisible: false,
  answerVisible: false,
}

// изменение состояния при нажатии на плюс
const actionClickPlus = (state: FaqState) => {
  return { ...state, plusVisible: false, minusVisible: true, answerVisible: true };
}

// изменение состояния при нажатии на минус
const actionClickMinus = (state: FaqState) => {
  return { ...state, plusVisible: true, minusVisible: false, answerVisible: false };
}

// редьюсер - чистая функция
export const faqReducer = (state = initialState, action: FaqActions): FaqState => {
  switch (action.type) {
    case FaqActionTypes.CLICK_PLUS:
      return actionClickPlus(state);
    case FaqActionTypes.CLICK_MINUS:
      return actionClickMinus(state);
    default:
      return state;
  }
}
