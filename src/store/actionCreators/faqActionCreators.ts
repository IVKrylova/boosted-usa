import { Dispatch } from "redux";
import { FaqActionTypes, FaqActions } from "../actionTypes/faq";

// изменение состояния при клике на плюс
export const changeStateByClickPlus = () => {
  return (dispatch: Dispatch<FaqActions>) => {
    dispatch({ type: FaqActionTypes.CLICK_PLUS });
  }
}

// изменение состояния при клике на минус
export const changeStateByClickMinus = () => {
  return (dispatch: Dispatch<FaqActions>) => {
    dispatch({ type: FaqActionTypes.CLICK_MINUS });
  }
}
