import { FaqState, FaqActions, FaqActionTypes } from '../actionTypes/faq';

const initialState: FaqState = {
  plusVisible: true,
  minusVisible: false,
  answerVisible: false,
}

const actionClickPlus = (state: FaqState) => {
  return { ...state, plusVisible: false, minusVisible: true, answerVisible: true };
}

const actionClickMinus = (state: FaqState) => {
  return { ...state, plusVisible: true, minusVisible: false, answerVisible: false };
}

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
