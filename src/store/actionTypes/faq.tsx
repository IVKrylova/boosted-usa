// типизация начального состояния
export interface FaqState {
  plusVisible: boolean,
  minusVisible: boolean,
  answerVisible: boolean,
}

// перечисление типов action
export enum FaqActionTypes {
  CLICK_PLUS = 'CLICK_PLUS',
  CLICK_MINUS = 'CLICK_MINUS',
}

// определение типов для action
interface FaqClickPlus {
  type: FaqActionTypes.CLICK_PLUS,
}

interface FaqClickMinus {
  type: FaqActionTypes.CLICK_MINUS,
}

export type FaqActions = FaqClickMinus | FaqClickPlus;
