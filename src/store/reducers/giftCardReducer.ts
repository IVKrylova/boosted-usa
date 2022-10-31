import { GiftCardState, GiftCardActionTypes, GiftCardAction } from '../../types/giftCard';

const initialState: GiftCardState = {
  giftCard: [],
  loading: false,
  error: null,
}

export const giftCardReducer = (state = initialState, action: GiftCardAction): GiftCardState => {
  switch (action.type) {
    case GiftCardActionTypes.FETCH_GIFT_CARD:
      return { loading: true, giftCard: [], error: null }
    case GiftCardActionTypes.FETCH_GIFT_CARD_SUCCESS:
      return { loading: false, giftCard: action.payload, error: null }
    case GiftCardActionTypes.FETCH_GIFT_CARD_ERROR:
      return { loading: false, giftCard: [], error: action.payload }
    default:
      return state;
  }
}
