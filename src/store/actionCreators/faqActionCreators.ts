import { Dispatch } from "redux";
import { FaqActionTypes, FaqActions } from "../actionTypes/faq";

export const changeStateByClickPlus = () => {
  return (dispatch: Dispatch<FaqActions>) => {
    dispatch({ type: FaqActionTypes.CLICK_PLUS });
  }
}

export const changeStateByClickMinus = () => {
  return (dispatch: Dispatch<FaqActions>) => {
    dispatch({ type: FaqActionTypes.CLICK_MINUS });
  }
}
