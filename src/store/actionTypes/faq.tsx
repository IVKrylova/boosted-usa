export interface FaqState {
  plusVisible: boolean,
  minusVisible: boolean,
  answerVisible: boolean,
}

export enum FaqActionTypes {
  CLICK_PLUS = 'CLICK_PLUS',
  CLICK_MINUS = 'CLICK_MINUS',
}

interface FaqClickPlus {
  type: FaqActionTypes.CLICK_PLUS,
}

interface FaqClickMinus {
  type: FaqActionTypes.CLICK_MINUS,
}

export type FaqActions = FaqClickMinus | FaqClickPlus;
