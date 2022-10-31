import { Dispatch } from 'redux';
import axios from 'axios';
import { GiftCardAction, GiftCardActionTypes } from '../../types/giftCard';

export const fetchGiftCard = () => {
  return async (dispatch: Dispatch<GiftCardAction>) => {
    try {
      dispatch({ type: GiftCardActionTypes.FETCH_GIFT_CARD });
      const giftCard = await axios.get('http://localhost:3001/giftCard');
      dispatch({
        type: GiftCardActionTypes.FETCH_GIFT_CARD_SUCCESS,
        payload: giftCard.data,
      });
    } catch (err) {
      dispatch({
        type: GiftCardActionTypes.FETCH_GIFT_CARD_ERROR,
        payload: 'Произошла ошибка при загрузке каталога',
      });
    }
  }
}
